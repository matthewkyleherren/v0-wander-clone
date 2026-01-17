import { ClassicAbout } from "@/components/about/classic-about";
import { CossuiAbout } from "@/components/cossui/about-page";
import { getActiveUi } from "@/lib/ui-config";

export default async function AboutPage() {
  const activeUi = await getActiveUi();

  if (activeUi === "cossui") {
    return <CossuiAbout />;
  }

  return <ClassicAbout />;
}
