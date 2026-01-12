import { PropertyForm } from "@/components/admin/property-form"
import { notFound } from "next/navigation"

async function getProperty(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const response = await fetch(`${baseUrl}/api/admin/properties/${id}`, {
    cache: "no-store",
  })
  if (!response.ok) return null
  return response.json()
}

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = await getProperty(id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Edit Property</h1>
        <PropertyForm property={property} />
      </div>
    </div>
  )
}
