import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { auth } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { proof, merkle_root, nullifier_hash, verification_level } = await request.json()

    // Verify the proof with World ID API
    const verifyResponse = await fetch(
      `https://developer.worldcoin.org/api/v2/verify/${process.env.NEXT_PUBLIC_WORLDCOIN_APP_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          proof,
          merkle_root,
          nullifier_hash,
          action: process.env.NEXT_PUBLIC_WORLDCOIN_ACTION_ID,
          verification_level,
        }),
      }
    )

    if (!verifyResponse.ok) {
      const error = await verifyResponse.json()
      return NextResponse.json(
        { error: error.detail || "Verification failed" },
        { status: 400 }
      )
    }

    const verifyData = await verifyResponse.json()

    // Check if user exists with this nullifier hash (World ID unique identifier)
    let account = await prisma.account.findFirst({
      where: {
        providerId: "worldcoin",
        accountId: nullifier_hash,
      },
      include: {
        user: true,
      },
    })

    let user = account?.user

    if (!user) {
      // Create new user and account
      user = await prisma.user.create({
        data: {
          email: `${nullifier_hash.slice(0, 16)}@worldid.user`,
          name: "World ID User",
          emailVerified: new Date(),
          accounts: {
            create: {
              providerId: "worldcoin",
              accountId: nullifier_hash,
            },
          },
        },
      })
    }

    // Create a session using Better Auth's internal method
    const session = await prisma.session.create({
      data: {
        userId: user.id,
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    })

    // Set the session cookie
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })

    response.cookies.set("better-auth.session_token", session.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error) {
    console.error("World ID verification error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
