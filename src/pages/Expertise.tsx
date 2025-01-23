import Banner from "@/components/ui/Banner";
import { Helmet } from "react-helmet-async";

const icon = {
  iconSrc: "/src/assets/icons/strategyIcon.svg",
  alt: "Icône de la page de la conseil et expertise en communication",
  width: 50
};

const subtitle = "Conseil et expertise en communication à Roanne et alentours";

const title = "Conseil et Expertise";

const text =
  "Pour opter pour un conseil en communication à Roanne et alentours avec C2 Projet Web ? Dans un monde où la communication est au cœur des relations entre les entreprises et leurs clients, maîtriser sa stratégie de communication est crucial pour se démarquer. Que vous soyez une petite entreprise locale à Roanne ou une organisation souhaitant renforcer sa notoriété dans les environs, une communication bien pensée peut faire toute la différence. C2 Projet Web, spécialisée dans la stratégie de communication digitale et traditionnelle, offre son expertise pour vous aider à structurer et optimiser votre message, améliorer votre image de marque, et toucher efficacement votre cible.";

const hashtags =
  "#Communication #StratégieDeCommunication #Marketing #CommunicationVisuelle #DigitalMarketing #SocialMedia #ContentMarketing #Branding #Storytelling #MarketingDigital";

function Expertise() {
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

export default Expertise;
