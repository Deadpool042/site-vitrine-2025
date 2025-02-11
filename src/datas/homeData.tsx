// src/data/homeData.tsx

// Importez vos images depuis le dossier assets (à adapter selon votre structure)

import sitesLogo from "@/assets/icons/appIcon.svg?url";

import socialLogo from "@/assets/icons/socialMediaIcon.svg";
import strategyLogo from "@/assets/icons/strategyIcon.svg";
import studioLogo from "@/assets/icons/studioIcon.svg";
import seoLogo from "@/assets/icons/seoIcon.svg";
import brandingLogo from "../assets//icons/brandIdentityIcon.svg";

import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
import { PageData } from "./data";

export const homeData: PageData = {
  hero: {
    title: <>C2 Projet Web</>,
    subtitle: (
      <p className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <span className="">Vous aussi,</span>
        <span className="flex items-center justify-center px-1 py-2 text-black rounded-md bg-primary-color ">
          <strong>soyez visible</strong>
        </span>
        <span className="">là où on vous cherche</span>
      </p>
    ),
    text: <>Agence de communication à Villerest</>,
    button: (
      <Link
        to="/contact"
        rel="no-referer">
        <Button
          className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
          size={"lg"}>
          nous contacter
        </Button>
      </Link>
    ),
    variant: "home"
  },
  splitSections: [
    {
      type: "split",
      title: (
        <>C2 Projet Web : Votre agence de communication à Roanne et Alentours</>
      ),

      text: (
        <>
          <p>
            <strong>C2 Projet Web</strong> est une agence de communication
            spécialisée dans le digital, basée à Villerest à quelques kilomètres
            de Roanne. L’agence aide les entreprises à développer leur image de
            marque, leur visibilité en ligne et à atteindre leurs objectifs
            grâce à des solutions de communication personnalisées. Dans un monde
            de plus en plus numérique, avoir une présence en ligne forte est
            essentiel pour toute entreprise.
          </p>

          <h4 className="text-primary-color">Expertise Locale</h4>

          <p>
            En tant qu’agence de communication située à Villerest, à quelques
            mètres de Roanne, nous comprenons les besoins spécifiques des
            entreprises locales. Nous connaissons le marché, les tendances et
            les préférences des clients de la région, ce qui nous permet
            d’adapter nos stratégies de communication en conséquence.{" "}
            <Link
              to="/lagence-de-communication-c2-projet-web/"
              rel="no-referer">
              <Button
                variant="link"
                className=" text-grey-text hover:text-primary-color hover:scale-110 hover:no-underline"
                size={"lg"}>
                Découvrir l'agence <ChevronsRight />
              </Button>
            </Link>
          </p>
        </>
      ),
      button: (
        <Link
          to="/contact"
          rel="no-referer">
          <Button
            variant="primary"
            size={"lg"}>
            Nous rencontrer
          </Button>
        </Link>
      ),
      media: {
        type: "map",
        content:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.88162361351!2d4.035657977294845!3d45.993592771087435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a9c2e97e94bd%3A0xdb0afaff0491adc8!2sAgence%20de%20communication%20-%20C2%20Projet%20Web!5e0!3m2!1sfr!2sfr!4v1738825749298!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
      }
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
              Conception de sites web modernes (vitrines ou e-commerce),
              applications, totalement sur-mesure et responsives qui reflètent
              votre identité de marque.
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
  ]

  // sectionSplit: {
  //   variant: "home",
  //   title:
  //     "C2 Projet Web : Votre agence de communication à Roanne et Alentours",
  //   text: (
  //     <div className="space-y-12">
  //       <p>
  //         <strong>C2 Projet Web</strong> est une agence de communication
  //         spécialisée dans le digital, basée à Villerest à quelques kilomètres
  //         de Roanne. L’agence aide les entreprises à développer leur image de
  //         marque, leur visibilité en ligne et à atteindre leurs objectifs grâce
  //         à des solutions de communication personnalisées. Dans un monde de plus
  //         en plus numérique, avoir une présence en ligne forte est essentiel
  //         pour toute entreprise.
  //       </p>
  //       <p>
  //         En tant qu’agence de communication située à Villerest, à quelques
  //         mètres de Roanne, nous comprenons les besoins spécifiques des
  //         entreprises locales. Nous connaissons le marché, les tendances et les
  //         préférences des clients de la région, ce qui nous permet d’adapter nos
  //         stratégies de communication en conséquence.
  //         <Button
  //           variant="link"
  //           className="transition-all duration-300 ease-in-out text-grey-text">
  //           <Link to="/lagence-de-communication-c2-projet-web/">
  //             Découvrir l'agence
  //           </Link>
  //           <ChevronsRight />
  //         </Button>
  //       </p>
  //     </div>
  //   ),
  //   button: (
  //     <Button variant="primary">
  //       <Link to="/contact"></Link>Nous rencontrer
  //     </Button>
  //   ),
  //   mapEmbedUrl:
  //     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.88162361351!2d4.035657977294845!3d45.993592771087435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5a9c2e97e94bd%3A0xdb0afaff0491adc8!2sAgence%20de%20communication%20-%20C2%20Projet%20Web!5e0!3m2!1sfr!2sfr!4v1738825749298!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
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
  // testimonials: {
  //   title: (
  //     <>
  //       Nos{" "}
  //       <span className="px-1 py-2 text-black rounded-md bg-primary-color">
  //         témoignages
  //       </span>
  //     </>
  //   ),
  //   items: [
  //     {
  //       name: "Dominique",
  //       role: "Site e-commerce",
  //       quote: (
  //         <>
  //           « Satisfait de C2 Projet Web. Refonte d'un Site E-commerce, avec les
  //           imprévus que cela comporte. Tout fonctionne bien. Équipe toujours
  //           dispo et chose 'Rare' ... Le Responsable se démène pour apporter une
  //           solution à chaque souci rencontré. Top !. »
  //         </>
  //       )
  //     },
  //     {
  //       name: "Thomas",
  //       role: "Site vitrine",
  //       quote: (
  //         <>
  //           « J'ai eu l'occasion de travailler avec{" "}
  //           <strong>C2 projet web</strong> pour mon site internet. Le webmaster
  //           est vraiment de très bon conseil et très professionnel. Mon site est
  //           parfaitement à mon image, fluide, le référencement est là. Merci
  //           infiniment pour ton aide. Je recommande à 100% pour toutes vos
  //           démarches de communications. »
  //         </>
  //       )
  //     }
  //   ]
  // },
  // contact: {
  //   button: (
  //     <Button
  //       variant="ghost"
  //       className=" text-grey-text group-hover:text-black">
  //       <ArrowRight />{" "}
  //       <span className="font-semibold uppercase ">Contactez-nous</span>
  //     </Button>
  //   ),
  //   text: "Si vous recherchez une agence de communication à Roanne et ses alentours, C2 Projet Web est votre partenaire idéal. Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrur comment nous pouvons vous aider à atteindre vos objectifs en ligne",
  //   href: "/contact"
  // }
};
