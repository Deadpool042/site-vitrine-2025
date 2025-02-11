import { Bookmark, Eye, Grid2x2, Lightbulb, UserRound } from "lucide-react";
import StudioSvg from "@/assets/icons/studioIcon.svg";
// Meta Head
export const meta = {
  title: "Agence de design à Roanne et alentours",
  metaDescriptionContent: "Description de la page"
};

//Banner
export const icon = {
  iconSrc: StudioSvg,
  alt: "Icône de la page studio créa et design",
  width: 50
};

export const subtitle = "Agence de design à Roanne et alentours";

export const title = "Studio créa et design";

export const text =
  "Que peut apporter une agence design à Roanne ? <br/>Le design joue un rôle crucial dans l’image de marque d’une entreprise. Qu’il s’agisse de créer un site web attrayant, de concevoir une identité visuelle forte ou de développer des supports de communication efficaces, un bon design peut faire toute la différence pour capter l’attention de vos clients. À Roanne, <strong>C2 Projet Web</strong> se positionne comme une agence de design incontournable, offrant des solutions créatives adaptées aux besoins des entreprises locales et des alentours.";

export const hashtags =
  "#creation #visuel #plaquette #brochure #creationoriginale #studio #video #photo #film";
//Content
//SECTION 1 TITLE
export const section1 = {
  title: "Pourquoi investir dans une agence design à Roanne ?",
  paragraphe:
    "Un bon design ne se limite pas à l’esthétique ; il doit également communiquer un message et répondre aux attentes de vos clients."
};
// SECTION 1 - LIST ITEM 1
export const listItem = [
  {
    icon: (
      <Grid2x2
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Première impression",
    text: "Votre design est souvent le premier contact que vos clients auront avec votre marque. Un design soigné et professionnel attire immédiatement l'attention et crée une image positive."
  },
  {
    icon: (
      <Eye
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Reconnaissance de la marque",
    text: "Une identité visuelle forte aide à construire la reconnaissance de votre marque. Cela inclut le choix des couleurs, des typographies, et des éléments graphiques qui doivent être cohérents sur tous vos supports."
  },

  {
    icon: (
      <UserRound
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Expérience utilisateur",
    text: "Un design réfléchi améliore l'expérience utilisateur, que ce soit sur un site web ou dans des supports imprimés. Une bonne navigation et une mise en page claire incitent les visiteurs à rester plus longtemps."
  },
  {
    icon: (
      <Lightbulb
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Différenciation",
    text: "Dans un marché compétitif comme celui de Roanne, un design original et créatif permet de se démarquer de la concurrence et de susciter l'intérêt de votre audience cible."
  },
  {
    icon: (
      <Bookmark
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Conversion",
    text: "Un design efficace guide les utilisateurs vers une action souhaitée, qu'il s'agisse d'un achat, d'une inscription ou d'une prise de contact."
  }
];

// SECTION 2 - ARTICLES
export const section2 = {
  title: "Les services de design offerts par C2 Projet Web",
  paragraphe:
    "<strong>C2 Projet Web</strong> propose une gamme complète de services de design, adaptés aux besoins spécifiques des entreprises à Roanne. Voici un aperçu de nos principales prestations:"
};

export const articles = [
  {
    title: "1. Création d’identité visuelle",
    paragraphe:
      "Nous vous aidons à développer une identité visuelle unique qui reflète l’essence de votre marque.",
    listItem: [
      "<strong>Logo design: </strong> Conception de logos mémorables qui incarnent vos valeurs et votre mission.",

      "<strong>Charte graphique: </strong> Élaboration d’une charte graphique pour garantir la cohérence visuelle sur tous vos supports (couleurs, typographies, éléments graphiques)."
    ]
  },
  {
    title: " 2. Design de sites web",
    paragraphe:
      "Un site web bien conçu est essentiel pour attirer et convertir vos visiteurs.",

    listItem: [
      "<strong>Design UX/UI:</strong> Nous créons des interfaces utilisateur intuitives et esthétiques pour offrir une expérience agréable aux visiteurs.",

      "<strong>Responsive design:</strong> Nos sites sont optimisés pour tous les appareils (ordinateurs, tablettes, smartphones) afin d’assurer une navigation fluide."
    ]
  },
  {
    title: "3. Communication digitale",
    paragraphe:
      "Aujourd’hui, une stratégie de communication digitale efficace est indispensable pour atteindre votre public cible en ligne. <strong>C2 Projet Web</strong> vous accompagne dans la gestion de vos campagnes numériques :",
    listItem: [
      "<strong>Création de contenus web:</strong> Nous créons des contenus de qualité, optimisés pour le SEO, qui captent l’attention de vos visiteurs et améliorent votre visibilité sur les moteurs de recherche.",

      "<strong>Stratégie sur les réseaux sociaux: </strong> Nous vous aidons à choisir les plateformes sociales pertinentes (Facebook, Instagram, LinkedIn, etc.) et à y diffuser du contenu engageant pour dynamiser votre présence en ligne.",

      "<strong>Campagnes de publicité en ligne: </strong> Que ce soit via Google Ads ou les réseaux sociaux, nous gérons vos campagnes publicitaires en ligne pour générer du trafic et booster vos conversions."
    ]
  },
  {
    title: "3. Supports de communication",
    paragraphe:
      "Que ce soit pour des flyers, des brochures ou des affiches, nous concevons des supports imprimés qui transmettent votre message de manière efficace.",

    listItem: [
      "<strong>Brochures et flyers:</strong> Création de documents attractifs pour promouvoir vos produits ou services.",

      "<strong>Affiches et bannières :</strong> Conception de supports visuels impactants pour vos événements ou campagnes marketing."
    ]
  },
  {
    title: "4. Design graphique et illustrations",
    paragraphe:
      "Nous proposons des services de design graphique personnalisés, y compris la création d’illustrations.",

    listItem: [
      "<strong>isuels pour réseaux sociaux: </strong> Création de contenu graphique pour vos plateformes sociales afin d’augmenter l’engagement.",

      "<strong>Illustrations personnalisées:</strong> Développement d’illustrations sur mesure pour donner vie à vos idées et rendre votre communication unique."
    ]
  }
];

export const images = [
  {
    src: "src/assets/images/agence-de-design-Roanne-C2-Projet-Web-1-576x1024.webp",
    alt: "text alternatif"
  }
];

// SECTION 3 - TITLE
export const section3 = {
  title: "Pourquoi choisir C2 Projet Web pour vos projets de design ?",
  paragraphe:
    "Les <strong>sites vitrines</strong> créés par <strong>C2 Projet Web</strong>peuvent inclure plusieurs fonctionnalités clés pour améliorer l’expérience utilisateur et répondre aux besoins de votre entreprise."
};

// SECTION 3 - LIST ITEM 2

export const listItem2 = [
  {
    iconSrc: "src/assets/icons/expertise-locale.svg",
    title: "Expertise locale",
    text: "En tant qu'agence de design basée à Roanne, nous comprenons les besoins spécifiques du marché local et des entreprises de la région."
  },
  {
    iconSrc: "src/assets/icons/approche-perso.svg",
    title: "Approche personnalisée",
    text: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins, leur vision et leur identité, afin de créer des solutions sur mesure."
  },
  {
    iconSrc: "src/assets/icons/solution-complete.svg",

    title: "Solutions complètes",
    text: "De la conception de l’identité visuelle à la création de supports de communication, nous offrons un service complet pour accompagner vos projets."
  },
  {
    iconSrc: "src/assets/icons/creativite-innovation.svg",

    title: "Créativité et innovation",
    text: "Notre équipe de designers passionnés s'engage à proposer des idées innovantes et créatives pour garantir que votre marque se démarque."
  }
];
