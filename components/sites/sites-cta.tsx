import { Button } from "@/components/ui/button"

export function SitesCTA() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Start now. Go live in minutes.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Connect your PMS, auto‑populate your listings and begin owning your guest relationships. All with no upfront
          cost.
        </p>
        <Button size="lg" className="text-base">
          Get started
        </Button>
      </div>
    </section>
  )
}
