import {
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  CornerRightUp,
  Handshake,
  LayoutGrid,
  Monitor,
  MousePointer2,
  ShieldHalf,
  Smile
} from "lucide-react";
import logoStrategyIcon from "@/assets/icons/strategyIcon.svg";

// Meta Head
export const meta = {
  title: "Conseil et expertise en communication à Roanne et alentours",
  metaDescriptionContent: "Description de la page"
};
//Banner
export const icon = {
  iconSrc: logoStrategyIcon,
  alt: "Icône de la page de conseil et expertise en communication",
  width: 50
};

export const subtitle =
  "Conseil et expertise en communication à Roanne et alentours";

export const title = "Conseil et Expertise";

export const text =
  "Pour opter pour un conseil en communication à Roanne et alentours avec C2 Projet Web ? Dans un monde où la communication est au cœur des relations entre les entreprises et leurs clients, maîtriser sa stratégie de communication est crucial pour se démarquer. Que vous soyez une petite entreprise locale à Roanne ou une organisation souhaitant renforcer sa notoriété dans les environs, une communication bien pensée peut faire toute la différence. C2 Projet Web, spécialisée dans la stratégie de communication digitale et traditionnelle, offre son expertise pour vous aider à structurer et optimiser votre message, améliorer votre image de marque, et toucher efficacement votre cible.";

export const hashtags =
  "#Communication #StratégieDeCommunication #Marketing #CommunicationVisuelle #DigitalMarketing #SocialMedia #ContentMarketing #Branding #Storytelling #MarketingDigital";
