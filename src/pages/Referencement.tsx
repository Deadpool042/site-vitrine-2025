import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/seoIcon.svg",
  alt: "Icône de la page de la conseil et expertise en communication",
  width: 50
};

const subtitle = "Agence de communication digitale et SEO à Roanne";

const title = "Référencement & SEO";

const text =
  "Pourquoi avoir une agence de communication digitale et SEO à Roanne et alentours ? Dans le monde digital d’aujourd’hui, la visibilité en ligne est essentielle pour assurer la croissance et le succès d’une entreprise. Que vous soyez une petite entreprise locale à Roanne ou une organisation plus établie, une stratégie de communication digitale efficace, couplée à un bon référencement SEO, vous permet de vous démarquer et d’attirer de nouveaux clients. C2 Projet Web, agence spécialisée en communication digitale à Roanne, vous accompagne pour optimiser votre présence en ligne et améliorer votre positionnement sur les moteurs de recherche.";

const hashtags = "#seo #referencement #web #digital #communication";

function Referencement() {
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
        hashtags={hashtags}
      />
    </>
  );
}

export default Referencement;
