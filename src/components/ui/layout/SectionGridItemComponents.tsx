import React from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { CardListSectionData } from "@/datas/data";
import SectionWrapper from "./SectionWrapper";

// Optionnel : une interface générique pour regrouper le titre et les items

export interface SectionGridData<T> {
  title: React.ReactNode;
  items: T[];
}

interface SectionGridItemComponentsProps {
  data: CardListSectionData[];
}

function SectionGridItemComponents({ data }: SectionGridItemComponentsProps) {
  return (
    <SectionWrapper>
      {/* Affichage du titre provenant de l'objet data */}
      {data.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="space-y-10">
          <h3 className="flex flex-wrap items-center justify-center gap-2 text-4xl font-semibold transition-all duration-300 ease-in-out md:justify-start">
            {section.title}
          </h3>

          <ul className="transition-all duration-300 ease-in-out md:grid md:grid-cols-2">
            {section.items.map((item, index) => (
              <li
                key={index}
                className="">
                <Link to={item.href ?? ""}>
                  <Card className="flex flex-col items-center p-4 space-y-4 bg-none hover:bg-[#1B1B1B] transition-all duration-300 ease-in-out  md:flex-row hover:shadow-inner-strong">
                    {typeof item.logo === "string" ? (
                      <img
                        // className="w-16 h-16"
                        width={50}
                        src={item.logo}
                        alt={item.alt ?? ""}
                      />
                    ) : (
                      // Si item.logo n'est pas une chaîne, on l'affiche tel quel (par exemple, une icône en SVG ou un autre composant React)
                      item.logo
                    )}

                    <CardContent className="flex flex-col items-center space-y-4 md:items-start">
                      {item.title && (
                        <h4 className="mb-2 text-xl font-semibold uppercase text-primary-color">
                          {item.title}
                        </h4>
                      )}
                      {item.text && (
                        <p className="mb-4 leading-6 text-center md:text-start">
                          {item.text}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* Mapping sur le tableau des items */}
    </SectionWrapper>
  );
}

export default SectionGridItemComponents;
