import type { Property, PropertyCard, Review } from "./types"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

async function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}`)
  url.searchParams.set("query", query)

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value))
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error("[v0] Sanity fetch error:", errorText)
    throw new Error(`Sanity fetch failed: ${response.status}`)
  }

  const data = await response.json()
  return data.result
}

function mapPropertyCard(doc: Record<string, unknown>): PropertyCard {
  let imageUrl = "/luxury-vacation-rental.jpg"

  if (doc.mainImageUrl && typeof doc.mainImageUrl === "string") {
    imageUrl = doc.mainImageUrl
  } else if (doc.image && typeof doc.image === "string" && doc.image.startsWith("http")) {
    imageUrl = doc.image
  }

  return {
    _id: doc._id as string,
    name: (doc.name || doc.title) as string,
    slug: doc.slug as { current: string } | string,
    location: doc.location as string,
    pricePerNight: doc.pricePerNight as number,
    rating: doc.rating as number,
    reviewCount: doc.reviewCount as number,
    image: imageUrl,
    amenities: (doc.amenities as string[]) || [],
  }
}

// Fetch all properties
export async function getProperties(): Promise<PropertyCard[]> {
  try {
    const query = `*[_type == "property"] | order(name asc) {
      _id,
      name,
      title,
      slug,
      location,
      pricePerNight,
      rating,
      reviewCount,
      "mainImageUrl": mainImage.asset->url,
      image,
      amenities
    }`
    const result = await sanityFetch<Record<string, unknown>[]>(query)
    return (result || []).map(mapPropertyCard)
  } catch (error) {
    console.error("[v0] Error fetching properties:", error)
    return []
  }
}

// Fetch a single property by slug
export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  try {
    const query = `*[_type == "property" && slug.current == $slug][0] {
      _id,
      name,
      title,
      slug,
      location,
      description,
      pricePerNight,
      cleaningFee,
      serviceFee,
      rating,
      reviewCount,
      maxGuests,
      bedrooms,
      beds,
      bathrooms,
      sqft,
      "mainImageUrl": mainImage.asset->url,
      "imageUrls": images[].asset->url,
      amenities,
      highlights,
      features,
      sleepingArrangements,
      houseRules,
      cancellationPolicy,
      checkIn,
      checkOut,
      petsAllowed,
      smokingAllowed,
      eventsAllowed,
      coordinates,
      featured,
      categories
    }`
    const result = await sanityFetch<Record<string, unknown> | null>(query, { slug })

    if (!result) return null

    // Map to Property type with correct image fields
    return {
      ...result,
      image: result.mainImageUrl as string,
      images: (result.imageUrls as string[]) || [],
      guests: result.maxGuests,
    } as Property
  } catch (error) {
    console.error("[v0] Error fetching property:", error)
    return null
  }
}

// Fetch featured properties
export async function getFeaturedProperties(): Promise<PropertyCard[]> {
  try {
    const query = `*[_type == "property" && featured == true] | order(name asc) {
      _id,
      name,
      title,
      slug,
      location,
      pricePerNight,
      rating,
      reviewCount,
      "mainImageUrl": mainImage.asset->url,
      amenities,
      featured
    }`
    const result = await sanityFetch<Record<string, unknown>[]>(query)
    return (result || []).map(mapPropertyCard)
  } catch (error) {
    console.error("[v0] Error fetching featured properties:", error)
    return []
  }
}

// Fetch properties by category
export async function getPropertiesByCategory(category: string): Promise<PropertyCard[]> {
  try {
    const query = `*[_type == "property" && $category in categories] | order(name asc) {
      _id,
      name,
      title,
      slug,
      location,
      pricePerNight,
      rating,
      reviewCount,
      "mainImageUrl": mainImage.asset->url,
      amenities,
      featured,
      categories
    }`
    const result = await sanityFetch<Record<string, unknown>[]>(query, { category })
    return (result || []).map(mapPropertyCard)
  } catch (error) {
    console.error("[v0] Error fetching properties by category:", error)
    return []
  }
}

// Fetch reviews for a property
export async function getReviewsByPropertyId(propertyId: string): Promise<Review[]> {
  try {
    const query = `*[_type == "review" && property._ref == $propertyId] | order(stayDate desc) {
      _id,
      author,
      location,
      content,
      stayDate,
      verified
    }`
    const result = await sanityFetch<Review[]>(query, { propertyId })
    return result || []
  } catch (error) {
    console.error("[v0] Error fetching reviews:", error)
    return []
  }
}
