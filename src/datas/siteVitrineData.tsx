import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/icons/appIcon.svg";

export const siteVitrineData: PageData = {
  hero: {
    logo: logo,

    fallbackLogo: "/assets/logos/appIcon.svg",
    alt: "",
    title: <>Sites internet</>,
    subtitle: <>Création de site internet à Roanne et alentours</>,
    text: (
      <>
        À l’ère du numérique, opter pour <strong>C2 Projet Web</strong> pour
        créer votre <strong>site internet</strong> à Roanne et alentours est
        devenu indispensable pour les entreprises souhaitant améliorer leur
        visibilité et attirer de nouveaux clients. Un site vitrine est une
        solution idéale pour présenter vos services, produits, et informations
        clés à vos prospects, sans la complexité d’une boutique en ligne.{" "}
        <strong>C2 Projet Web</strong>, une agence basée à Roanne, propose des
        services de création de sites vitrines adaptés aux entreprises locales
        pour renforcer leur présence sur Internet et optimiser leur
        référencement naturel (SEO)
      </>
    ),
    hashtags: (
      <>
        #site web #ux design #site vitrine #ecommerce #wordpress #surmesure
        #développementweb #seo #hébergementmaintenance #mobilefirst
      </>
    ),
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
    ),
    variant: "other"
  }
};
