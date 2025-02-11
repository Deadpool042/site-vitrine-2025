import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/icons/appIcon.svg";

export const siteEcommerceData: PageData = {
  hero: {
    logo: logo,

    fallbackLogo: "/assets/logos/appIcon.svg",
    alt: "",
    title: <>Site e-commerce</>,
    subtitle: <>Création de site e-commerce à Roanne et alentours</>,
    text: (
      <>
        <span className="font-semibold">
          Pourquoi faire appel à une agence pour la création de site e-commerce
          à Roanne et alentours ?
        </span>
        <br />
        <br />
        Dans un monde de plus en plus digitalisé, un{" "}
        <strong>site e-commerce</strong> est devenu indispensable pour les
        entreprises locales souhaitant vendre leurs produits ou services en
        ligne. Que vous soyez une boutique physique cherchant à étendre votre
        portée ou une entreprise qui se lance uniquement dans le commerce en
        ligne, la création d’un site e-commerce est une étape clé pour votre
        succès. <strong>C2 Projet Web</strong>, agence spécialisée basée à
        Villerest, à quelques kilomètres de Roanne, propose des solutions de
        création de sites e-commerce sur mesure, adaptées à vos besoins et
        basées sur des plateformes reconnues comme <strong>Prestashop</strong>,{" "}
        <strong>Shopify</strong> et
        <strong>WordPress (WooCommerce) </strong>
      </>
    ),
    hashtags: (
      <>
        #site web #ux design #site vitrine #ecommerce #prestashop #shop
        #commerce #wordpress #surmesure #développementweb #seo
        #hébergementmaintenance #mobilefirst
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
