"use client";

import {
  Flame,
  Trees,
  Mountain,
  Waves,
  Wifi,
  Car,
  Dumbbell,
  UtensilsCrossed,
  Sparkles,
  Wind,
  Sun,
  Snowflake,
  TreePine,
  Building2,
  Tent,
  Bike,
  Coffee,
  Tv,
  WashingMachine,
  AirVent,
  type LucideIcon,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface HighlightTagsProps {
  highlights: { icon: string; label: string }[];
}

const iconMap: Record<string, LucideIcon> = {
  fireplace: Flame,
  fire: Flame,
  "fire-pit": Flame,
  forest: Trees,
  trees: Trees,
  mountain: Mountain,
  lake: Waves,
  water: Waves,
  ocean: Waves,
  beach: Sun,
  wifi: Wifi,
  parking: Car,
  gym: Dumbbell,
  kitchen: UtensilsCrossed,
  pool: Sparkles,
  "hot-tub": Sparkles,
  hottub: Sparkles,
  spa: Sparkles,
  ac: Wind,
  "air-conditioning": Wind,
  heating: Flame,
  sun: Sun,
  ski: Snowflake,
  snow: Snowflake,
  garden: TreePine,
  city: Building2,
  camping: Tent,
  bike: Bike,
  bicycle: Bike,
  coffee: Coffee,
  tv: Tv,
  laundry: WashingMachine,
  washer: WashingMachine,
  dryer: AirVent,
  desk: Coffee,
  workspace: Coffee,
  bbq: Flame,
  grill: Flame,
  "outdoor-dining": UtensilsCrossed,
};

function getIcon(iconName: string): LucideIcon {
  const normalizedName = iconName.toLowerCase().replace(/[^a-z-]/g, "");
  return iconMap[normalizedName] || Sparkles;
}

export function HighlightTags({ highlights }: HighlightTagsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="py-4">
      {/* Mobile: Horizontal scroll */}
      <div className="lg:hidden">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-3 px-4">
            {highlights.map((highlight, index) => {
              const Icon = getIcon(highlight.icon);
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border shadow-sm text-sm font-medium"
                >
                  <Icon className="h-4 w-4" />
                  <span>{highlight.label}</span>
                </div>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>

      {/* Desktop: Flex wrap */}
      <div className="hidden lg:flex flex-wrap gap-3">
        {highlights.map((highlight, index) => {
          const Icon = getIcon(highlight.icon);
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border shadow-sm text-sm font-medium"
            >
              <Icon className="h-4 w-4" />
              <span>{highlight.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
