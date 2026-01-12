"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!bedrooms || bedrooms.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sleep" className="py-10 border-b border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-normal text-gray-900">
          Where you'll sleep
        </h2>
        {bedrooms.length > 2 && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-gray-300 hover:bg-gray-50"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-gray-300 hover:bg-gray-50"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {bedrooms.map((bedroom, index) => {
          const imageUrl =
            bedroom.imageUrl || bedroom.image || "/placeholder.svg";
          return (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={bedroom.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-normal text-[15px] text-gray-900">
                  {bedroom.name}
                </h3>
                <p className="text-[13px] text-gray-500 mt-0.5">
                  {bedroom.beds}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
