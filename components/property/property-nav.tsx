"use client"

import { useEffect, useState } from "react"

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "amenities", label: "Amenities" },
  { id: "sleep", label: "Sleep" },
  { id: "work", label: "Work" },
  { id: "location", label: "Location" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
]

export function PropertyNav() {
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
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
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  return (
    <nav className="sticky top-14 bg-background z-30 py-3 border-b border-border -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`whitespace-nowrap text-xs font-medium transition-colors min-h-[32px] px-2.5 py-1.5 rounded-md ${
              activeSection === item.id
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
