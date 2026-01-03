import Image from "next/image"

interface Bedroom {
  name: string
  beds: string
  image: string
}

interface SleepingSectionProps {
  bedrooms: Bedroom[]
  guests: number
}

export function SleepingSection({ bedrooms, guests }: SleepingSectionProps) {
  return (
    <section id="sleep" className="py-12 border-b border-border">
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">Sleeping</p>
      <h2 className="text-xl font-semibold text-foreground mb-6">Comfortably sleeps up to {guests} guests</h2>

      {/* Bedrooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto">
        {bedrooms.map((bedroom, index) => (
          <div key={index} className="bg-secondary rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={bedroom.image || "/placeholder.svg"} alt={bedroom.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground">{bedroom.name}</h3>
              <p className="text-sm text-muted-foreground">{bedroom.beds}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
