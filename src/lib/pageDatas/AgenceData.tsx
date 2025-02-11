import logoAPP from "@/assets/icons/appIcon.svg";
import logoSocialMedia from "@/assets/icons/socialMediaIcon.svg";
import logoStrategyIcon from "@/assets/icons/strategyIcon.svg";
import logoStudioIcon from "@/assets/icons/studioIcon.svg";
import logoSEO from "@/assets/icons/seoIcon.svg";
import logoBranding from "@/assets/icons/brandIdentityIcon.svg";
import logoC2 from "@/assets/icons/logoC2.webp";

export const Section1 = {
  title: "C2 Projet Web",
  subtitle:
    "C2 Projet Web : Votre agence de communication à Roanne et alentours",
  paragraph:
    "Vous cherchez <strong>une agence de communication à Roanne et dans ses environs </strong>?  <strong>C2 Projet Web</strong> est l’expert qu’il vous faut pour développer votre image de marque et améliorer votre visibilité en ligne. Située à Roanne, notre agence propose une gamme complète de services pour vous aider à atteindre vos objectifs commerciaux grâce à des stratégies de communication efficaces.",
  icon: {
    iconSrc: logoC2,
    alt: "Icône de stratégie",
    width: 50
  }
};

export const Section2 = {
  paragraph:
    "Située au bourg de Villerest à quelques kilomètres de Roanne, l’agence de communication <strong>C2 Projet Web</strong> se distingue par sa singularité et les expertises nombreuses qu’elle propose.",
  googleMapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.8808122177197!2d4.035602277294862!3d45.99360897108756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4054f4a3ae65b%3A0x5b636fceaaf234f5!2s4%20Pl.%20Jules%20Rabourdin%2C%2042300%20Villerest!5e0!3m2!1sfr!2sfr!4v1738590202650!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrad'
};

export const Section3 = {
  title: "Pourquoi choisir C2 Projet Web ?",
  paragraph:
    "<strong>C2 Projet Web</strong> se distingue par son expertise en communication numérique et son approche personnalisée. Nous travaillons avec des entreprises de toutes tailles dans la région de Roanne et ses environs pour offrir des solutions sur mesure qui répondent à leurs besoins spécifiques."
};

export const Section4 = {
  title:
    "Nos <span class='bg-primary-color p-2 rounded-md text-black'>Expertises</span>",
  listItems: [
    {
      icon: logoAPP,
      title: "Sites & applis",
      paragraph:
        "Conception de sites web modernes (vitrines ou e-commerce), applications, totalement sur-mesure et responsives qui reflètent votre identité de marque.",
      href: "/creation-site-web-roanne/"
    },
    {
      icon: logoSocialMedia,
      title: "Réseaux sociaux",
      paragraph:
        "Stratégies de contenu pour engager votre audience et développer votre communauté en ligne.",
      href: "/gestion-reseaux-sociaux-roanne/"
    },
    {
      icon: logoStrategyIcon,
      title: "Conseil & stratégie",
      paragraph:
        "La réussite de votre projet dépend en premier lieu d’une excellente connaissance de votre marché, de la stratégie de vos concurrents, du comportement de vos cibles (prospects, clients, collaborateurs…).",
      href: "/conseil-communication-roanne/"
    },
    {
      icon: logoStudioIcon,
      title: "Studio",
      paragraph:
        "Création de catalogues, affiches, flyers, cartes de visite, logo, vidéos, webdesign...Soyez visible, comme vous le souhaitez !",
      href: "/agence-design-graphique-a-roanne/"
    },
    {
      icon: logoSEO,
      title: "Référencement & seo",
      paragraph:
        "Vous pouvez avoir la marque la plus impactante mais sans investissement pour vous rendre visible, c’est comme créer une boutique magnifique en plein milieu du désert.",
      href: "/communication-digitale-seo-roanne/"
    },
    {
      icon: logoBranding,
      title: "Identité de marque",
      paragraph:
        "Le branding ou identité de marque est la traduction visuelle de l’ADN de votre marque avec un logo unique notamment !",
      href: "/identite-de-marque/"
    }
  ]
};
