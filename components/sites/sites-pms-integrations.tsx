export function SitesPMSIntegrations() {
  const pmsProviders = ["Hospitable", "Guesty", "Hostaway", "Lodgify", "OwnerRez", "Streamline", "MyVR", "Uplisting"]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-8">Works with every leading PMS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          {pmsProviders.map((provider, index) => (
            <div key={index} className="flex items-center justify-center h-16 text-muted-foreground font-medium">
              {provider}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Missing yours?{" "}
          <a href="#" className="text-foreground underline">
            Request it.
          </a>
        </p>
      </div>
    </section>
  )
}
