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

// Get home page data
export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    _id,
    hero {
      heading,
      subheading,
      "backgroundImage": backgroundImage.asset->url,
      trustBadges[] {
        icon,
        text
      }
    },
    categories[] {
      name,
      icon
    },
    wanderDifference {
      title,
      description,
      features[] {
        title,
        description,
        "image": image.asset->url
      }
    }
  }
`

// Get sites page data
export const sitesPageQuery = groq`
  *[_type == "sitesPage"][0] {
    _id,
    hero {
      heading,
      subheading,
      ctaText,
      stats[] {
        value,
        label
      }
    },
    valueProps[] {
      icon,
      title,
      description
    },
    brandingSection {
      title,
      description,
      "image": image.asset->url
    },
    conversionsSection {
      title,
      description,
      "image": image.asset->url
    },
    checkoutSection {
      title,
      description,
      "image": image.asset->url
    },
    integrationsSection {
      title,
      description,
      integrations[] {
        name,
        "logo": logo.asset->url
      }
    },
    auditSection {
      title,
      description,
      ctaText
    },
    technologyFeatures[] {
      icon,
      title,
      description
    },
    howItWorksSteps[] {
      number,
      title,
      description
    },
    pricingPlans[] {
      name,
      price,
      description,
      features,
      ctaText,
      featured
    },
    finalCta {
      title,
      description,
      ctaText
    }
  }
`

// Get site settings data
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    "logo": logo.asset->url,
    headerNavigation[] {
      label,
      href
    },
    footer {
      columns[] {
        title,
        links[] {
          label,
          href
        }
      },
      newsletter {
        title,
        description,
        buttonText
      },
      socialLinks[] {
        platform,
        url
      },
      copyrightText
    }
  }
`