//Content
//SECTION 1 TITLE
export const section1 = {
  title:
    "Pourquoi investir dans une stratégie de conseil en communication à Roanne avec C2 Projet Web ?"
};
// SECTION 1 - LIST ITEM 1
export const listItem = [
  {
    icon: (
      <MousePointer2
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Améliorer la visibilité",
    text: "Une communication efficace permet de faire connaître vos services ou produits auprès de votre cible, que ce soit en ligne ou dans des supports traditionnels (affiches, flyers)."
  },
  {
    icon: (
      <Handshake
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Renforcer la crédibilité",
    text: "En transmettant un message clair et cohérent, vous renforcez la confiance de vos clients et partenaires envers votre entreprise."
  },

  {
    icon: (
      <CornerRightUp
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Toucher la bonne audience",
    text: "Une bonne stratégie de communication permet de cibler les bons segments de marché et d’adresser le bon message aux bonnes personnes, augmentant ainsi vos chances de conversion."
  },
  {
    icon: (
      <Smile
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Se différencier de la concurrence",
    text: "Une bonne stratégie de communication permet de cibler les bons segments de marché et d’adresser le bon message aux bonnes personnes, augmentant ainsi vos chances de conversion."
  },
  {
    icon: (
      <ShieldHalf
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Consolider l'image de marque",
    text: "La manière dont vous communiquez contribue à la perception de votre marque. Il est donc crucial de véhiculer les bonnes valeurs et d’avoir une image cohérente et professionnelle."
  }
];

// SECTION 2 - ARTICLES
export const section2 = {
  title: " Les services de conseil en communication de C2 Projet Web",
  paragraphe:
    "Chez <strong>C2 Projet Web</strong>, nous proposons un accompagnement sur mesure en fonction de vos besoins spécifiques. Que vous soyez à la recherche d’une refonte complète de votre stratégie de communication ou d’un appui pour des actions ponctuelles, nous mettons à votre disposition notre savoir-faire pour obtenir des résultats concrets. Voici quelques-uns de nos services en conseil et expertise en communication :"
};

export const articles = [
  {
    title: "1. Audit et diagnostic de communication",
    paragraphe:
      "Avant de mettre en place une nouvelle stratégie de communication, il est important de faire un état des lieux. Nous procédons à un <strong>audit complet </strong>de votre communication actuelle pour identifier les forces, les faiblesses et les opportunités d’amélioration.",
    listItem: [
      "<strong>Analyse des supports existants: </strong> Nous passons en revue vos supports de communication actuels (site web, brochures, réseaux sociaux, etc.) pour évaluer leur cohérence et leur efficacité.",

      "<strong>Étude de la concurrence: </strong> Nous analysons la communication de vos concurrents pour vous aider à vous démarquer et à identifier des opportunités."
    ]
  },
  {
    title: " 2. Élaboration de la stratégie de communication",
    paragraphe:
      "Une fois l’audit effectué, nous élaborons une stratégie de communication sur mesure, adaptée à vos objectifs commerciaux et à votre cible.",

    listItem: [
      "<strong>Définition des objectifs: </strong> Que vous souhaitiez augmenter votre notoriété, fidéliser vos clients ou lancer un nouveau produit, nous vous aidons à fixer des objectifs clairs et mesurables.",

      "<strong>Choix des canaux de communication: </strong>Nous sélectionnons les canaux les plus adaptés (digital, presse, affichage, etc.) pour toucher efficacement votre audience.",

      "<strong>Création d’un message impactant: </strong>Nous travaillons avec vous pour définir un message clair, cohérent et percutant qui reflète les valeurs de votre entreprise."
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
    title: "4. Identité visuelle et branding",
    paragraphe:
      "Votre image de marque est un élément central de votre stratégie de communication. Nous vous aidons à définir et à créer une <stong>identité visuelle</stong> qui vous représente efficacement.",
    listItem: [
      "<strong>Création de logos:</strong> Nous concevons des logos qui reflètent les valeurs et l’esprit de votre entreprise.",

      "<strong>Charte graphique: </strong>Nous développons une charte graphique cohérente pour que tous vos supports de communication (site web, brochures, etc.) soient harmonisés."
    ]
  }
];

export const images = [
  {
    src: "src/assets/images/pexels-photo-1192609-1192609-683x1024.webp",
    alt: "text alternatif"
  }
];

// SECTION 3 - TITLE
export const section3 = {
  title: " Pourquoi choisir C2 Projet Web pour vos besoins en communication ?",
  paragraphe:
    " Voici pourquoi <strong>C2 Projet Web </strong>est le choix idéal pour accompagner les entreprises de Roanne et de ses alentours dans leur stratégie de communication :"
};

// SECTION 3 - LIST ITEM 2

export const listItem2 = [
  {
    icon: (
      <Smile
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Expertise locale",
    text: "En tant qu'agence implantée à Roanne, nous connaissons bien le marché local et ses particularités. Cela nous permet de développer des stratégies de communication adaptées à votre public cible."
  },
  {
    icon: (
      <CircleCheck
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Conseil personnalisé",
    text: "Nous prenons le temps de comprendre vos objectifs, vos valeurs et votre vision afin de créer une stratégie de communication sur mesure qui vous correspond."
  },
  {
    icon: (
      <LayoutGrid
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Solutions complètes",
    text: "De l’audit à la mise en œuvre, nous gérons l’ensemble des aspects de votre communication, que ce soit en ligne ou hors ligne."
  },
  {
    icon: (
      <Monitor
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Expertise en digital",
    text: "Notre expertise en communication digitale nous permet de vous proposer des solutions modernes et efficaces pour atteindre vos objectifs rapidement et durablement."
  },
  {
    icon: (
      <ChartNoAxesColumnIncreasing
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Accompagnement continu",
    text: "Nous travaillons en étroite collaboration avec vous tout au long du processus pour garantir que la stratégie mise en place répond à vos attentes et produit des résultats concrets."
  }
];

export const articles2 = [
  {
    paragraphe:
      "Une <strong>bonne communication</strong> est essentielle pour attirer et fidéliser vos clients. Que vous souhaitiez renforcer votre notoriété à Roanne ou développer une nouvelle stratégie de communication, <strong>C2 Projet Web</strong> est là pour vous conseiller et vous accompagner à chaque étape. Nos services sur mesure vous permettront de transmettre le bon message à la bonne audience, tout en renforçant votre image de marque.<br/><br />Contactez <strong>C2 Projet Web</strong> dès aujourd’hui pour discuter de vos besoins en communication et découvrir comment nous pouvons vous aider à atteindre vos objectifs."
  }
];
