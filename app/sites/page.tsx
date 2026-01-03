import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SitesHero } from "@/components/sites/sites-hero"
import { SitesValueProps } from "@/components/sites/sites-value-props"
import { SitesBranding } from "@/components/sites/sites-branding"
import { SitesConversions } from "@/components/sites/sites-conversions"
import { SitesCheckout } from "@/components/sites/sites-checkout"
import { SitesPMSIntegrations } from "@/components/sites/sites-pms-integrations"
import { SitesAudit } from "@/components/sites/sites-audit"
import { SitesTechnology } from "@/components/sites/sites-technology"
import { SitesHowItWorks } from "@/components/sites/sites-how-it-works"
import { SitesPricing } from "@/components/sites/sites-pricing"
import { SitesCTA } from "@/components/sites/sites-cta"
import { getSitesPage } from "@/lib/sanity/fetch"

export default async function SitesPage() {
  const sitesData = await getSitesPage()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-14">
          <SitesHero data={sitesData?.hero} />
          <SitesValueProps data={sitesData?.valueProps} />
          <SitesBranding data={sitesData?.branding} />
          <SitesConversions data={sitesData?.conversions} />
          <SitesCheckout data={sitesData?.checkout} />
          <SitesPMSIntegrations data={sitesData?.pmsIntegrations} />
          <SitesAudit data={sitesData?.audit} />
          <SitesTechnology data={sitesData?.technology} />
          <SitesHowItWorks data={sitesData?.howItWorks} />
          <SitesPricing data={sitesData?.pricing} />
          <SitesCTA data={sitesData?.cta} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
