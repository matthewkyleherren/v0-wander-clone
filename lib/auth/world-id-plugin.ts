import type { BetterAuthPlugin } from "better-auth"
import { createAuthEndpoint } from "better-auth/api"
import type { ISuccessResult, IVerifyResponse } from "@worldcoin/idkit-core"
import { verifyCloudProof } from "@worldcoin/idkit-core"
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

          const appId = process.env.WORLD_ID_APP_ID
          const action = process.env.WORLD_ID_ACTION_ID

          if (!appId || !action) {
            return ctx.json(
              { error: "World ID configuration missing on server" },
              500,
            )
          }

          const verifyRes = (await verifyCloudProof(
            proof,
            appId,
            action,
          )) as IVerifyResponse

          if (!verifyRes.success) {
            return ctx.json(verifyRes, 400)
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