import { useMediaQuery } from "@/lib/useMediaQuey";
import { Card, CardContent, CardTitle } from "../card";
import { menuItems, MenuProps } from "@/lib/menuDatas";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavComponentDesktop({
  toggleSubMenu,
  openSubMenu,
  openMenu
}: MenuProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Affiche uniquement sur les écrans ≥ 768px
  const isMobile = useMediaQuery("(max-width: 768px)"); // Affiche uniquement sur les écrans ≥ 768px

  const closeMenu = () => {
    openMenu; // Ferme le menu mobile
  };

  const subItems = menuItems.map(
    item =>
      item.subItems &&
      item.subItems.map(subItem => (
        <li
          className="w-full "
          key={subItem.label}
          onClick={() => {
            toggleSubMenu?.(item.label);
            closeMenu(); // Fermer le menu lors du clic
          }}>
          <Link to={subItem.path}>
            <Card className=" transition-all duration-300 ease-in-out bg-transparent border-none hover:bg-[#1B1B1B] h-40 flex  flex-col justify-center ">
              <CardContent className="p-2">
                <img
                  src={subItem.iconSrc}
                  alt={subItem.label}
                  width={48}
                  className="mx-auto "
                />
                <CardTitle className="my-3 text-center uppercase text-md text-primary-color">
                  {subItem.label}
                </CardTitle>
              </CardContent>
            </Card>
          </Link>
        </li>
      ))
  );

  const menuMobile = (
    <ul className="flex flex-col text-center uppercase bg-[#1B1B1B] ">
      {menuItems.map(menuItem => (
        <li
          aria-label={menuItem.label}
          key={menuItem.label}
          className="text-grey-text hover:bg-primary-color hover:shadow-inner-strong ">
          <button
            aria-expanded={!!openSubMenu[menuItem.label]}
            aria-controls={`submenu-${menuItem.label}`}
            onClick={() => toggleSubMenu(menuItem.label)}
            className="flex justify-center w-full py-2 uppercase"
            aria-haspopup={menuItem.hasSubItems ? "true" : "false"}>
            <Link
              onClick={closeMenu}
              to={menuItem.path || "#"}
              className="flex">
              {menuItem.icon && <menuItem.icon className="mr-2" />}
              {menuItem.label}
              {menuItem.hasSubItems && (
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openSubMenu[menuItem.label] ? "transform rotate-180" : ""
                  }`}
                />
              )}
            </Link>
          </button>
          {menuItem.subItems && (
            <ul
              id={`submenu-${menuItem.label}`}
              role="menu"
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSubMenu[menuItem.label] ? "max-h-96" : "max-h-0"
              }`}
              aria-hidden={!openSubMenu[menuItem.label]}>
              {menuItem.subItems.map(subItem => (
                <li
                  key={subItem.label}
                  role="menuitem"
                  className={` flex items-center justify-center py-2 bg-black hover:bg-[#1B1B1B]  hover:text-primary-color `}>
                  <Link
                    to={subItem.path}
                    onClick={closeMenu}
                    className="flex justify-center w-full">
                    {subItem.iconSrc && (
                      <img
                        src={subItem.iconSrc}
                        alt={`${subItem.label} icon`}
                        className="w-6 h-6 mr-2"
                      />
                    )}
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
  // console.log(subItems.map(item => console.log(item)));
  return (
    // <div className="h-40 opacity-0 md:flex md:opacity-100">
    <>
      {isDesktop && openSubMenu["les expertises"] && (
        <motion.div
          className={`${
            openSubMenu["les expertises"] ? "max-h-44" : ""
          } max-w-[1600px] mx-auto`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          exit={{ opacity: 0, scale: 0 }}
          key="nav">
          <nav className="px-2">
            {/* className={`flex justify-center ${
            openSubMenu["les expertises"]
            ? " max-h-44 opacity-100 pointer-events-auto "
            : " min-h-0 opacity-0 pointer-events-none"
            } transition-all duration-700 ease-in-out  `}> */}

            <ul className="flex ">{subItems}</ul>
          </nav>
        </motion.div>
      )}
      {isMobile && (
        <nav
          className={` ${
            openMenu && openSubMenu
              ? "max-h-screen opacity-100 "
              : "max-h-0 opacity-0"
          } transition-all duration-700 ease-in-out overflow-hidden border-b-2 border-primary-color shadow-md `}>
          {menuMobile}
        </nav>
      )}
    </>
  );
}

export default NavComponentDesktop;
