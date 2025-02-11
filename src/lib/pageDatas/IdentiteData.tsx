import { Bell, ChartColumn, MousePointer2, Pencil, Smile } from "lucide-react";
import logoSEO from "@/assets/icons/seoIcon.svg";

// Meta Head
export const meta = {
  title: "Identité de marque",
  metaDescriptionContent: "Description de la page"
};
//Banner
export const icon = {
  iconSrc: logoSEO,
  alt: "Icône de la page référencement et SEO",
  width: 50
};

export const subtitle = "Agence de Branding à Roanne et alentours";

export const title = "Identité de marque";

export const text =
  "Le <strong>branding</strong>, ou l’art de construire une identité de marque forte, est un élément clé pour différencier votre entreprise dans un marché concurrentiel. À Roanne et ses alentours, <strong>C2 Projet Web</strong> vous accompagne dans le développement d’une image de marque cohérente et mémorable, qui reflète vos valeurs et capte l’attention de vos clients. Que vous soyez une start-up, une PME ou une grande entreprise, une stratégie de branding bien pensée est essentielle pour construire une relation durable avec votre audience.";

export const hashtags =
  "#branding #logo #charte graphique #brandbook #identitédemarque #créationdemarque";

//Content
//SECTION 1 TITLE
export const section1 = {
  title: "Qu'est-ce que le branding ?",
  paragraphe:
    "Le <strong>branding </strong>ne se limite pas à un simple logo ou à une charte graphique. Il s’agit de l’ensemble des éléments visuels, émotionnels et expérientiels qui définissent votre entreprise et la manière dont elle est perçue par vos clients. Le <strong>branding</strong> permet de :"
};

export const section1ListItem = [
  "<strong>Différencier votre entreprise:</strong> Dans un marché où les concurrents sont nombreux, une identité de marque bien définie permet de se démarquer et de capter l’attention.",
  "<strong>Créer une connexion émotionnelle: </strong> Un bon branding génère des émotions positives et crée un lien fort avec votre audience, favorisant la fidélité et l’engagement.",
  "<strong>Renforcer la reconnaissance:</strong> Une marque bien construite est immédiatement reconnaissable et permet à vos clients de se souvenir de vous plus facilement.",
  "<strong>Communiquer vos valeurs: </strong> Votre image de marque doit refléter les valeurs de votre entreprise, ses missions et sa vision.",
  "<strong>Favoriser la cohérence:</strong> Une identité visuelle cohérente sur tous vos supports de communication (site web, réseaux sociaux, brochures, etc.) renforce la confiance des clients."
];

