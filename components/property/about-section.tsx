"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AboutSectionProps {
  description: string
  propertyName: string
}

export function AboutSection({ description, propertyName }: AboutSectionProps) {
  const [expanded, setExpanded] = useState(false)
  const shouldTruncate = description.length > 300

  return (
    <section className="py-8 border-b">
      <h2 className="text-xl font-semibold mb-4">About the property</h2>

      <div className="relative">
        <p className={`text-muted-foreground leading-relaxed ${
          !expanded && shouldTruncate ? "line-clamp-4" : ""
        }`}>
          {description}
        </p>

        {!expanded && shouldTruncate && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      {shouldTruncate && (
        <Button
          variant="link"
          className="px-0 mt-2 text-foreground font-medium"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </section>
  )
}
