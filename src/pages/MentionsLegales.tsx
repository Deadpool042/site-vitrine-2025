import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { mentionLegalesData } from "@/datas/mentionsLegalesData";
import { Helmet } from "react-helmet-async";

const MentionsLegales: React.FC = () => {
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
        <HeroComponent data={mentionLegalesData.hero} />
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
    </>
  );
};

export default MentionsLegales;
