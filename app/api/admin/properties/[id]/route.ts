import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
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
      `*[_type == "property" && _id == "${id}"][0]`,
    );
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const data = await response.json();
    return NextResponse.json(data.result);
  } catch (error) {
    console.error("[v0] Error fetching property:", error);
    return NextResponse.json(
      { error: "Failed to fetch property" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
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
      _id: id,
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
        mutations: [{ createOrReplace: document }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.description || "Failed to update property");
    }

    return NextResponse.json(data.results?.[0]?.document || data);
  } catch (error) {
    console.error("[v0] Error updating property:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to update property",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties";
    const token = process.env.SANITY_API_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: "Missing SANITY_API_TOKEN" },
        { status: 500 },
      );
    }

    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/mutate/${dataset}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        mutations: [{ delete: { id } }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.description || "Failed to delete property");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[v0] Error deleting property:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to delete property",
      },
      { status: 500 },
    );
  }
}
