import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SitesHero } from "@/components/sites/sites-hero";
import { SitesValueProps } from "@/components/sites/sites-value-props";
import { SitesBranding } from "@/components/sites/sites-branding";
import { SitesConversions } from "@/components/sites/sites-conversions";
import { SitesCheckout } from "@/components/sites/sites-checkout";
import { SitesPMSIntegrations } from "@/components/sites/sites-pms-integrations";
import { SitesAudit } from "@/components/sites/sites-audit";
import { SitesTechnology } from "@/components/sites/sites-technology";
import { SitesHowItWorks } from "@/components/sites/sites-how-it-works";
import { SitesPricing } from "@/components/sites/sites-pricing";
import { SitesCTA } from "@/components/sites/sites-cta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CossuiSitesPageProps {
  data: any;
}

export function CossuiSitesPage({ data }: CossuiSitesPageProps) {
  const sitesData = data;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 lg:px-8 py-8 space-y-6">
          {/* Top control surface bar */}
          <div className="flex flex-col gap-2 border-b border-border pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-primary/80">
                OffGrid Sites Surface
              </p>
              <h1 className="text-xl md:text-2xl font-semibold">
                Turn your site into a booking engine.
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                An opinionated stack for branded, high‑converting direct booking sites.
              </p>
            </div>
            <div className="flex gap-2 text-xs md:text-sm md:items-center">
              <Button variant="outline" size="sm">
                View audit example
              </Button>
              <Button size="sm">Talk to our team</Button>
            </div>
          </div>

          {/* Main panel with sections inside */}
          <Card className="p-4 md:p-6 space-y-10">
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
          </Card>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}