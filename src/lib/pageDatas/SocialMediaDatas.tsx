import {
  CircleCheck,
  CornerRightUp,
  Eye,
  Handshake,
  Headphones,
  MessagesSquare,
  MousePointer2,
  Pin
} from "lucide-react";
import logoSocialMedia from "@/assets/icons/socialMediaIcon.svg";

// Meta Head
export const meta = {
  title: "Gestion des réseaux sociaux à Roanne et alentours",
  metaDescriptionContent: "Description de la page"
};
//Banner
export const icon = {
  iconSrc: logoSocialMedia,
  alt: "Icône de la page de la gestion des réseaux sociaux",
  width: 50
};

export const subtitle = "Gestion des réseaux sociaux à Roanne et alentours";

export const title = "Social Média";

export const text =
  "À l’heure actuelle, la gestion des réseaux sociaux est devenue une priorité pour toute entreprise souhaitant développer sa visibilité, fidéliser sa clientèle et augmenter son chiffre d’affaires. Les plateformes comme Facebook, Instagram, LinkedIn et Twitter offrent des opportunités immenses pour atteindre un public large et engagé. Pour les entreprises locales à Roanne, il est essentiel de bien gérer sa présence sur les réseaux sociaux afin de toucher efficacement la clientèle locale et d’interagir avec elle.";

("C2 Projet Web, agence spécialisée dans le digital, propose des services de gestion des réseaux sociaux à Roanne et ses alentours, pour vous aider à maximiser votre impact en ligne tout en se concentrant sur votre activité principale.");

export const hashtags =
  "#socialmedia #reseauxsociaux #facebook #instagram #linkedin #x #tiktok #comdigitale";
