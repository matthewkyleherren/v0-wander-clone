"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PropertyDescriptionProps {
  description: string
}

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="overview" className="py-8 border-b border-border">
      <p className={`text-foreground leading-relaxed ${!expanded && "line-clamp-4"}`}>{description}</p>
      <Button variant="link" onClick={() => setExpanded(!expanded)} className="text-primary p-0 h-auto mt-2">
        {expanded ? "see less" : "see more"}
      </Button>

      {/* Spring Escapes Tag */}
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
        <span className="text-sm font-medium text-accent-foreground">Spring escapes</span>
        <span className="text-sm text-muted-foreground">Great OffGrid destinations to explore this spring.</span>
      </div>
    </section>
  )
}
