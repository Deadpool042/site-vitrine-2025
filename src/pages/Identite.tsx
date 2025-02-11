// // import Banner from "@/components/ui/layout/Banner";
// import LayoutPageContent from "@/components/ui/LayoutPageContent";
// import {
//   articles,
//   hashtags,
//   icon,
//   listItem2,
//   section1,
//   section1ListItem,
//   section2,
//   section3,
//   subtitle,
//   text,
//   title
// } from "@/lib/pageDatas/IdentiteData";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import SectionListItemComponent from "@/components/ui/layout/SectionListItemComponent";
import SectionTabComponent from "@/components/ui/layout/SectionTabComponent";
import SingleSectionComponent from "@/components/ui/layout/SingleSectionComponent";
import { brandingData } from "@/datas/brandingData";
import { Helmet } from "react-helmet-async";

const Identite: React.FC = () => {
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
        <HeroComponent data={brandingData.hero} />
        <SingleSectionComponent data={brandingData.singleSections || []} />
        <SectionTabComponent data={brandingData.singleSections || []} />
        <SectionListItemComponent
          data={brandingData.cardSections || []}
          sectionIndex={0}
        />
      </MainLayout>
      {/* <Banner
        iconSrc={icon.iconSrc}
        alt={icon.alt}
        width={icon.width}
        subtitle={subtitle}
        title={title}
        text={text}
        hashtags={hashtags}
      /> */}
      {/* <LayoutPageContent
        section1={section1}
        section1ListItem={section1ListItem}
        section2={section2}
        articles={articles}
        section3={section3}
        listItem2={listItem2}
      /> */}
    </>
  );
};

export default Identite;
