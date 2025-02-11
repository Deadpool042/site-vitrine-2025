// import Banner from "@/components/ui/layout/Banner";
// import LayoutPageContent from "@/components/ui/LayoutPageContent";
// import {
//   articles,
//   articles2,
//   carrousel,
//   hashtags,
//   images,
//   imagesSection4,
//   listItem,
//   listItem2,
//   section1,
//   section2,
//   section3,
//   section4,
//   subtitle,
//   text,
//   title
// } from "@/lib/pageDatas/SitesVitrineData";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { siteVitrineData } from "@/datas/siteVitrineData";
import { Helmet } from "react-helmet-async";
// import logoAPP from "@/assets/icons/appIcon.svg";

// const icon = {
//   iconSrc: logoAPP,
//   alt: "Icône de la page Sites et applications",
//   width: 50
// };

function SiteVitrine() {
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
        <HeroComponent data={siteVitrineData.hero} />
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
        listItem={listItem}
        section2={section2}
        articles={articles}
        images={images}
        section3={section3}
        listItem2={listItem2}
        section4={section4}
        articles2={articles2}
        imagesSection4={imagesSection4}
        carrousel={carrousel}
      /> */}
    </>
  );
}

export default SiteVitrine;
