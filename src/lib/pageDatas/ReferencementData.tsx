import {
  Bell,
  ChartColumn,
  Eye,
  Globe,
  Handshake,
  Layers,
  MousePointer2,
  Plus,
  Search,
  Smile
} from "lucide-react";
import logoSEO from "@/assets/icons/seoIcon.svg";

// Meta Head
export const meta = {
  title: "Référencement & SEO",
  metaDescriptionContent: "Description de la page"
};
//Banner
export const icon = {
  iconSrc: logoSEO,
  alt: "Icône de la page référencement et SEO",
  width: 50
};

export const subtitle = "Agence de communication digitale et SEO à Roanne";

export const title = "Référencement & SEO";

export const text =
  "Pourquoi avoir une agence de communication digitale et SEO à Roanne et alentours ? Dans le monde digital d’aujourd’hui, la visibilité en ligne est essentielle pour assurer la croissance et le succès d’une entreprise. Que vous soyez une petite entreprise locale à Roanne ou une organisation plus établie, une stratégie de communication digitale efficace, couplée à un bon <strong>référencement SEO</strong>, vous permet de vous démarquer et d’attirer de nouveaux clients. <strong>C2 Projet Web</strong>, agence spécialisée en communication digitale à Roanne, vous accompagne pour optimiser votre présence en ligne et améliorer votre positionnement sur les moteurs de recherche.";

export const hashtags = "#seo #referencement #web #digital #communication";

