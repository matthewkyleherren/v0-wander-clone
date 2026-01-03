"use client"

import Image from "next/image"
import { Maximize2 } from "lucide-react"

interface MobileLocationProps {
  location: string
  coordinates: { lat: number; lng: number }
}

export function MobileLocation({ location, coordinates }: MobileLocationProps) {
  return (
    <div className="px-4 py-6 border-t border-border">
      <h2 className="text-lg font-medium text-foreground mb-4">Where you'll be</h2>

      {/* Map with rounded corners like Wander app */}
      <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-muted">
        <Image src="/satellite-map-florida-coast-inlet-beach.jpg" alt={`Map of ${location}`} fill className="object-cover" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg border-2 border-background">
            <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
          </div>
        </div>

        {/* Expand button matching Wander style - dark background */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-zinc-800/90 rounded-full flex items-center justify-center">
          <Maximize2 className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  )
}
