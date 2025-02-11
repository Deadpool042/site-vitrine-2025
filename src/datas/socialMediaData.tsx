import { Button } from "@/components/ui/Button";
import { PageData } from "./data";
import logo from "@/assets/icons/socialMediaIcon.svg";
import { Link } from "react-router-dom";
import {
  CircleCheck,
  CornerRightUp,
  Cross,
  Eye,
  Handshake,
  Headphones,
  MessageCircle,
  MousePointer2,
  Pin
} from "lucide-react";
import image1 from "@/assets/images/gestion-reseaux-sociaux-roanne-C2-Projet-Web-768x768 - alize orthopedie.webp";
import image2 from "@/assets/images/gestion-reseaux-sociaux-roanne-C2-Projet-Web-le tisseurs des saveurs.webp";

export const socialMediaData: PageData = {
  hero: {
    logo: logo,
    fallbackLogo: "assets/icons/socialMediaIcon.svg",
    title: <>Social Media</>,
    subtitle: <>Gestion des réseaux sociaux à Roanne et alentours</>,
    text: (
      <>
        <p className="mb-6">
          À l’heure actuelle, la <strong>gestion des réseaux sociaux</strong>{" "}
          est devenue une priorité pour toute entreprise souhaitant développer
          sa visibilité, fidéliser sa clientèle et augmenter son chiffre
          d’affaires. Les plateformes comme Facebook, Instagram, LinkedIn et
          Twitter offrent des opportunités immenses pour atteindre un public
          large et engagé. Pour les entreprises locales à Roanne, il est
          essentiel de bien gérer sa présence sur les réseaux sociaux afin de
          toucher efficacement la clientèle locale et d’interagir avec elle.
        </p>

        <p>
          <strong>C2 Projet Web</strong>, agence spécialisée dans le digital,
          propose des services de gestion des réseaux sociaux à Roanne et ses
          alentours, pour vous aider à maximiser votre impact en ligne tout en
          se concentrant sur votre activité principale.
        </p>
      </>
    ),
    hashtags: (
      <>
        #socialmedia #reseauxsociaux #facebook #instagram #linkedin #x #tiktok
        #comdigitale
      </>
    ),
    button: (
      <Button variant="primary">
        <Link
          to="/contact"
          className="uppercase">
          contact
        </Link>
      </Button>
    ),
    variant: "other"
  },
  splitSections: [
    {
      type: "split",
      title: (
        <>
          Les services de gestion des réseaux sociaux offerts par C2 Projet Web
        </>
      ),
      subtitle: (
        <>
          <strong>C2 Projet Web</strong> propose une gestion complète de vos
          réseaux sociaux pour maximiser votre présence en ligne tout en vous
          concentrant sur votre activité principale. Voici quelques-uns des
          services que nous proposons :
        </>
      ),
      text: (
        <div className="max-w-4xl mx-auto space-y-10 ">
          {/* Stratégie de contenu */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              1. Stratégie de contenu
            </h3>
            <p>
              Chaque entreprise a besoin d’une stratégie de contenu adaptée à
              son audience.
              <strong> C2 Projet Web </strong> vous aide à définir les types de
              contenus à publier (photos, vidéos, articles, infographies) et à
              choisir les bons moments pour les diffuser.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Calendrier éditorial :</strong> Nous mettons en place un
                planning de publication régulier pour assurer une présence
                continue sur les réseaux sociaux.
              </li>
              <li>
                <strong>Création de contenu visuel :</strong> Nos graphistes
                créent des visuels attrayants et cohérents avec votre image de
                marque pour maximiser l’engagement.
              </li>
            </ul>
          </div>

          {/* Gestion des publications et interactions */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              2. Gestion des publications et de l’interaction
            </h3>
            <p>
              Publier régulièrement est essentiel pour maintenir l’intérêt de
              votre audience. Nous nous chargeons de :
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Publication régulière :</strong> Que ce soit des posts
                d’actualité, des offres spéciales ou des événements, nous
                veillons à ce que votre page reste active et intéressante.
              </li>
              <li>
                <strong>Gestion des interactions :</strong> Répondre aux
                commentaires, messages et avis pour maintenir un lien avec votre
                communauté.
              </li>
            </ul>
          </div>

          {/* Publicité sur les réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              3. Publicité sur les réseaux sociaux (Social Ads)
            </h3>
            <p>
              La publicité sur les réseaux sociaux est un excellent moyen de
              promouvoir vos produits ou services auprès d’une audience ciblée.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Campagnes Facebook Ads et Instagram Ads :</strong> Nous
                gérons vos campagnes publicitaires en définissant une audience
                locale à Roanne, en créant des annonces percutantes, et en
                suivant les performances pour maximiser le retour sur
                investissement (ROI).
              </li>
              <li>
                <strong>Budget optimisé :</strong> Nous ajustons les budgets
                pour chaque campagne afin d’assurer une efficacité maximale sans
                dépasser vos dépenses prévues.
              </li>
            </ul>
          </div>

          {/* Analyse des performances */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              4. Analyse des performances et rapports
            </h3>
            <p>
              Nous vous fournissons des rapports réguliers sur les performances
              de vos comptes pour suivre votre croissance et ajuster la
              stratégie si nécessaire.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Suivi des KPIs (indicateurs clés) :</strong> Nombre de
                likes, partages, commentaires, portée des publications, taux
                d’engagement, etc.
              </li>
              <li>
                <strong>Optimisation continue :</strong> En fonction des
                résultats, nous ajustons les contenus, les horaires de
                publication et les campagnes publicitaires pour améliorer les
                performances.
              </li>
            </ul>
          </div>
        </div>
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
            href: "https://www.instagram.com/alizeorthopedie/"
          },
          {
            imageSrc: image2,
            alt: "",
            href: "https://www.facebook.com/letisseurdessaveurs"
          }
        ]
      }
    }
  ],
  cardSections: [
    {
      type: "cards",
      title: (
        <>
          Pourquoi la gestion des réseaux sociaux est-elle cruciale pour les
          entreprises à Roanne et alentours ?
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
              Avec une présence active sur les réseaux sociaux, vous pouvez
              toucher un large public local et améliorer la notoriété de votre
              marque.
            </>
          )
        },
        {
          logo: (
            <MessageCircle
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Interaction avec la communauté</>,
          text: (
            <>
              Les réseaux sociaux permettent de dialoguer directement avec vos
              clients, recueillir des avis, et répondre à leurs questions en
              temps réel.
            </>
          )
        },
        {
          logo: (
            <CornerRightUp
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Amélioration du référencement (SEO social)</>,
          text: (
            <>
              Les signaux sociaux (interactions, partages, mentions) peuvent
              indirectement influencer votre positionnement dans les moteurs de
              recherche, améliorant ainsi votre visibilité en ligne.
            </>
          )
        },
        {
          logo: (
            <Pin
              size={40}
              color="#D0B444"
              fill="#D0B444"
            />
          ),
          title: <>Publicité ciblée</>,
          text: (
            <>
              Les plateformes comme Facebook et Instagram permettent de cibler
              des audiences locales avec une grande précision, ce qui est
              parfait pour toucher des clients potentiels autour de Roanne.
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
          title: <>Fidélisation des clients</>,
          text: (
            <>
              En restant actif sur les réseaux sociaux, vous maintenez un lien
              constant avec vos clients, en partageant des actualités, des
              promotions, et en répondant à leurs besoins.
            </>
          )
        }
      ]
    },
    {
      type: "cards",
      title: (
        <>
          Pourquoi choisir C2 Projet Web pour la gestion de vos réseaux sociaux
          ?
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
              Nous connaissons bien le marché de Roanne et ses particularités,
              ce qui nous permet de créer des stratégies de contenu et des
              campagnes adaptées à la clientèle locale.
            </>
          )
        },
        {
          logo: (
            <CircleCheck
              size={40}
              color="#000000"
            />
          ),
          title: <>Gestion complète</>,
          text: (
            <>
              De la création de contenu à la gestion de communauté en passant
              par la publicité en ligne, nous nous occupons de tous les aspects
              de vos réseaux sociaux.
            </>
          )
        },
        {
          logo: (
            <Eye
              size={40}
              color="#000000"
            />
          ),
          title: <>Optimisation SEO et social</>,
          text: (
            <>
              Nos experts veillent à ce que votre présence sur les réseaux
              sociaux soit optimisée pour renforcer votre positionnement dans
              les moteurs de recherche.
            </>
          )
        },
        {
          logo: (
            <Headphones
              size={40}
              color="#000000"
            />
          ),
          title: <>Suivi et accompagnement personnalisé</>,
          text: (
            <>
              Nous travaillons en étroite collaboration avec vous pour ajuster
              notre stratégie en fonction de vos besoins et des évolutions du
              marché.
            </>
          )
        }
      ]
    }
  ]
};
