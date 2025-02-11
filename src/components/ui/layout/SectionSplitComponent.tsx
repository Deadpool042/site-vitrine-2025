import { SplitSectionData } from "@/datas/data";
import SectionWrapper from "@/components/ui/layout/SectionWrapper";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface SectionSplitComponentProps {
  data: SplitSectionData[];
  sectionIndex: number; // Ajout de l'index pour sélectionner une section spécifique
}

function SectionSplitComponent({
  data,
  sectionIndex
}: SectionSplitComponentProps) {
  // Vérification de l'index pour éviter les erreurs
  if (!data[sectionIndex]) {
    return <p className="text-red-500">Section introuvable</p>;
  }

  const section = data[sectionIndex]; // Sélectionne la section souhaitée

  return (
    <SectionWrapper>
      <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:items-center">
        {/* Partie texte */}
        <div className="flex flex-col space-y-6 md:basis-1/2">
          {section.title && (
            <h3 className="text-primary-color">{section.title}</h3>
          )}
          {section.subtitle && <p>{section.subtitle}</p>}
          {section.text && <div className="space-y-4">{section.text}</div>}
          {section.button && <div>{section.button}</div>}
        </div>

        {/* Partie média (carte ou photos) */}
        <div className="md:basis-1/2">
          {section.type === "split" && section.media?.type === "map" && (
            <iframe
              src={section.media.content}
              className="w-full h-96 md:max-h-[400px] rounded-md shadow-md"
              allowFullScreen
              loading="lazy"></iframe>
          )}

          {section.media?.type === "photos" && (
            <div className="flex flex-col items-center gap-6">
              {section.media.content.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="flex flex-col items-center space-y-4">
                  <Link
                    className={clsx(
                      { "cursor-not-allowed pointer-events-none": !image.href },
                      "hover:opacity-70"
                    )}
                    to={image.href ?? ""}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img
                      className="w-full max-w-sm rounded-md"
                      src={image.imageSrc}
                      alt={image.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default SectionSplitComponent;
