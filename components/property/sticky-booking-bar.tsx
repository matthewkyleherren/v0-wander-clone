"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BottomSheet } from "@/components/ui/bottom-sheet"
import { Calendar, Users, ChevronDown } from "lucide-react"

interface StickyBookingBarProps {
  pricePerNight: number
}

export function StickyBookingBar({ pricePerNight }: StickyBookingBarProps) {
  const [dateSheetOpen, setDateSheetOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
        <div className="flex items-center justify-between px-4 py-4 safe-area-inset-bottom">
          <div>
            <p className="text-base font-semibold text-foreground">Add dates</p>
            <p className="text-sm text-muted-foreground">From ${pricePerNight.toLocaleString()}/night</p>
          </div>
          <Button
            onClick={() => setDateSheetOpen(true)}
            className="h-12 px-7 rounded-full bg-[#FFFEF5] text-zinc-900 hover:bg-[#F5F4E8] font-medium text-[15px] shadow-sm"
          >
            Explore dates
          </Button>
        </div>
      </div>

      {/* Date Selection Sheet */}
      <BottomSheet open={dateSheetOpen} onClose={() => setDateSheetOpen(false)} title="Select dates">
        <div className="px-4 py-6 space-y-5">
          {/* Check-in */}
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
              Check-in
            </label>
            <button className="w-full flex items-center justify-between px-4 py-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-[15px] text-foreground">Select date</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Check-out */}
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
              Check-out
            </label>
            <button className="w-full flex items-center justify-between px-4 py-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-[15px] text-foreground">Select date</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Guests */}
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
              Guests
            </label>
            <button className="w-full flex items-center justify-between px-4 py-4 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-[15px] text-foreground">2 guests</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Search Button - cream colored like Wander */}
          <Button className="w-full h-14 rounded-full bg-[#FFFEF5] text-zinc-900 hover:bg-[#F5F4E8] text-base font-medium shadow-sm">
            Search availability
          </Button>
        </div>
      </BottomSheet>
    </>
  )
}
