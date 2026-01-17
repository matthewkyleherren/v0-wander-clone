import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PropertyGrid } from "@/components/property-grid"

interface CossuiHomeProps {
  properties?: any[] | null
}

export function CossuiHome({ properties }: CossuiHomeProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />

        <main className="flex-1 flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="hidden lg:flex lg:w-72 xl:w-80 border-r border-border bg-muted/40 flex-col">
            <div className="px-4 py-6 border-b border-border">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Dashboard
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Manage your OffGrid experience from a single place.
              </p>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1 text-sm">
              <button className="w-full flex items-center justify-between rounded-md px-3 py-2 bg-background text-foreground shadow-sm">
                <span className="font-medium">Overview</span>
                <span className="text-xs text-muted-foreground">Active</span>
              </button>
              <button className="w-full flex items-center justify-between rounded-md px-3 py-2 text-muted-foreground hover:bg-muted/80 transition">
                <span>Trips</span>
                <span className="text-xs">Soon</span>
              </button>
              <button className="w-full flex items-center justify-between rounded-md px-3 py-2 text-muted-foreground hover:bg-muted/80 transition">
                <span>Favorites</span>
              </button>
              <button className="w-full flex items-center justify-between rounded-md px-3 py-2 text-muted-foreground hover:bg-muted/80 transition">
                <span>Account</span>
              </button>
            </nav>
            <div className="px-4 py-4 border-t border-border text-xs text-muted-foreground">
              <p className="font-medium mb-1">Theme</p>
              <p>Use the theme switcher in the header to toggle light and dark modes.</p>
            </div>
          </aside>

          {/* Main content */}
          <section className="flex-1 flex flex-col">
            {/* Top bar */}
            <div className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-10">
              <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex items-center gap-3 justify-between">
                <div className="flex flex-col">
                  <p className="text-xs font-medium text-primary/80 uppercase tracking-wide">
                    OffGrid Control Surface
                  </p>
                  <h1 className="text-lg md:text-xl font-semibold">
                    Find your next stay, faster.
                  </h1>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <Button variant="outline" size="sm">
                    Upcoming trips
                  </Button>
                  <Button size="sm">Start a search</Button>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="max-w-6xl mx-auto px-4 lg:px-8 py-6 space-y-6">
              {/* Summary cards */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="p-4 flex flex-col gap-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Handpicked homes
                  </p>
                  <p className="text-2xl font-semibold">
                    {properties?.length ? properties.length : "Over 50"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Every home is vetted for design, comfort, and work‑from‑anywhere readiness.
                  </p>
                </Card>
                <Card className="p-4 flex flex-col gap-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Response time
                  </p>
                  <p className="text-2xl font-semibold">Under 5m</p>
                  <p className="text-xs text-muted-foreground">
                    24/7 concierge for changes, recommendations, and on‑trip support.
                  </p>
                </Card>
                <Card className="p-4 flex flex-col gap-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Flex stays
                  </p>
                  <p className="text-2xl font-semibold">Work + play</p>
                  <p className="text-xs text-muted-foreground">
                    Filter by work setups, bandwidth, and collaboration spaces in each home.
                  </p>
                </Card>
              </div>

              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold">Explore OffGrid homes</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    A grid‑first view with filters and quick context, inspired by CoSSUI layouts.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Button variant="outline" size="sm">
                    Any region
                  </Button>
                  <Button variant="outline" size="sm">
                    Great for teams
                  </Button>
                  <Button variant="outline" size="sm">
                    With hot tub
                  </Button>
                </div>
              </div>

              {/* Property grid in a panel */}
              <Card className="p-3 md:p-4">
                <PropertyGrid properties={properties || undefined} />
              </Card>

              {/* Bottom CTA */}
              <Card className="p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 dark:from-primary/10 dark:via-primary/15 dark:to-primary/10 border-primary/20">
                <div className="space-y-1">
                  <h3 className="text-base md:text-lg font-semibold">
                    Not sure where to start?
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Tell us how you like to travel and we&apos;ll assemble a short list of OffGrid homes for you.
                  </p>
                </div>
                <Button size="sm" className="w-full md:w-auto">
                  Talk to concierge
                </Button>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}