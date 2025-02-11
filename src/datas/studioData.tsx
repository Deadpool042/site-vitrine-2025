import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import Logo from "@/assets/icons/studioIcon.svg";
import { Bookmark, Cross, Eye, Grid2X2, Lightbulb, User } from "lucide-react";
import image from "@/assets/images/agence-de-design-Roanne-C2-Projet-Web-1-576x1024.webp";
import logo1 from "@/assets/icons/13.svg";
import logo2 from "@/assets/icons/14.svg";
import logo3 from "@/assets/icons/15.svg";
import logo4 from "@/assets/icons/6-2.svg";

export const studioData: PageData = {
  hero: {
    logo: Logo,

    fallbackLogo: "/assets/logos/studioIcon.svg",
    alt: "",
    title: "Studio créa et design",
    subtitle: "Agence de design à Roanne et alentours",
    text: (
      <>
        Que peut apporter une agence design à Roanne ?
        <br />
        <br />
        Le design joue un rôle crucial dans l’image de marque d’une entreprise.
        Qu’il s’agisse de créer un site web attrayant, de concevoir une identité
        visuelle forte ou de développer des supports de communication efficaces,
        un bon design peut faire toute la différence pour capter l’attention de
        vos clients. À Roanne, <strong>C2 Projet Web</strong> se positionne
        comme une agence de design incontournable, offrant des solutions
        créatives adaptées aux besoins des entreprises locales et des alentours.
      </>
    ),
    hashtags: (
      <>
        #creation #visuel #plaquette #brochure #creationoriginale #studio #video
        #photo #film
      </>
    ),
    button: (
      <Link
        to="/contact"
        rel="no-referrer">
        <Button
          className="bg-primary-color w-[150px] text-black uppercase  transition-all duration-500 ease-in-out border border-black  hover:text-white hover:border-primary-color"
          size={"lg"}>
          contact
        </Button>
      </Link>
    ),
    variant: "other"
  },
  splitSections: [
    {
      type: "split",
      title: <>Les services de design offerts par C2 Projet Web</>,
      subtitle: (
        <>
          <strong>C2 Projet Web</strong>propose une gamme complète de services
          de design, adaptés aux besoins spécifiques des entreprises à Roanne.
          Voici un aperçu de nos principales prestations :
        </>
      ),
      text: (
        <div className="max-w-4xl mx-auto space-y-10 ">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              1. Création d’identité visuelle
            </h3>
            <p>
              Nous vous aidons à développer une identité visuelle unique qui
              reflète l’essence de votre marque.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Logo design :</strong> Conception de logos mémorables
                qui incarnent vos valeurs et votre mission
              </li>
              <li>
                <strong>Charte graphique :</strong> Élaboration d’une charte
                graphique pour garantir la cohérence visuelle sur tous vos
                supports (couleurs, typographies, éléments graphiques).
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              2. Design de sites web
            </h3>
            <p>
              Un site web bien conçu est essentiel pour attirer et convertir vos
              visiteurs.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Design UX/UI:</strong> Nous créons des interfaces
                utilisateur intuitives et esthétiques pour offrir une expérience
                agréable aux visiteurs.
              </li>
              <li>
                <strong>Responsive design :</strong>Nos sites sont optimisés
                pour tous les appareils (ordinateurs, tablettes, smartphones)
                afin d’assurer une navigation fluide.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              3. Supports de communication
            </h3>
            <p>
              Que ce soit pour des flyers, des brochures ou des affiches, nous
              concevons des supports imprimés qui transmettent votre message de
              manière efficace.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Brochures et flyers:</strong>Création de documents
                attractifs pour promouvoir vos produits ou services.
              </li>
              <li>
                <strong>Affiches et bannières:</strong> Conception de supports
                visuels impactants pour vos événements ou campagnes marketing.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              4. Design graphique et illustrations
            </h3>
            <p>
              Nous proposons des services de design graphique personnalisés, y
              compris la création d’illustrations.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Visuels pour réseaux sociaux :</strong> Création de
                contenu graphique pour vos plateformes sociales afin d’augmenter
                l’engagement.
              </li>
              <li>
                <strong>Illustrations personnalisées:</strong> Développement
                d’illustrations sur mesure pour donner vie à vos idées et rendre
                votre communication unique.
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
            imageSrc: image,
            alt: "",
            href: "https://www.csemichelin.fr/"
          }
        ]
      }
    }
  ],
  cardSections: [
    {
      type: "cards",
      title: <>Pourquoi investir dans une agence design à Roanne ?</>,
      subtitle: (
        <>
          Un bon design ne se limite pas à l’esthétique ; il doit également
          communiquer un message et répondre aux attentes de vos clients.
        </>
      ),
      items: [
        {
          logo: (
            <Grid2X2
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Première impression</>,
          text: (
            <>
              Votre design est souvent le premier contact que vos clients auront
              avec votre marque. Un design soigné et professionnel attire
              immédiatement l'attention et crée une image positive.
            </>
          )
        },
        {
          logo: (
            <Eye
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Reconnaissance de la marque</>,
          text: (
            <>
              Une identité visuelle forte aide à construire la reconnaissance de
              votre marque. Cela inclut le choix des couleurs, des typographies,
              et des éléments graphiques qui doivent être cohérents sur tous vos
              supports.
            </>
          )
        },

        {
          logo: (
            <User
              size={40}
              color="#D0B444"
              fill="#D0B444"
            />
          ),
          title: <>Expérience utilisateur</>,
          text: (
            <>
              Un design réfléchi améliore l'expérience utilisateur, que ce soit
              sur un site web ou dans des supports imprimés. Une bonne
              navigation et une mise en page claire incitent les visiteurs à
              rester plus longtemps.
            </>
          )
        },
        {
          logo: (
            <Lightbulb
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Différenciation</>,
          text: (
            <>
              Dans un marché compétitif comme celui de Roanne, un design
              original et créatif permet de se démarquer de la concurrence et de
              susciter l'intérêt de votre audience cible.
            </>
          )
        },
        {
          logo: (
            <Bookmark
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Conversion</>,
          text: (
            <>
              Un design efficace guide les utilisateurs vers une action
              souhaitée, qu'il s'agisse d'un achat, d'une inscription ou d'une
              prise de contact.
            </>
          )
        }
      ]
    },
    {
      type: "cards",
      title: <>Pourquoi choisir C2 Projet Web pour vos projets de design ?</>,
      subtitle: (
        <>
          Les <strong>sites vitrines</strong> créés par{" "}
          <strong>C2 Projet Web</strong> peuvent inclure plusieurs
          fonctionnalités clés pour améliorer l’expérience utilisateur et
          répondre aux besoins de votre entreprise.
        </>
      ),
      items: [
        {
          logo: logo1,

          title: <>Expertise locale</>,
          text: (
            <>
              En tant qu'agence de design basée à Roanne, nous comprenons les
              besoins spécifiques du marché local et des entreprises de la
              région.
            </>
          )
        },
        {
          logo: logo2,

          title: <>Approche personnalisée</>,
          text: (
            <>
              Nous travaillons en étroite collaboration avec nos clients pour
              comprendre leurs besoins, leur vision et leur identité, afin de
              créer des solutions sur mesure.
            </>
          )
        },
        {
          logo: logo3,

          title: <>Solutions complètes</>,
          text: (
            <>
              De la conception de l’identité visuelle à la création de supports
              de communication, nous offrons un service complet pour accompagner
              vos projets.
            </>
          )
        },
        {
          logo: logo4,

          title: <>Créativité et innovation</>,
          text: (
            <>
              Notre équipe de designers passionnés s'engage à proposer des idées
              innovantes et créatives pour garantir que votre marque se
              démarque.
            </>
          )
        }
      ]
    }
  ]
};
