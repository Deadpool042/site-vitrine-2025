import logoAPP from "@/assets/icons/appIcon.svg";
import logoSocialMedia from "@/assets/icons/socialMediaIcon.svg";
import logoStrategyIcon from "@/assets/icons/strategyIcon.svg";
import logoStudioIcon from "@/assets/icons/studioIcon.svg";
import logoSEO from "@/assets/icons/seoIcon.svg";
import logoBranding from "@/assets/icons/brandIdentityIcon.svg";

export const Section1 = {
  paragraph:
    '  Vous aussi,<span><strong class="px-1 py-2 text-black rounded-md bg-primary-color">soyez visible</strong></span>là où on vous cherche',
  title: "C2 Projet Web",
  subtitle: "Agence de communication à Villerest"
};

export const Section2Article = {
  title: "C2 Projet Web : Votre agence de communication à Roanne et Alentours",
  paragraphs: [
    "<strong>C2 Projet Web</strong> est une agence de communication spécialisée dans le digital, basée à Villerest à quelques kilomètres de Roanne. L’agence aide les entreprises  à développer leur image de marque, leur visibilité en ligne et à atteindre leurs objectifs grâce à des solutions de communication personnalisées. Dans un monde de plus en plus numérique, avoir une présence en ligne forte est essentiel pour toute entreprise.",

    "En tant qu’agence de communication située à Villerest, à quelques mètres de Roanne, nous comprenons les besoins spécifiques des entreprises locales. Nous connaissons le marché, les tendances et les préférences des clients de la région, ce qui nous permet d’adapter nos stratégies de communication en conséquence."
  ]
};

export const Section2Aside = {
  googleMapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.8808122177197!2d4.035602277294862!3d45.99360897108756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4054f4a3ae65b%3A0x5b636fceaaf234f5!2s4%20Pl.%20Jules%20Rabourdin%2C%2042300%20Villerest!5e0!3m2!1sfr!2sfr!4v1738590202650!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrad'
};

export const Section3 = {
  title:
    "Nos <span class='bg-primary-color p-2 rounded-md text-black'>Expertises</span>",
  listItems: [
    {
      icon: logoAPP,
      title: "Sites & applis",
      paragraph:
        "Conception de sites web modernes (vitrines ou e-commerce), applications, totalement sur-mesure et responsives qui reflètent votre identité de marque.",
      href: "/creation-site-web-roanne/"
    },
    {
      icon: logoSocialMedia,
      title: "Réseaux sociaux",
      paragraph:
        "Stratégies de contenu pour engager votre audience et développer votre communauté en ligne.",
      href: "/gestion-reseaux-sociaux-roanne/"
    },
    {
      icon: logoStrategyIcon,
      title: "Conseil & stratégie",
      paragraph:
        "La réussite de votre projet dépend en premier lieu d’une excellente connaissance de votre marché, de la stratégie de vos concurrents, du comportement de vos cibles (prospects, clients, collaborateurs…).",
      href: "/conseil-communication-roanne/"
    },
    {
      icon: logoStudioIcon,
      title: "Studio",
      paragraph:
        "Création de catalogues, affiches, flyers, cartes de visite, logo, vidéos, webdesign...Soyez visible, comme vous le souhaitez !",
      href: "/agence-design-graphique-a-roanne/"
    },
    {
      icon: logoSEO,
      title: "Référencement & seo",
      paragraph:
        "Vous pouvez avoir la marque la plus impactante mais sans investissement pour vous rendre visible, c’est comme créer une boutique magnifique en plein milieu du désert.",
      href: "/communication-digitale-seo-roanne/"
    },
    {
      icon: logoBranding,
      title: "Identité de marque",
      paragraph:
        "Le branding ou identité de marque est la traduction visuelle de l’ADN de votre marque avec un logo unique notamment !",
      href: "/identite-de-marque/"
    }
  ]
};

export const Section4 = {
  title:
    "Nos <span class='bg-primary-color p-2 rounded-md text-black'>Témoignages</span>",
  carousel: [
    {
      title: "Thomas",
      subtitle: "Site vitrine",
      paragraph:
        "J'ai eu l'occasion de travailler avec C2 projet web pour mon site internet. Le webmaster est vraiment de très bon conseil et très professionnel. Mon site est parfaitement à mon image, fluide, le référencement est là. Merci infiniment pour ton aide. Je recommande a 100% pour toutes vos démarches de communications."
    },
    {
      title: "Dominique",
      subtitle: "Site e-commerce",
      paragraph:
        "Satisfait de C2 Projet Web. Refonte d'un Site E-commerce, avec les imprévus que cela comporte. Tout fonctionne bien. Équipe toujours dispo et chose 'Rare' ... Le Responsable se démène pour apporter une solution à chaque souci rencontré. Top !."
    }
  ]
};
