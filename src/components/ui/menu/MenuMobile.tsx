import { menuItems, MenuProps } from "@/lib/menuDatas";
import { AlignJustify, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function MenuMobile({ toggleSubMenu, openSubMenu }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="md:hidden"
      ref={menuRef}>
      <button
        aria-label="Ouvrir le menu"
        className="p-2 transition-all duration-500 ease-in-out border rounded-lg border-primary-color hover:bg-primary-color"
        onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify
          size={25}
          color="white"
        />
      </button>

      <nav
        role="menu"
        className={`absolute left-0 w-screen mt-14 uppercase ${
          isOpen ? "opacity-100" : "opacity-0"
        } bg-[#1B1B1B] text-grey-text transition-all duration-700 ease-in-out`}>
        <ul>
          {menuItems.map(item => (
            <li
              className="hover:bg-primary-color "
              key={item.label}
              aria-label={item.label}>
              <button
                aria-expanded={openSubMenu[item.label]}
                aria-controls={`submenu-${item.label}`}
                onClick={() => toggleSubMenu(item.label)}
                className="flex justify-center w-full py-2 uppercase">
                {item.icon && <item.icon className="mr-2" />}
                {item.label}
                {item.hasSubItems && (
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openSubMenu[item.label] ? "transform rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {item.subItems && (
                <ul
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSubMenu[item.label] ? "max-h-96" : "max-h-0"
                  } `}>
                  {item.subItems.map(subItem => (
                    <li
                      key={subItem.label}
                      className="flex items-center justify-center py-2 bg-black hover:bg-[#1B1B1B] hover:text-primary-color">
                      {subItem.iconSrc && (
                        <img
                          src={subItem.iconSrc}
                          alt={`${subItem.label} icon`}
                          className="w-6 h-6 mr-2 hover:fill-black"
                        />
                      )}
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MenuMobile;
