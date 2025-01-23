import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/brandIdentityIcon.svg",
  alt: "Icône de la page de la conseil et expertise en communication",
  width: 50
};

const subtitle = "Agence de Branding à Roanne et alentours";

const title = "Identité de marque";

const text =
  "Le branding, ou l’art de construire une identité de marque forte, est un élément clé pour différencier votre entreprise dans un marché concurrentiel. À Roanne et ses alentours, C2 Projet Web vous accompagne dans le développement d’une image de marque cohérente et mémorable, qui reflète vos valeurs et capte l’attention de vos clients. Que vous soyez une start-up, une PME ou une grande entreprise, une stratégie de branding bien pensée est essentielle pour construire une relation durable avec votre audience.";

const hashtags = "#seo #referencement #web #digital #communication";

function Identite() {
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

export default Identite;
