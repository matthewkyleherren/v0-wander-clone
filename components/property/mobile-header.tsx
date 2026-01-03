"use client"

import Link from "next/link"
import { ChevronLeft, Heart, Share2 } from "lucide-react"
import { useState } from "react"

interface MobileHeaderProps {
  title: string
  showTitle?: boolean
}

export function MobileHeader({ title, showTitle = true }: MobileHeaderProps) {
  const [liked, setLiked] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm safe-area-inset-top">
      <div className="flex items-center justify-between px-4 h-12">
        {/* Back Button */}
        <Link href="/" className="flex items-center justify-center w-10 h-10 -ml-2 text-foreground">
          <ChevronLeft className="h-6 w-6" />
        </Link>

        {/* Title - centered */}
        {showTitle && <h1 className="text-sm font-medium text-foreground truncate max-w-[200px]">{title}</h1>}

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center justify-center w-10 h-10 text-foreground"
            aria-label="Add to favorites"
          >
            <Heart className={`h-5 w-5 ${liked ? "fill-foreground" : ""}`} />
          </button>
          <button className="flex items-center justify-center w-10 h-10 -mr-2 text-foreground" aria-label="Share">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
