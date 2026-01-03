import { NextResponse } from "next/server"

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const token = process.env.SANITY_API_TOKEN

  // Test 1: Check env vars
  const envCheck = {
    hasProjectId: !!projectId,
    hasDataset: !!dataset,
    hasToken: !!token,
    projectId,
    dataset,
    tokenPreview: token ? `${token.slice(0, 10)}...${token.slice(-5)}` : null,
  }

  // Test 2: Try to create a document using fetch directly
  try {
    const mutations = [
      {
        create: {
          _type: "test",
          title: "Test Document " + Date.now(),
        },
      },
    ]

    const response = await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations }),
    })

    const responseText = await response.text()
    let responseJson
    try {
      responseJson = JSON.parse(responseText)
    } catch {
      responseJson = null
    }

    return NextResponse.json({
      envCheck,
      createTest: {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        responseText: responseText.slice(0, 500),
        responseJson,
      },
    })
  } catch (error) {
    return NextResponse.json({
      envCheck,
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
