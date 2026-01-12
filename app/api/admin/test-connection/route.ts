import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties";
    const token = process.env.SANITY_API_TOKEN;

    const config = {
      projectId,
      dataset,
      hasToken: !!token,
      tokenLength: token?.length || 0,
    };

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing SANITY_API_TOKEN environment variable",
          config,
        },
        { status: 500 },
      );
    }

    // Test query
    const query = encodeURIComponent(
      '*[_type == "property"][0...3]{_id, name, location}',
    );
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      config,
      propertiesFound: data.result?.length || 0,
      sampleProperties: data.result || [],
      rawResponse: data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
