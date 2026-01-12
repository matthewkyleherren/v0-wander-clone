"use client";

import Image from "next/image";
import { HeroSearchBar } from "./hero-search-bar";

export function Hero() {
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
            Never book a bad vacation home again. Every OffGrid comes with
            hotel-grade amenities, inspiring views, pristine cleaning and 24/7
            concierge service.
          </p>
        </div>

        {/* New Search Bar with Dropdowns */}
        <HeroSearchBar />
      </div>
    </section>
  );
}
