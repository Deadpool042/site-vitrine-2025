import { Button } from "@/components/ui/Button";
import LogoC2 from "@/assets/icons/logoC2.webp";
// import FallBackLogo from "/assets/logos/logoC2.webp"
import sitesLogo from "@/assets/icons/appIcon.svg";
import socialLogo from "../assets/icons/socialMediaIcon.svg";
import strategyLogo from "../assets/icons/strategyIcon.svg";
import studioLogo from "../assets/icons/studioIcon.svg";
import seoLogo from "../assets/icons/seoIcon.svg";
import brandingLogo from "../assets//icons/brandIdentityIcon.svg";

import { Link } from "react-router-dom";

import { PageData } from "./data";
import AgenceC2 from "@/assets/images/Devanture-avec-Rempart-N-et-B-768x768.webp";
import Christophe from "@/assets/images/CHRISTOPHE-768x768.webp";
import facebookIcon from "@/assets/icons/facebook.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import instagramIcon from "@/assets/icons/instagram.svg";

export const agencyData: PageData = {
  hero: {
    logo: LogoC2,
    fallbackLogo: "/assets/logos/logoC2.webp",
    alt: "",
    title: <>C2 Projet Web</>,
    subtitle: (
      <>C2 Projet Web : Votre agence de communication à Roanne et alentours</>
    ),
    text: (
      <>
        Vous cherchez{" "}
        <strong>
          une agence de communication à Roanne et dans ses environs{" "}
        </strong>
        ? <strong>C2 Projet Web</strong> est l’expert qu’il vous faut pour
        développer votre image de marque et améliorer votre visibilité en ligne.
        Située à Roanne, notre agence propose une gamme complète de services
        pour vous aider à atteindre vos objectifs commerciaux grâce à des
        stratégies de communication efficaces.
      </>
    ),
    button: (
      <Link to="/contact">
        <Button
          className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
          size={"lg"}>
          contact
        </Button>
      </Link>
    ),
    variant: "other"
  },
  singleSections: [
    {
      variant: "default",
      type: "single",
      text: (
        <>
          Située au bourg de Villerest à quelques kilomètres de Roanne, l’agence
          de communication C2 Projet Web se distingue par sa singularité et les
          expertises nombreuses qu’elle propose.
        </>
      ),
      title: <>Pourquoi Choisir C2 Projet Web ?</>,
      subtitle: (
        <>
          <strong>C2 Projet Web</strong> se distingue par son expertise en
          communication numérique et son approche personnalisée. Nous
          travaillons avec des entreprises de toutes tailles dans la région de
          Roanne et ses environs pour offrir des solutions sur mesure qui
          répondent à leurs besoins spécifiques.
        </>
      ),
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.88162361351!2d4.035657977294845!3d45.993592771087435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a9c2e97e94bd%3A0xdb0afaff0491adc8!2sAgence%20de%20communication%20-%20C2%20Projet%20Web!5e0!3m2!1sfr!2sfr!4v1738825749298!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  ],
  cardSections: [
    {
      type: "cards",
      title: (
        <>
          Nos{" "}
          <span className="px-2 py-1 text-black rounded-md bg-primary-color">
            expertises
          </span>
        </>
      ),
      items: [
        {
          logo: sitesLogo,

          title: <span className="text-primary-color">Sites & applis</span>,
          text: (
            <>
              Conception de sites web modernes (vitrines ou e-commerce),
              applications, totalement sur-mesure et responsives qui reflètent
              votre identité de marque.
            </>
          ),
          href: "/creation-site-web-roanne/"
        },
        {
          logo: socialLogo,

          title: <>Sites & applis</>,
          text: (
            <>
              Stratégies de contenu pour engager votre audience et développer
              votre communauté en ligne.
            </>
          ),
          href: "/gestion-reseaux-sociaux-roanne/"
        },
        {
          logo: strategyLogo,

          title: <>Conseil et stratégie</>,
          text: (
            <>
              La réussite de votre projet dépend en premier lieu d’une
              excellente connaissance de votre marché, de la stratégie de vos
              concurrents, du comportement de vos cibles (prospects, clients,
              collaborateurs…).
            </>
          ),
          href: "/conseil-communication-roanne/"
        },
        {
          logo: studioLogo,

          title: <>Studio</>,
          text: (
            <>
              Création de catalogues, affiches, flyers, cartes de visite, logo,
              vidéos, webdesign...Soyez visible, comme vous le souhaitez !
            </>
          ),
          href: "/agence-design-graphique-a-roanne/"
        },
        {
          logo: seoLogo,

          title: <>Référencement & SEO</>,
          text: (
            <>
              Vous pouvez avoir la marque la plus impactante mais sans
              investissement pour vous rendre visible, c’est comme créer une
              boutique magnifique en plein milieu du désert.
            </>
          ),
          href: "/communication-digitale-seo-roanne/"
        },
        {
          logo: brandingLogo,

          title: <>Identité de marque</>,
          text: (
            <>
              Le branding ou identité de marque est la traduction visuelle de
              l’ADN de votre marque avec un logo unique notamment !
            </>
          ),
          href: "/identite-de-marque/"
        }
      ]
    }
  ],
  dualImageSections: [
    {
      type: "dualImages",
      title: "",
      imageLeft: {
        imageSrc: AgenceC2,
        alt: "Image de la devanture de l'agence C2 Projet Web",
        href: "tel:0477786988",
        text: <>Nous contacter</>
      },
      imageRight: {
        imageSrc: Christophe,
        alt: "Photo Christophe Puleri, Fondateur de C2 Projet Web",
        href: "",
        text: (
          <>
            {/* Nom et poste */}
            <p className="text-2xl font-semibold">Christophe Puleri</p>
            <p className="text-lg font-thin">CEO & Fondateur</p>

            {/* Ligne de séparation */}
            <hr className="w-16 my-3 border-t-2 border-white" />

            {/* Icônes sociales */}
            <ul className="flex justify-center mt-3 space-x-6">
              <li>
                <a
                  href="https://www.facebook.com/christophe.puleri"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="w-10 h-10 p-2 transition-all rounded-full bg-primary-color hover:rounded-md hover:scale-125"
                    src={facebookIcon}
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/christophe-puleri-b927975a/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="w-10 h-10 p-2 transition-all rounded-full bg-primary-color hover:rounded-md hover:scale-125"
                    src={linkedinIcon}
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/christophe_puleri/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="w-10 h-10 p-2 transition-all rounded-full bg-primary-color hover:rounded-md hover:scale-125"
                    src={instagramIcon}
                    alt="Instagram"
                  />
                </a>
              </li>
            </ul>
          </>
        )
      }
    }
  ]

  // mapEmbedUrl: {
  //   title: "Pourquoi choisir C2 Projet Web ?",
  //   subtitle: (
  //     <>
  //       Située au bourg de Villerest à quelques kilomètres de Roanne, l’agence
  //       de communication <strong>C2 Projet Web</strong> se distingue par sa
  //       singularité et les expertises nombreuses qu’elle propose.
  //     </>
  //   ),
  //   text: (
  //     <>
  //       <strong>C2 Projet Web</strong> se distingue par son expertise en
  //       communication numérique et son approche personnalisée. Nous travaillons
  //       avec des entreprises de toutes tailles dans la région de Roanne et ses
  //       environs pour offrir des solutions sur mesure qui répondent à leurs
  //       besoins spécifiques.
  //     </>
  //   ),
  //   url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.88162361351!2d4.035657977294845!3d45.993592771087435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a9c2e97e94bd%3A0xdb0afaff0491adc8!2sAgence%20de%20communication%20-%20C2%20Projet%20Web!5e0!3m2!1sfr!2sfr!4v1738825749298!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  // },
  // expertise: {
  //   title: (
  //     <>
  //       Nos{" "}
  //       <span className="px-1 py-2 text-black rounded-md bg-primary-color">
  //         expertises
  //       </span>
  //     </>
  //   ),
  //   items: [
  //     {
  //       logo: sitesLogo,
  //       title: "Sites & applis",
  //       text: "Conception de sites web modernes (vitrines ou e-commerce), applications, totalement sur-mesure et responsives qui reflètent votre identité de marque.",
  //       href: "/creation-site-web-roanne/"
  //     },
  //     {
  //       logo: socialLogo,
  //       title: "Réseaux sociaux",
  //       text: "Stratégies de contenu pour engager votre audience et développer votre communauté en ligne.",

  //       href: "/gestion-reseaux-sociaux-roanne/"
  //     },
  //     {
  //       logo: strategyLogo,
  //       title: "Conseil & stratégie",
  //       text: "La réussite de votre projet dépend en premier lieu d’une excellente connaissance de votre marché, de la stratégie de vos concurrents, du comportement de vos cibles (prospects, clients, collaborateurs…).",

  //       href: "/conseil-communication-roanne/"
  //     },
  //     {
  //       logo: studioLogo,
  //       title: "Studio",
  //       text: "Création de catalogues, affiches, flyers, cartes de visite, logo, vidéos, webdesign...Soyez visible, comme vous le souhaitez !",

  //       href: "/agence-design-graphique-a-roanne/"
  //     },
  //     {
  //       logo: seoLogo,
  //       title: "Référencement & SEO",
  //       text: "Vous pouvez avoir la marque la plus impactante mais sans investissement pour vous rendre visible, c’est comme créer une boutique magnifique en plein milieu du désert.",

  //       href: "/communication-digitale-seo-roanne/"
  //     },
  //     {
  //       logo: brandingLogo,
  //       title: "Identité de marque",
  //       text: "Le branding ou identité de marque est la traduction visuelle de l’ADN de votre marque avec un logo unique notamment !",

  //       href: "/identite-de-marque/"
  //     }
  //   ]
  // },
  // sectionSplit: {
  //   variant: "agency",

  //   image1: (
  //     <Link to="/contact">
  //       <div className="flex flex-col rounded-md ">
  //         <img
  //           src={ImageAgence}
  //           alt=""
  //           className="w-full transition-all duration-300 ease-in-out bg-black rounded-t-md h-3/4 hover:opacity-70 "
  //         />
  //         <div className="flex flex-col w-full py-6 mx-auto space-y-4 text-center bg-grey-text rounded-b-md">
  //           <p className="text-2xl font-semibold text-black">Nous contacter</p>
  //           <Link to="tel:+330477786988">
  //             <Button
  //               variant="outline"
  //               className="text-black transition-all duration-300 ease-in-out border border-black hover:shadow-inner-strong">
  //               04 77 78 69 88
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //     </Link>
  //   ),
  //   image2: (
  //     <div className="flex flex-col rounded-md ">
  //       <img
  //         src={Christophe}
  //         alt=""
  //         className="w-full rounded-md h-3/4 "
  //       />
  //       <div className="flex flex-col w-full py-10 mx-auto space-y-4 text-center rounded-md">
  //         <p className="text-2xl font-semibold text-grey-text">
  //           Christophe Puleri
  //         </p>
  //         <p className="font-thin">CEO & Fondateur</p>
  //         <span className="border w-[90px] mx-auto"></span>
  //       </div>

  //       <ul className="flex justify-center gap-4 ">
  //         <li>
  //           <Link
  //             to="https://www.facebook.com/christophe.puleri"
  //             rel="no-referer"
  //             target="_blanck">
  //             <img
  //               width={40}
  //               src={facebook}
  //               alt=""
  //               className="p-2 transition-all duration-300 ease-in-out border rounded-full bg-primary-color hover:bg-grey-text border-primary-color hover:scale-110"
  //             />
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="https://www.linkedin.com/in/christophe-puleri-b927975a/"
  //             rel="no-referer"
  //             target="_blanck">
  //             <img
  //               width={40}
  //               src={linkedin}
  //               alt=""
  //               className="p-2 transition-all duration-300 ease-in-out border rounded-full bg-primary-color hover:bg-grey-text border-primary-color hover:scale-110"
  //             />
  //           </Link>
  //         </li>
  //         <li>
  //           <Link
  //             to="https://www.instagram.com/christophe_puleri/"
  //             rel="no-referer"
  //             target="_blanck">
  //             <img
  //               width={40}
  //               src={instagram}
  //               alt=""
  //               className="p-2 transition-all duration-300 ease-in-out border rounded-full bg-primary-color hover:bg-grey-text border-primary-color hover:scale-110"
  //             />
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   )
  // }
};
