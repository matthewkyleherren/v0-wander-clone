import { ClassicHome } from "@/components/home/classic-home"
import { CossuiHome } from "@/components/cossui/home"
import { getProperties } from "@/lib/sanity/fetch"
import { getActiveUi } from "@/lib/ui-config"

export default async function Home() {
  let properties = null
  try {
    properties = await getProperties()
    console.log(
      "[v0] Properties from Sanity:",
      properties?.length,
      properties?.map((p) => p.name),
    )
  } catch (error) {
    console.error("[v0] Sanity error:", error)
  }

  const activeUi = await getActiveUi()

  if (activeUi === "cossui") {
    return <CossuiHome properties={properties || undefined} />
  }

  return <ClassicHome properties={properties || undefined} />
}
