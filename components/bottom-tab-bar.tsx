"use client"

import { Compass, MessageCircle, Download, LogIn } from "lucide-react"
import Link from "next/link"

const tabs = [
  {
    icon: Compass,
    label: "Explore",
    href: "/",
    active: true,
  },
  {
    icon: MessageCircle,
    label: "Concierge",
    href: "/concierge",
    active: false,
  },
  {
    icon: Download,
    label: "Get the app",
    href: "/app",
    active: false,
  },
  {
    icon: LogIn,
    label: "Sign in",
    href: "/signin",
    active: false,
  },
]

export function BottomTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border safe-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {tabs.map((tab) => (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center gap-1 px-4 py-2 min-w-[70px] ${
              tab.active ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            <tab.icon className={`h-5 w-5 ${tab.active ? "stroke-[2.5]" : ""}`} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
