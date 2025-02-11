// import Banner from "@/components/ui/layout/Banner";
import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { partenairesData } from "@/datas/partenairesData";
import { Helmet } from "react-helmet-async";
// import logoCreation from "@/assets/icons/creations.svg";
// const icon = {
//   iconSrc: logoCreation,
//   alt: "Icône de la page de la conseil et expertise en communication",
//   width: 50
// };

// const subtitle = "Ils sont dans la Team C2 Projet Web";

// const title = "Nos Créations Originales";

function Partenaires() {
  return (
    <>
      <Helmet>
        {/* <title>{subtitle}</title> */}
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>
      <MainLayout>
        <HeroComponent data={partenairesData.hero} />
      </MainLayout>
      {/* <Banner
        iconSrc={icon.iconSrc}
        alt={icon.alt}
        width={icon.width}
        subtitle={subtitle}
        title={title}
      /> */}
    </>
  );
}

export default Partenaires;
