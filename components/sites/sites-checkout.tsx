import Image from "next/image"

export function SitesCheckout() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="text-sm text-muted-foreground mb-2">Effortless checkout</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">OffGrid Checkout.</h2>
          <p className="text-xl text-muted-foreground">Our flow, now yours.</p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Custom branding with your logo and colors",
            "Trusted checkout with secure payment options",
            "Security signals with identity verification and fraud protection",
            "Detailed pricing breakdown with no hidden fees",
          ].map((feature, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border">
              <Image src={`/.jpg?height=800&width=600&query=${feature}`} alt={feature} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm text-white font-medium">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
