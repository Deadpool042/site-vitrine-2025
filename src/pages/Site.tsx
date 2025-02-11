import { Helmet } from "react-helmet-async";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { appData } from "@/datas/appData";
import MainLayout from "@/components/MainLayout";
import SectionListItemComponent from "@/components/ui/layout/SectionListItemComponent";
import SectionSplitComponent from "@/components/ui/layout/SectionSplitComponent";

function Site() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>

      <MainLayout>
        <HeroComponent data={appData.hero} />
        <SectionListItemComponent
          data={appData.cardSections || []}
          sectionIndex={0}
        />
        <SectionSplitComponent
          data={appData.splitSections || []}
          sectionIndex={0}
        />
        <SectionListItemComponent
          data={appData.cardSections || []}
          sectionIndex={1}
        />
        <SectionSplitComponent
          data={appData.splitSections || []}
          sectionIndex={1}
        />
      </MainLayout>
    </>
  );
}

export default Site;
