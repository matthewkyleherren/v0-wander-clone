import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LocationSectionProps {
  distance: string
  coordinates: { lat: number; lng: number }
}

export function LocationSection({ distance, coordinates }: LocationSectionProps) {
  return (
    <section className="py-8 border-b border-border">
      <h2 className="text-lg font-semibold text-foreground mb-4">Explore this location</h2>

      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <MapPin className="h-4 w-4" />
        <span className="text-sm">{distance}</span>
      </div>

      <p className="text-sm text-muted-foreground mb-4">Exact address provided after booking</p>

      <div className="flex gap-4">
        <Button variant="outline" size="sm" asChild className="rounded-full bg-transparent">
          <a
            href={`http://maps.apple.com/?q=${coordinates.lat},${coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Maps
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild className="rounded-full bg-transparent">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </Button>
      </div>
    </section>
  )
}
