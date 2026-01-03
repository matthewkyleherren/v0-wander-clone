"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

export function StickySearchBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly viewport height)
      const scrollThreshold = window.innerHeight * 0.7
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-sm border-b border-border safe-top">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button className="w-full flex items-center gap-3 bg-card border border-border rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
              <Search className="h-4 w-4 text-background" />
            </div>
            <span className="text-sm text-muted-foreground">Start your search</span>
          </button>
        </div>
      </div>
    </div>
  )
}
