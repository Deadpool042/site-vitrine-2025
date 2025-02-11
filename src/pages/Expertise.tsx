// import Banner from "@/components/ui/layout/Banner";

import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import SectionListItemComponent from "@/components/ui/layout/SectionListItemComponent";
import SectionSplitComponent from "@/components/ui/layout/SectionSplitComponent";
import { expertiseData } from "@/datas/expertiseData";
import { Helmet } from "react-helmet-async";

const Expertise: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>""</title>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>
      {/* <Banner
        iconSrc={icon.iconSrc}
        alt={icon.alt}
        width={icon.width}
        subtitle={subtitle}
        title={title}
        text={text}
        hashtags={hashtags}
      /> */}
      <MainLayout>
        <HeroComponent data={expertiseData.hero} />
        <SectionListItemComponent
          data={expertiseData.cardSections || []}
          sectionIndex={0}
        />
        <SectionSplitComponent
          data={expertiseData.splitSections || []}
          sectionIndex={0}
        />
        <SectionListItemComponent
          data={expertiseData.cardSections || []}
          sectionIndex={1}
        />
      </MainLayout>
      {/* <LayoutPageContent
        section1={section1}
        listItem={listItem}
        section2={section2}
        articles={articles}
        images={images}
        section3={section3}
        listItem2={listItem2}
        articles2={articles2}
      /> */}
    </>
  );
};

export default Expertise;
