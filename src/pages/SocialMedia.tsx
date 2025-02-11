// import Banner from "@/components/ui/layout/Banner";

import MainLayout from "@/components/MainLayout";

import HeroComponent from "@/components/ui/layout/HeroComponent";
import SectionListItemComponent from "@/components/ui/layout/SectionListItemComponent";
import SectionSplitComponent from "@/components/ui/layout/SectionSplitComponent";
import { socialMediaData } from "@/datas/socialMediaData";
import { Helmet } from "react-helmet-async";

const SocialMedia: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.metaDescriptionContent}
        /> */}
      </Helmet>
      {/* <LayoutWrapper className="max-w-6xl mx-auto space-y-10"> */}
      <MainLayout>
        <HeroComponent data={socialMediaData.hero} />
        <SectionListItemComponent
          data={socialMediaData.cardSections || []}
          sectionIndex={0}
        />
        <SectionSplitComponent
          data={socialMediaData.splitSections || []}
          sectionIndex={0}
        />
        <SectionListItemComponent
          data={socialMediaData.cardSections || []}
          sectionIndex={1}
        />
      </MainLayout>
      {/* </LayoutWrapper> */}
    </>
  );
};

export default SocialMedia;
