"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { PropertyCard } from "@/lib/sanity/types"

// Fallback static data when Sanity is not configured
const fallbackProperties = [
  {
    _id: "1",
    slug: { current: "aspen-ridge-retreat" },
    name: "Aspen Ridge Retreat",
    location: "Aspen, Colorado",
    pricePerNight: 1250,
    rating: 4.98,
    reviewCount: 124,
    image: "/luxury-aspen-mountain-cabin-with-hot-tub-and-snowy.jpg",
    amenities: ["Hot Tub", "Ski-In/Out", "Mountain View"],
  },
  {
    _id: "2",
    slug: { current: "malibu-oceanfront-villa" },
    name: "Malibu Oceanfront Villa",
    location: "Malibu, California",
    pricePerNight: 2100,
    rating: 4.95,
    reviewCount: 89,
    image: "/modern-malibu-beachfront-villa-with-ocean-sunset-v.jpg",
    amenities: ["Pool", "Beach Access", "Ocean View"],
  },
  {
    _id: "3",
    slug: { current: "sedona-desert-oasis" },
    name: "Sedona Desert Oasis",
    location: "Sedona, Arizona",
    pricePerNight: 890,
    rating: 4.97,
    reviewCount: 156,
    image: "/luxury-sedona-desert-home-with-red-rock-views-and-.jpg",
    amenities: ["Pool", "Spa", "Desert View"],
  },
  {
    _id: "4",
    slug: { current: "lake-tahoe-chalet" },
    name: "Lake Tahoe Chalet",
    location: "Lake Tahoe, Nevada",
    pricePerNight: 1450,
    rating: 4.92,
    reviewCount: 203,
    image: "/cozy-lake-tahoe-chalet-with-lake-view-and-fireplac.jpg",
    amenities: ["Hot Tub", "Lake Access", "Fireplace"],
  },
  {
    _id: "5",
    slug: { current: "maui-beachfront-estate" },
    name: "Maui Beachfront Estate",
    location: "Maui, Hawaii",
    pricePerNight: 3200,
    rating: 4.99,
    reviewCount: 67,
    image: "/tropical-maui-beachfront-estate-with-palm-trees-an.jpg",
    amenities: ["Pool", "Beach Access", "Tropical Garden"],
  },
  {
    _id: "6",
    slug: { current: "joshua-tree-modern" },
    name: "Joshua Tree Modern",
    location: "Joshua Tree, California",
    pricePerNight: 650,
    rating: 4.94,
    reviewCount: 312,
    image: "/modern-joshua-tree-home-with-desert-landscape-star.jpg",
    amenities: ["Hot Tub", "Stargazing", "Desert View"],
  },
]

interface PropertyGridProps {
  properties?: PropertyCard[]
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  const displayProperties = properties && properties.length > 0 ? properties : fallbackProperties

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {displayProperties.map((property) => (
            <PropertyCardComponent key={property._id} property={property} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="sm" className="px-6 bg-transparent">
            Load more homes
          </Button>
        </div>
      </div>
    </section>
  )
}

function PropertyCardComponent({ property }: { property: PropertyCard }) {
  const slug = typeof property.slug === "string" ? property.slug : property.slug?.current

  const getImageSrc = () => {
    if (property.image?.startsWith("http")) {
      return property.image
    }
    return "/luxury-vacation-rental.jpg"
  }

  const imageSrc = getImageSrc()

  return (
    <Link href={`/property/${slug}`}>
      <article className="group cursor-pointer">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 border border-border">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            unoptimized={imageSrc.startsWith("http")}
          />
          <button
            className="absolute top-3 right-3 p-2 rounded-md bg-background/90 backdrop-blur-sm hover:bg-background transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center border border-border"
            aria-label="Save to wishlist"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-4 w-4 text-foreground" />
          </button>
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {property.amenities?.slice(0, 2).map((amenity) => (
              <span
                key={amenity}
                className="px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-[11px] font-medium text-foreground border border-border"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-foreground text-sm group-hover:underline">{property.name}</h3>
              <p className="text-muted-foreground text-xs">{property.location}</p>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="h-3 w-3 fill-foreground text-foreground" />
              <span className="text-xs font-medium text-foreground">{property.rating}</span>
              <span className="text-muted-foreground text-xs">({property.reviewCount})</span>
            </div>
          </div>

          <p className="text-foreground text-sm">
            <span className="font-medium">${property.pricePerNight?.toLocaleString()}</span>
            <span className="text-muted-foreground"> / night</span>
          </p>
        </div>
      </article>
    </Link>
  )
}
