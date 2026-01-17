import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { getActiveUi, setActiveUi, type UiVariant } from "@/lib/ui-config";

// Force dynamic rendering for this page
export const dynamic = "force-dynamic";

async function getProperties() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg";
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties";
    const token = process.env.SANITY_API_TOKEN;

    console.log("[v0] Fetching properties with:", {
      projectId,
      dataset,
      hasToken: !!token,
    });

    if (!token) {
      console.error(
        "[v0] Missing SANITY_API_TOKEN - properties cannot be fetched",
      );
      return [];
    }

    const query = encodeURIComponent(
      '*[_type == "property"] | order(_createdAt desc)',
    );
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

    console.log("[v0] Fetching from URL:", url);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    console.log("[v0] Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[v0] Sanity API error:", errorText);
      return [];
    }

    const data = await response.json();
    console.log("[v0] Fetched properties count:", data.result?.length || 0);
    return data.result || [];
  } catch (error) {
    console.error("[v0] Error fetching properties:", error);
    return [];
  }
}

async function getAdminData() {
  const [properties, activeUi] = await Promise.all([
    getProperties(),
    getActiveUi(),
  ]);

  return { properties, activeUi };
}

async function updateUiAction(formData: FormData) {
  "use server";

  const value = formData.get("uiVariant");
  if (value === "classic" || value === "cossui") {
    await setActiveUi(value as UiVariant);
  }
}

export default async function AdminPage() {
  const { properties, activeUi } = await getAdminData();

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Property Admin</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your property listings and site settings
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Property
            </Link>
          </Button>
        </div>

        {/* UI variant selector */}
        <div className="rounded-lg border bg-card p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Public site UI</h2>
              <p className="text-sm text-muted-foreground">
                Choose which interface is active for guests. Only one UI can be
                active at a time.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Current UI:{" "}
                <span className="font-medium">
                  {activeUi === "cossui" ? "CoSSUI (dashboard-style)" : "Classic OffGrid"}
                </span>
              </p>
            </div>
            <form
              action={updateUiAction}
              className="flex flex-col gap-3 md:flex-row md:items-center"
            >
              <select
                name="uiVariant"
                defaultValue={activeUi}
                className="w-full md:w-52 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="classic">Classic OffGrid UI</option>
                <option value="cossui">CoSSUI-inspired UI</option>
              </select>
              <Button type="submit" size="sm" className="w-full md:w-auto">
                Update UI
              </Button>
            </form>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property: any) => (
            <Link
              key={property._id}
              href={`/admin/edit/${property._id}`}
              className="group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={
                    property.mainImageUrl ||
                    "/placeholder.svg?height=200&width=300"
                  }
                  alt={property.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{property.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {property.location}
                </p>
                <p className="mt-2 font-medium">
                  ${property.pricePerNight}/night
                </p>
              </div>
            </Link>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">No properties found</p>
            <Button asChild className="mt-4">
              <Link href="/admin/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create your first property
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
