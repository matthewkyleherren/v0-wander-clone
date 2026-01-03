"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Map } from "lucide-react"

const categories = [
  { name: "For you", icon: "✨" },
  { name: "Make An Offer", icon: "💰" },
  { name: "Holidays", icon: "🎄" },
  { name: "Hawaii", icon: "🌺" },
  { name: "Families", icon: "👨‍👩‍👧‍👦" },
  { name: "National Parks", icon: "🏞️" },
  { name: "Beach", icon: "🏖️" },
  { name: "Ski Season", icon: "⛷️" },
  { name: "City", icon: "🏙️" },
  { name: "Mountain", icon: "🏔️" },
  { name: "Forest", icon: "🌲" },
  { name: "Lake", icon: "🌊" },
  { name: "Desert", icon: "🏜️" },
  { name: "Golf", icon: "⛳" },
  { name: "Pet-Friendly", icon: "🐕" },
  { name: "Remote Work", icon: "💻" },
  { name: "Groups", icon: "👥" },
]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("For you")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-background border-b border-border sticky top-14 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-3">
          {/* Scroll Left Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex h-8 w-8 flex-shrink-0"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Category Pills - v0-style pills */}
          <div
            ref={scrollRef}
            className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap transition-all flex-shrink-0 min-h-[36px] text-sm ${
                  activeCategory === category.name
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Scroll Right Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex h-8 w-8 flex-shrink-0"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Map Button */}
          <Button variant="outline" size="sm" className="flex-shrink-0 gap-1.5 h-8 bg-transparent">
            <Map className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-sm">Map</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
