import { Link } from "react-router-dom";
import { PageData } from "./data";
import { Button } from "@/components/ui/Button";
import animationLogo from "@/assets/icons/animation.svg";
import {
  ChartNoAxesColumnIncreasing,
  Cross,
  Handshake,
  LayoutGrid,
  Monitor,
  MousePointer2,
  Music,
  Pointer,
  ShieldHalf,
  Smile
} from "lucide-react";
import image from "@/assets/images/pexels-photo-1192609-1192609-683x1024.webp";

export const expertiseData: PageData = {
  hero: {
    logo: animationLogo,

    fallbackLogo: "/assets/logos/animation.svg",
    alt: "",
    title: "Conseil et Expertise",
    subtitle: "Conseil et expertise en communication à Roanne et alentours",
    text: (
      <>
        Pour opter pour un conseil en communication à Roanne et alentours avec{" "}
        <strong>C2 Projet Web</strong> ? Dans un monde où la communication est
        au cœur des relations entre les entreprises et leurs clients, maîtriser
        sa stratégie de <strong>communication</strong> est crucial pour se
        démarquer. Que vous soyez une petite entreprise locale à Roanne ou une
        organisation souhaitant renforcer sa notoriété dans les environs, une
        communication bien pensée peut faire toute la différence.{" "}
        <strong>C2 Projet Web</strong>, spécialisée dans la stratégie de
        communication digitale et traditionnelle, offre son expertise pour vous
        aider à structurer et optimiser votre message, améliorer votre image de
        marque, et toucher efficacement votre cible.
      </>
    ),
    hashtags: (
      <>
        #Communication #StratégieDeCommunication #Marketing
        #CommunicationVisuelle #DigitalMarketing #SocialMedia #ContentMarketing
        #Branding #Storytelling #MarketingDigital
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
      title: <>Les services de conseil en communication de C2 Projet Web </>,
      subtitle: (
        <>
          Chez <strong>C2 Projet Web</strong>, nous proposons un accompagnement
          sur mesure en fonction de vos besoins spécifiques. Que vous soyez à la
          recherche d’une refonte complète de votre stratégie de communication
          ou d’un appui pour des actions ponctuelles, nous mettons à votre
          disposition notre savoir-faire pour obtenir des résultats concrets.
          Voici quelques-uns de nos services en conseil et expertise en
          communication :
        </>
      ),
      text: (
        <div className="max-w-4xl mx-auto space-y-10 ">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              1. Audit et diagnostic de communication
            </h3>
            <p>
              Avant de mettre en place une nouvelle stratégie de communication,
              il est important de faire un état des lieux. Nous procédons à un{" "}
              <strong>audit complet</strong> de votre communication actuelle
              pour identifier les forces, les faiblesses et les opportunités
              d’amélioration.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Analyse des supports existants :</strong> Nous passons
                en revue vos supports de communication actuels (site web,
                brochures, réseaux sociaux, etc.) pour évaluer leur cohérence et
                leur efficacité.
              </li>
              <li>
                <strong>Étude de la concurrence :</strong> Nous analysons la
                communication de vos concurrents pour vous aider à vous
                démarquer et à identifier des opportunités.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              2. Élaboration de la stratégie de communication
            </h3>
            <p>
              Une fois l’audit effectué, nous élaborons une{" "}
              <strong>stratégie de communication</strong> sur mesure, adaptée à
              vos objectifs commerciaux et à votre cible.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Définition des objectifs:</strong> Que vous souhaitiez
                augmenter votre notoriété, fidéliser vos clients ou lancer un
                nouveau produit, nous vous aidons à fixer des objectifs clairs
                et mesurables.
              </li>
              <li>
                <strong>Choix des canaux de communication :</strong> Nous
                sélectionnons les canaux les plus adaptés (digital, presse,
                affichage, etc.) pour toucher efficacement votre audience.
              </li>
              <li>
                <strong>Création d’un message impactant :</strong> Nous
                travaillons avec vous pour définir un message clair, cohérent et
                percutant qui reflète les valeurs de votre entreprise.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              3. Communication digitale
            </h3>
            <p>
              Aujourd’hui, une stratégie de communication digitale efficace est
              indispensable pour atteindre votre public cible en ligne. C2
              Projet Web vous accompagne dans la gestion de vos campagnes
              numériques :
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Création de contenus web :</strong>Nous créons des
                contenus de qualité, optimisés pour le SEO, qui captent
                l’attention de vos visiteurs et améliorent votre visibilité sur
                les moteurs de recherche.
              </li>
              <li>
                <strong>Stratégie sur les réseaux sociaux :</strong>Nous vous
                aidons à choisir les plateformes sociales pertinentes (Facebook,
                Instagram, LinkedIn, etc.) et à y diffuser du contenu engageant
                pour dynamiser votre présence en ligne.
              </li>
              <li>
                <strong>Campagnes de publicité en ligne :</strong>Que ce soit
                via Google Ads ou les réseaux sociaux, nous gérons vos campagnes
                publicitaires en ligne pour générer du trafic et booster vos
                conversions.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-color">
              4. Identité visuelle et branding
            </h3>
            <p>
              Votre image de marque est un élément central de votre stratégie de
              communication. Nous vous aidons à définir et à créer une{" "}
              <strong>identité visuelle</strong> qui vous représente
              efficacement.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Création de logos :</strong> Nous concevons des logos
                qui reflètent les valeurs et l’esprit de votre entreprise.
              </li>
              <li>
                <strong>Charte graphique :</strong> Nous développons une charte
                graphique cohérente pour que tous vos supports de communication
                (site web, brochures, etc.) soient harmonisés.
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
            alt: ""
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
          Pourquoi investir dans une stratégie de conseil en communication à
          Roanne avec C2 Projet Web ?
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
          title: <>Améliorer la visibilité</>,
          text: (
            <>
              Une communication efficace permet de faire connaître vos services
              ou produits auprès de votre cible, que ce soit en ligne ou dans
              des supports traditionnels (affiches, flyers).
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
          title: <>Renforcer la crédibilité</>,
          text: (
            <>
              En transmettant un message clair et cohérent, vous renforcez la
              confiance de vos clients et partenaires envers votre entreprise.
            </>
          )
        },
        {
          logo: (
            <Pointer
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Toucher la bonne audience</>,
          text: (
            <>
              Une bonne stratégie de communication permet de cibler les bons
              segments de marché et d’adresser le bon message aux bonnes
              personnes, augmentant ainsi vos chances de conversion.
            </>
          )
        },
        {
          logo: (
            <Smile
              size={40}
              color="#D0B444"
              fill="#D0B444"
            />
          ),
          title: <>Se différencier de la concurrence</>,
          text: (
            <>
              Une bonne stratégie de communication permet de cibler les bons
              segments de marché et d’adresser le bon message aux bonnes
              personnes, augmentant ainsi vos chances de conversion.
            </>
          )
        },
        {
          logo: (
            <ShieldHalf
              size={40}
              color="#D0B444"
            />
          ),
          title: <>Consolider l'image de marque</>,
          text: (
            <>
              La manière dont vous communiquez contribue à la perception de
              votre marque. Il est donc crucial de véhiculer les bonnes valeurs
              et d’avoir une image cohérente et professionnelle.
            </>
          )
        }
      ]
    },
    {
      type: "cards",
      title: (
        <>
          Pourquoi choisir C2 Projet Web pour vos besoins en communication ? ?
        </>
      ),
      subtitle: (
        <>
          Voici pourquoi <strong>C2 Projet Web</strong> est le choix idéal pour
          accompagner les entreprises de Roanne et de ses alentours dans leur
          stratégie de communication :
        </>
      ),
      items: [
        {
          logo: (
            <Smile
              size={40}
              color="#000000"
            />
          ),
          title: <>Expertise locale</>,
          text: (
            <>
              En tant qu'agence implantée à Roanne, nous connaissons bien le
              marché local et ses particularités. Cela nous permet de développer
              des stratégies de communication adaptées à votre public cible.
            </>
          )
        },
        {
          logo: (
            <Music
              size={40}
              color="#000000"
            />
          ),
          title: <>Conseil personnalisé</>,
          text: (
            <>
              Nous prenons le temps de comprendre vos objectifs, vos valeurs et
              votre vision afin de créer une stratégie de communication sur
              mesure qui vous correspond.
            </>
          )
        },
        {
          logo: (
            <LayoutGrid
              size={40}
              color="#000000"
            />
          ),
          title: <>Solutions complètes</>,
          text: (
            <>
              De l’audit à la mise en œuvre, nous gérons l’ensemble des aspects
              de votre communication, que ce soit en ligne ou hors ligne.
            </>
          )
        },
        {
          logo: (
            <Monitor
              size={40}
              color="#000000"
            />
          ),
          title: <>Expertise en digital</>,
          text: (
            <>
              Notre expertise en communication digitale nous permet de vous
              proposer des solutions modernes et efficaces pour atteindre vos
              objectifs rapidement et durablement.
            </>
          )
        },
        {
          logo: (
            <ChartNoAxesColumnIncreasing
              size={40}
              color="#000000"
            />
          ),
          title: <>Accompagnement continu</>,
          text: (
            <>
              Nous travaillons en étroite collaboration avec vous tout au long
              du processus pour garantir que la stratégie mise en place répond à
              vos attentes et produit des résultats concrets.
            </>
          )
        }
      ]
    }
  ]
};
