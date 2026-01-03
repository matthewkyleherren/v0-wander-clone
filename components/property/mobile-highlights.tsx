"use client"

interface Highlight {
  icon: string
  label: string
}

interface MobileHighlightsProps {
  highlights: Highlight[]
}

export function MobileHighlights({ highlights }: MobileHighlightsProps) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground px-4 py-4">
      {highlights.map((highlight, index) => (
        <span key={highlight.label} className="flex items-center gap-2">
          {index > 0 && <span className="text-foreground">·</span>}
          <span>{highlight.label}</span>
        </span>
      ))}
    </div>
  )
}
