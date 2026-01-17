"use client";

import Image from "next/image";
import { Play, Eye, MapPin } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { AdditionalVideo } from "@/lib/sanity/types";

interface VideoTourCarouselProps {
  tourVideoUrl?: string;
  additionalVideos?: AdditionalVideo[];
  propertyName: string;
  mainImage?: string;
}

export function VideoTourCarousel({
  tourVideoUrl,
  additionalVideos = [],
  propertyName,
  mainImage = "/placeholder.svg",
}: VideoTourCarouselProps) {
  // If no videos at all, don't render the section
  if (!tourVideoUrl && (!additionalVideos || additionalVideos.length === 0))
    return null;

  const videos = [
    // Always show sneak peek if we have a main image
    {
      type: "sneak-peek",
      title: "Get a sneak peek",
      thumbnail: mainImage,
      url: tourVideoUrl,
      icon: Eye,
    },
    // Main tour video
    ...(tourVideoUrl
      ? [
          {
            type: "tour",
            title: "Watch the tour",
            thumbnail: mainImage,
            url: tourVideoUrl,
            icon: Play,
          },
        ]
      : []),
    // Local activities (placeholder for now, could be expanded)
    {
      type: "activities",
      title: "See the local activities",
      thumbnail: mainImage,
      url: undefined,
      icon: MapPin,
    },
    // Additional videos from CMS
    ...additionalVideos.map((video) => ({
      type: "additional",
      title: video.title,
      thumbnail: video.thumbnail || mainImage,
      url: video.url,
      icon: Play,
    })),
  ];

  const handleVideoClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-8 border-b">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 px-4 lg:px-0">
          {videos.map((video, index) => (
            <button
              key={index}
              className="relative flex-shrink-0 w-48 group"
              onClick={() => handleVideoClick(video.url)}
              disabled={
                !video.url &&
                video.type !== "sneak-peek" &&
                video.type !== "activities"
              }
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <video.icon className="h-5 w-5 text-black" />
                  </div>
                </div>
              </div>

              <p className="mt-2 text-sm font-medium text-left whitespace-normal line-clamp-2">
                {video.title}
              </p>
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </section>
  );
}
