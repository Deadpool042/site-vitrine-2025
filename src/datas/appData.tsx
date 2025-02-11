import { Button } from "@/components/ui/Button";
import App from "@/assets/icons/appIcon.svg";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Cross,
  Handshake,
  Laptop,
  MousePointer2,
  Smile
} from "lucide-react";
import image2 from "@/assets/images/Devanture-avec-Rempart-N-et-B-768x768.webp";
import { PageData } from "./data";
import image1 from "@/assets/images/Creation-de-sites-et-applications-a-Roanne-et-alentours-C2-Projet-Web-768x768.webp";

export const appData: PageData = {
  hero: {
    logo: App,
    fallbackLogo: "/assets/icons/appIcon.svg",
    alt: "",
    title: <>Sites et applications</>,
    subtitle: <>Création site web à Roanne et alentours</>,
    text: (
      <>
        À l’ère du numérique, la création d’un site web et d’une application
        mobile est un enjeu crucial pour les entreprises de toutes tailles à
        Roanne et alentours. De nombreuses entreprises locales cherchent à se
        digitaliser pour rester compétitives. Le <strong>C2 Projet Web </strong>
        offre des services spécialisés pour répondre à ces besoins, que ce soit
        pour la conception de sites vitrines, de boutiques en ligne ou
        d’applications mobiles sur mesure.
      </>
    ),
    hashtags:
      "#site web #ux design #site vitrine #ecommerce #wordpress #surmesure #développementweb #applicationmobile #seo #hébergementmaintenance #mobilefirst",
    button: (
      <Link
        to="/contact"
        rel="no-referer">
        <Button
          className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
          size={"lg"}>
          contact
        </Button>
      </Link>
    ),
    variant: "other"
  },
  cardSections: [
    {
      type: "cards",
      title: (
        <>
          Pourquoi investir dans la création d'un site web ou une application à
          Roanne ?
        </>
      ),
      subtitle: (
        <>
          Avec l’augmentation du nombre de consommateurs utilisant Internet pour
          rechercher des produits et services, il est devenu indispensable pour
          les entreprises locales d’avoir une présence en ligne.
        </>
      ),
      items: [
        {
          logo: (
            <MousePointer2
              size={40}
              color="#D0B444"
              fill="#D0B444"
            />
          ),
          title: <>Améliorer la visibilité locale</>,
          text: (
            <>
              Avoir un site web optimisé pour les recherches locales permet aux
              entreprises de Roanne de mieux apparaître dans les résultats de
              recherche Google lorsque des clients recherchent des services ou
              produits spécifiques dans la région.
            </>
          )
        },
        {
          logo: (
            <Handshake
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Augmenter la crédibilité</>,
          text: (
            <>
              Un site web ou une application bien conçu renforce la crédibilité
              de l'entreprise en donnant aux clients l’impression d’un service
              professionnel et moderne.
            </>
          )
        },
        {
          logo: (
            <Smile
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Attirer et fidéliser les clients</>,
          text: (
            <>
              Les sites web et les applications mobiles facilitent la
              communication avec les clients et améliorent leur expérience
              utilisateur grâce à des fonctionnalités comme la prise de
              rendez-vous en ligne, les chatbots, ou encore les notifications
              push pour les applications.
            </>
          )
        }
      ]
    },
    {
      type: "cards",
      title: <>Les types de projets pris en charge par C2 Projet Web</>,
      subtitle: (
        <>
          Voici quelques exemples des types de projets que l’agence prend en
          charge pour les entreprises de Roanne et ses alentours
        </>
      ),
      items: [
        {
          logo: (
            <Laptop
              size={40}
              color="#000000"
            />
          ),
          title: <>Création de sites vitrines</>,
          text: (
            <>
              Idéal pour les entreprises qui souhaitent présenter leurs services
              et produits. Un site vitrine permet de communiquer les
              informations essentielles tout en étant optimisé pour le SEO
              local.
            </>
          ),
          href: "/creer-site-internet-roanne/"
        },
        {
          logo: (
            <Handshake
              size={40}
              color="#000000"
            />
          ),
          title: <>Développement d’applications mobiles</>,
          text: (
            <>
              C2 Projet Web conçoit des applications pour les entreprises
              cherchant à offrir une meilleure expérience utilisateur à leurs
              clients via un accès facile à leurs services ou produits
              directement depuis leurs smartphones.
            </>
          )
        },
        {
          logo: (
            <Briefcase
              size={40}
              color="#000000"
            />
          ),
          title: <>Boutiques en ligne (e-commerce)</>,
          text: (
            <>
              Avec l’explosion du commerce en ligne, créer une boutique en ligne
              est devenu indispensable. L’agence propose des solutions de
              e-commerce adaptées aux petites et moyennes entreprises de Roanne.
            </>
          ),
          href: "/creation-site-ecommerce-roanne/"
        }
      ]
    }
  ],
  splitSections: [
    {
      type: "split",
      title: <>C2 Projet Web : Spécialiste en création digitale</>,
      subtitle: (
        <>
          C2 Projet Web se distingue comme un acteur incontournable dans la
          région de Roanne pour le développement de sites web et d’applications
          mobiles. Voici ce qui rend cette agence unique :
        </>
      ),
      text: (
        <ul className="pl-6 space-y-2 text-white list-disc list-inside ">
          <li className="">
            <strong>Expertise locale :</strong> Connaissant bien le marché local
            de Roanne, <strong>C2 Projet Web</strong> offre des solutions
            personnalisées adaptées aux besoins des entreprises locales.
          </li>
          <li className="">
            <strong>Services complets :</strong> De la conception de sites
            vitrines aux applications mobiles interactives, l’agence couvre un
            large éventail de services.
          </li>
          <li className="">
            <strong>Support et accompagnement :</strong> En plus de créer des
            solutions sur mesure, <strong>C2 Projet Web</strong> assure un suivi
            post-projet pour garantir des mises à jour régulières et un bon
            fonctionnement du site ou de l’application.
          </li>
        </ul>
      ),
      button: (
        <>
          <Link
            to="/contact"
            rel="no-referer">
            <Button
              className="text-sm uppercase hover:no-underline text-primary-color hover:scale-105"
              variant="link"
              size={"lg"}>
              <Cross
                fill="#D0B444"
                color="#D0B444"
              />
              Discutons
            </Button>
          </Link>
        </>
      ),
      media: {
        type: "photos",
        content: [
          {
            imageSrc: image1,
            alt: "",
            href: "https://thomaslefrancmagicien.fr/"
          }
        ]
      }
    },
    {
      type: "split",
      title: <>Comment C2 Projet Web optimise les sites pour le SEO ?</>,
      subtitle: (
        <>
          Le SEO (Search Engine Optimization) est un pilier central de toute
          stratégie digitale. C2 Projet Web met en place des stratégies de
          référencement naturel pour aider les entreprises locales à se
          positionner en haut des résultats de recherche Google. Voici quelques
          pratiques SEO appliquées par l’agence :
        </>
      ),
      text: (
        <ul className="pl-6 space-y-2 text-white list-disc list-inside ">
          <li className="">
            <strong>Optimisation des mots-clés :</strong> L’agence effectue une
            recherche approfondie des mots-clés pertinents pour chaque projet.
            Par exemple, pour une entreprise basée à Roanne, des termes comme «
            création site web Roanne » ou « développement application mobile
            Loire » seront prioritaires.
          </li>
          <li className="">
            <strong>Contenu de qualité :</strong>{" "}
            <strong>C2 Projet Web </strong>aide à rédiger des contenus optimisés
            pour les moteurs de recherche tout en s’assurant que ces contenus
            répondent aux besoins des utilisateurs.
          </li>
          <li className="">
            <strong>Optimisation mobile et rapidité :</strong> Avec de plus en
            plus de personnes naviguant sur mobile,{" "}
            <strong>C2 Projet Web</strong> assure que chaque site et application
            soit responsive (adapté aux mobiles) et rapide à charger.
          </li>
        </ul>
      ),
      button: (
        <>
          <Link
            to="/contact"
            rel="no-referer">
            <Button
              className="text-sm uppercase hover:no-underline text-primary-color hover:scale-105"
              variant="link"
              size={"lg"}>
              <Cross
                fill="#D0B444"
                color="#D0B444"
              />
              Discutons
            </Button>
          </Link>
        </>
      ),
      media: {
        type: "photos",
        content: [
          {
            imageSrc: image2,
            alt: ""
          }
        ]
      }
    }
  ]
};
