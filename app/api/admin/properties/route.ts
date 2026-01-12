import { type NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties";
    const token = process.env.SANITY_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "Missing SANITY_API_TOKEN" },
        { status: 500 },
      );
    }

    const query = encodeURIComponent(
      '*[_type == "property"] | order(_createdAt desc)',
    );
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();
    return NextResponse.json({ properties: data.result || [] });
  } catch (error) {
    console.error("[v0] Error fetching properties:", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties";
    const token = process.env.SANITY_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "Missing SANITY_API_TOKEN" },
        { status: 500 },
      );
    }

    const document = {
      _type: "property",
      ...body,
    };

    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/mutate/${dataset}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        mutations: [{ create: document }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.description || "Failed to create property");
    }

    return NextResponse.json(data.results?.[0]?.document || data);
  } catch (error) {
    console.error("[v0] Error creating property:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to create property",
      },
      { status: 500 },
    );
  }
}
