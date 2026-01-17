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
    <div className="flex items-center gap-2 py-5 text-[15px] text-gray-900 border-b border-gray-100">
      {highlights.slice(0, 3).map((highlight, index) => (
        <span key={index}>
          {highlight.label}
          {index < Math.min(highlights.length - 1, 2) && (
            <span className="mx-2 text-gray-300">·</span>
          )}
        </span>
      ))}
    </div>
  );
}
