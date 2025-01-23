import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/studioIcon.svg",
  alt: "Icône de la page de la conseil et expertise en communication",
  width: 50
};

const subtitle = "Agence de design à Roanne et alentours";

const title = "Studio créa et design";

const text =
  "Que peut apporter une agence design à Roanne ? Le design joue un rôle crucial dans l’image de marque d’une entreprise. Qu’il s’agisse de créer un site web attrayant, de concevoir une identité visuelle forte ou de développer des supports de communication efficaces, un bon design peut faire toute la différence pour capter l’attention de vos clients. À Roanne, C2 Projet Web se positionne comme une agence de design incontournable, offrant des solutions créatives adaptées aux besoins des entreprises locales et des alentours.";

const hashtags =
  "#creation #visuel #plaquette #brochure #creationoriginale #studio #video #photo #film";

function Studio() {
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

export default Studio;
