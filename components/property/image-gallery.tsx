"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: string[]
  propertyName: string
}

export function ImageGallery({ images, propertyName }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ""
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      {/* Gallery Grid - v0 style with sharper corners */}
      <div className="relative">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-1 h-[55vh] max-h-[500px]">
          {/* Main large image */}
          <div
            className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden rounded-l-lg"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0] || "/placeholder.svg"}
              alt={`${propertyName} - Main`}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-300"
              priority
            />
          </div>
          {/* Secondary images */}
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className={`relative cursor-pointer overflow-hidden ${
                index === 1 ? "rounded-tr-lg" : index === 3 ? "rounded-br-lg" : ""
              }`}
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${propertyName} - ${index + 2}`}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
          {/* See all photos button */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-3 right-3 bg-background/95 hover:bg-background text-foreground text-xs gap-1.5 h-8"
            onClick={() => openLightbox(0)}
          >
            <Grid3X3 className="h-3.5 w-3.5" />
            See all photos
          </Button>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[45vh] max-h-[350px]">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${propertyName} - ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-between px-3">
            <Button variant="secondary" size="icon" className="bg-background/90 h-9 w-9" onClick={goToPrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" className="bg-background/90 h-9 w-9" onClick={goToNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          {/* Image counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 rounded px-2.5 py-1 text-xs text-foreground">
            {currentIndex + 1} / {images.length}
          </div>
          {/* See all photos */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-3 right-3 bg-background/95 text-foreground text-xs gap-1.5 h-8"
            onClick={() => openLightbox(0)}
          >
            <Grid3X3 className="h-3.5 w-3.5" />
            All
          </Button>
        </div>
      </div>

      {/* Lightbox Modal - v0 style */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="text-sm text-foreground">
              {currentIndex + 1} / {images.length}
            </span>
            <Button variant="ghost" size="icon" onClick={closeLightbox} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Image */}
          <div className="flex-1 relative flex items-center justify-center px-4">
            <Button variant="ghost" size="icon" onClick={goToPrevious} className="absolute left-4 z-10 h-10 w-10">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="relative w-full h-full max-w-4xl">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`${propertyName} - ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            <Button variant="ghost" size="icon" onClick={goToNext} className="absolute right-4 z-10 h-10 w-10">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-1.5 px-4 py-3 overflow-x-auto border-t border-border justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-14 h-10 flex-shrink-0 rounded overflow-hidden transition-opacity ${
                  index === currentIndex ? "ring-2 ring-foreground opacity-100" : "opacity-50 hover:opacity-80"
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
