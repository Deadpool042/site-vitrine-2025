import { Phone } from "lucide-react";
import { Button } from "./ui/Button";
import MenuMobile from "./ui/menu/MenuMobile";
import { useState } from "react";
import MenuDesktop from "./ui/menu/MenuDesktop";
import NavComponentDesktop from "./ui/menu/NavComponentDesktop";

function Header() {
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleSubMenuToggle = (label: string) => {
    setOpenSubMenus(prevState => ({
      ...prevState,
      [label]: !prevState[label]
    }));
  };

  return (
    <div className="flex flex-col ">
      <header className="flex flex-col items-center pt-2 m-3 space-y-5 sm:flex-row sm:justify-between">
        <a
          className="md:absolute md:top-4"
          href="/"
          aria-label="Page d'accueil">
          <img
            className="w-20 md:w-16"
            src="/logoC2-bg-remove.webp"
            alt="Logo C2 Projet Web"
          />
        </a>
        <div
          aria-label="Navigation principale"
          className="flex flex-col items-center space-x-2 space-y-2 sm:items-end md:flex-row md:mx-auto">
          <MenuMobile
            toggleSubMenu={handleSubMenuToggle}
            openSubMenu={openSubMenus}
          />
          <MenuDesktop
            toggleSubMenu={handleSubMenuToggle}
            openSubMenu={openSubMenus}
          />
          <Button
            asChild
            className="text-black transition-all duration-500 ease-in-out border border-black top-8 right-4 md:absolute bg-primary-color hover:text-white hover:border-primary-color">
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
        openSubMenu={openSubMenus}
      />
    </div>
  );
}

export default Header;
