import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

interface SitesHeroProps {
  data?: {
    backgroundImage?: string
    stat?: string
    statDescription?: string
    demoVideoLabel?: string
    title?: string
    description?: string
    ctaLabel?: string
    heroImage?: string
  }
}

export function SitesHero({ data }: SitesHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data?.backgroundImage || "/placeholder.svg?height=800&width=1600"}
          alt="Hero background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Top bar with stats and demo link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-bold mb-1">{data?.stat || "$55M+"}</div>
            <div className="text-sm text-muted-foreground">
              {data?.statDescription || "in bookings with Wander Sites"}
            </div>
          </div>
          <Button variant="ghost" size="sm" className="gap-2">
            <Play className="h-4 w-4" />
            {data?.demoVideoLabel || "Watch the demo video"}
          </Button>
        </div>

        {/* Hero content */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {data?.title || "Own your brand,\nbookings and guests."}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {data?.description ||
              "You're missing out on bookings, revenue, and guest relationships. Take control with a Wander-worthy direct booking website."}
          </p>
          <Button size="lg" className="text-base">
            {data?.ctaLabel || "Get started for free"}
          </Button>
        </div>

        {/* Hero foreground image */}
        <div className="relative w-full max-w-5xl mx-auto">
          <Image
            src={data?.heroImage || "/placeholder.svg?height=600&width=1200"}
            alt="Website preview"
            width={1200}
            height={600}
            className="rounded-lg shadow-2xl border border-border"
          />
        </div>
      </div>
    </section>
  )
}
