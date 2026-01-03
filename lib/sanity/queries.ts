import { groq } from "next-sanity"

// Get all properties for the home page grid
export const propertiesQuery = groq`
  *[_type == "property"] | order(_createdAt desc) {
    _id,
    name,
    slug,
    location,
    pricePerNight,
    rating,
    reviewCount,
    "image": mainImage.asset->url,
    amenities[0...3]
  }
`

// Get a single property by slug
export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    location,
    pricePerNight,
    rating,
    reviewCount,
    description,
    guests,
    beds,
    bedrooms,
    bathrooms,
    sqft,
    "images": images[].asset->url,
    "mainImage": mainImage.asset->url,
    highlights[] {
      icon,
      label
    },
    bedroomDetails[] {
      name,
      beds,
      "image": image.asset->url
    },
    amenities,
    coordinates {
      lat,
      lng
    },
    houseRules[] {
      icon,
      rule
    },
    features[] {
      icon,
      title,
      description
    }
  }
`

// Get featured properties for homepage
export const featuredPropertiesQuery = groq`
  *[_type == "property" && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    name,
    slug,
    location,
    pricePerNight,
    rating,
    reviewCount,
    "image": mainImage.asset->url,
    amenities[0...3]
  }
`

// Get properties by category
export const propertiesByCategoryQuery = groq`
  *[_type == "property" && $category in categories] | order(_createdAt desc) {
    _id,
    name,
    slug,
    location,
    pricePerNight,
    rating,
    reviewCount,
    "image": mainImage.asset->url,
    amenities[0...3]
  }
`

// Get all reviews for a property
export const reviewsQuery = groq`
  *[_type == "review" && property._ref == $propertyId] | order(_createdAt desc) {
    _id,
    author,
    location,
    content,
    stayDate,
    verified,
    "authorInitial": upper(substring(author, 0, 1))
  }
`
