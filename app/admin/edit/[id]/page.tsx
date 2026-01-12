import { PropertyForm } from "@/components/admin/property-form";
import { notFound } from "next/navigation";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

async function getProperty(id: string) {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties";
    const token = process.env.SANITY_API_TOKEN;

    if (!token) {
      console.error("[v0] Missing SANITY_API_TOKEN");
      return null;
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

    if (!response.ok) {
      console.error("[v0] Failed to fetch property:", response.status);
      return null;
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("[v0] Error fetching property:", error);
    return null;
  }
}

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Edit Property</h1>
        <PropertyForm property={property} />
      </div>
    </div>
  );
}
