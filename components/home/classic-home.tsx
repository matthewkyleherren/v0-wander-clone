import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CategoryTabs } from "@/components/category-tabs"
import { PropertyGrid } from "@/components/property-grid"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { StickySearchBar } from "@/components/sticky-search-bar"
import { BottomTabBar } from "@/components/bottom-tab-bar"

interface ClassicHomeProps {
  properties?: any[] | null
}

export function ClassicHome({ properties }: ClassicHomeProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <StickySearchBar />
        <main className="pb-20 md:pb-0">
          <Hero />
          <CategoryTabs />
          <PropertyGrid properties={properties || undefined} />
          <Features />
        </main>
        <Footer />
        <div className="md:hidden">
          <BottomTabBar />
        </div>
      </div>
    </ThemeProvider>
  )
}