"use client"

import { useState } from "react"
import { Calendar, Users, Star, ChevronDown, Shield, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookingSidebarProps {
  pricePerNight: number
  rating: number
  reviews: number
}

export function BookingSidebar({ pricePerNight, rating, reviews }: BookingSidebarProps) {
  const [checkIn, setCheckIn] = useState<string>("")
  const [checkOut, setCheckOut] = useState<string>("")
  const [guests, setGuests] = useState(2)

  const nights = 3 // Default
  const subtotal = pricePerNight * nights
  const cleaningFee = 250
  const serviceFee = Math.round(subtotal * 0.12)
  const total = subtotal + cleaningFee + serviceFee

  return (
    <div className="sticky top-20">
      <div className="bg-card border border-border rounded-lg p-5">
        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className="text-xl font-medium text-foreground">${pricePerNight.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">/ night</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-5">
          <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">·</span>
          <span className="text-sm text-muted-foreground">{reviews} reviews</span>
        </div>

        {/* Booking Form - v0-style form */}
        <div className="border border-border rounded-md mb-4">
          {/* Dates */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="p-3 border-r border-border">
              <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                Check-in
              </label>
              <button className="flex items-center gap-1.5 text-sm text-foreground w-full text-left min-h-[36px]">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{checkIn || "Add date"}</span>
              </button>
            </div>
            <div className="p-3">
              <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                Checkout
              </label>
              <button className="flex items-center gap-1.5 text-sm text-foreground w-full text-left min-h-[36px]">
                <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                <span>{checkOut || "Add date"}</span>
              </button>
            </div>
          </div>
          {/* Guests */}
          <div className="p-3">
            <label className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide block mb-1">
              Guests
            </label>
            <button className="flex items-center justify-between text-sm text-foreground w-full min-h-[36px]">
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-muted-foreground" />
                <span>
                  {guests} guest{guests > 1 ? "s" : ""}
                </span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Book Button */}
        <Button className="w-full h-10 text-sm font-medium mb-3">Request to book</Button>

        <p className="text-center text-xs text-muted-foreground mb-5">You won't be charged yet</p>

        {/* Price Breakdown */}
        <div className="space-y-2 pb-4 border-b border-border mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              ${pricePerNight.toLocaleString()} × {nights} nights
            </span>
            <span className="text-foreground">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Cleaning fee</span>
            <span className="text-foreground">${cleaningFee}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Service fee</span>
            <span className="text-foreground">${serviceFee}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-foreground">Total</span>
          <span className="text-foreground">${total.toLocaleString()}</span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-4 w-4 text-foreground" />
          <span>Full refund up to 14 days before check-in</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MessageCircle className="h-4 w-4 text-foreground" />
          <span>24/7 concierge support</span>
        </div>
      </div>

      {/* Report Link */}
      <button className="mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors underline">
        Report this listing
      </button>
    </div>
  )
}
