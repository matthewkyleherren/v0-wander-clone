"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TourSectionProps {
  images: string[]
}

export function TourSection({ images }: TourSectionProps) {
  return (
    <section className="py-8 border-b border-border">
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">TOUR THIS LOCATION</p>
      <h2 className="text-xl font-semibold text-foreground mb-6">Check it out before you check-in</h2>

      {/* Image Preview Grid */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={`Tour preview ${index + 1}`} fill className="object-cover" />
            {index === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="h-5 w-5 text-foreground ml-1" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button variant="link" className="text-primary p-0 h-auto">
        See all photos
      </Button>

      {/* Category Pills */}
      <div className="flex gap-2 mt-6 flex-wrap">
        {[
          { label: "Ocean", description: "Escape to the coast for the ultimate retreat" },
          { label: "Pools", description: "Your own private pool awaits" },
          { label: "Hot tub", description: "Relax and unwind" },
        ].map((category) => (
          <button
            key={category.label}
            className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground hover:bg-accent transition-colors min-h-[44px]"
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  )
}
