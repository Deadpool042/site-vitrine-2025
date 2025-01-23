import { menuItems, MenuProps } from "@/lib/menuDatas";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function MenuDesktop({ toggleSubMenu, openSubMenu }: MenuProps) {
  return (
    <nav>
      <ul className="hidden mt-20 uppercase text-grey-text md:flex md:space-x-2">
        {menuItems.map(item => (
          <li
            key={item.label}
            aria-label={item.label}
            className="px-1 transition-all ease-in-out rounded-md hover:bg-primary-color hover:text-black hover:shadow-inner-strong">
            <button
              aria-expanded={openSubMenu[item.label]}
              aria-controls={`submenu-${item.label}`}
              aria-haspopup={item.hasSubItems ? "true" : "false"}
              onClick={() => toggleSubMenu(item.label)}
              className="flex justify-center w-full px-1 py-2 uppercase transition-all ease-in-out text-md lg:text-xl xl:text-2xl ">
              {item.path ? (
                // Si l'élément a un lien, utiliser <Link>
                <Link
                  to={item.path}
                  className="flex items-center">
                  {item.icon && <item.icon className="mr-2" />}
                  {item.label}
                </Link>
              ) : (
                // Sinon, afficher un <span> non cliquable pour les sous-menus
                <span className="flex items-center cursor-pointer">
                  {item.icon && <item.icon className="mr-2" />}
                  {item.label}
                  {item.hasSubItems && (
                    <ChevronDown
                      className={`ml-2 transition-transform duration-300 ${
                        openSubMenu[item.label] ? "transform rotate-180" : ""
                      }`}
                    />
                  )}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuDesktop;
