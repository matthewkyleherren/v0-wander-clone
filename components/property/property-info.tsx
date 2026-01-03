import type React from "react"
import { Heart, Share2, Bed, Bath, Users, Square, Sunrise, Flame, Waves, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyInfoProps {
  location: string
  name: string
  bedrooms: number
  bathrooms: number
  beds: number
  guests: number
  sqft: number
  quickAmenities: { icon: string; label: string }[]
}

const iconMap: Record<string, React.ReactNode> = {
  sunset: <Sunrise className="h-4 w-4" />,
  hottub: <Waves className="h-4 w-4" />,
  firepit: <Flame className="h-4 w-4" />,
  pool: <Waves className="h-4 w-4" />,
  foosball: <Dumbbell className="h-4 w-4" />,
  gym: <Dumbbell className="h-4 w-4" />,
}

export function PropertyInfo({
  location,
  name,
  bedrooms,
  bathrooms,
  beds,
  guests,
  sqft,
  quickAmenities,
}: PropertyInfoProps) {
  return (
    <div className="pb-5 border-b border-border">
      {/* Location */}
      <p className="text-muted-foreground text-xs mb-1.5">{location}</p>

      {/* Title and Actions - v0 style */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <h1 className="text-xl md:text-2xl font-medium text-foreground tracking-tight text-balance">{name}</h1>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Add to favorites">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats - v0 style */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1.5">
          <Bed className="h-3.5 w-3.5" />
          <span>{bedrooms} bedrooms</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Bath className="h-3.5 w-3.5" />
          <span>{bathrooms} baths</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Bed className="h-3.5 w-3.5" />
          <span>{beds} beds</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          <span>{guests} guests</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Square className="h-3.5 w-3.5" />
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
      </div>

      {/* Quick Amenities - v0 style pills */}
      <div className="flex flex-wrap gap-2">
        {quickAmenities.map((amenity) => (
          <div
            key={amenity.label}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-muted rounded-md text-xs text-foreground"
          >
            {iconMap[amenity.icon] || <Sunrise className="h-4 w-4" />}
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
