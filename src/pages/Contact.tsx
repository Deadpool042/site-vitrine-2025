import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/strategyIcon.svg",
  alt: "Icône de la page de la conseil et expertise en communication",
  width: 50
};

const subtitle = "Une équipe à votre écoute";

const title = "Contact & Devis";

function Contact() {
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

export default Contact;
