"use client"

import Image from "next/image"

interface Bedroom {
  name: string
  beds: string
  image: string
}

interface MobileSleepingProps {
  bedrooms: Bedroom[]
}

export function MobileSleeping({ bedrooms }: MobileSleepingProps) {
  return (
    <div className="py-6 border-t border-border">
      <h2 className="text-lg font-medium text-foreground mb-4 px-4">Where you'll sleep</h2>

      {/* Horizontal scroll container with proper padding */}
      <div className="flex gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide">
        {bedrooms.slice(0, 4).map((bedroom, index) => (
          <div key={index} className="flex-shrink-0 w-[200px]">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
              <Image src={bedroom.image || "/placeholder.svg"} alt={bedroom.name} fill className="object-cover" />
            </div>
            <h3 className="text-[15px] font-medium text-foreground">{bedroom.name}</h3>
            <p className="text-sm text-muted-foreground">{bedroom.beds}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
