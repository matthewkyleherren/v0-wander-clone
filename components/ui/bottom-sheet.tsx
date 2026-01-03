"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function BottomSheet({ open, onClose, title, children }: BottomSheetProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-background rounded-t-3xl",
          "max-h-[90vh] flex flex-col",
          "animate-in slide-in-from-bottom duration-300",
        )}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-9 h-1 bg-muted-foreground/20 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <button onClick={onClose} className="p-1.5 -ml-1.5 text-foreground">
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-[15px] font-medium text-foreground">{title}</h2>
          <div className="w-8" /> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain pb-safe">{children}</div>
      </div>
    </div>
  )
}
