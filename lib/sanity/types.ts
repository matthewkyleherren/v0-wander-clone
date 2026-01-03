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

export interface HomePage {
  _id: string
  hero: {
    heading: string
    subheading: string
    backgroundImage?: string
    trustBadges?: { icon: string; text: string }[]
  }
  categories?: { name: string; icon: string }[]
  wanderDifference?: {
    title: string
    description: string
    features: {
      title: string
      description: string
      image: string
    }[]
  }
}

export interface SitesPage {
  _id: string
  hero: {
    heading: string
    subheading: string
    ctaText: string
    stats: { value: string; label: string }[]
  }
  valueProps: {
    icon: string
    title: string
    description: string
  }[]
  brandingSection: {
    title: string
    description: string
    image: string
  }
  conversionsSection: {
    title: string
    description: string
    image: string
  }
  checkoutSection: {
    title: string
    description: string
    image: string
  }
  integrationsSection: {
    title: string
    description: string
    integrations: { name: string; logo: string }[]
  }
  auditSection: {
    title: string
    description: string
    ctaText: string
  }
  technologyFeatures: {
    icon: string
    title: string
    description: string
  }[]
  howItWorksSteps: {
    number: string
    title: string
    description: string
  }[]
  pricingPlans: {
    name: string
    price: string
    description: string
    features: string[]
    ctaText: string
    featured: boolean
  }[]
  finalCta: {
    title: string
    description: string
    ctaText: string
  }
}

export interface SiteSettings {
  _id: string
  siteName: string
  logo?: string
  headerNavigation?: { label: string; href: string }[]
  footer?: {
    columns: {
      title: string
      links: { label: string; href: string }[]
    }[]
    newsletter: {
      title: string
      description: string
      buttonText: string
    }
    socialLinks: { platform: string; url: string }[]
    copyrightText: string
  }
}