//Content
//SECTION 1 TITLE
export const section1 = {
  title:
    "Pourquoi investir dans la communication digitale et le référencement SEO à Roanne et alentours ?"
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
    title: "Visibilité accrue",
    text: "En optimisant votre présence sur le web, notamment grâce au SEO, vous augmentez vos chances d'apparaître en haut des résultats de recherche, là où vos clients potentiels vous cherchent."
  },
  {
    icon: (
      <Layers
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Génération de trafic qualifié",
    text: "Un bon référencement attire des visiteurs qualifiés sur votre site, c'est-à-dire des personnes réellement intéressées par vos produits ou services."
  },

  {
    icon: (
      <Smile
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Renforcement de la notoriété",
    text: "En étant présent sur les canaux digitaux (réseaux sociaux, site web, blog, etc.) et bien référencé, vous renforcez la visibilité et la crédibilité de votre marque."
  },
  {
    icon: (
      <Handshake
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Fidélisation et engagement",
    text: "Une stratégie digitale bien construite permet de créer des liens durables avec vos clients grâce à des contenus pertinents et engageants."
  },
  {
    icon: (
      <Search
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Augmentation des conversions",
    text: "Un bon SEO améliore non seulement votre visibilité mais aussi votre taux de conversion, en attirant des utilisateurs déjà en phase de recherche d’un service ou produit que vous proposez."
  }
];

// SECTION 2 - ARTICLES
export const section2 = {
  title:
    "Les services de C2 Projet Web, pour un référencement et un SEO de qualité !",
  paragraphe:
    "Chez <strong>C2 Projet Web</strong> , nous mettons à disposition des entreprises de Roanne une large gamme de services pour optimiser leur présence en ligne et améliorer leur SEO"
};

export const articles = [
  {
    title: "Audit SEO et analyse de performance",
    paragraphe:
      "Avant de commencer toute optimisation, il est essentiel de comprendre l’état actuel de votre site.",
    listItem: [
      "<strong>Audit technique: </strong> Nous analysons les aspects techniques de votre site pour identifier les obstacles au bon référencement (vitesse de chargement, structure des URL, etc.).",

      "<strong>Analyse des mots-clés: </strong> Nous identifions les mots-clés pertinents pour votre secteur d’activité et vos cibles afin de les intégrer efficacement à votre stratégie SEO.",

      "<strong>Analyse de la concurrence: </strong> Nous étudions la stratégie SEO de vos concurrents pour repérer les opportunités d’amélioration et de différenciation."
    ]
  },
  {
    title: "Optimisation on-page seo",
    paragraphe:
      "L’optimisation  <strong>on-page</strong> est une étape clé pour améliorer votre référencement.",

    listItem: [
      "<strong>Optimisation des balises</strong>(titres, meta descriptions, balises H1, etc.):  Nous structurons vos pages pour qu’elles soient compréhensibles par les moteurs de recherche et attirent plus de clics.",

      "<strong>Responsive design:</strong> Nous rédigeons ou optimisons le contenu de vos pages en tenant compte des mots-clés recherchés par vos clients tout en veillant à leur pertinence et leur qualité. ",

      "<strong>Amélioration de l’expérience utilisateur (UX):</strong> Nous veillons à ce que votre site soit ergonomique, agréable à naviguer et adapté aux différents supports (desktop, mobile, tablette)."
    ]
  },
  {
    title: "Stratégie de netlinking et seo off-page",
    paragraphe:
      "<strong>Le netlinking</strong> (ou SEO off-page) consiste à obtenir des backlinks (liens entrants) de qualité pour renforcer l’autorité de votre site.",
    listItem: [
      "<strong>Recherche de partenariats:</strong> Nous identifions des sites pertinents pour votre secteur d’activité afin de créer des partenariats et obtenir des liens de qualité.",

      "<strong>Création de contenu à valeur ajoutée: </strong> Nous élaborons des articles invités, infographies, et autres contenus partageables pour attirer des liens naturels vers votre site.",

      "<strong>Suivi et analyse des backlinks: </strong> Nous surveillons les performances de vos backlinks pour garantir un impact positif sur votre référencement."
    ]
  },
  {
    title: "Gestion de réseaux sociaux",
    paragraphe:
      "Aujourd’hui, une stratégie de communication digitale ne peut pas ignorer l’importance des réseaux sociaux.",

    listItem: [
      "<strong>Community management:</strong> Nous gérons vos comptes sur les réseaux sociaux (Facebook, Instagram, LinkedIn, etc.) en créant du contenu engageant qui renforce votre notoriété.",

      "<strong>Publicité sur les réseaux sociaux:</strong> Nous mettons en place des campagnes de publicité ciblées pour atteindre votre audience idéale et augmenter votre visibilité en ligne.",

      "<strong>Animation et engagement:</strong> Nous veillons à interagir avec vos abonnés pour construire une communauté active autour de votre marque."
    ]
  },
  {
    title: "Création et optimisation de sites web",
    paragraphe:
      "Votre site web est souvent le premier contact entre votre entreprise et vos clients. Il doit être à la fois <strong>bien conçu </strong>et <strong>optimisé pour le SEO</strong>.",

    listItem: [
      "<strong>Conception de sites web: </strong> Nous créons des sites web modernes, responsives et adaptés à vos objectifs commerciaux.",

      "<strong>Refonte SEO:</strong> Si votre site web est déjà en ligne mais mal référencé, nous vous aidons à le restructurer et à l’optimiser pour améliorer ses performances SEO.",

      "<strong>SEO local:</strong> Nous optimisons votre présence pour des recherches locales (ex : « agence de communication à Roanne ») afin que vous apparaissiez dans les résultats de recherche géolocalisés."
    ]
  }
];

// SECTION 3 - TITLE
export const section3 = {
  title:
    "Pourquoi choisir C2 Projet Web comme Agence de communication digitale et SEO à Roanne ?",
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
    text: "En tant qu'agence basée à Roanne, nous connaissons bien les particularités du marché local et pouvons adapter nos stratégies pour maximiser votre visibilité dans la région."
  },
  {
    icon: (
      <Bell
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Solutions sur mesure",
    text: "Nous créons des stratégies de communication et SEO personnalisées, en fonction des besoins spécifiques de votre entreprise et de vos objectifs commerciaux."
  },
  {
    icon: (
      <Plus
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),

    title: "Résultats mesurables",
    text: "Nous mettons en place des outils d’analyse pour suivre et évaluer les performances de nos actions, et ajuster la stratégie en conséquence pour obtenir les meilleurs résultats."
  },
  {
    icon: (
      <Globe
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),

    title: "Approche globale",
    text: "Nous vous offrons une prise en charge complète de votre communication digitale, incluant la gestion des réseaux sociaux, l’optimisation SEO, et la création de contenu, pour assurer la cohérence de votre image de marque."
  },
  {
    icon: (
      <ChartColumn
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),

    title: "Accompagnement continu",
    text: "Nous ne nous contentons pas de mettre en place une stratégie, nous vous accompagnons tout au long du processus pour assurer que vos objectifs sont atteints."
  }
];
