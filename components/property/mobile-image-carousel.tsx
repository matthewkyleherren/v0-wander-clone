"use client"

import type React from "react"
import Image from "next/image"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface MobileImageCarouselProps {
  images: string[]
  propertyName: string
}

export function MobileImageCarousel({ images, propertyName }: MobileImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fullscreenOpen, setFullscreenOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Handle touch swipe
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-[calc(100%-32px)] mx-auto aspect-[4/5] bg-muted rounded-2xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setFullscreenOpen(true)}
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${propertyName} - ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute bottom-4 right-4 bg-background rounded-full px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
          {currentIndex + 1}/{images.length}
        </div>
      </div>

      {/* Fullscreen Gallery */}
      {fullscreenOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-border safe-area-inset-top">
            <button onClick={() => setFullscreenOpen(false)} className="p-2 -ml-2 text-foreground">
              <X className="h-5 w-5" />
            </button>
            <span className="text-sm text-foreground">
              {currentIndex + 1} / {images.length}
            </span>
            <div className="w-9" />
          </div>

          {/* Image */}
          <div
            className="flex-1 relative flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button onClick={goToPrevious} className="absolute left-2 z-10 p-2 text-foreground/70">
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${propertyName} - ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <button onClick={goToNext} className="absolute right-2 z-10 p-2 text-foreground/70">
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-1.5 px-4 py-3 overflow-x-auto border-t border-border safe-area-inset-bottom">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden transition-opacity ${
                  index === currentIndex ? "ring-2 ring-foreground opacity-100" : "opacity-40"
                }`}
              >
                <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
