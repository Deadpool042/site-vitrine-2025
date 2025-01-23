import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/appIcon.svg",
  alt: "Icône de la page Sites et applications",
  width: 50
};

const subtitle = "Création site web à Roanne et alentours";

const title = "Sites et applications";

const text =
  "À l’ère du numérique, la création d’un site web et d’une application mobile est un enjeu crucial pour les entreprises de toutes tailles à Roanne et alentours. De nombreuses entreprises locales cherchent à se digitaliser pour rester compétitives. Le C2 Projet Web offre des services spécialisés pour répondre à ces besoins, que ce soit pour la conception de sites vitrines, de boutiques en ligne ou d’applications mobiles sur mesure.";

const hashtags =
  "#site web #ux design #site vitrine #ecommerce #wordpress #surmesure #développementweb #applicationmobile #seo #hébergementmaintenance #mobilefirst";

function Site() {
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

export default Site;
