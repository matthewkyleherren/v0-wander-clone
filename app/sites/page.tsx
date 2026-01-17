import { ClassicSitesPage } from "@/components/sites/classic-sites-page"
import { CossuiSitesPage } from "@/components/cossui/sites-page"
import { getSitesPage } from "@/lib/sanity/fetch"
import { getActiveUi } from "@/lib/ui-config"

export default async function SitesPage() {
  const sitesData = await getSitesPage()
  const activeUi = await getActiveUi()

  if (activeUi === "cossui") {
    return <CossuiSitesPage data={sitesData} />
  }

  return <ClassicSitesPage data={sitesData} />
}
