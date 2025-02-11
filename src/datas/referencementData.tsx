import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import seoLogo from "@/assets/icons/seoIcon.svg";
import {
  Bell,
  ChartColumnIcon,
  Cross,
  Database,
  Eye,
  Globe,
  Handshake,
  MousePointer2,
  Plus,
  Search,
  Smile
} from "lucide-react";

export const referencementData: PageData = {
  hero: {
    logo: seoLogo,

    fallbackLogo: "/assets/logos/seoIcon.svg",
    alt: "",
    title: <>Référencement & SEO</>,
    subtitle: <>Agence de communication digitale et SEO à Roanne</>,
    text: (
      <>
        Pourquoi avoir une agence de communication digitale et SEO à Roanne et
        alentours ? Dans le monde digital d’aujourd’hui, la visibilité en ligne
        est essentielle pour assurer la croissance et le succès d’une
        entreprise. Que vous soyez une petite entreprise locale à Roanne ou une
        organisation plus établie, une stratégie de communication digitale
        efficace, couplée à un bon <strong>référencement SEO</strong>, vous
        permet de vous démarquer et d’attirer de nouveaux clients.{" "}
        <strong>C2 Projet Web</strong>, agence spécialisée en communication
        digitale à Roanne, vous accompagne pour optimiser votre présence en
        ligne et améliorer votre positionnement sur les moteurs de recherche.
      </>
    ),
    hashtags: <>#seo #referencement #web #digital #communication</>,
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
          Pourquoi investir dans la communication digitale et le référencement
          SEO à Roanne et alentours ?
        </>
      ),
      items: [
        {
          logo: (
            <Eye
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Visibilité accrue</>,
          text: (
            <>
              En optimisant votre présence sur le web, notamment grâce au SEO,
              vous augmentez vos chances d'apparaître en haut des résultats de
              recherche, là où vos clients potentiels vous cherchent.
            </>
          )
        },
        {
          logo: (
            <Database
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Génération de trafic qualifié</>,
          text: (
            <>
              Un bon référencement attire des visiteurs qualifiés sur votre
              site, c'est-à-dire des personnes réellement intéressées par vos
              produits ou services.
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
          title: <>Renforcement de la notoriété</>,
          text: (
            <>
              En étant présent sur les canaux digitaux (réseaux sociaux, site
              web, blog, etc.) et bien référencé, vous renforcez la visibilité
              et la crédibilité de votre marque.
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
          title: <>Fidélisation et engagement</>,
          text: (
            <>
              Une stratégie digitale bien construite permet de créer des liens
              durables avec vos clients grâce à des contenus pertinents et
              engageants.
            </>
          )
        },
        {
          logo: (
            <Search
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Augmentation des conversions</>,
          text: (
            <>
              Un bon SEO améliore non seulement votre visibilité mais aussi
              votre taux de conversion, en attirant des utilisateurs déjà en
              phase de recherche d’un service ou produit que vous proposez.
            </>
          )
        }
      ]
    },
    {
      type: "cards",
      title: (
        <>
          Pourquoi choisir C2 Projet Web comme Agence de communication digitale
          et SEO à Roanne ?
        </>
      ),
      subtitle: (
        <>
          <strong>C2 Projet Web</strong> offre une approche personnalisée pour
          chaque projet, en tenant compte de vos besoins spécifiques, de votre
          budget et de votre vision pour votre boutique en ligne. Voici quelques
          raisons pour lesquelles nous sommes le partenaire idéal pour la
          création de votre site e-commerce à Roanne :
        </>
      ),
      items: [
        {
          logo: (
            <MousePointer2
              size={40}
              color="#000000"
            />
          ),
          title: <>Expertise locale</>,
          text: (
            <>
              En tant qu'agence basée à Roanne, nous connaissons bien les
              particularités du marché local et pouvons adapter nos stratégies
              pour maximiser votre visibilité dans la région.
            </>
          )
        },
        {
          logo: (
            <Bell
              size={40}
              color="#000000"
            />
          ),
          title: <>Solutions sur mesure</>,
          text: (
            <>
              Nous créons des stratégies de communication et SEO personnalisées,
              en fonction des besoins spécifiques de votre entreprise et de vos
              objectifs commerciaux.
            </>
          )
        },
        {
          logo: (
            <Plus
              size={40}
              // color="#D0B444"
              color="#000000"
            />
          ),
          title: <>Résultats mesurables</>,
          text: (
            <>
              Nous mettons en place des outils d’analyse pour suivre et évaluer
              les performances de nos actions, et ajuster la stratégie en
              conséquence pour obtenir les meilleurs résultats.
            </>
          )
        },
        {
          logo: (
            <Globe
              size={40}
              color="#000000"
            />
          ),
          title: <>Approche globale</>,
          text: (
            <>
              Nous vous offrons une prise en charge complète de votre
              communication digitale, incluant la gestion des réseaux sociaux,
              l’optimisation SEO, et la création de contenu, pour assurer la
              cohérence de votre image de marque.
            </>
          )
        },
        {
          logo: (
            <ChartColumnIcon
              size={40}
              color="#000000"
            />
          ),
          title: <>Accompagnement continu</>,
          text: (
            <>
              Nous ne nous contentons pas de mettre en place une stratégie, nous
              vous accompagnons tout au long du processus pour assurer que vos
              objectifs sont atteints.
            </>
          )
        }
      ]
    }
  ],
  singleSections: [
    {
      variant: "default",
      type: "single",
      title: (
        <>
          Les services de C2 Projet Web, pour un référencement et un SEO de
          qualité !
        </>
      ),
      subtitle: (
        <>
          <strong>Chez C2 Projet Web</strong>, nous mettons à disposition des
          entreprises de Roanne une large gamme de services pour optimiser leur
          présence en ligne et améliorer leur SEO
        </>
      ),
      tabs: [
        {
          title: <>Audit seo et analyse de performance</>,
          subtitle: (
            <p>
              Avant de commencer toute optimisation, il est essentiel de
              comprendre l’état actuel de votre site.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Audit technique:</strong> Nous analysons les aspects
                techniques de votre site pour identifier les obstacles au bon
                référencement (vitesse de chargement, structure des URL, etc.).
              </li>
              <li>
                <strong>Analyse des mots-clés :</strong> Nous identifions les
                mots-clés pertinents pour votre secteur d’activité et vos cibles
                afin de les intégrer efficacement à votre stratégie SEO.
              </li>
              <li>
                <strong>Analyse de la concurrence :</strong> Nous étudions la
                stratégie SEO de vos concurrents pour repérer les opportunités
                d’amélioration et de différenciation.
              </li>
            </ul>
          )
        },
        {
          title: <>Optimisation on-page seo</>,
          subtitle: (
            <p>
              L’optimisation <strong>on-page</strong> est une étape clé pour
              améliorer votre référencement.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Optimisation des balises</strong> (titres, meta
                descriptions, balises H1, etc.) : Nous structurons vos pages
                pour qu’elles soient compréhensibles par les moteurs de
                recherche et attirent plus de clics.
              </li>
              <li>
                <strong>Contenu optimisé SEO :</strong> Nous rédigeons ou
                optimisons le contenu de vos pages en tenant compte des
                mots-clés recherchés par vos clients tout en veillant à leur
                pertinence et leur qualité.
              </li>
              <li>
                <strong>Amélioration de l’expérience utilisateur (UX) :</strong>{" "}
                Nous veillons à ce que votre site soit ergonomique, agréable à
                naviguer et adapté aux différents supports (desktop, mobile,
                tablette).
              </li>
            </ul>
          )
        },
        {
          title: <>Stratégie de netlinking et seo off-page</>,
          subtitle: (
            <p>
              Le <strong>netlinking</strong> (ou SEO off-page) consiste à
              obtenir des backlinks (liens entrants) de qualité pour renforcer
              l’autorité de votre site.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Recherche de partenariats :</strong> Nous identifions
                des sites pertinents pour votre secteur d’activité afin de créer
                des partenariats et obtenir des liens de qualité.
              </li>
              <li>
                <strong>Création de contenu à valeur ajoutée :</strong> Nous
                élaborons des articles invités, infographies, et autres contenus
                partageables pour attirer des liens naturels vers votre site.
              </li>
              <li>
                <strong>Suivi et analyse des backlinks :</strong>Nous
                surveillons les performances de vos backlinks pour garantir un
                impact positif sur votre référencement.
              </li>
            </ul>
          )
        },
        {
          title: <>Gestion des réseaux sociaux</>,
          subtitle: (
            <p>
              Aujourd’hui, une stratégie de communication digitale ne peut pas
              ignorer l’importance des réseaux sociaux.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Community management :</strong> Nous gérons vos comptes
                sur les réseaux sociaux (Facebook, Instagram, LinkedIn, etc.) en
                créant du contenu engageant qui renforce votre notoriété.
              </li>
              <li>
                <strong>Publicité sur les réseaux sociaux :</strong> Nous
                mettons en place des campagnes de publicité ciblées pour
                atteindre votre audience idéale et augmenter votre visibilité en
                ligne.
              </li>
              <li>
                <strong>Animation et engagement :</strong>Nous veillons à
                interagir avec vos abonnés pour construire une communauté active
                autour de votre marque.
              </li>
            </ul>
          )
        },
        {
          title: <>Création et optimisation de sites web</>,
          subtitle: (
            <p>
              Votre site web est souvent le premier contact entre votre
              entreprise et vos clients. Il doit être à la fois{" "}
              <strong>bien conçu </strong>et <strong>optimisé</strong> pour le
              SEO.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Conception de sites web :</strong> Nous créons des sites
                web modernes, responsives et adaptés à vos objectifs
                commerciaux.
              </li>
              <li>
                <strong>Refonte SEO :</strong> Si votre site web est déjà en
                ligne mais mal référencé, nous vous aidons à le restructurer et
                à l’optimiser pour améliorer ses performances SEO.
              </li>
              <li>
                <strong>SEO local :</strong>Nous optimisons votre présence pour
                des recherches locales (ex : « agence de communication à Roanne
                ») afin que vous apparaissiez dans les résultats de recherche
                géolocalisés.
              </li>
            </ul>
          )
        }
      ],

      button: (
        <>
          <Link to="/contact">
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
      )
    }
  ]
};
