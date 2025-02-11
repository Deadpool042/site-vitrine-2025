import { LucideIcon, Mic, Handshake } from "lucide-react";

// Importation des icônes SVG
import appIcon from "@/assets/icons/appIcon.svg";
import socialMediaIcon from "@/assets/icons/socialMediaIcon.svg";
import strategyIcon from "@/assets/icons/strategyIcon.svg";
import studioIcon from "@/assets/icons/studioIcon.svg";
import seoIcon from "@/assets/icons/seoIcon.svg";
import brandIdentityIcon from "@/assets/icons/brandIdentityIcon.svg";

// Définition des interfaces
export interface SubItem {
  label: string;
  iconSrc?: string;
  path: string;
}

export interface MenuItem {
  label: string;
  subItems?: SubItem[];
  icon?: LucideIcon;
  hasSubItems?: boolean;
  path?: string;
}

export interface MenuProps {
  toggleSubMenu: (label: string) => void;
  openSubMenu: { [key: string]: boolean };
  openMenu?: boolean;
  setOpenMenu?: boolean;
}

// Définition des données des menus
export const menuItems: MenuItem[] = [
  { label: "l'agence", path: "/lagence-de-communication-c2-projet-web" },
  {
    label: "les expertises",
    hasSubItems: true,
    subItems: [
      {
        label: "Site & applis",
        iconSrc: appIcon,
        path: "/creation-site-web-roanne"
      },
      {
        label: "Réseaux sociaux",
        iconSrc: socialMediaIcon,
        path: "/gestion-reseaux-sociaux-roanne"
      },
      {
        label: "Conseil et stratégie",
        iconSrc: strategyIcon,
        path: "/conseil-communication-roanne"
      },
      {
        label: "Studio",
        iconSrc: studioIcon,
        path: "/agence-design-graphique-a-roanne"
      },
      {
        label: "Référencement & SEO",
        iconSrc: seoIcon,
        path: "/communication-digitale-seo-roanne"
      },
      {
        label: "Identité de marque",
        iconSrc: brandIdentityIcon,
        path: "/identite-de-marque"
      }
    ]
  },
  { label: "animation", icon: Mic, path: "/animation-evenement-roanne/" },
  {
    label: "nos créations",
    icon: Handshake,
    path: "/ils-font-confiance-c2projetweb"
  },
  { label: "contact", path: "/contact" }
];
