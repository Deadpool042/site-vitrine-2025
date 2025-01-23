import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/images/logoC2-bg-remove.webp",
  alt: "Icône de stratégie",
  width: 50
};

const subtitle =
  "C2 Projet Web : Votre agence de communication à Roanne et alentours";

const title = "C2 Projet Web";

const text =
  "Vous cherchez <strong>une agence de communication à Roanne et dans ses environs </strong>?  <strong>C2 Projet Web</strong> est l’expert qu’il vous faut pour développer votre image de marque et améliorer votre visibilité en ligne. Située à Roanne, notre agence propose une gamme complète de services pour vous aider à atteindre vos objectifs commerciaux grâce à des stratégies de communication efficaces.";

function Lagence() {
  return (
    <>
      <Helmet>
        <title>{subtitle}</title>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>
      <Banner
        iconSrc={icon.iconSrc}
        alt={icon.alt}
        width={icon.width}
        subtitle={subtitle}
        title={title}
        text={text}
      />
    </>
  );
}

export default Lagence;
