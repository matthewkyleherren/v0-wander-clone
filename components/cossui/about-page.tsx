import { Card } from "@/components/ui/card";

export function CossuiAbout() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top control surface bar */}
        <header className="border-b border-border pb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-primary/80">
              OffGrid Story Surface
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              The operating system for better stays.
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              How we&apos;re rethinking travel, hospitality, and the homes that connect them.
            </p>
          </div>
          <div className="text-xs text-muted-foreground space-y-1 md:text-right">
            <p>
              Global stays ·{" "}
              <span className="font-medium">Design‑led homes</span>
            </p>
            <p>Built for founders, teams, and families on the move.</p>
          </div>
        </header>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr),minmax(260px,1fr)]">
          <Card className="p-5 md:p-6 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Why OffGrid exists
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Travel is supposed to feel expansive. Instead, most stays feel like a gamble:
              inconsistent quality, confusing pricing, and endless scrolling through
              mediocre options. OffGrid exists to give you a new default — a curated network
              of homes that are beautiful, deeply functional, and ready for work or rest.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We pair design‑forward homes with a software mindset: clear standards,
              tight feedback loops, and relentless iteration. The result is a set of stays
              that feel familiar in all the right ways, and surprising in all the right ways.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-4 space-y-2 text-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Snapshot
              </p>
              <p className="font-semibold">A new layer for modern travel</p>
              <p className="text-muted-foreground">
                OffGrid sits between vacation rentals and hotels, combining the best of both:
                space, privacy, consistency, and on‑demand support.
              </p>
            </Card>
            <Card className="p-4 space-y-2 text-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                What we optimize for
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Homes that are better to live and work from</li>
                <li>• Interfaces that feel calm, fast, and obvious</li>
                <li>• Service that behaves more like a product team</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Pillars */}
        <Card className="p-5 md:p-6 space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">
            How we design the OffGrid experience
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Travel, re‑architected
              </p>
              <p className="text-muted-foreground">
                We look at each stay as a system: the home, the neighborhood, connectivity,
                comfort, and the small details you only notice when they&apos;re wrong.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Product thinking
              </p>
              <p className="text-muted-foreground">
                We treat operations, service, and software as a single product. Feedback from
                guests loops directly into how we design homes and tools.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Human hospitality
              </p>
              <p className="text-muted-foreground">
                Behind every stay is a team of people who care about the details: linens,
                lighting, acoustics, and the feel of arriving at a place built for you.
              </p>
            </div>
          </div>
        </Card>

        {/* Timeline style */}
        <Card className="p-5 md:p-6 space-y-5 text-sm">
          <h2 className="text-lg md:text-xl font-semibold">
            Where we&apos;re headed
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-px bg-border" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Today
                </p>
                <p className="text-muted-foreground">
                  A growing network of design‑driven homes with consistent standards, 24/7
                  concierge, and thoughtful work setups.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-px bg-border" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Next
                </p>
                <p className="text-muted-foreground">
                  Deeper integrations between the digital layer and the physical home:
                  smarter arrivals, richer guidance, and more personalized stays.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-1 h-5 w-px bg-border" />
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Long term
                </p>
                <p className="text-muted-foreground">
                  A global mesh of homes that feel like an extension of your own — wherever
                  you open your laptop or drop your bags.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}