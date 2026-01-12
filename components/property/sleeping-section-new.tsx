"use client";

import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface BedroomDetail {
  name: string;
  beds: string;
  image?: string;
  imageUrl?: string;
}

interface SleepingSectionProps {
  bedrooms: BedroomDetail[];
}

export function SleepingSectionNew({ bedrooms }: SleepingSectionProps) {
  if (!bedrooms || bedrooms.length === 0) return null;

  return (
    <section className="py-8 border-b">
      <h2 className="text-xl font-semibold mb-6">Where you'll sleep</h2>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 px-4 lg:px-0">
          {bedrooms.map((bedroom, index) => {
            const imageUrl =
              bedroom.imageUrl || bedroom.image || "/placeholder.svg";
            return (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-card rounded-xl border shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={bedroom.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{bedroom.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {bedroom.beds}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </section>
  );
}
