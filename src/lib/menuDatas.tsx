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
}

export interface MenuItem {
  label: string;
  subItems?: SubItem[];
  icon?: LucideIcon;
  hasSubItems?: boolean;
}

export interface MenuProps {
  toggleSubMenu: (label: string) => void;
  openSubMenu: { [key: string]: boolean };
}

// Définition des données des menus
export const menuItems: MenuItem[] = [
  { label: "l'agence" },
  {
    label: "les expertises",
    hasSubItems: true,
    subItems: [
      { label: "Site & applis", iconSrc: appIcon },
      { label: "Réseaux sociaux", iconSrc: socialMediaIcon },
      { label: "Conseil et stratégie", iconSrc: strategyIcon },
      { label: "Studio", iconSrc: studioIcon },
      { label: "Référencement & SEO", iconSrc: seoIcon },
      { label: "Identité de marque", iconSrc: brandIdentityIcon }
    ]
  },
  { label: "animation", icon: Mic },
  { label: "ils nous font confiance", icon: Handshake },
  { label: "contact" }
];
