import { NextResponse } from "next/server"
import {
  type IVerifyResponse,
  verifyCloudProof,
} from "@worldcoin/idkit-core"

export async function POST(req: Request) {
  try {
    const proof = await req.json()

    const appId = process.env.WORLD_ID_APP_ID
    const action = process.env.WORLD_ID_ACTION_ID

    if (!appId || !action) {
      return NextResponse.json(
        { error: "World ID configuration missing on server" },
        { status: 500 },
      )
    }

    const verifyRes = (await verifyCloudProof(
      proof,
      appId,
      action,
    )) as IVerifyResponse

    if (!verifyRes.success) {
      return NextResponse.json(verifyRes, { status: 400 })
    }

    // At this point the World ID proof has been verified.
    // You can hook this into your application logic, e.g.:
    // - Mark the current user as `worldIdVerified` in your database
    // - Or gate specific actions behind successful verification

    return NextResponse.json(verifyRes, { status: 200 })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 400 })
  }
}