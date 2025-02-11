import MainLayout from "@/components/MainLayout";
import HeroComponent from "@/components/ui/layout/HeroComponent";
import { ConfidentialiteData } from "@/datas/confidentialiteData";
import { Helmet } from "react-helmet-async";

const Confidentialites: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
      <MainLayout>
        <HeroComponent data={ConfidentialiteData.hero} />
      </MainLayout>
    </>
  );
};

export default Confidentialites;
