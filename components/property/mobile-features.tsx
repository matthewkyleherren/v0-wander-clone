"use client"

import { Calendar, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Flexible check-in & out",
    description: "Check-in after 4:00 PM • Check-out before 10:00 AM • Pets not allowed",
  },
  {
    icon: Shield,
    title: "Easy cancellation",
    description: "Cancel within 24hrs for a full refund",
  },
  {
    icon: Sparkles,
    title: "Pristine homes, no to-do lists",
    description: "Arrive to five star cleaning • No chores at checkout • Just lock up and go",
  },
]

export function MobileFeatures() {
  return (
    <div className="px-4 py-4 border-t border-border">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={`flex items-start gap-4 py-5 ${index < features.length - 1 ? "border-b border-border" : ""}`}
        >
          <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
            <feature.icon className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="text-[15px] font-medium text-foreground mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
