// TypeScript types for Sanity data

export interface Property {
  _id: string
  name: string
  slug: { current: string }
  location: string
  pricePerNight: number
  rating: number
  reviewCount: number
  description?: string
  guests?: number
  beds?: number
  bedrooms?: number
  bathrooms?: number
  sqft?: number
  image?: string
  mainImage?: string
  images?: string[]
  featured?: boolean
  categories?: string[]
  amenities?: string[]
  highlights?: { icon: string; label: string }[]
  bedroomDetails?: { name: string; beds: string; image?: string }[]
  coordinates?: { lat: number; lng: number }
  houseRules?: { icon: string; rule: string }[]
  features?: { icon: string; title: string; description: string }[]
}

export interface PropertyCard {
  _id: string
  name: string
  slug: { current: string }
  location: string
  pricePerNight: number
  rating: number
  reviewCount: number
  image?: string
  amenities?: string[]
}

export interface Review {
  _id: string
  author: string
  location?: string
  content: string
  stayDate?: string
  verified?: boolean
  authorInitial?: string
}
