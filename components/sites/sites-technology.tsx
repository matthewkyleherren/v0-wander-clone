import { Mail, Smartphone, Search, Sparkles, Shield, Zap } from "lucide-react"

export function SitesTechnology() {
  const features = [
    {
      icon: Shield,
      title: "Proprietary guest management software",
      description: "Every booking creates a guest account in your CRM, enabling you to own your guest relationship.",
    },
    {
      icon: Mail,
      title: "Lifecycle email nurturing",
      description: "Targeted emails that convert more visitors, re-engage past guests, and drive repeat bookings.",
    },
    {
      icon: Smartphone,
      title: "Mobile responsive design",
      description:
        "Optimized for discovery and checkout on mobile devices, which is where the majority of traffic and bookings take place.",
    },
    {
      icon: Search,
      title: "SEO optimized architecture",
      description:
        "Vacation rental-specific SEO structure, internal linking, sitemaps, and schema so your listings shine on organic search.",
    },
    {
      icon: Sparkles,
      title: "AI optimization",
      description:
        "Every listing gets AI-optimized, including structured content and LLMs.txt to keep your listings competitive.",
    },
    {
      icon: Zap,
      title: "Easy setup",
      description:
        "Connect your PMS, auto-populate listings, and launch in minutes with no technical expertise required.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="text-sm text-muted-foreground mb-2">Powerful technology</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Upsells everywhere are standard.
          </h2>
          <p className="text-xl text-muted-foreground mb-4">Others push add-ons, we include them.</p>
          <p className="text-lg font-semibold">Battle-tested technology. Built for operators, by operators.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted mb-4">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
