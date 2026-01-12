"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Wifi,
  Car,
  Waves,
  Flame,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  AirVent,
  Dumbbell,
  Sparkles,
  Coffee,
  Wind,
  Sun,
  Snowflake,
  Trees,
  Mountain,
  BedDouble,
  Bath,
  Refrigerator,
  Microwave,
  type LucideIcon,
} from "lucide-react";

interface AmenitiesGridProps {
  amenities: string[];
}

const amenityIcons: Record<string, LucideIcon> = {
  wifi: Wifi,
  "wi-fi": Wifi,
  internet: Wifi,
  parking: Car,
  "free parking": Car,
  garage: Car,
  pool: Waves,
  "swimming pool": Waves,
  "hot tub": Sparkles,
  hottub: Sparkles,
  jacuzzi: Sparkles,
  spa: Sparkles,
  fireplace: Flame,
  "fire pit": Flame,
  bbq: Flame,
  grill: Flame,
  tv: Tv,
  television: Tv,
  "smart tv": Tv,
  kitchen: UtensilsCrossed,
  "full kitchen": UtensilsCrossed,
  "gourmet kitchen": UtensilsCrossed,
  washer: WashingMachine,
  laundry: WashingMachine,
  "washing machine": WashingMachine,
  dryer: AirVent,
  gym: Dumbbell,
  "fitness center": Dumbbell,
  "fitness room": Dumbbell,
  coffee: Coffee,
  "coffee maker": Coffee,
  espresso: Coffee,
  "air conditioning": Wind,
  ac: Wind,
  heating: Sun,
  "central heating": Sun,
  ski: Snowflake,
  "ski-in/ski-out": Snowflake,
  garden: Trees,
  patio: Trees,
  deck: Trees,
  balcony: Trees,
  terrace: Trees,
  "mountain view": Mountain,
  "lake view": Waves,
  "ocean view": Waves,
  "beach access": Sun,
  bedroom: BedDouble,
  bathroom: Bath,
  refrigerator: Refrigerator,
  fridge: Refrigerator,
  microwave: Microwave,
  dishwasher: Sparkles,
  desk: Coffee,
  workspace: Coffee,
  "outdoor dining": UtensilsCrossed,
};

function getAmenityIcon(amenity: string): LucideIcon {
  const normalized = amenity.toLowerCase().trim();
  return amenityIcons[normalized] || Sparkles;
}

export function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  const [showAll, setShowAll] = useState(false);

  if (!amenities || amenities.length === 0) return null;

  const displayedAmenities = amenities.slice(0, 8);
  const hasMore = amenities.length > 8;

  return (
    <section className="py-10 border-b border-gray-100">
      <h2 className="text-[22px] font-normal mb-2 text-gray-900">
        Hotel-grade amenities
      </h2>
      <p className="text-[15px] text-gray-600 mb-6 leading-[1.7]">
        OffGrid is the best of both worlds. The quality of a luxury hotel with
        the comfort of a private vacation home just for you and your guests.
      </p>

      {/* Amenities grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
        {displayedAmenities.map((amenity, index) => {
          const Icon = getAmenityIcon(amenity);
          return (
            <div key={index} className="flex items-center gap-3">
              <Icon className="h-[18px] w-[18px] text-gray-500 flex-shrink-0" />
              <span className="text-[14px] text-gray-700 capitalize">
                {amenity}
              </span>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <Button
          variant="outline"
          className="mt-7 rounded-lg border-gray-200 text-gray-900 text-[14px] font-normal h-10 px-5 hover:bg-gray-50"
          onClick={() => setShowAll(true)}
        >
          See all {amenities.length} amenities
        </Button>
      )}

      {/* Full amenities modal */}
      <Dialog open={showAll} onOpenChange={setShowAll}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>All amenities</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="grid grid-cols-1 gap-3">
              {amenities.map((amenity, index) => {
                const Icon = getAmenityIcon(amenity);
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm font-medium capitalize">
                      {amenity}
                    </span>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
