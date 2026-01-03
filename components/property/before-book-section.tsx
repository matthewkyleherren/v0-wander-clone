"use client"

import { useState } from "react"
import { Volume2, Eye, Users, Shield, PawPrint, Thermometer, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const notices = [
  {
    icon: <Volume2 className="h-5 w-5" />,
    title: "Noise",
    content:
      "Quiet hours are from 9 PM to 9 AM. Amplified outdoor sounds are strictly prohibited, and living room doors must be closed at night. We kindly ask that you refrain from hosting parties or creating excessive noise during your stay, as we strive to maintain a peaceful environment for both our guests and neighbors.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Privacy",
    content:
      "The separate studio on the property is not for guest use and is occupied by a long-term tenant. Note that the buildings are not visible to each other due to their distance, so privacy is maintained.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Occupancy notice",
    content:
      "This home follows a strict maximum occupancy rule. Please make sure that the total number of guests accompanying you (including both children and adults) doesn't exceed the indicated maximum occupancy inside and out to avoid cancellation of your stay.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Safety notice",
    content:
      "Please take note that this home is not child-proofed, though a pool fence can be set up upon request. Guests must take responsibility to make this space safe for any children brought into the home and to supervise children's activities.",
  },
  {
    icon: <PawPrint className="h-5 w-5" />,
    title: "No pets allowed",
    content:
      "This is a pet-free hypoallergenic space. No pets are allowed inside the home to maintain a hypoallergenic area as much as possible for our guests' comfort.",
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    title: "Pool heating",
    content:
      "The pool and hot tub are available year-round. There is a $100/day fee for pool heating at this home. Please contact the Concierge team at least 72 hours before your arrival if you would like the pool heated during your stay.",
  },
]

export function BeforeBookSection() {
  const [expanded, setExpanded] = useState(false)
  const visibleNotices = expanded ? notices : notices.slice(0, 3)

  return (
    <section className="py-12 border-b border-border">
      <h2 className="text-xl font-semibold text-foreground mb-2">Before you book</h2>
      <p className="text-muted-foreground mb-6">Some things you should know</p>

      <div className="space-y-4">
        {visibleNotices.map((notice, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
              {notice.icon}
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-1">{notice.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{notice.content}</p>
            </div>
          </div>
        ))}
      </div>

      {notices.length > 3 && (
        <Button
          variant="link"
          onClick={() => setExpanded(!expanded)}
          className="text-primary p-0 h-auto mt-4 flex items-center gap-1"
        >
          {expanded ? (
            <>
              See less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              See more <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      )}
    </section>
  )
}
