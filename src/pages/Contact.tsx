// import Banner from "@/components/ui/layout/Banner";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { contactData } from "@/datas/contactData";
import { Helmet } from "react-helmet-async";
// import logoStrategyIcon from "@/assets/icons/strategyIcon.svg";

// const icon = {
//   iconSrc: logoStrategyIcon,
//   alt: "Icône de la page de la conseil et expertise en communication",
//   width: 50
// };

// const subtitle = "Une équipe à votre écoute";

// const title = "Contact & Devis";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>""</title>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>
      <MainLayout>
        <HeroComponent data={contactData.hero} />
      </MainLayout>
      {/* <Banner
        iconSrc={icon.iconSrc}
        alt={icon.alt}
        width={icon.width}
        subtitle={subtitle}
        title={title}
      /> */}
    </>
  );
};

export default Contact;
