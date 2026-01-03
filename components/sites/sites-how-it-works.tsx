import Image from "next/image"

export function SitesHowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Connect your PMS",
      description: "Use OAuth or an API key for a seamless, one-click connection.",
      image: "/pms-connection-interface.jpg",
    },
    {
      number: "2",
      title: "Auto-populate listings",
      description: "Your listings, photos, pricing and availability flow in automatically.",
      image: "/listings-auto-populate-flow.jpg",
    },
    {
      number: "3",
      title: "Publish instantly",
      description: "Launch with your domain, integrated payments and built-in analytics.",
      image: "/custom-domain-publishing.jpg",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-muted-foreground mb-2">Easy setup</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">Start in minutes.</h2>
          <p className="text-xl text-muted-foreground">Take control of your bookings today.</p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-4xl font-bold text-muted-foreground mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border border-border ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
