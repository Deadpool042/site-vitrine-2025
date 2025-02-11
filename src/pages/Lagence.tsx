// import LayoutWrapper from "@/components/ui/layout/LayoutWrapper";

import { Helmet } from "react-helmet-async";

import HeroComponent from "@/components/ui/layout/HeroComponent";
import { agencyData } from "@/datas/agencyData";
import SingleSectionComponent from "@/components/ui/layout/SingleSectionComponent";
import SectionGridItemComponents from "@/components/ui/layout/SectionGridItemComponents";
import SectionDualImageComponent from "@/components/ui/layout/SectionDualImageComponent";
import MainLayout from "@/components/MainLayout";
// import SectionGridItemComponents from "@/components/ui/layout/SectionGridItemComponents";
// import SectionSplitComponent from "@/components/ui/layout/SectionSplitComponent";

const subtitle =
  "C2 Projet Web : Votre agence de communication à Roanne et alentours";

function Lagence() {
  return (
    <>
      <Helmet>
        <title>{subtitle}</title>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>
      <MainLayout>
        <HeroComponent data={agencyData.hero} />
        <SingleSectionComponent data={agencyData.singleSections || []} />
        <SectionGridItemComponents data={agencyData.cardSections || []} />
        <SectionDualImageComponent data={agencyData.dualImageSections || []} />
      </MainLayout>
      {/* <LayoutWrapper className=""> */}
      {/* <section className="flex flex-col max-w-6xl mx-auto my-10 space-y-10">
        <p className="px-10 text-center">{agencyData.mapEmbedUrl.subtitle}</p>
        <iframe
          src={agencyData.mapEmbedUrl.url}
          className=" h-96 md:max-h-[400px] rounded-md shadow-md"
          allowFullScreen
          loading="lazy"></iframe>
        <p className="text-3xl font-semibold text-center">
          {agencyData.mapEmbedUrl.title}
        </p>
        <p className="text-center">{agencyData.mapEmbedUrl.text}</p>
      </section>

      <SectionGridItemComponents data={agencyData.expertise} />
      <SectionSplitComponent data={agencyData.sectionSplit} /> */}
      {/* </LayoutWrapper> */}
    </>
  );
}

export default Lagence;
