import { Clock, Euro, Eye, Smile } from "lucide-react";
import logoAPP from "@/assets/icons/appIcon.svg";

// Meta Head
export const meta = {
  title: "Sites internet",
  metaDescriptionContent: "Description de la page"
};
//Banner
export const icon = {
  iconSrc: logoAPP,
  alt: "Icône de la page de création de sites internet",
  width: 50
};

export const subtitle = "Création site internet à Roanne et alentours";

export const title = "Sites internet";

export const text =
  "À l’ère du numérique, opter pour <strong>C2 Projet Web</strong> pour créer votre <strong>site internet</strong> à Roanne et alentours est devenu indispensable pour les entreprises souhaitant améliorer leur visibilité et attirer de nouveaux clients. Un site vitrine est une solution idéale pour présenter vos services, produits, et informations clés à vos prospects, sans la complexité d’une boutique en ligne. <strong>C2 Projet Web</strong>, une agence basée à Roanne, propose des services de création de sites vitrines adaptés aux entreprises locales pour renforcer leur présence sur Internet et optimiser leur référencement naturel (SEO)";

export const hashtags =
  "#site web #ux design #site vitrine #ecommerce #wordpress #surmesure #développementweb #seo #hébergementmaintenance #mobilefirst";
//Content
//SECTION 1 TITLE
export const section1 = {
  title:
    "Pourquoi un site internet est-il important pour votre entreprise à Roanne et alentours ?",
  paragraphe:
    "Avec l’augmentation du nombre de consommateurs utilisant Internet pour rechercher des produits et services, il est devenu indispensable pour les entreprises locales d’avoir une présence en ligne."
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
    title: "Améliorer accrue",
    text: "Avec un site vitrine optimisé pour le SEO local, votre entreprise sera plus facilement trouvée par les clients potentiels de Roanne et ses alentours lorsqu'ils recherchent des services ou produits similaires."
  },
  {
    icon: (
      <Clock
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Présence en ligne 24/7",
    text: "Contrairement à une boutique physique, un site vitrine est accessible à tout moment. Les clients peuvent découvrir vos services, vos coordonnées, et prendre contact avec vous à n'importe quelle heure."
  },

  {
    icon: (
      <Smile
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Crédibilité et professionnalisme",
    text: "Un site web bien conçu donne une impression de sérieux et de professionnalisme. Il permet aux visiteurs d’obtenir toutes les informations nécessaires en quelques clics."
  },
  {
    icon: (
      <Euro
        color="#D0B444"
        className="p-4 "
        size={80}
      />
    ),
    title: "Coût abordable",
    text: "Contrairement à un site e-commerce, un site vitrine est généralement plus simple à mettre en place et donc plus économique, tout en offrant une visibilité efficace."
  }
];

// SECTION 2 - ARTICLES
export const section2 = {
  title: "Les services de création de site internet proposés par C2 Projet Web",
  paragraphe:
    "<strong>C2 Projet Web </strong>est une agence spécialisée dans la création de sites vitrines sur mesure pour les entreprises de Roanne et ses environs. Voici quelques caractéristiques des services proposés:"
};

export const articles = [
  {
    listItem: [
      "<strong>Design personnalisé: </strong> Chaque site vitrine est conçu en fonction de votre image de marque, avec un design moderne et adapté à vos besoins. L’objectif est de capter l’attention de vos visiteurs dès leur première visite.",

      "<strong>Optimisation SEO locale: </strong> En tant qu’agence implantée à Roanne, <strong>C2 Projet Web</strong> connaît bien le marché local. Nous veillons à ce que votre site soit bien référencé sur Google, avec un travail d’optimisation sur les mots-clés locaux comme « création de site vitrine Roanne », « développeur web Loire », etc.",

      "<strong>Site responsive: </strong> Nos sites vitrines sont entièrement optimisés pour une navigation fluide sur tous les appareils, qu’il s’agisse d’un ordinateur, d’une tablette ou d’un smartphone.",

      "<strong>Gestion simplifiée: </strong> Nous offrons des solutions de gestion de contenu simples d’utilisation, vous permettant de mettre à jour vos informations rapidement et sans compétences techniques particulières.",

      "<strong>Suivi et maintenance: </strong> Une fois votre site mis en ligne, nous assurons un suivi pour garantir qu’il reste performant et à jour avec les dernières évolutions techniques."
    ]
  }
];
import SiteWebAppImg from "@/assets/images/Creation-de-sites-et-applications-a-Roanne-et-alentours-C2-Projet-Web-1-768x768.webp";
export const images = [
  {
    src: SiteWebAppImg,
    alt: "text alternatif"
  }
];

// SECTION 3 - TITLE
export const section3 = {
  title: "Exemple de fonctionnalités pour votre site vitrine à Roanne",
  paragraphe:
    "Les <strong>sites vitrines</strong> créés par <strong>C2 Projet Web</strong> peuvent inclure plusieurs fonctionnalités clés pour améliorer l’expérience utilisateur et répondre aux besoins de votre entreprise."
};

// SECTION 3 - LIST ITEM 2
import siteVitrineImg from "@/assets/images/Creation-site-vitrine-a-Roanne-et-alentours-avec-C2-Projet-Web-150x150.webp";
import logo1List from "@/assets/icons/3-2.svg";
import logo2List from "@/assets/icons/4-2.svg";
import logo3List from "@/assets/icons/5-2.svg";
import logo4List from "@/assets/icons/6-2.svg";
export const listItem2 = [
  {
    iconSrc: siteVitrineImg,
    alt: "texte alternatif",

    title: "Page d'accueil attrayante"
  },
  {
    iconSrc: logo1List,
    alt: "texte alternatif",

    title: "Formulaire de contact"
  },
  {
    iconSrc: logo2List,
    alt: "texte alternatif",
    title: "Présentation de vos services"
  },
  {
    iconSrc: logo3List,
    alt: "texte alternatif",
    title: "Carte Google Maps"
  },
  {
    iconSrc: logo4List,
    alt: "texte alternatif",
    title: "Galerie photos ou vidéos"
  }
];

// SECTION 4 - ARTICLES
export const section4 = {
  title: "Pourquoi choisir C2 Projet Web pour créer un site internet ?",
  paragraphe:
    "<strong>C2 Projet Web</strong> est une agence de développement web qui se distingue par son approche personnalisée et son expertise locale. Voici pourquoi nous sommes le choix idéal pour les entreprises de Roanne :"
};

export const articles2 = [
  {
    listItem: [
      "<strong>Proximité locale: </strong> Notre équipe, basée à Roanne, comprend les besoins spécifiques des entreprises locales et propose des solutions sur mesure adaptées à votre secteur d’activité.",

      "<strong>Expertise SEO: </strong> Nous optimisons chaque site vitrine pour qu’il soit bien positionné sur les moteurs de recherche, notamment pour les requêtes locales.",

      "<strong>Rapidité d’exécution: </strong> Nous travaillons efficacement pour que votre site soit mis en ligne rapidement et commence à générer du trafic dès son lancement.",

      "<strong>Tarifs compétitifs: </strong> Nous proposons des offres adaptées à tous les budgets, garantissant un excellent rapport qualité-prix."
    ]
  }
];
import AgenceImg from "@/assets/images/Devanture-avec-Rempart-N-et-B-768x768.webp";
export const imagesSection4 = [
  {
    src: AgenceImg,
    alt: "text alternatif"
  }
];

import AntiquaireImg from "@/assets/images/ANTIQUAIRE-A-GENEVE-768x512.webp";
import PilLocationImg from "@/assets/images/PIL-LOCATION-768x512.webp";
import WeekSportImg from "@/assets/images/WEEKANDSPORT-768x512.webp";
import VillerestAssoImg from "@/assets/images/VILLERESTASSO-768x512.webp";
import VillerestImg from "@/assets/images/VILLEREST-768x512.webp";
import BijouteriePainImg from "@/assets/images/VENDRE-MON-OR-768x512.webp";
import UnEteFrancaisImg from "@/assets/images/UN-ETE-FRANCAIS-768x512.webp";
import TopModelImg from "@/assets/images/TOPMODELLEELUI-768x512.webp";
import LeFrancImg from "@/assets/images/THOMAS-LEFRANC-768x512.webp";
import SwincarImg from "@/assets/images/SWINCAR-A-DJERBA-768x512.webp";
import SportsClubImg from "@/assets/images/SPORTS-CLUBS-300x200.webp";
import RvContesImg from "@/assets/images/RVCONTES-768x512.webp";
import PlantierImg from "@/assets/images/PLANTIER-768x512.webp";
import OPSImg from "@/assets/images/OPS-768x512.webp";
import NavanImg from "@/assets/images/NAVAN-768x512.webp";
import MvfImg from "@/assets/images/MVF-768x512.webp";
import MattanaImg from "@/assets/images/MATTANA-768x512.webp";
import LoireLocationImg from "@/assets/images/LOIRE-AUVERGNE-768x512.webp";
import LoopingImg from "@/assets/images/LOOPING-768x512.webp";
import DribbleoImg from "@/assets/images/DRIBBLEO-768x512.webp";
import DomaineImg from "@/assets/images/DOMAINE-ST-MARTIN-768x512.webp";
import CRMImg from "@/assets/images/CRM-768x512.webp";
import CreatyssImg from "@/assets/images/CREATYSS-768x512.webp";
import LaFermeImg from "@/assets/images/LA-FERME-768x512.webp";
import BienEtreImg from "@/assets/images/INSTANT-BIEN-NAITRE-768x512.webp";
import GymImg from "@/assets/images/GYM-768x512.webp";
import GGRImg from "@/assets/images/GGR-768x512.webp";
import GuerpillonImg from "@/assets/images/F-GUERPILLON-768x512.webp";
import ExpertiseImg from "@/assets/images/EXPERTISE-BATIMENT-768x512.webp";
import ESMVolleyImg from "@/assets/images/ESSM-VOLLEY-768x512.webp";
import EntreprendreVillerestImg from "@/assets/images/ENTREPRENDRE-A-VILLEREST-768x512.webp";
import ElittsImg from "@/assets/images/ELITTIS-768x512.webp";
import DynamicClubImg from "@/assets/images/DYNAMIC-CLUB-ROANNE-768x512.webp";
import DurantImg from "@/assets/images/DURAND-768x512.webp";
import MartinionImg from "@/assets/images/CATHERINE-MARTINON-768x512.webp";
import AlizeImg from "@/assets/images/ALIZE-768x512.webp";
import LoisirsVillerestImg from "@/assets/images/ACLVV-2-768x512.webp";
import CabaretImg from "@/assets/images/CABARET-768x512.webp";
import CabanetteImg from "@/assets/images/CABANETTE-768x512.webp";
import BoyerImg from "@/assets/images/BOYER-768x512.webp";
import BabefiqueImg from "@/assets/images/BABEFIQUE-768x512.webp";
export const carrousel = [
  {
    imgSrc: AntiquaireImg,
    alt: "texte alternatif",
    title: "Antiquaire à Genève",
    href: "https://www.antiquaireageneve.ch/"
  },
  {
    imgSrc: PilLocationImg,
    alt: "texte alternatif",
    title: "Location Appartements",
    href: "https://www.roanne.pil-location-appartement.com/"
  },
  {
    imgSrc: WeekSportImg,
    alt: "texte alternatif",
    title: "Week&Sport",
    href: "https://weekandsport.com/"
  },
  {
    imgSrc: VillerestAssoImg,
    alt: "texte alternatif",
    title: "Plateforme associations",
    href: "https://www.villerestasso.fr/"
  },
  {
    imgSrc: VillerestImg,
    alt: "texte alternatif",
    title: "Marie de Villerest",
    href: "https://www.villerest.fr/"
  },
  {
    imgSrc: BijouteriePainImg,
    alt: "texte alternatif",
    title: "Bijouterie Pain",
    href: "https://www.vendremonor-et-argent.ch/"
  },
  {
    imgSrc: UnEteFrancaisImg,
    alt: "texte alternatif",
    title: "Pizzeria, Bar, Lounge",
    href: "https://www.unetefrancais.com/"
  },
  {
    imgSrc: TopModelImg,
    alt: "texte alternatif",
    title: "Top Mod'Elle&Lui",
    href: "https://www.topmodelleetlui.fr/"
  },
  {
    imgSrc: LeFrancImg,
    alt: "texte alternatif",
    title: "Magicien thomas Lefranc",
    href: "https://thomaslefrancmagicien.fr/"
  },
  {
    imgSrc: SwincarImg,
    alt: "texte alternatif",
    title: "Location Swincar à Djerba",
    href: "https://swincar-djerba.com/"
  },
  {
    imgSrc: SportsClubImg,
    alt: "texte alternatif",
    title: "Sports Clubs et Collectivités",
    href: "https://www.sports-clubs.fr/"
  },
  {
    imgSrc: RvContesImg,
    alt: "texte alternatif",
    title: "Rendez-vous contes en Roannais",
    href: "https://www.rendezvouscontes.fr/"
  },
  {
    imgSrc: PlantierImg,
    alt: "texte alternatif",
    title: "Établissements Plantier",
    href: "https://www.ets-plantier.com/"
  },
  {
    imgSrc: OPSImg,
    alt: "texte alternatif",
    title: "Opération Prévention Sécurité",
    href: "https://www.ops42.fr/"
  },
  {
    imgSrc: NavanImg,
    alt: "texte alternatif",
    title: "Navan",
    href: "https://www.location-fourgon-amenage.fr/"
  },
  {
    imgSrc: MvfImg,
    alt: "texte alternatif",
    title: "MVF Maisons Modulaires",
    href: "https://mvf-maisonsmodulaires.fr/"
  },
  {
    imgSrc: MattanaImg,
    alt: "texte alternatif",
    title: "Mattant Maçonnerie",
    href: "https://www.mattana.fr/"
  },
  {
    imgSrc: LoireLocationImg,
    alt: "texte alternatif",
    title: "Loire Auvergne Location",
    href: "https://loireauvergne-location.com/"
  },
  {
    imgSrc: LoopingImg,
    alt: "texte alternatif",
    title: "Looping Coaching",
    href: "https://www.looping-coaching.com/"
  },
  {
    imgSrc: DribbleoImg,
    alt: "texte alternatif",
    title: "Dribbleo",
    href: "https://www.dribbleo.com/"
  },
  {
    imgSrc: DomaineImg,
    alt: "texte alternatif",
    title: "Domaine de St-Martin de Boisy",
    href: "https://www.domainedesaintmartindeboisy.com/"
  },
  {
    imgSrc: CRMImg,
    alt: "texte alternatif",
    title: "Groupe CR&M",
    href: "https://conseilremuneration.fr/"
  },
  {
    imgSrc: CreatyssImg,
    alt: "texte alternatif",
    title: "Créatyss",
    href: "https://www.creatyss.com/"
  },
  {
    imgSrc: LaFermeImg,
    alt: "texte alternatif",
    title: "La Ferme Mielifique",
    href: "https://www.lafermemielifique.fr/"
  },
  {
    imgSrc: BienEtreImg,
    alt: "texte alternatif",
    title: "L'instant bien-naître de bébé",
    href: "https://instantbiennaitrebebe.com/"
  },
  {
    imgSrc: GymImg,
    alt: "texte alternatif",
    title: "Association Gymnastique de Villerest",
    href: "https://www.gymnastique-villerest.fr/"
  },
  {
    imgSrc: GGRImg,
    alt: "texte alternatif",
    title: "Club d'Entreprises du Sud Lyonnais",
    href: "https://membres.ggr.fr/"
  },
  {
    imgSrc: GuerpillonImg,
    alt: "texte alternatif",
    title: "Pâtisserie Frédéric Guerpillon",
    href: "https://fguerpillon-panissieres.fr/"
  },
  {
    imgSrc: ExpertiseImg,
    alt: "texte alternatif",
    title: "Expertise en bâtiment",
    href: "https://www.expertisebatiment.fr/"
  },
  {
    imgSrc: ESMVolleyImg,
    alt: "texte alternatif",
    title: "Entente Sportive St-Maurice Sur Dargoire",
    href: "https://www.essm-volley.fr/"
  },
  {
    imgSrc: EntreprendreVillerestImg,
    alt: "texte alternatif",
    title: "Entreprendre à Villerest",
    href: "https://www.entreprendreavillerest.fr/"
  },
  {
    imgSrc: ElittsImg,
    alt: "texte alternatif",
    title: "D-P ELITTS",
    href: "https://www.elittis.com/"
  },
  {
    imgSrc: DynamicClubImg,
    alt: "texte alternatif",
    title: "Dynamic Club de Roanne",
    href: "http://www.dynamic-club.fr/"
  },
  {
    imgSrc: DurantImg,
    alt: "texte alternatif",
    title: "Durant Nutrition Animal",
    href: "https://www.durand-na.com/"
  },
  {
    imgSrc: MartinionImg,
    alt: "texte alternatif",
    title: "Catherine Martinon EFT",
    href: "https://www.catherine-martinon-eft.com/"
  },
  {
    imgSrc: AlizeImg,
    alt: "texte alternatif",
    title: "Alizé Orthopédie",
    href: "https://www.alizeorthopedie.fr/"
  },
  {
    imgSrc: LoisirsVillerestImg,
    alt: "texte alternatif",
    title: "Centre de Loisirs de Villerest",
    href: "https://www.aclvv.fr/"
  },
  {
    imgSrc: CabaretImg,
    alt: "texte alternatif",
    title: "Cabaret L'Ecrin à Bijou",
    href: "https://www.cabaret-lecrinabijou.com/"
  },
  {
    imgSrc: CabanetteImg,
    alt: "texte alternatif",
    title: "Cabanette",
    href: "https://www.cabanetteinsolite.fr/"
  },
  {
    imgSrc: BoyerImg,
    alt: "texte alternatif",
    title: "Boyer Store et Fermetures",
    href: "https://www.boyer-stores.com/"
  },
  {
    imgSrc: BabefiqueImg,
    alt: "texte alternatif",
    title: "Babéfique",
    href: "https://www.babefique.fr/"
  }
];
