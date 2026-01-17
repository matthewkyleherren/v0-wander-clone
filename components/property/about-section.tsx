"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AboutSectionProps {
  description: string;
  propertyName: string;
}

export function AboutSection({ description, propertyName }: AboutSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = description.length > 300;

  return (
    <section id="about" className="py-10 border-b border-gray-100">
      <h2 className="text-[22px] font-normal mb-5 text-gray-900">
        About the property
      </h2>

      <div className="relative">
        <p
          className={`text-[15px] text-gray-700 leading-[1.7] ${
            !expanded && shouldTruncate ? "line-clamp-4" : ""
          }`}
        >
          {description}
        </p>

        {!expanded && shouldTruncate && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      {shouldTruncate && (
        <Button
          variant="ghost"
          className="px-0 mt-3 text-gray-900 font-normal text-[14px] hover:bg-transparent underline h-auto"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      )}
    </section>
  );
}
