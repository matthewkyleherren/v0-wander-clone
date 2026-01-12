"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { PlusCircle, Trash2, Save } from "lucide-react"

interface PropertyFormProps {
  property?: any
}

export function PropertyForm({ property }: PropertyFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: property?.name || "",
    slug: property?.slug || { _type: "slug", current: "" },
    location: property?.location || "",
    description: property?.description || "",
    pricePerNight: property?.pricePerNight || 0,
    rating: property?.rating || 4.5,
    reviewCount: property?.reviewCount || 0,
    guests: property?.guests || 2,
    beds: property?.beds || 1,
    bedrooms: property?.bedrooms || 1,
    bathrooms: property?.bathrooms || 1,
    sqft: property?.sqft || 0,
    mainImageUrl: property?.mainImageUrl || "",
    imageUrls: property?.imageUrls || [],
    featured: property?.featured || false,
    categories: property?.categories || [],
    amenities: property?.amenities || [],
    bedroomDetails: property?.bedroomDetails || [],
    features: property?.features || [],
    houseRules: property?.houseRules || [],
    checkInTime: property?.checkInTime || "4:00 PM",
    checkOutTime: property?.checkOutTime || "11:00 AM",
    cancellationPolicy: property?.cancellationPolicy || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = property ? `/api/admin/properties/${property._id}` : "/api/admin/properties"
      const method = property ? "PATCH" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to save property")
      }

      router.push("/admin")
      router.refresh()
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to save property")
    } finally {
      setLoading(false)
    }
  }

  const addImageUrl = () => {
    setFormData({
      ...formData,
      imageUrls: [...formData.imageUrls, ""],
    })
  }

  const updateImageUrl = (index: number, value: string) => {
    const newUrls = [...formData.imageUrls]
    newUrls[index] = value
    setFormData({ ...formData, imageUrls: newUrls })
  }

  const removeImageUrl = (index: number) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Basic Information</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Property Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="slug">URL Slug</Label>
            <Input
              id="slug"
              value={formData.slug?.current || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  slug: { _type: "slug", current: e.target.value },
                })
              }
              placeholder="property-name"
              required
            />
          </div>

          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="pricePerNight">Price Per Night ($)</Label>
              <Input
                id="pricePerNight"
                type="number"
                value={formData.pricePerNight}
                onChange={(e) => setFormData({ ...formData, pricePerNight: Number(e.target.value) })}
                required
              />
            </div>

            <div>
              <Label htmlFor="sqft">Square Feet</Label>
              <Input
                id="sqft"
                type="number"
                value={formData.sqft}
                onChange={(e) => setFormData({ ...formData, sqft: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <Label htmlFor="guests">Max Guests</Label>
              <Input
                id="guests"
                type="number"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
              />
            </div>

            <div>
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input
                id="bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: Number(e.target.value) })}
              />
            </div>

            <div>
              <Label htmlFor="beds">Beds</Label>
              <Input
                id="beds"
                type="number"
                value={formData.beds}
                onChange={(e) => setFormData({ ...formData, beds: Number(e.target.value) })}
              />
            </div>

            <div>
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input
                id="bathrooms"
                type="number"
                step="0.5"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: Number(e.target.value) })}
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Images</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="mainImageUrl">Main Image URL</Label>
            <Input
              id="mainImageUrl"
              value={formData.mainImageUrl}
              onChange={(e) => setFormData({ ...formData, mainImageUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div>
            <Label>Gallery Images</Label>
            {formData.imageUrls.map((url, index) => (
              <div key={index} className="mt-2 flex gap-2">
                <Input value={url} onChange={(e) => updateImageUrl(index, e.target.value)} placeholder="https://..." />
                <Button type="button" variant="outline" size="icon" onClick={() => removeImageUrl(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addImageUrl} className="mt-2 bg-transparent">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Image
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Amenities</h2>
        <Textarea
          value={formData.amenities.join(", ")}
          onChange={(e) =>
            setFormData({
              ...formData,
              amenities: e.target.value
                .split(",")
                .map((a) => a.trim())
                .filter(Boolean),
            })
          }
          placeholder="WiFi, Pool, Hot Tub, Gym, Ocean View (comma-separated)"
          rows={3}
        />
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          <Save className="mr-2 h-4 w-4" />
          {loading ? "Saving..." : property ? "Update Property" : "Create Property"}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.push("/admin")}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
