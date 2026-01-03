import { Globe, TrendingUp, Shield } from "lucide-react"

interface SitesValuePropsProps {
  data?: {
    title?: string
    valueProps?: Array<{
      icon?: string
      title: string
      description: string
    }>
  }
}

export function SitesValueProps({ data }: SitesValuePropsProps) {
  const defaultValueProps = [
    {
      icon: "Globe",
      title: "Your website is your brand",
      description: "Deliver an experience that reflects your brand with a beautiful booking site.",
    },
    {
      icon: "TrendingUp",
      title: "Turn page views into bookings",
      description: "Trust us to continuously optimize for booking conversion so you don't have to.",
    },
    {
      icon: "Shield",
      title: "Checkout that guests trust",
      description: "Give yourself and your guests confidence with built-in security and verification.",
    },
  ]

  const valueProps = data?.valueProps || defaultValueProps

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "TrendingUp":
        return TrendingUp
      case "Shield":
        return Shield
      default:
        return Globe
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = getIcon(prop.icon)
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                <p className="text-sm text-muted-foreground">{prop.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
