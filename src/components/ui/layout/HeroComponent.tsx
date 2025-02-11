import { HeroData } from "@/datas/data";

interface HeroComponentProps {
  data: HeroData;
}

function HeroComponent({ data }: HeroComponentProps) {
  if (data.variant === "home") {
    return (
      // Utilisation d'un <header> pour marquer la section d'accueil
      <header
        role="banner"
        aria-label="Section d'accueil"
        className="relative w-full py-20 space-y-10 bg-center bg-no-repeat bg-cover bg-pattern">
        {/* Overlay décoratif pour obscurcir le fond */}
        <div
          className="absolute inset-0 bg-black opacity-90"
          aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col w-full space-y-10 text-center">
          {data.subtitle && (
            <div
              className="w-full mx-auto text-2xl text-center text-white transition-all duration-300 ease-in-out sm:text-3xl md:text-4xl drop-shadow-lg"
              itemProp="description">
              {data.subtitle}
            </div>
          )}
          {data.title && (
            <h1
              id="hero-title"
              className="text-4xl font-bold text-center text-white transition-all duration-300 ease-in-out sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-lg"
              itemProp="headline">
              {data.title}
            </h1>
          )}
          {data.text && (
            <h2 className="text-xl font-semibold text-center transition-all duration-300 ease-in-out sm:text-2xl text-primary-color drop-shadow-sm">
              {data.text}
            </h2>
          )}
          {data.button && <div>{data.button}</div>}
        </div>
      </header>
    );
  } else if (data.variant === "other") {
    return (
      // Utilisation d'une section avec un rôle de région et référence au titre pour l'accessibilité
      <section
        role="region"
        aria-labelledby="hero-title-other"
        className="w-full p-4">
        <div className="max-w-5xl mx-auto transition-all duration-300 ease-in-out">
          <div className="flex flex-col sm:space-x-4 sm:flex-row sm:items-center">
            <img
              src={data.logo}
              alt=""
              loading="lazy"
              className="w-16 mx-auto mb-8 transition-all duration-300 ease-in-out md:w-20 sm:mx-0"
              onError={e => {
                e.currentTarget.onerror = null; // Pour éviter une boucle infinie en cas d'erreur sur le fallback
                e.currentTarget.src = data.fallbackLogo ?? "";
              }}
            />
            <p className="mb-4 sm:text-xl text-primary-color">
              {data.subtitle}
            </p>
          </div>
          <div className="space-y-6">
            <h1
              id="hero-title-other"
              className="text-4xl font-bold text-white transition-all duration-300 ease-in-out sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
              {data.title}
            </h1>
            {data.text && (
              <div className="max-w-xl pb-8 leading-7">{data.text}</div>
            )}
            {data.hashtags && <p className="max-w-xl pb-8">{data.hashtags}</p>}
            {data.button && data.button}
          </div>
        </div>
      </section>
    );
  }
  return null;
}

export default HeroComponent;
