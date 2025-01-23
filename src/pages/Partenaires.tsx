import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/creations.svg",
  alt: "Icône de la page de la conseil et expertise en communication",
  width: 50
};

const subtitle = "Ils sont dans la Team C2 Projet Web";

const title = "Nos Créations Originales";

function Partenaires() {
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
      />
    </>
  );
}

export default Partenaires;
