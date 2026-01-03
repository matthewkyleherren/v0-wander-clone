import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SitesAudit() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Website audit</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Get your free website audit.
            </h2>
            <p className="text-xl text-muted-foreground mb-6">See why you're underperforming.</p>
            <p className="text-muted-foreground mb-6">
              View your SEO, AI optimization, speed, mobile performance, conversion score, and more. You'll see how you
              rank now, and how we can help.
            </p>
            <Button size="lg">Get your free website audit</Button>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border">
            <Image src="/website-audit-report-dashboard.jpg" alt="Website audit report" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