//Content
//SECTION 1 TITLE
export const section1 = {
  title:
    "Pourquoi la gestion des réseaux sociaux est-elle cruciale pour les entreprises à Roanne et alentours ?"
};
// SECTION 1 - LIST ITEM 1
export const listItem = [
  {
    icon: (
      <Eye
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Visilité accrue",
    text: "Avec une présence active sur les réseaux sociaux, vous pouvez toucher un large public local et améliorer la notoriété de votre marque."
  },
  {
    icon: (
      <MessagesSquare
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Interaction avec la communauté",
    text: "Les réseaux sociaux permettent de dialoguer directement avec vos clients, recueillir des avis, et répondre à leurs questions en temps réel."
  },

  {
    icon: (
      <CornerRightUp
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Amélioration du référencement (SEO social)",
    text: "Les signaux sociaux (interactions, partages, mentions) peuvent indirectement influencer votre positionnement dans les moteurs de recherche, améliorant ainsi votre visibilité en ligne."
  },
  {
    icon: (
      <Pin
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Publicité ciblée",
    text: "Les plateformes comme Facebook et Instagram permettent de cibler des audiences locales avec une grande précision, ce qui est parfait pour toucher des clients potentiels autour de Roanne."
  },
  {
    icon: (
      <Handshake
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Fidélisation des clients",
    text: "En restant actif sur les réseaux sociaux, vous maintenez un lien constant avec vos clients, en partageant des actualités, des promotions, et en répondant à leurs besoins."
  }
];

// SECTION 2 - ARTICLES
export const section2 = {
  title:
    " Les services de gestion des réseaux sociaux offerts par C2 Projet Web",
  paragraphe:
    "<strong>C2 Projet Web</strong> propose une gestion complète de vos réseaux sociaux pour maximiser votre présence en ligne tout en vous concentrant sur votre activité principale. Voici quelques-uns des services que nous proposons :"
};

export const articles = [
  {
    title: "1. Stratégie de contenu",
    paragraphe:
      "Chaque entreprise a besoin d’une stratégie de contenu adaptée à son audience. <strong>C2 Projet Web</strong> vous aide à définir les types de contenus à publier (photos, vidéos, articles, infographies) et à choisir les bons moments pour les diffuser.",
    listItem: [
      "<strong>Calendrier éditorial: </strong> Nous mettons en place un planning de publication régulier pour assurer une présence continue sur les réseaux sociaux.",

      "<strong>Création de contenu visuel: </strong> Nos graphistes créent des visuels attrayants et cohérents avec votre image de marque pour maximiser l’engagement."
    ]
  },
  {
    title: " 2. Gestion des publications et de l’interaction",
    paragraphe:
      "Publier régulièrement est essentiel pour maintenir l’intérêt de votre audience. Nous nous chargeons de :",
    listItem: [
      "<strong>Publication régulière: </strong> Que ce soit des posts d’actualité, des offres spéciales ou des événements, nous veillons à ce que votre page reste active et intéressante.",

      "<strong>Gestion des interactions: </strong>Répondre aux commentaires, messages et avis pour maintenir un lien avec votre communauté."
    ]
  },
  {
    title: "3. Publicité sur les réseaux sociaux (Social Ads)",
    paragraphe:
      "La publicité sur les réseaux sociaux est un excellent moyen de promouvoir vos produits ou services auprès d’une audience ciblée.",
    listItem: [
      "<strong>Campagnes Facebook Ads et Instagram Ads:</strong> Nous gérons vos campagnes publicitaires en définissant une audience locale à Roanne, en créant des annonces percutantes, et en suivant les performances pour maximiser le retour sur investissement (ROI).",

      "<strong>Budget optimisé: </strong> Nous ajustons les budgets pour chaque campagne afin d’assurer une efficacité maximale sans dépasser vos dépenses prévues."
    ]
  },
  {
    title: "4. Analyse des performances et rapports",
    paragraphe:
      "Nous vous fournissons des rapports réguliers sur les performances de vos comptes pour suivre votre croissance et ajuster la stratégie si nécessaire.",
    listItem: [
      "<strong>Suivi des KPIs (indicateurs clés):</strong> Nombre de likes, partages, commentaires, portée des publications, taux d’engagement, etc.",

      "<strong>Optimisation continue: </strong>En fonction des résultats, nous ajustons les contenus, les horaires de publication et les campagnes publicitaires pour améliorer les performances."
    ]
  }
];

import AlizeImg from "@/assets/images/gestion-reseaux-sociaux-roanne-C2-Projet-Web-768x768 - alize orthopedie.webp";
import LesSaveursImg from "@/assets/images/gestion-reseaux-sociaux-roanne-C2-Projet-Web-le tisseurs des saveurs.webp";
export const images = [
  {
    src: AlizeImg,
    alt: "text alternatif",
    href: "https://www.instagram.com/alizeorthopedie/"
  },
  {
    src: LesSaveursImg,
    alt: "text alternatif",
    href: "https://www.facebook.com/letisseurdessaveurs"
  }
];

// SECTION 3 - TITLE
export const section3 = {
  title:
    " Pourquoi choisir C2 Projet Web pour la gestion de vos réseaux sociaux ?",
  paragraphe:
    " <strong>C2 Projet Web</strong> est une agence locale qui comprend les spécificités du marché de Roanne et ses alentours."
};

// SECTION 3 - LIST ITEM 2

export const listItem2 = [
  {
    icon: (
      <MousePointer2
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Expertise locale",
    text: "Nous connaissons bien le marché de Roanne et ses particularités, ce qui nous permet de créer des stratégies de contenu et des campagnes adaptées à la clientèle locale."
  },
  {
    icon: (
      <CircleCheck
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Gestion complète",
    text: "De la création de contenu à la gestion de communauté en passant par la publicité en ligne, nous nous occupons de tous les aspects de vos réseaux sociaux."
  },
  {
    icon: (
      <Eye
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Optimisation SEO et social",
    text: "Nos experts veillent à ce que votre présence sur les réseaux sociaux soit optimisée pour renforcer votre positionnement dans les moteurs de recherche."
  },
  {
    icon: (
      <Headphones
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Suivi et accompagnement personnalisé",
    text: "Nous travaillons en étroite collaboration avec vous pour ajuster notre stratégie en fonction de vos besoins et des évolutions du marché."
  }
];
