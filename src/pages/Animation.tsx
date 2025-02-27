// import Banner from "@/components/ui/layout/Banner";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { animationData } from "@/datas/animiationData";
import { Helmet } from "react-helmet-async";
// import logoStrategyIcon from "@/assets/icons/strategyIcon.svg";

// const icon = {
//   iconSrc: logoStrategyIcon,
//   alt: "Icône de stratégie",
//   width: 50
// };

// const subtitle =
//   "Animation d'événements à Roanne et alentours avec C2 Projet Web";

// const title = "Faites briller votre entreprise";

// const text =
//   "Pour que votre événement soit mémorable, l’animation joue un rôle essentiel. Chez C2 Projet Web, dirigée par Christophe Puleri, nous sommes spécialisés dans l’animation d’événements à Roanne et dans ses alentours. Que ce soit pour un événement d’entreprise ou d’une collectivité, notre objectif est de créer une atmosphère engageante et divertissante, adaptée à vos besoins et à ceux de vos invités.";

// const hashtags =
//   "#event #animation #seminaire #entreprise #organisation #logistique";
const Animation: React.FC = () => {
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
        <HeroComponent data={animationData.hero} />
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

export default Animation;
