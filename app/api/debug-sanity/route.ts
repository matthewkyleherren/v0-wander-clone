import { NextResponse } from "next/server"

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN

  try {
    const queryUrl = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=*[]`

    const response = await fetch(queryUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    return NextResponse.json(
      {
        success: true,
        totalDocuments: data.result?.length || 0,
        documents: data.result || [],
        rawResponse: data,
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 },
    )
  }
}
