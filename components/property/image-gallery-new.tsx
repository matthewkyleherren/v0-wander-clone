"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ImageGalleryProps {
  images: string[];
  propertyName: string;
}

export function ImageGalleryNew({ images, propertyName }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({ loop: true });
  const [mobileIndex, setMobileIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(currentIndex);
      const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi, currentIndex]);

  useEffect(() => {
    if (mobileEmblaApi) {
      const onSelect = () =>
        setMobileIndex(mobileEmblaApi.selectedScrollSnap());
      mobileEmblaApi.on("select", onSelect);
      return () => {
        mobileEmblaApi.off("select", onSelect);
      };
    }
  }, [mobileEmblaApi]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, scrollPrev, scrollNext]);

  const displayImages = images.length > 0 ? images : ["/placeholder.svg"];

  return (
    <>
      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <div className="overflow-hidden rounded-xl" ref={mobileEmblaRef}>
          <div className="flex">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative aspect-[4/3]"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`${propertyName} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {displayImages.slice(0, 5).map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                mobileIndex === index
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-muted-foreground/30"
              }`}
              onClick={() => mobileEmblaApi?.scrollTo(index)}
            />
          ))}
          {displayImages.length > 5 && (
            <span className="text-xs text-muted-foreground ml-1">
              +{displayImages.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Desktop Grid - Wander style (1 large left + 2x2 grid right) */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-2 gap-2 h-[500px]">
          {/* Main large image - left side */}
          <div
            className="relative cursor-pointer group rounded-l-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={displayImages[0]}
              alt={`${propertyName} - Main`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Right side - 2x2 grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            {displayImages.slice(1, 5).map((image, index) => (
              <div
                key={index + 1}
                className={`relative cursor-pointer group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)] ${
                  index === 1 ? "rounded-tr-2xl" : ""
                } ${index === 3 ? "rounded-br-2xl" : ""}`}
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={image}
                  alt={`${propertyName} - Image ${index + 2}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Show all photos button */}
        {displayImages.length > 5 && (
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-4 right-4 bg-white hover:bg-gray-50 text-gray-900 shadow-lg rounded-lg font-medium"
            onClick={() => openLightbox(0)}
          >
            Show all photos
          </Button>
        )}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[100vw] w-full h-full max-h-[100vh] p-0 bg-black border-none rounded-none">
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {displayImages.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="h-full flex items-center justify-center">
            <div className="w-full h-full overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {displayImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center p-16"
                  >
                    <div className="relative w-full h-full max-w-6xl mx-auto">
                      <Image
                        src={image}
                        alt={`${propertyName} - Image ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={Math.abs(currentIndex - index) <= 1}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              onClick={scrollNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex gap-2 justify-center overflow-x-auto max-w-4xl mx-auto pb-2">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all ${
                    currentIndex === index
                      ? "ring-2 ring-white opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    emblaApi?.scrollTo(index);
                  }}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
