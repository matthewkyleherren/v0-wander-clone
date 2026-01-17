import { prisma } from "@/lib/db"

export type UiVariant = "classic" | "cossui"

const ACTIVE_UI_KEY = "active_ui"
const FALLBACK_UI: UiVariant = "classic"

export async function getActiveUi(): Promise<UiVariant> {
  try {
    const setting = await prisma.siteSettings.findUnique({
      where: { key: ACTIVE_UI_KEY },
    })

    if (!setting) {
      return FALLBACK_UI
    }

    if (setting.value === "classic" || setting.value === "cossui") {
      return setting.value
    }

    return FALLBACK_UI
  } catch {
    return FALLBACK_UI
  }
}

export async function setActiveUi(variant: UiVariant): Promise<void> {
  await prisma.siteSettings.upsert({
    where: { key: ACTIVE_UI_KEY },
    create: {
      key: ACTIVE_UI_KEY,
      value: variant,
    },
    update: {
      value: variant,
    },
  })
}