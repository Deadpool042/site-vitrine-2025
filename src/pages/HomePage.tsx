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
      {/* Contenu de la page */}
      <div className="bg-slate-500">
        <h1 className="text-xl text-fuchsia-500">
          Bienvenue sur la page d'accueil
        </h1>
      </div>
    </>
  );
}

export default HomePage;
