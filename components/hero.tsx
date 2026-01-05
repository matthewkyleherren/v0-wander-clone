"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, Search, Shield } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [location, setLocation] = useState("")
  const [dates, setDates] = useState("Whenever")
  const [guests, setGuests] = useState("Whoever")

  return (
    <section className="relative min-h-screen pt-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/luxury-mountain-cabin-with-stunning-view-at-sunset.jpg"
          alt="Luxury vacation home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 tracking-tight text-balance">
            Find your happy place.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            Never book a bad vacation home again. Every OffGrid comes with hotel-grade amenities, inspiring views,
            pristine cleaning and 24/7 concierge service.
          </p>
        </div>

        {/* Search Bar - v0-style - cleaner, sharper borders */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg shadow-sm p-1.5">
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Location */}
              <div className="flex-1 px-3 py-2.5 md:py-3 border-b md:border-b-0 md:border-r border-border">
                <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Location
                </label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-transparent w-full text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="flex-1 px-3 py-2.5 md:py-3 border-b md:border-b-0 md:border-r border-border">
                <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Dates
                </label>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Whenever"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="bg-transparent w-full text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="flex-1 px-3 py-2.5 md:py-3">
                <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                  Guests
                </label>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Whoever"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="bg-transparent w-full text-foreground placeholder:text-muted-foreground focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="p-1.5">
                <Button size="default" className="w-full md:w-auto h-10 px-4">
                  <Search className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline text-sm">Search</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge - v0-style - minimal, subtle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <div className="flex items-center gap-2.5 bg-card/90 backdrop-blur-sm rounded-md px-4 py-2.5 border border-border">
            <Shield className="h-5 w-5 text-foreground" />
            <div className="text-left">
              {/* OffGrid Guarantee */}
              <p className="text-xs font-medium text-foreground">OffGrid Guarantee</p>
              <p className="text-[11px] text-muted-foreground">Book with confidence</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-card/90 backdrop-blur-sm rounded-md px-4 py-2.5 border border-border">
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">96%</p>
              <p className="text-[11px] text-muted-foreground">satisfaction</p>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">52K+</p>
              <p className="text-[11px] text-muted-foreground">nights booked</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
