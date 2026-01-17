import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { genericOAuth } from "better-auth/plugins"
import { prisma } from "@/lib/db"

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "worldcoin",
          clientId: process.env.WORLDCOIN_CLIENT_ID!,
          clientSecret: process.env.WORLDCOIN_CLIENT_SECRET!,
          authorizationUrl: "https://id.worldcoin.org/authorize",
          tokenUrl: "https://id.worldcoin.org/token",
          scopes: ["openid", "profile"],
          pkce: true,
          getUserInfo: async ({ accessToken }) => {
            const response = await fetch("https://id.worldcoin.org/userinfo", {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            const data = await response.json()
            return {
              id: data.sub,
              email: data.email,
              name: data.name,
              image: data.picture,
              emailVerified: data.email_verified,
            }
          },
        },
      ],
    }),
  ],

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // 5 minutes
    },
  },

  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    "http://localhost:3000",
    /^http:\/\/192\.168\.\d+\.\d+:3000$/,
  ],
})

export type Session = typeof auth.$Infer.Session
