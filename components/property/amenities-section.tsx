import type React from "react"
import {
  Flame,
  Car,
  Sunrise,
  Home,
  Wifi,
  Waves,
  Warehouse,
  Dumbbell,
  Tv,
  Coffee,
  UtensilsCrossed,
  Snowflake,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface AmenityItem {
  icon: string
  label: string
}

interface AmenitiesSectionProps {
  amenities: AmenityItem[]
  propertyName: string
}

const iconMap: Record<string, React.ReactNode> = {
  fireplace: <Flame className="h-4 w-4" />,
  parking: <Car className="h-4 w-4" />,
  sunset: <Sunrise className="h-4 w-4" />,
  patio: <Home className="h-4 w-4" />,
  wifi: <Wifi className="h-4 w-4" />,
  hottub: <Waves className="h-4 w-4" />,
  garage: <Warehouse className="h-4 w-4" />,
  firepit: <Flame className="h-4 w-4" />,
  pool: <Waves className="h-4 w-4" />,
  gym: <Dumbbell className="h-4 w-4" />,
  tv: <Tv className="h-4 w-4" />,
  coffee: <Coffee className="h-4 w-4" />,
  kitchen: <UtensilsCrossed className="h-4 w-4" />,
  ac: <Snowflake className="h-4 w-4" />,
}

export function AmenitiesSection({ amenities, propertyName }: AmenitiesSectionProps) {
  return (
    <section id="amenities" className="py-8 border-b border-border">
      <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase mb-1">
        AMENITIES & FEATURES
      </p>
      <h2 className="text-base font-medium text-foreground mb-1.5">Hotel-grade amenities, but just for you</h2>
      <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
        Wander is the best of both worlds. The quality of a luxury hotel with the comfort of a private vacation home
        just for you and your guests.
      </p>

      {/* Amenities Grid - v0 style */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-5">
        {amenities.map((amenity) => (
          <div key={amenity.label} className="flex items-center gap-2 p-3 bg-muted rounded-md">
            <div className="text-foreground">{iconMap[amenity.icon] || <Home className="h-4 w-4" />}</div>
            <span className="text-xs text-foreground">{amenity.label}</span>
          </div>
        ))}
      </div>

      <Button variant="outline" size="sm" className="text-xs bg-transparent">
        View all amenities
      </Button>
    </section>
  )
}
