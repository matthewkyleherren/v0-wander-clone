import Image from "next/image"

interface SitesConversionsProps {
  data?: {
    eyebrow?: string
    title?: string
    subtitle?: string
    features?: Array<{
      title: string
      description: string
      image: string
    }>
  }
}

export function SitesConversions({ data }: SitesConversionsProps) {
  const defaultFeatures = [
    {
      title: "Seamless search and filters",
      description: "Make it easy for guests to discover the perfect property in seconds",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Showcase your homes at their best",
      description: "Stunning visuals, thoughtful details - everything guests need to feel excited.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Transparent pricing and availability",
      description: "Transparency at every step builds confidence and trust.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const features = data?.features || defaultFeatures

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="text-sm text-muted-foreground mb-2">{data?.eyebrow || "Smarter conversion"}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {data?.title || "More bookings. More earnings."}
          </h2>
          <p className="text-xl text-muted-foreground">{data?.subtitle || "Continuous optimization, built in."}</p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border border-border ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
