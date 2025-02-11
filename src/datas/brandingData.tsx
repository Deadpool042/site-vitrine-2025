import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import brandingLogo from "@/assets/icons/brandIdentityIcon.svg";
import { Bell, ChartColumnIcon, MousePointer2, Pen, Smile } from "lucide-react";

export const brandingData: PageData = {
  hero: {
    logo: brandingLogo,

    fallbackLogo: "/assets/logos/brandIdentityIcon.svg",
    alt: "",
    title: <>Identité de marque</>,
    subtitle: <>Agence de Branding à Roanne et alentours</>,
    text: (
      <>
        Le <strong>branding</strong>, ou l’art de construire une identité de
        marque forte, est un élément clé pour différencier votre entreprise dans
        un marché concurrentiel. À Roanne et ses alentours,{" "}
        <strong>C2 Projet Web</strong> vous accompagne dans le développement
        d’une image de marque cohérente et mémorable, qui reflète vos valeurs et
        capte l’attention de vos clients. Que vous soyez une start-up, une PME
        ou une grande entreprise, une stratégie de branding bien pensée est
        essentielle pour construire une relation durable avec votre audience.
      </>
    ),
    hashtags: (
      <>
        #branding #logo #charte graphique #brandbook #identitédemarque
        #créationdemarque
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
  singleSections: [
    {
      variant: "alternative",
      type: "single",
      title: <>Qu'est-ce que le branding ?</>,
      subtitle: (
        <>
          Le <strong>branding</strong> ne se limite pas à un simple logo ou à
          une charte graphique. Il s’agit de l’ensemble des éléments visuels,
          émotionnels et expérientiels qui définissent votre entreprise et la
          manière dont elle est perçue par vos clients. Le branding permet de :
        </>
      ),
      list: (
        <ul className="space-y-2 list-decimal list-inside">
          <li>
            <strong>Différencier votre entreprise :</strong> Dans un marché où
            les concurrents sont nombreux, une identité de marque bien définie
            permet de se démarquer et de capter l’attention.
          </li>
          <li>
            <strong>Créer une connexion émotionnelle :</strong> Un bon branding
            génère des émotions positives et crée un lien fort avec votre
            audience, favorisant la fidélité et l’engagement.
          </li>
          <li>
            <strong>Renforcer la reconnaissance :</strong> Une marque bien
            construite est immédiatement reconnaissable et permet à vos clients
            de se souvenir de vous plus facilement.
          </li>
          <li>
            <strong>Communiquer vos valeurs :</strong> Votre image de marque
            doit refléter les valeurs de votre entreprise, ses missions et sa
            vision.
          </li>
          <li>
            <strong>Favoriser la cohérence :</strong> Une identité visuelle
            cohérente sur tous vos supports de communication (site web, réseaux
            sociaux, brochures, etc.) renforce la confiance des clients.
          </li>
        </ul>
      ),
      text: (
        <>
          Les services proposés par C2 Projet Web, Agence de Branding à Roanne
        </>
      ),
      tabs: [
        {
          title: <>Création d'identité visuelle</>,
          subtitle: (
            <p>
              L’identité visuelle est le socle de votre branding. Elle comprend
              tous les éléments graphiques qui définissent votre marque.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Logo design:</strong> Conception de logos originaux et
                impactants, qui captent l’essence de votre marque.
              </li>
              <li>
                <strong>Palette de couleurs :</strong> Choix de couleurs qui
                reflètent vos valeurs et qui garantissent la cohérence visuelle
                de votre marque.
              </li>
              <li>
                <strong>Typographie et éléments graphiques :</strong> Sélection
                de typographies et d’éléments visuels qui renforcent votre
                identité.
              </li>
            </ul>
          )
        },
        {
          title: <>Charte graphique et guidelines</>,
          subtitle: (
            <p>
              Une <strong>charte graphique</strong> bien définie est essentielle
              pour garantir l’uniformité de votre marque sur tous vos supports
              de communication.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Élaboration de la charte graphique :</strong> Nous
                créons un document détaillant l’utilisation correcte de votre
                logo, vos couleurs, vos polices, etc., afin d’assurer une image
                de marque cohérente.
              </li>
              <li>
                <strong>Guidelines d’utilisation :</strong> Nous fournissons des
                lignes directrices claires pour que votre équipe et vos
                partenaires puissent utiliser votre identité visuelle de manière
                homogène.
              </li>
            </ul>
          )
        },
        {
          title: <>Stratégie de marque</>,
          subtitle: (
            <p>
              Le branding va au-delà de l’aspect visuel. Il inclut également la
              manière dont vous communiquez avec votre audience.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Définition de la mission et des valeurs :</strong> Nous
                vous aidons à articuler clairement la mission de votre
                entreprise et ses valeurs fondamentales.
              </li>
              <li>
                <strong>Positionnement de marque :</strong> Nous travaillons
                avec vous pour définir un positionnement clair et différenciant,
                en adéquation avec vos objectifs commerciaux et vos cibles.
              </li>
              <li>
                <strong>Ton et voix de marque :</strong>Nous vous aidons à
                définir le ton et la voix qui correspondront le mieux à votre
                audience (professionnel, décontracté, créatif, etc.).
              </li>
            </ul>
          )
        },
        {
          title: <>Refonde de marque (rebranding)</>,
          subtitle: (
            <p>
              Si votre marque a besoin d’un rafraîchissement,{" "}
              <strong>C2 Projet Web </strong>peut vous accompagner dans un
              processus de <strong>rebranding </strong>complet.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Diagnostic de marque :</strong> Nous analysons votre
                image de marque actuelle pour identifier les axes
                d’amélioration.
              </li>
              <li>
                <strong>Refonte du logo et de l’identité visuelle :</strong>{" "}
                Nous retravaillons votre identité visuelle tout en veillant à
                respecter l’histoire et les valeurs de votre marque.
              </li>
              <li>
                <strong>Nouvelle stratégie de communication :</strong>Nous
                mettons en place une stratégie de communication qui reflète
                votre nouvelle image de marque et attire de nouveaux clients.
              </li>
            </ul>
          )
        },
        {
          title: <>Supports de communication visuelle</>,
          subtitle: (
            <p>
              Nous concevons des supports de communication qui renforcent votre
              image de marque et véhiculent vos messages de manière efficace.
            </p>
          ),
          text: (
            <ul className="pl-4 space-y-2 list-disc list-inside">
              <li>
                <strong>Brochures et dépliants :</strong> Création de supports
                imprimés professionnels pour vos événements ou vos campagnes
                marketing.
              </li>
              <li>
                <strong>Bannières et affiches :</strong> Conception de visuels
                impactants pour vos publicités ou événements.
              </li>
              <li>
                <strong>Contenu digital :</strong>Création de visuels pour vos
                réseaux sociaux, newsletters, et autres supports numériques.
              </li>
            </ul>
          )
        }
      ]
    }
  ],
  cardSections: [
    {
      type: "cards",
      title: <>Pourquoi choisir C2 Projet Web, agence de branding à Roanne ?</>,
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
              color="#D0B444"
            />
          ),
          title: <>Expertise locale</>,
          text: (
            <>
              En tant qu' agence de branding à Roanne, nous comprenons les
              spécificités du marché local et pouvons adapter nos stratégies
              pour répondre aux besoins des entreprises de la région.
            </>
          )
        },
        {
          logo: (
            <Bell
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Approche sur mesure</>,
          text: (
            <>
              Chaque entreprise est unique. C’est pourquoi nous créons des
              solutions de branding personnalisées qui reflètent vos valeurs et
              vos objectifs.
            </>
          )
        },
        {
          logo: (
            <Pen
              size={40}
              // color="#D0B444"
              color="#D0B444"
            />
          ),
          title: <>Créativité et innovation</>,
          text: (
            <>
              Nos experts en design et en communication mettent leur créativité
              au service de votre marque pour vous proposer des concepts
              innovants et originaux.
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
          title: <>Cohérence et professionnalisme</>,
          text: (
            <>
              Nous vous aidons à garantir une cohérence visuelle sur tous vos
              supports de communication, qu’ils soient numériques ou imprimés.
            </>
          )
        },
        {
          logo: (
            <ChartColumnIcon
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Accompagnement complet</>,
          text: (
            <>
              De la conception de l’identité visuelle à la mise en place d’une
              stratégie de communication, nous vous accompagnons à chaque étape
              pour assurer la réussite de votre projet de branding.
            </>
          )
        }
      ]
    }
  ]
};
