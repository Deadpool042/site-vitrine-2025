import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";

export const notFoundData: PageData = {
  hero: {
    variant: "other",
    title: <>Page non trouvée</>,
    button: (
      <Link
        to="/"
        rel="no-referer">
        <Button
          className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
          size={"lg"}>
          Retour à l'accueil
        </Button>
      </Link>
    )
  }
};
