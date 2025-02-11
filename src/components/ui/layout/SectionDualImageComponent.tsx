import { DualImageSectionData } from "@/datas/data";
import SectionWrapper from "./SectionWrapper";
import { Button } from "../Button";

interface SectionDualImageComponentProps {
  data: DualImageSectionData[];
}

function SectionDualImageComponent({ data }: SectionDualImageComponentProps) {
  return (
    <SectionWrapper>
      {data.map((image, imageIndex) => (
        <div
          key={imageIndex}
          className="flex flex-col items-center space-x-8 space-y-10 md:flex-row">
          <div className="w-full mx-auto rounded-md md:w-1/2 bg-slate-100 ">
            <img
              className="w-full overflow-hidden rounded-t-md h-[300px] object-cover object-center "
              src={image.imageLeft.imageSrc}
              alt={image.imageLeft.alt}
            />

            <div className="z-10 p-8 space-y-4 text-center">
              <p className="text-xl font-semibold text-black">
                {image.imageLeft.text}
              </p>
              <Button
                className="text-black border-black hover:text-grey-text hover:bg-black"
                variant="outline"
                asChild>
                <a href={image.imageLeft.href}>04 77 78 69 88</a>
              </Button>
            </div>
          </div>
          <div className="flex flex-col mx-auto">
            <img
              className="mx-auto rounded-md h-[300px] w-96 object-cover"
              src={image.imageRight.imageSrc}
              alt={image.imageRight.alt}
            />
            <div className="p-8 text-center ">
              <div className="flex flex-col items-center p-6 text-white bg-black rounded-lg">
                {image.imageRight.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}

export default SectionDualImageComponent;
