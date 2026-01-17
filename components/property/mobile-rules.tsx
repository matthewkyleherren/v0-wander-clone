"use client"

import { useState } from "react"
import { Clock, LogOut, Users, PawPrint, Ban, PartyPopper } from "lucide-react"
import { BottomSheet } from "@/components/ui/bottom-sheet"

const rules = [
  { icon: Clock, label: "Check-in: 16:00" },
  { icon: LogOut, label: "Check-out: 10:00" },
  { icon: Users, label: "8 guests maximum" },
  { icon: PawPrint, label: "Pets not allowed" },
  { icon: Ban, label: "No smoking - fees will apply" },
  { icon: PartyPopper, label: "Events require approval" },
]

const cancellationPolicy = "Cancel within 24hrs for a full refund"

export function MobileRules() {
  const [rulesSheetOpen, setRulesSheetOpen] = useState(false)

  return (
    <>
      <div className="px-4 py-6 border-t border-border">
        <h2 className="text-lg font-medium text-foreground mb-2">Things to know</h2>
        <p className="text-[15px] text-muted-foreground mb-6">
          Here are some things which you should know before booking OffGrid Inlet Beach Serenity
        </p>

        {/* House Rules Card - matching OffGrid dark card style */}
        <div className="bg-muted/40 rounded-2xl overflow-hidden mb-4">
          <div className="px-4 py-3 bg-muted/60">
            <h3 className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.15em]">HOUSE RULES</h3>
          </div>
          <div className="px-4">
            {rules.slice(0, 6).map((rule, index) => (
              <div
                key={rule.label}
                className={`flex items-center gap-4 py-4 ${index < 5 ? "border-b border-border/40" : ""}`}
              >
                <rule.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <span className="text-[15px] text-foreground">{rule.label}</span>
              </div>
            ))}
            <button onClick={() => setRulesSheetOpen(true)} className="text-sm text-foreground underline py-4">
              Read more
            </button>
          </div>
        </div>

        {/* Cancellation Policy Card */}
        <div className="bg-muted/40 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 bg-muted/60">
            <h3 className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.15em]">
              CANCELLATION POLICY
            </h3>
          </div>
          <div className="px-4 py-4">
            <p className="text-[15px] text-foreground">{cancellationPolicy}</p>
          </div>
        </div>
      </div>

      <BottomSheet open={rulesSheetOpen} onClose={() => setRulesSheetOpen(false)} title="House Rules">
        <div className="px-4 py-4">
          {rules.map((rule, index) => (
            <div
              key={rule.label}
              className={`flex items-center gap-4 py-4 ${index < rules.length - 1 ? "border-b border-border" : ""}`}
            >
              <rule.icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <span className="text-[15px] text-foreground">{rule.label}</span>
            </div>
          ))}
        </div>
      </BottomSheet>
    </>
  )
}
