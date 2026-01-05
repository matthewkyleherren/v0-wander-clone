"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const features = [
  {
    image: "/happy-family-walking-outside-beautiful-vacation-ho.jpg",
    title: "Only the best homes",
    description:
      "We'll never not look like the pictures. Every OffGrid is beautiful and expertly operated, so you can leave any stress at the door.",
  },
  {
    image: "/luxury-villa-with-infinity-pool-at-sunset-ocean-vi.jpg",
    title: "Hotel-grade amenities",
    description:
      "We'll never leave you with nothing to do. From ultra fast WiFi to gyms and pools, our homes make it easy to blend work and play.",
  },
  {
    image: "/concierge-service-luxury-hotel-staff-smiling.jpg",
    title: "24/7 concierge service",
    description:
      "We'll never leave you hanging. Our chat-based Concierge is always available to help – from trip questions to special requests.",
  },
  {
    image: "/stunning-mountain-view-from-luxury-cabin-window-su.jpg",
    title: "Inspiring and stunning views",
    description:
      "We'll never leave you uninspired. Every OffGrid has stunning views to refresh and inspire your soul. Adventure awaits.",
  },
  {
    image: "/pristine-clean-luxury-bedroom-white-linens.jpg",
    title: "Meticulous cleaning",
    description:
      "We'll never have you check in to a dirty house. Our cleaning teams are meticulous, and there are no chores at checkout.",
  },
  {
    image: "/smart-home-security-system-modern-house.jpg",
    title: "Safety and security",
    description:
      "We'll never pass you off to a stranger. Every OffGrid location meets our industry-leading safety standards to give you peace of mind.",
  },
]

export function Features() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-8 bg-background">
      <div className="text-center mb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground tracking-tight italic mb-3">
          The OffGrid difference
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto text-pretty leading-relaxed">
          OffGrid is different because we combine the quality of a luxury hotel with the comfort of a private vacation
          home. Your best trip ever is just a few clicks away.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 top-1/3 -translate-y-1/2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center shadow-sm hover:bg-muted transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 top-1/3 -translate-y-1/2 z-10 w-10 h-10 bg-background border border-border rounded-full items-center justify-center shadow-sm hover:bg-muted transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        <div className="max-w-7xl mx-auto">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-4 sm:pl-6 lg:pl-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[80vw] max-w-[340px] snap-start ${index === features.length - 1 ? "mr-4 sm:mr-6 lg:mr-8" : ""}`}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
