"use client"

import { useState } from "react"
import { BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BottomSheet } from "@/components/ui/bottom-sheet"

const reviews = [
  {
    text: "We decided to celebrate our 10-year anniversary at an OffGrid and it's one of the best decisions we've made! Everything in the property was well thought-out. And if we needed anything that the house didn't already have, the 24/7 concierge was ready to help us. We're already looking forward to booking our next family trip with OffGrid!",
    author: "jenolesada",
    location: "United States",
    date: "Dec 2025",
    verified: true,
  },
  {
    text: "OffGrid has been a fabulous experience and platform to work with and I look forward to future trips!",
    author: "Hike2Hike",
    location: "United States",
    date: "Dec 2025",
    verified: true,
  },
  {
    text: "Such an amazing property!! One of the prettiest places we have ever stayed! We would stay here again!",
    author: "Hayley",
    location: "Los Angeles, CA",
    date: "Nov 2025",
    verified: true,
  },
]

export function MobileReviews() {
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <>
      <div className="px-4 py-6 border-t border-border">
        <Button
          variant="outline"
          className="w-full h-12 text-sm font-medium bg-transparent border-border rounded-xl"
          onClick={() => setSheetOpen(true)}
        >
          Read all reviews
        </Button>
      </div>

      <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} title="Reviews">
        <div className="px-4 py-4 space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-5 bg-muted/30 border border-border rounded-2xl">
              <p className="text-[15px] text-foreground leading-relaxed mb-5">{review.text}</p>
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center text-foreground font-medium text-sm">
                  {review.author[0].toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-medium text-foreground">
                      {review.author} from {review.location}
                    </span>
                    {review.verified && <BadgeCheck className="h-4 w-4 text-blue-500" />}
                  </div>
                  <p className="text-sm text-muted-foreground">Stayed in {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  )
}
