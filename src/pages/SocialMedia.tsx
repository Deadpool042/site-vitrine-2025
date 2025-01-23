import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/socialMediaIcon.svg",
  alt: "Icône de la page de la gestion des réseaux sociaux",
  width: 50
};

const subtitle = "Gestion des réseaux sociaux à Roanne et alentours";

const title = "Social Média";

const text =
  "À l’heure actuelle, la gestion des réseaux sociaux est devenue une priorité pour toute entreprise souhaitant développer sa visibilité, fidéliser sa clientèle et augmenter son chiffre d’affaires. Les plateformes comme Facebook, Instagram, LinkedIn et Twitter offrent des opportunités immenses pour atteindre un public large et engagé. Pour les entreprises locales à Roanne, il est essentiel de bien gérer sa présence sur les réseaux sociaux afin de toucher efficacement la clientèle locale et d’interagir avec elle.";

("C2 Projet Web, agence spécialisée dans le digital, propose des services de gestion des réseaux sociaux à Roanne et ses alentours, pour vous aider à maximiser votre impact en ligne tout en se concentrant sur votre activité principale.");

const hashtags =
  "#socialmedia #reseauxsociaux #facebook #instagram #linkedin #x #tiktok #comdigitale";

function SocialMedia() {
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

export default SocialMedia;
