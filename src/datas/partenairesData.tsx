import { Link } from "react-router-dom";
import { PageData } from "./data";
import LogoCreation from "@/assets/icons/creations.svg";
import { Button } from "@/components/ui/Button";
export const partenairesData: PageData = {
  hero: {
    variant: "other",
    logo: LogoCreation,
    alt: "",
    fallbackLogo: "/assets/icons/creations.svg",
    title: <>Nos Créations Orignales</>,
    subtitle: <>Ils sont dans la Team C2 Projet Web</>,
    button: (
      <Link
        to="/contact"
        rel="no-referer">
        <Button
          className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
          size={"lg"}>
          contact
        </Button>
      </Link>
    )
  }
};
