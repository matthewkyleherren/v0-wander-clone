import { MobileHeader } from "@/components/property/mobile-header"
import { MobileImageCarousel } from "@/components/property/mobile-image-carousel"
import { MobilePropertyInfo } from "@/components/property/mobile-property-info"
import { MobileHighlights } from "@/components/property/mobile-highlights"
import { MobileFeatures } from "@/components/property/mobile-features"
import { MobileDescription } from "@/components/property/mobile-description"
import { MobileAmenities } from "@/components/property/mobile-amenities"
import { MobileSleeping } from "@/components/property/mobile-sleeping"
import { MobileLocation } from "@/components/property/mobile-location"
import { MobileReviews } from "@/components/property/mobile-reviews"
import { MobileRules } from "@/components/property/mobile-rules"
import { StickyBookingBar } from "@/components/property/sticky-booking-bar"
import { getPropertyBySlug } from "@/lib/sanity/fetch"

const fallbackPropertyData = {
  name: "Inlet Beach Serenity",
  location: "Inlet Beach, Florida",
  bedrooms: 4,
  bathrooms: 3.5,
  beds: 4,
  guests: 8,
  sqft: 3200,
  rating: 4.9,
  reviewCount: 47,
  pricePerNight: 466,
  description:
    "Wander Inlet Beach Serenity offers an exquisite retreat with stunning lake views and direct lake access, perfect for those seeking tranquility. Guests can explore the picturesque surroundings with complimentary bicycles, ensuring a luxurious and active escape. This elegant property provides an idyllic setting for relaxation and cherished memories by the water.",
  images: [
    "/luxury-lake-house-florida-porch-view.jpg",
    "/modern-living-room-lake-view.jpg",
    "/luxury-bedroom-ceiling-fan-white.jpg",
    "/modern-kitchen-white-marble.jpg",
    "/master-bedroom-lake-view.jpg",
    "/outdoor-patio-lake-florida.jpg",
    "/spa-bathroom-modern-white.jpg",
    "/dining-room-lake-view.jpg",
  ],
  highlights: [
    { icon: "lake", label: "Lake View" },
    { icon: "lake", label: "Lake Access" },
    { icon: "bike", label: "Bicycle" },
  ],
  bedroomDetails: [
    { name: "Bedroom 1", beds: "1 king bed", image: "/luxury-bedroom-king-bed-ceiling-fan.jpg" },
    { name: "Bedroom 2", beds: "1 king bed", image: "/guest-bedroom-king-bed-modern.jpg" },
    { name: "Bedroom 3", beds: "2 queen beds", image: "/bedroom-two-queen-beds.jpg" },
    { name: "Bedroom 4", beds: "1 king bed", image: "/master-suite-king-bed.jpg" },
  ],
  coordinates: { lat: 30.2799, lng: -86.0053 },
}

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params

  let propertyData = null
  try {
    propertyData = await getPropertyBySlug(slug)
  } catch (error) {
    console.log("Sanity not configured, using fallback data")
  }

  // Use fallback data if Sanity returns nothing or is not configured
  const property = propertyData || fallbackPropertyData

  const displayData = {
    name: property.name,
    location: property.location,
    bedrooms: property.bedrooms || 4,
    bathrooms: property.bathrooms || 3.5,
    beds: property.beds || 4,
    guests: property.guests || 8,
    sqft: property.sqft || 3200,
    rating: property.rating || 4.9,
    reviewCount: property.reviewCount || 47,
    pricePerNight: property.pricePerNight || 466,
    description: property.description || fallbackPropertyData.description,
    images: property.images?.length ? property.images : fallbackPropertyData.images,
    highlights: property.highlights?.length ? property.highlights : fallbackPropertyData.highlights,
    bedroomDetails: property.bedroomDetails?.length ? property.bedroomDetails : fallbackPropertyData.bedroomDetails,
    coordinates: property.coordinates || fallbackPropertyData.coordinates,
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Mobile Header */}
      <MobileHeader title={`Wander ${displayData.name}`} />

      <main className="pt-12">
        {/* Property Info - Centered at top */}
        <MobilePropertyInfo
          location={displayData.location}
          name={displayData.name}
          guests={displayData.guests}
          beds={displayData.beds}
          bathrooms={displayData.bathrooms}
        />

        {/* Image Carousel */}
        <div className="py-4">
          <MobileImageCarousel images={displayData.images} propertyName={displayData.name} />
        </div>

        {/* Highlights */}
        <MobileHighlights highlights={displayData.highlights} />

        {/* Short Description */}
        <div className="px-4 pb-4 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">{displayData.description.slice(0, 100)}...</p>
        </div>

        {/* Features */}
        <MobileFeatures />

        {/* Full Description with Read More */}
        <MobileDescription description={displayData.description} propertyName={displayData.name} />

        {/* Amenities */}
        <MobileAmenities />

        {/* Where you'll sleep */}
        <MobileSleeping bedrooms={displayData.bedroomDetails as any} />

        {/* Location / Where you'll be */}
        <MobileLocation location={displayData.location} coordinates={displayData.coordinates} />

        {/* Reviews */}
        <MobileReviews />

        {/* Things to know / House Rules */}
        <MobileRules />
      </main>

      {/* Sticky Booking Bar */}
      <StickyBookingBar pricePerNight={displayData.pricePerNight} />
    </div>
  )
}
