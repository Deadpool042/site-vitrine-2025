import { menuItems, MenuProps } from "@/lib/menuDatas";
import { ChevronDown } from "lucide-react";

function MenuDesktop({ toggleSubMenu, openSubMenu }: MenuProps) {
  return (
    <nav>
      <ul className="hidden mt-10 uppercase text-grey-text md:flex md:space-x-2">
        {menuItems.map(item => (
          <li
            onClick={() => toggleSubMenu}
            key={item.label}
            className="px-1 transition-all duration-500 ease-in-out rounded-md hover:bg-primary-color hover:text-black">
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
            {/* {item.label} */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuDesktop;
