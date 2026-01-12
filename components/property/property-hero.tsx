"use client";

import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PropertyHeroProps {
  name: string;
  location: string;
  propertyType?: string;
}

export function PropertyHero({ name, location }: PropertyHeroProps) {
  const router = useRouter();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `OffGrid ${name}`,
          text: `Check out ${name} in ${location}`,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      {/* Mobile Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b lg:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart
                className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
              />
            </Button>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <div className="hidden lg:block pt-8 pb-6">
        <p className="text-[11px] font-medium tracking-[0.08em] text-gray-500 uppercase mb-2">
          {location}
        </p>
        <div className="flex items-start justify-between">
          <h1 className="text-[38px] font-normal tracking-tight leading-tight">
            OffGrid {name}
          </h1>
          <div className="flex items-center gap-3 pt-1">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-md px-4 h-9 border-gray-200 text-sm font-normal text-gray-700 hover:bg-gray-50"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart
                className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
              />
              Wishlist
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-md px-4 h-9 border-gray-200 text-sm font-normal text-gray-700 hover:bg-gray-50"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Title - Below fixed header */}
      <div className="lg:hidden pt-16 px-4 pb-2 text-center">
        <p className="text-[11px] font-medium tracking-[0.1em] text-muted-foreground uppercase">
          {location}
        </p>
        <h1 className="text-2xl font-medium mt-1">OffGrid {name}</h1>
      </div>
    </>
  );
}
