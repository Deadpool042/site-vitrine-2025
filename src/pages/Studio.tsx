// import Banner from "@/components/ui/layout/Banner";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import SectionListItemComponent from "@/components/ui/layout/SectionListItemComponent";
import SectionSplitComponent from "@/components/ui/layout/SectionSplitComponent";
import { studioData } from "@/datas/studioData";
import { Helmet } from "react-helmet-async";

function Studio() {
  return (
    <>
      <Helmet>
        {/* <title>{subtitle}</title> */}
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>
      <MainLayout>
        <HeroComponent data={studioData.hero} />
        <SectionListItemComponent
          data={studioData.cardSections || []}
          sectionIndex={0}
        />
        <SectionSplitComponent
          data={studioData.splitSections || []}
          sectionIndex={0}
        />
        <SectionListItemComponent
          data={studioData.cardSections || []}
          sectionIndex={1}
        />
      </MainLayout>
    </>
  );
}

export default Studio;