// SECTION 2 - ARTICLES
export const section2 = {
  title: "Les services proposés par C2 Projet Web, Agence de Branding à Roanne"
};
export const articles = [
  {
    title: "création identité visuelle",
    paragraphe:
      "L’identité visuelle est le socle de votre branding. Elle comprend tous les éléments graphiques qui définissent votre marque.",
    listItem: [
      "<strong>Logo design: </strong> Conception de logos originaux et impactants, qui captent l’essence de votre marque.",

      "<strong>Palette de couleurs: </strong> Choix de couleurs qui reflètent vos valeurs et qui garantissent la cohérence visuelle de votre marque.",

      "<strong>Typographie et éléments graphiques: </strong> Sélection de typographies et d’éléments visuels qui renforcent votre identité."
    ]
  },
  {
    title: "Charte graphique et guidelines",
    paragraphe:
      "Une <strong>charte graphique </strong> bien définie est essentielle pour garantir l’uniformité de votre marque sur tous vos supports de communication.",

    listItem: [
      "<strong>Élaboration de la charte graphique:</strong> Nous créons un document détaillant l’utilisation correcte de votre logo, vos couleurs, vos polices, etc., afin d’assurer une image de marque cohérente.",

      "<strong>Guidelines d’utilisation:</strong> Nous fournissons des lignes directrices claires pour que votre équipe et vos partenaires puissent utiliser votre identité visuelle de manière homogène."
    ]
  },
  {
    title: "Stratégie de marketing",
    paragraphe:
      "Le branding va au-delà de l’aspect visuel. Il inclut également la manière dont vous communiquez avec votre audience.",
    listItem: [
      "<strong>Définition de la mission et des valeurs:</strong> Nous vous aidons à articuler clairement la mission de votre entreprise et ses valeurs fondamentales.",

      "<strong>Positionnement de marque:</strong> Nous travaillons avec vous pour définir un positionnement clair et différenciant, en adéquation avec vos objectifs commerciaux et vos cibles.",

      "<strong>Ton et voix de marque:</strong> Nous vous aidons à définir le ton et la voix qui correspondront le mieux à votre audience (professionnel, décontracté, créatif, etc.)."
    ]
  },
  {
    title: "Refonte de marque (rebranding)",
    paragraphe:
      "Si votre marque a besoin d’un rafraîchissement, <strong>C2 Projet Web</strong> peut vous accompagner dans un processus de <strong>rebranding </strong>complet.",
    listItem: [
      "<strong>Diagnostic de marque:</strong> Nous analysons votre image de marque actuelle pour identifier les axes d’amélioration.",

      "<strong>Refonte du logo et de l’identité visuelle: </strong>Nous retravaillons votre identité visuelle tout en veillant à respecter l’histoire et les valeurs de votre marque.",

      "<strong>Nouvelle stratégie de communication:</strong> Nous mettons en place une stratégie de communication qui reflète votre nouvelle image de marque et attire de nouveaux clients."
    ]
  },
  {
    title: "supports de communication visuelle",
    paragraphe:
      "Nous concevons des supports de communication qui renforcent votre image de marque et véhiculent vos messages de manière efficace.",
    listItem: [
      "<strong>Brochures et dépliants:</strong> Création de supports imprimés professionnels pour vos événements ou vos campagnes marketing.",
      "<strongBannières et affiches:></strongBannières> Conception de visuels impactants pour vos publicités ou événements.",

      "<strong>Contenu digital:</strong> Création de visuels pour vos réseaux sociaux, newsletters, et autres supports numériques."
    ]
  }
];

// SECTION 3 - TITLE
export const section3 = {
  title: "Pourquoi choisir C2 Projet Web, agence de branding à Roanne ?",
  paragraphe:
    "<strong>C2 Projet Web</strong> offre une approche personnalisée pour chaque projet, en tenant compte de vos besoins spécifiques, de votre budget et de votre vision pour votre boutique en ligne. Voici quelques raisons pour lesquelles nous sommes le partenaire idéal pour la création de votre site e-commerce à Roanne :"
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
    text: "En tant qu' agence de branding à Roanne, nous comprenons les spécificités du marché local et pouvons adapter nos stratégies pour répondre aux besoins des entreprises de la région."
  },
  {
    icon: (
      <Bell
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Approche sur mesure",
    text: "Chaque entreprise est unique. C’est pourquoi nous créons des solutions de branding personnalisées qui reflètent vos valeurs et vos objectifs."
  },
  {
    icon: (
      <Pencil
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),

    title: "Créativité et innovation",
    text: "Nos experts en design et en communication mettent leur créativité au service de votre marque pour vous proposer des concepts innovants et originaux."
  },
  {
    icon: (
      <Smile
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),

    title: "Cohérence et professionnalisme",
    text: "Nous vous aidons à garantir une cohérence visuelle sur tous vos supports de communication, qu’ils soient numériques ou imprimés."
  },
  {
    icon: (
      <ChartColumn
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),

    title: "Accompagnement complet",
    text: "De la conception de l’identité visuelle à la mise en place d’une stratégie de communication, nous vous accompagnons à chaque étape pour assurer la réussite de votre projet de branding."
  }
];
