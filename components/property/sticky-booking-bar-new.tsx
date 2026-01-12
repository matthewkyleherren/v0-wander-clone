"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface StickyBookingBarProps {
  pricePerNight: number;
  rating?: number;
  reviewCount?: number;
}

export function StickyBookingBarNew({
  pricePerNight,
  rating = 5,
  reviewCount = 0,
}: StickyBookingBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 lg:hidden">
      <div className="flex items-center justify-between gap-4">
        {/* Price and rating */}
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold">${pricePerNight}</span>
            <span className="text-sm text-muted-foreground">/ night</span>
          </div>
          {reviewCount > 0 && (
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-foreground" />
              <span className="font-medium">{rating.toFixed(1)}</span>
              <span className="text-muted-foreground">
                ({reviewCount} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Reserve button */}
        <Button size="lg" className="px-8">
          Reserve
        </Button>
      </div>
    </div>
  );
}
