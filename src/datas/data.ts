export interface HeroData {
  logo?: string;
  fallbackLogo?: string;
  alt?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  text?: React.ReactNode;
  hashtags?: React.ReactNode;
  button?: React.ReactNode;
  variant: "home" | "other";
}

// Pour la partie média de la section split, qui peut être une Google Map ou une galerie de photos
export type MediaType = "map" | "photos";

export interface SingleSection {
  type: "single";
  variant: "default" | "alternative";
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  text?: React.ReactNode;
  list?: React.ReactNode;
  button?: React.ReactNode;
  map?: string;
  images?: PhotoItem[];
  tabs?: TabItem[];
}

export interface TabItem {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  text: React.ReactNode;
}

export interface PhotoItem {
  imageSrc: string;
  alt?: string;
  href?: string; // optionnel, si la photo est cliquable
  text?: React.ReactNode;
}

export type SplitSectionMedia =
  | { type: "map"; content: string }
  | { type: "photos"; content: PhotoItem[] };

// Interface pour une section split
export interface SplitSectionData {
  type: "split"; // propriété discriminante
  title: React.ReactNode; // titre de la section split
  subtitle?: React.ReactNode;
  text?: React.ReactNode; // texte principal (peut inclure des <ul><li> etc.)
  button?: React.ReactNode; // bouton éventuel
  media?: SplitSectionMedia; // média associé (map ou photos)
}

// --- SECTION CARD LIST ---

// Interface pour un item de card
export interface CardItem {
  logo?: string | React.ReactNode;
  alt?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  href?: string;
}

// Interface pour une section de liste de cards
export interface CardListSectionData {
  type: "cards"; // propriété discriminante
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  text?: React.ReactNode;
  items: CardItem[];
}

// Section avec 2 images affichées côte à côte (50/50)
export interface DualImageSectionData {
  type: "dualImages";
  title?: React.ReactNode;
  text?: React.ReactNode;
  // On utilise ici PhotoItem pour bénéficier des informations (imageSrc, alt, etc.)
  imageLeft: PhotoItem;
  imageRight: PhotoItem;
}
// Section avec une liste de cartes de photos cliquables
export interface PhotoCardItem {
  imageSrc: string;
  alt: string;
  href: React.ReactNode;
  text?: React.ReactNode;
}

export interface PhotoCardListSectionData {
  type: "photoCards";
  title: React.ReactNode;
  items: PhotoCardItem[];
}

export interface PageData {
  hero: HeroData;
  splitSections?: SplitSectionData[]; // Plusieurs sections split possibles
  cardSections?: CardListSectionData[]; // Sections de cards
  dualImageSections?: DualImageSectionData[]; // Sections avec 2 images côte à côte
  photoCardSections?: PhotoCardListSectionData[]; // Sections avec liste de cartes photo cliquables
  singleSections?: SingleSection[];
  // Vous pouvez ajouter d'autres sections (testimonials, contact, etc.) selon vos besoins.
}
