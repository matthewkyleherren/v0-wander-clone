import Image from "next/image"
import Link from "next/link"
import { Star, Bed, Users } from "lucide-react"

const similarProperties = [
  {
    id: 1,
    name: "Wander Big Sur Coast",
    location: "San Simeon, California",
    image: "/big-sur-coast-luxury-home-ocean-cliff.jpg",
    tag: "Summer spots",
    nextAvail: "May 6 to May 9",
    bedrooms: 5,
    rating: 4.9,
    guests: 12,
    slug: "wander-big-sur-coast",
  },
  {
    id: 2,
    name: "Wander Encinitas Shores",
    location: "Encinitas, California",
    image: "/encinitas-beach-house-modern-coastal.jpg",
    tag: "Summer spots",
    nextAvail: "Apr 30 to May 1",
    bedrooms: 5,
    rating: 4.8,
    guests: 10,
    slug: "wander-encinitas-shores",
  },
  {
    id: 3,
    name: "Wander Malibu Vista",
    location: "Malibu, California",
    image: "/placeholder.svg?height=400&width=600",
    tag: "Make an offer",
    nextAvail: "Apr 28 to May 1",
    bedrooms: 5,
    rating: 5.0,
    guests: 10,
    slug: "wander-malibu-vista",
  },
]

export function SimilarProperties() {
  return (
    <section className="py-10 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase mb-1">SIMILAR WANDERS</p>
        <h2 className="text-base font-medium text-foreground mb-6">Guests who liked this property also liked:</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {similarProperties.map((property) => (
            <Link
              key={property.id}
              href={`/property/${property.slug}`}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-foreground/20 transition-colors"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.name}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                {property.tag && (
                  <span className="absolute top-2 left-2 px-2 py-1 bg-background/95 rounded text-[10px] font-medium text-foreground">
                    {property.tag}
                  </span>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs text-muted-foreground mb-0.5">{property.location}</p>
                <h3 className="text-sm font-medium text-foreground mb-1.5 group-hover:underline">{property.name}</h3>
                <p className="text-[11px] text-muted-foreground mb-2">
                  Next avail. <span className="text-foreground">{property.nextAvail}</span>
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-3 w-3" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-foreground text-foreground" />
                    <span>{property.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{property.guests}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
