import { SingleSection } from "@/datas/data";
import SectionWrapper from "./SectionWrapper";

interface SingleSectionComponentProps {
  data: SingleSection[];
}

function SingleSectionComponent({ data }: SingleSectionComponentProps) {
  return (
    <SectionWrapper>
      {data.map((section, sectionIndex) =>
        section.variant === "default" ? (
          <div
            key={sectionIndex}
            className="space-y-6 text-center">
            {section.text && <p className="text-center">{section.text}</p>}
            {section.map && section.map && (
              <iframe
                src={section.map}
                className="w-full h-96 md:max-h-[400px] rounded-md shadow-md"
                allowFullScreen
                loading="lazy"></iframe>
            )}
            {section.title && (
              <h2 className="text-primary-color">{section.title}</h2>
            )}
            {section.subtitle && <p>{section.subtitle}</p>}
            <div className="text-left pl-14">
              {section.list && section.list}
            </div>
          </div>
        ) : (
          <div
            key={sectionIndex}
            className="relative w-full space-y-6 ">
            {section.title && (
              <h2 className="text-center text-primary-color">
                {section.title}
              </h2>
            )}
            {section.subtitle && <p>{section.subtitle}</p>}
            <div className="text-left pl-14">
              {section.list && section.list}
            </div>
            {/* <h3 className="text-center">{section.text && section.text}</h3> */}
          </div>
        )
      )}
    </SectionWrapper>
  );
}

export default SingleSectionComponent;
