// /src/components/ui/layout/HeaderComponent.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu as MenuIcon, X as XIcon, ChevronDown } from "lucide-react";
import logoC2 from "@/assets/icons/logoC2.webp";
import { Button } from "../Button"; // Composant shadcn/ui

function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/80 border-primary-color backdrop-blur-md">
      <div className="px-4 mx-auto max-w-[1440px] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 transition-all duration-300 ease-in-out sm:h-20 md:h-24 lg:h-28 xl:h-32">
          {/* Logo à gauche */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logoC2}
                alt="Logo de l'agence"
                className="w-auto h-8 transition-all duration-300 ease-in-out sm:h-10 md:h-12 lg:h-16 xl:h-24"
              />
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden space-x-6 text-sm md:flex lg:text-lg xl:text-xl">
            <Link
              to="#agence"
              className="text-gray-200 uppercase hover:text-white">
              L'agence
            </Link>

            {/* Menu "Les expertises" avec Radix et une icône ChevronDown dans le trigger */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center text-gray-200 uppercase hover:text-white focus:outline-none">
                <span>Les expertises</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="py-2 mt-1 bg-white border border-gray-200 rounded shadow-lg">
                <DropdownMenu.Item asChild>
                  <Link
                    to="#expertise1"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Expertise 1
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    to="#expertise2"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Expertise 2
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    to="#expertise3"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Expertise 3
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            <Link
              to="#animation"
              className="text-gray-200 uppercase hover:text-white">
              Animation
            </Link>
            <Link
              to="#creations"
              className="text-gray-200 uppercase hover:text-white">
              Nos créations
            </Link>
            <Link
              to="#contact"
              className="text-gray-200 uppercase hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Bouton téléphone (Desktop) avec le Button de shadcn/ui */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="primary">
              <Link
                to="tel:+33123456789"
                className="uppercase">
                +33 1 23 45 67 89
              </Link>
            </Button>
          </div>

          {/* Bouton menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 focus:outline-none">
              {mobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Mobile */}
      {mobileMenuOpen && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <nav className="px-4 pt-4 pb-2 space-y-2">
            <Link
              to="#agence"
              className="block text-gray-700 hover:text-gray-900">
              L'agence
            </Link>
            <div>
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900">
                <span>Les expertises</span>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    mobileSubmenuOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileSubmenuOpen && (
                <div className="pl-4 mt-2 space-y-1">
                  <Link
                    to="#expertise1"
                    className="block text-gray-600 hover:text-gray-800">
                    Expertise 1
                  </Link>
                  <Link
                    to="#expertise2"
                    className="block text-gray-600 hover:text-gray-800">
                    Expertise 2
                  </Link>
                  <Link
                    to="#expertise3"
                    className="block text-gray-600 hover:text-gray-800">
                    Expertise 3
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#animation"
              className="block text-gray-700 hover:text-gray-900">
              Animation
            </Link>
            <Link
              to="#creations"
              className="block text-gray-700 hover:text-gray-900">
              Nos créations
            </Link>
            <Link
              to="#contact"
              className="block text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link
              to="tel:+33123456789"
              className="block px-4 py-2 text-sm text-center text-white uppercase bg-blue-600 rounded-md hover:bg-blue-700">
              +33 1 23 45 67 89
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;
