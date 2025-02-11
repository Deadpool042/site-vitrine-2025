// import Banner from "@/components/ui/layout/Banner";
// import LayoutPageContent from "@/components/ui/LayoutPageContent";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import SectionListItemComponent from "@/components/ui/layout/SectionListItemComponent";
import SectionTabComponent from "@/components/ui/layout/SectionTabComponent";
import { referencementData } from "@/datas/referencementData";
import { Helmet } from "react-helmet-async";

function Referencement() {
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
        <HeroComponent data={referencementData.hero} />
        <SectionListItemComponent
          data={referencementData.cardSections || []}
          sectionIndex={0}
        />
        <SectionTabComponent data={referencementData.singleSections || []} />
        <SectionListItemComponent
          data={referencementData.cardSections || []}
          sectionIndex={1}
        />
      </MainLayout>
    </>
  );
}

export default Referencement;
