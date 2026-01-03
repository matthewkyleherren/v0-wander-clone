"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BottomSheet } from "@/components/ui/bottom-sheet"

interface MobileDescriptionProps {
  description: string
  propertyName: string
}

export function MobileDescription({ description, propertyName }: MobileDescriptionProps) {
  const [sheetOpen, setSheetOpen] = useState(false)
  const truncatedDescription = description.slice(0, 120) + "..."

  return (
    <>
      <div className="px-4 py-6 border-t border-border">
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{truncatedDescription}</p>
        <Button
          variant="outline"
          className="w-full h-12 text-sm font-medium bg-transparent border-border rounded-xl"
          onClick={() => setSheetOpen(true)}
        >
          Read more
        </Button>
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="About the property">
        <div className="px-4 py-6 space-y-6">
          <p className="text-[15px] text-foreground leading-relaxed">{description}</p>
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">Property License: N/A</p>
          </div>
        </div>
      </BottomSheet>
    </>
  )
}
