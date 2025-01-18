import { useMediaQuery } from "@/lib/useMediaQuey";
import { Card, CardContent, CardTitle } from "../card";
import { menuItems, MenuProps } from "@/lib/menuDatas";

function NavComponentDesktop({ toggleSubMenu, openSubMenu }: MenuProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)"); // Affiche uniquement sur les écrans ≥ 768px

  const subItems = menuItems.map(
    item =>
      item.subItems &&
      item.subItems.map(subItem => (
        <li
          className=""
          key={subItem.label}
          onClick={() => toggleSubMenu(item.label)}>
          <Card className="flex items-center justify-center w-40 h-40 transition-all duration-300 ease-in-out bg-transparent border-none hover:bg-[#1B1B1B]">
            <CardContent className="flex flex-col items-center justify-center gap-3">
              <img
                src={subItem.iconSrc}
                alt={subItem.label}
                width={50}
              />
              <CardTitle className="text-center uppercase text-md text-primary-color">
                {subItem.label}
              </CardTitle>
            </CardContent>
          </Card>
        </li>
      ))
  );

  // console.log(subItems.map(item => console.log(item)));
  return (
    // <div className="h-40 opacity-0 md:flex md:opacity-100">
    <>
      {isDesktop && (
        <div
          className={` ${
            openSubMenu["les expertises"]
              ? "h-40 opacity-100 "
              : "  h-0 opacity-0"
          } transition-all duration-500 ease-in-out`}>
          <ul className="flex items-center justify-center m-auto">
            {subItems}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavComponentDesktop;
