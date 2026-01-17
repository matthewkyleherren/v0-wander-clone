import { PrismaClient } from "@prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import { neon } from "@neondatabase/serverless"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const url = process.env.DATABASE_URL

  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Please define it in your environment (e.g. .env or .env.local).",
    )
  }

  const sql = neon(url)
  const adapter = new PrismaNeon(sql)

  return new PrismaClient({
    adapter,
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
