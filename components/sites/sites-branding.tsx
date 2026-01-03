import Image from "next/image"

export function SitesBranding() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="text-sm text-muted-foreground mb-2">Elevated branding</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Elevate your brand, not theirs.
          </h2>
          <p className="text-xl text-muted-foreground">Beautifully simple, undeniably yours.</p>
        </div>

        {/* Screenshot grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border">
            <Image src="/property-listing-page-with-custom-branding.jpg" alt="Property page" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border">
            <Image src="/landing-page-with-custom-branding.jpg" alt="Landing page" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border">
            <Image src="/checkout-page-with-custom-branding.jpg" alt="Checkout page" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Make your brand the one guests remember.</h3>
          <p className="text-muted-foreground">
            Built to showcase. Designed to impress. When guests book through a website that feels polished, trustworthy,
            and distinctly yours, they associate their stay with your name. They're then far more likely to re-book,
            return, and refer.
          </p>
        </div>
      </div>
    </section>
  )
}
