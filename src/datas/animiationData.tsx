import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import logo from "@/assets/icons/animation.svg";

export const animationData: PageData = {
  hero: {
    logo: logo,

    fallbackLogo: "/assets/logos/animation.svg",
    alt: "",
    title: <>Faites briller votre entreprise</>,
    subtitle: (
      <>Animation d'événements à Roanne et alentours avec C2 Projet Web</>
    ),
    text: (
      <>
        Pour que votre événement soit mémorable, l’animation joue un rôle
        essentiel. Chez <strong>C2 Projet Web</strong>, dirigée par{" "}
        <strong>Christophe Puleri</strong>, nous sommes spécialisés dans
        l’animation d’événements à Roanne et dans ses alentours. Que ce soit
        pour un <strong>événement d’entreprise</strong> ou d’une{" "}
        <strong>collectivité</strong>, notre objectif est de créer une
        atmosphère engageante et divertissante, adaptée à vos besoins et à ceux
        de vos invités.
      </>
    ),
    hashtags: (
      <>#event #animation #seminaire #entreprise #organisation #logistique</>
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
