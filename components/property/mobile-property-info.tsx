"use client"

interface MobilePropertyInfoProps {
  location: string
  name: string
  guests: number
  beds: number
  bathrooms: number
}

export function MobilePropertyInfo({ location, name, guests, beds, bathrooms }: MobilePropertyInfoProps) {
  return (
    <div className="text-center px-4 pt-4">
      {/* Location - subtle uppercase tracking */}
      <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">{location}</p>

      {/* Property Name - elegant Playfair Display serif font like Wander app */}
      <h1 className="text-[28px] leading-tight font-serif text-foreground mb-2 text-balance">{name}</h1>

      {/* Stats */}
      <p className="text-sm text-muted-foreground">
        {guests} guests · {beds} beds · {bathrooms} bathrooms
      </p>
    </div>
  )
}
