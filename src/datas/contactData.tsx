import { Button } from "@/components/ui/Button";
import { PageData } from "./data";
import { Phone } from "lucide-react";
import animationLogo from "@/assets/icons/animation.svg";

export const contactData: PageData = {
  hero: {
    logo: animationLogo,
    fallbackLogo: "/assets/logos/animation.svg",
    alt: "",
    title: "Contact & Devis",
    subtitle: "Une équipe à votre écoute",
    variant: "other",
    button: (
      <Button
        asChild
        variant="primary">
        <a
          href="tel:+33477786988"
          aria-label="Appeler le 04 77 78 69 88">
          <Phone
            className="mr-2"
            aria-hidden="true"
          />
          04 77 78 69 88
        </a>
      </Button>
    )
  }
};
