"use client"

import { useState } from "react"
import { Car, Droplets, Flame, Shield, Waves, Wind, WashingMachine, Home, Mountain, AirVent } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BottomSheet } from "@/components/ui/bottom-sheet"

const allAmenities = {
  common: [
    { icon: Car, label: "Free parking" },
    { icon: Droplets, label: "Hot water" },
    { icon: Flame, label: "Fire extinguisher" },
    { icon: Shield, label: "Carbon monoxide detector" },
    { icon: Shield, label: "Smoke detector" },
    { icon: Shield, label: "First aid kit" },
    { icon: AirVent, label: "Air conditioning" },
    { icon: WashingMachine, label: "Washer" },
    { icon: WashingMachine, label: "Dryer" },
    { icon: Home, label: "Balcony" },
    { icon: Home, label: "Patio" },
    { icon: Mountain, label: "Lake view" },
  ],
  featured: [
    { icon: Waves, label: "Hot tub" },
    { icon: Waves, label: "Pool outdoor" },
    { icon: Flame, label: "Fire pit" },
    { icon: Wind, label: "Ocean view" },
  ],
}

interface MobileAmenitiesProps {
  amenities?: { icon: string; label: string }[]
}

export function MobileAmenities({ amenities }: MobileAmenitiesProps) {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <>
      <div className="px-4 py-6 border-t border-border">
        <Button
          variant="outline"
          className="w-full h-12 text-sm font-medium bg-transparent border-border rounded-xl"
          onClick={() => setSheetOpen(true)}
        >
          View all amenities
        </Button>
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Amenities">
        <div className="px-4 py-4">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Common Amenities</h3>
          <div className="space-y-0">
            {allAmenities.common.map((amenity, index) => (
              <div
                key={amenity.label + index}
                className="flex items-center gap-4 py-4 border-b border-border last:border-b-0"
              >
                <amenity.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-[15px] text-foreground">{amenity.label}</span>
              </div>
            ))}
          </div>

          {/* Featured Amenities */}
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-8 mb-2">
            Featured Amenities
          </h3>
          <div className="space-y-0">
            {allAmenities.featured.map((amenity, index) => (
              <div
                key={amenity.label + index}
                className="flex items-center gap-4 py-4 border-b border-border last:border-b-0"
              >
                <amenity.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-[15px] text-foreground">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </BottomSheet>
    </>
  )
}
