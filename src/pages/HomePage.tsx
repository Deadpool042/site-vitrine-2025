import BannerHome from "@/components/ui/BannerHome";
import { Helmet } from "react-helmet-async";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Page d'accueil</title>
        <meta
          name="description"
          content="Description de la page"
        />
      </Helmet>

      <BannerHome />
    </>
  );
}

export default HomePage;
