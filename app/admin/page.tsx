import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

async function getProperties() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "124czkwg"
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "properties"
    const token = process.env.SANITY_API_TOKEN

    if (!token) {
      console.error("[v0] Missing SANITY_API_TOKEN")
      return []
    }

    const query = encodeURIComponent('*[_type == "property"] | order(_createdAt desc)')
    const url = `https://api.sanity.io/v2021-10-21/data/query/${projectId}/${dataset}?query=${query}`

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    })

    const data = await response.json()
    return data.result || []
  } catch (error) {
    console.error("[v0] Error fetching properties:", error)
    return []
  }
}

export default async function AdminPage() {
  const properties = await getProperties()

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Property Admin</h1>
            <p className="mt-2 text-muted-foreground">Manage your property listings</p>
          </div>
          <Button asChild>
            <Link href="/admin/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Property
            </Link>
          </Button>
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
                  src={property.mainImageUrl || "/placeholder.svg?height=200&width=300"}
                  alt={property.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{property.name}</h3>
                <p className="text-sm text-muted-foreground">{property.location}</p>
                <p className="mt-2 font-medium">${property.pricePerNight}/night</p>
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
  )
}
