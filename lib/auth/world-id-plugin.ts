import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/api"
import type { ISuccessResult } from "@worldcoin/idkit"
import { prisma } from "@/lib/db"

export const worldIdAuthPlugin = (): BetterAuthPlugin => {
  return {
    id: "world-id-auth",
    endpoints: {
      worldIdVerify: createAuthEndpoint(
        "/world-id/verify",
        {
          method: "POST",
        },
        async (ctx) => {
          const proof = (await ctx.request.json()) as ISuccessResult

          const appId = process.env.WORLDCOIN_APP_ID
          const action = process.env.WORLDCOIN_ACTION_ID

          if (!appId || !action) {
            return ctx.json(
              { error: "World ID configuration missing on server" },
              500,
            )
          }

          const verifyRes = await fetch(
            `https://developer.worldcoin.org/api/v2/verify/${appId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                merkle_root: proof.merkle_root,
                nullifier_hash: proof.nullifier_hash,
                proof: proof.proof,
                credential_type: proof.credential_type,
                verification_level: proof.verification_level,
                action,
                signal: proof.signal,
              }),
            },
          )

          if (!verifyRes.ok) {
            const errorBody = await verifyRes.json().catch(() => null)
            return ctx.json(
              errorBody ?? { error: "World ID verification failed" },
              400,
            )
          }

          const verifyJson = (await verifyRes.json()) as { success: boolean }

          if (!verifyJson.success) {
            return ctx.json(verifyJson, 400)
          }

          // Use World ID's nullifier hash as a stable, unique identifier
          const worldId = proof.nullifier_hash

          let user = await prisma.user.findUnique({
            where: { worldId },
          })

          if (!user) {
            const syntheticEmail = `${worldId}@world-id.local`

            user = await prisma.user.create({
              data: {
                worldId,
                email: syntheticEmail,
                name: "World ID user",
              },
            })
          }

          const session = await ctx.context.internalAdapter.createSession(
            user.id,
            ctx.request,
          )

          ctx.context.setNewSession({
            session,
            user,
          })

          return ctx.json(
            {
              success: true,
            },
            200,
          )
        },
      ),
    },
  }
}