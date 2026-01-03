import Image from "next/image"
import { Check, X } from "lucide-react"

interface ComparisonSectionProps {
  propertyName: string
  location: string
}

const features = [
  "Quality and consistency",
  "Space",
  "Privacy",
  "Transparent pricing",
  "Hotel-grade cleaning",
  "Smart-home tech",
  "24/7 concierge",
  "Modern workstations",
  "Inspiring views",
]

export function ComparisonSection({ propertyName, location }: ComparisonSectionProps) {
  return (
    <section className="py-12 border-b border-border">
      <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">UNMATCHED VALUE</p>
      <h2 className="text-xl font-semibold text-foreground mb-8">See how {propertyName} compares to nearby hotels</h2>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 pr-4 font-medium text-foreground">Features</th>
              <th className="text-center py-4 px-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-secondary">
                    <Image src="/luxury-villa-exterior.png" alt={propertyName} fill className="object-cover" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{propertyName}</span>
                  <span className="text-xs text-muted-foreground">Property</span>
                </div>
              </th>
              <th className="text-center py-4 pl-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-xs">Hotel</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">A hotel in {location}</span>
                  <span className="text-xs text-muted-foreground">Hotel</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-border">
                <td className="py-4 pr-4 text-sm text-foreground">{feature}</td>
                <td className="py-4 px-4 text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="py-4 pl-4 text-center">
                  {index < 3 ? (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  ) : (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground mt-4">
        Feature comparison between {propertyName} and hotels in {location}
      </p>
    </section>
  )
}
