import { Card, CardContent } from "../card";
import { Link } from "react-router-dom";
import { CardListSectionData } from "@/datas/data";
import SectionWrapper from "./SectionWrapper";
import clsx from "clsx";

interface SectionListItemComponentProps {
  data: CardListSectionData[];
  sectionIndex: number; // Ajout de l'index pour sélectionner une section spécifique
}

function SectionListItemComponent({
  data,
  sectionIndex
}: SectionListItemComponentProps) {
  // Vérification de l'index pour éviter les erreurs
  if (!data[sectionIndex]) {
    return <p className="text-red-500">Section introuvable</p>;
  }

  const section = data[sectionIndex]; // Sélectionne la section souhaitée

  return (
    <SectionWrapper className=" bg-slate-100">
      <div className="space-y-10">
        {section.title && (
          <h3 className="pt-6 text-center text-primary-color">
            {section.title}
          </h3>
        )}
        {section.subtitle && (
          <p className="text-center text-black">{section.subtitle}</p>
        )}

        <ul className="flex flex-col items-center justify-around lg:flex-row lg:items-baseline">
          {section.items.map((item, index) => (
            <li
              key={index}
              className="w-full sm:w-1/2 lg:w-1/5">
              {item.href ? (
                <Link to={item.href}>
                  <Card
                    className={clsx(
                      "flex flex-col items-center justify-center space-y-6 border-none shadow-none py-4 h-full",
                      item.href &&
                        "hover:bg-slate-200 hover:shadow-inner-strong"
                    )}>
                    <div
                      className={clsx(
                        "flex items-center justify-center w-20 h-20 rounded-full",
                        sectionIndex === 1 ? "bg-primary-color " : "bg-black"
                      )}>
                      {item.logo}
                    </div>
                    <CardContent className="space-y-4 text-center">
                      {item.title && (
                        <h4 className="text-black">{item.title}</h4>
                      )}
                      {item.text && <p className="text-black">{item.text}</p>}
                    </CardContent>
                  </Card>
                </Link>
              ) : (
                <Card className="flex flex-col items-center h-full py-4 space-y-6 border-none shadow-none">
                  {typeof item.logo === "string" ? (
                    <img
                      className="w-20 h-20"
                      src={item.logo}
                      alt=""
                    />
                  ) : (
                    <div
                      className={clsx(
                        "flex items-center justify-center w-20 h-20 rounded-full",
                        sectionIndex === 1 ? "bg-primary-color" : "bg-black"
                      )}>
                      {item.logo}
                    </div>
                  )}

                  <CardContent className="space-y-4 text-center">
                    {item.title && <h4 className="text-black">{item.title}</h4>}
                    {item.text && <p className="text-black">{item.text}</p>}
                  </CardContent>
                </Card>
              )}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export default SectionListItemComponent;
