import { AlignJustify, Phone } from "lucide-react";
import { Button } from "./ui/Button";
import { useState } from "react";
import MenuDesktop from "./ui/menu/MenuDesktop";
import NavComponentDesktop from "./ui/menu/NavComponentDesktop";
import LogoC2 from "@/assets/icons/logoC2.webp";
import { toggle } from "@/lib/toggle";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@/lib/useMediaQuey";

function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Affiche uniquement sur les écrans ≥ 768px

  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const [isOpen, setIsOpen] = useState(false);
  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenus(prevState => ({
      ...prevState,
      [label]: !prevState[label]
    }));
  };

  return (
    <div
      className={`sticky top-0 flex flex-col bg-black/80 backdrop-blur-lg 
      } w-full mx-auto z-50`}>
      <header
        className={`flex flex-col items-center pt-2 m-3 space-y-5 sm:flex-row sm:justify-between ${
          isDesktop && openSubMenus["les expertises"] ? "mb-10" : ""
        } transition-all duration-300 ease-in-out md:max-2xl justify-center`}>
        <Link
          className="md:absolute md:top-4"
          to="/"
          aria-label="Page d'accueil">
          <img
            className="w-20 md:w-16"
            src={LogoC2}
            alt="Logo C2 Projet Web"
          />
        </Link>
        <div
          aria-label="Navigation principale "
          className="flex flex-col items-center space-x-2 space-y-2 sm:items-end md:flex-row md:mx-auto">
          <div
            className={`md:hidden ${
              isOpen ? "" : ""
            } transition-all duration-500 ease-in-out `}>
            <button
              aria-label="Ouvrir le menu"
              aria-haspopup="true"
              className="p-2 transition-all duration-500 ease-in-out border rounded-lg border-primary-color hover:bg-primary-color"
              onClick={() => toggle(setIsOpen)}>
              <AlignJustify
                size={25}
                color="white"
              />
            </button>
          </div>
          <MenuDesktop
            toggleSubMenu={handleSubMenuToggle}
            openSubMenu={openSubMenus}
          />
          <Button
            asChild
            variant="primary"
            className=" top-8 right-4 md:absolute">
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
        </div>
      </header>
      <NavComponentDesktop
        toggleSubMenu={handleSubMenuToggle}
        openMenu={isOpen}
        openSubMenu={openSubMenus}
      />
    </div>
  );
}

export default Header;
