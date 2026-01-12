"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const navItems = [
  { id: "about", label: "About" },
  { id: "amenities", label: "Amenities" },
  { id: "sleep", label: "Sleep" },
  { id: "location", label: "Location" },
  { id: "reviews", label: "Reviews" },
]

interface StickyNavBarProps {
  rating: number
  reviewCount: number
}

export function StickyNavBar({ rating, reviewCount }: StickyNavBarProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past the hero section (approximately 400px)
      setIsVisible(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 120 // Account for sticky header + sticky nav
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-normal transition-colors relative pb-0.5 ${
                  activeSection === item.id
                    ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side - Rating and CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-current text-gray-900" />
              <span className="text-sm font-medium text-gray-900">{rating}</span>
            </div>
            <Button className="rounded-md px-6 h-9 text-sm font-medium">
              Select dates
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
