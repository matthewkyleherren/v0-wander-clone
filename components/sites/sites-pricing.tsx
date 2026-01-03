import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function SitesPricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/ month per listing to start",
      description: "Only pay once you accept bookings",
      features: [
        "No credit card required",
        "Instant PMS connection",
        "Build your direct booking site",
        "Preview before paying",
      ],
      cta: "Get started for free",
      ctaVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$10",
      period: "/ month per listing",
      description: "+3% transaction fee, billed to guest",
      subDescription: "Everything in Free, plus:",
      features: ["Custom domain", "Live payments", "Advanced analytics", "Guest email nurturing", "AI optimization"],
      cta: "Get started",
      ctaVariant: "default" as const,
      secondaryCta: "Contact team",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground mb-2">Simple pricing</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Transparent, always.</h2>
          <p className="text-xl text-muted-foreground">Start for free, scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="border border-border rounded-lg p-8 bg-card">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              {plan.subDescription && <p className="text-sm font-medium mb-4">{plan.subDescription}</p>}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <Button className="w-full" variant={plan.ctaVariant} size="lg">
                  {plan.cta}
                </Button>
                {plan.secondaryCta && (
                  <Button className="w-full" variant="ghost" size="lg">
                    {plan.secondaryCta}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
