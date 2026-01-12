import { createClient } from "next-sanity"

console.log("[v0] Sanity Config:", {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  hasToken: !!process.env.SANITY_API_TOKEN,
})

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "properties",
  apiVersion: "2024-01-01",
  useCdn: false, // Always use fresh data
})

export const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "properties",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})
