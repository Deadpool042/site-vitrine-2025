import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const date = new Date().getFullYear();

  const contact = [
    {
      icon: <MapPin width={20} />,
      text: "4 place Jules Rabourdin, 42300 Villerest"
    },
    {
      icon: <Phone width={20} />,
      text: "04 77 78 69 88"
    },
    {
      icon: <Mail width={20} />,
      text: "contact@c2projetweb.fr"
    }
  ];

  const socialMedia = [
    {
      iconSrc: "src/assets/icons/facebook.svg",
      iconWhiteSrc: "src/assets/icons/facebook-white.svg",
      alt: "Logo Facebook, Lien vers la page Facebook C2 Projet Web",
      href: "https://www.facebook.com/c2projetweb"
    },
    {
      iconSrc: "src/assets/icons/instagram.svg",
      iconWhiteSrc: "src/assets/icons/instagram-white.svg",

      alt: "Logo Instagram, Lien vers la page Instagram C2 Projet Web",
      href: "https://www.instagram.com/c2projetweb/"
    },
    {
      iconSrc: "src/assets/icons/youtube.svg",
      iconWhiteSrc: "src/assets/icons/youtube- white.svg",

      alt: "Logo Youtube, Lien vers la page Youtube C2 Projet Web",

      href: "https://www.youtube.com/@c2projetweb-villerest"
    },
    {
      iconSrc: "src/assets/icons/linkedin.svg",
      iconWhiteSrc: "src/assets/icons/linkedin-white.svg",

      alt: "Logo linkedin, Lien vers la page linkedin C2 Projet Web",
      href: "https://www.linkedin.com/company/34621700"
    }
  ];

  const expertises = [
    {
      href: "/creation-site-internet-roanne",
      text: "Création de site vitrine"
    },
    {
      href: "/creation-site-ecommerce-roanne",
      text: "Création de site e-commerce"
    },
    {
      href: "/gestion-reseaux-sociaux-roanne",
      text: "Gestion des réseaux sociaux"
    },
    {
      href: "/conseil-communication-roanne",
      text: "Conseil & Stratégie"
    },
    {
      href: "/agence-design-graphique-a-roanne",
      text: "Studio graphisme"
    },
    {
      href: "/communication-digitale-seo-roanne",
      text: "Référencement & SEO"
    },
    {
      href: "/identite-de-marque",
      text: "Identité de marque"
    }
  ];

  const informations = [
    {
      href: "/",
      text: "Accueil"
    },
    {
      href: "/plan-du-site",
      text: "Plan du site"
    },
    {
      href: "/politique-de-confidentialite",
      text: "Politique de confidentialité"
    },
    {
      href: "/mentions-legales",
      text: "Mentions légales"
    },
    {
      href: "/contact",
      text: "Contact"
    }
  ];

  const [hoverStates, setHoverStates] = useState<boolean[]>(
    Array(socialMedia.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index: number) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <footer className="flex flex-col text-xs text-white sm:text-sm sm:space-y-4 border-t-[1px] border-t-slate-500  ">
      <div className="w-full   md:flex md:flex-row md:items-center md:justify-around  2xl:max-w-[65%] xl:mx-auto xl:justify-center px-4 transition-all duration-300 ease-in-out py-5">
        <div className="flex flex-col items-center flex-grow mx-auto space-y-6 md:space-x-6 md:flex-row md:items-baseline md:justify-center xl:justify-start">
          <div className="space-y-2 md:w-1/3">
            <ul className="flex flex-col ">
              <p className="mb-2 text-xl font-semibold text-center md:text-left">
                Contact
              </p>
              {contact.map((item, index) => (
                <li
                  className="flex items-center justify-center gap-2 md:justify-start md:text-wrap "
                  key={index}>
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
            <ul className="flex justify-center gap-2 md:justify-start">
              {socialMedia.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 ">
                  <Link
                    to={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-all duration-300 ease-in-out border rounded-md group bg-primary-color border-primary-color hover:bg-black "
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}>
                    <img
                      className="transition-all duration-300"
                      src={
                        hoverStates[index] ? item.iconWhiteSrc : item.iconSrc
                      } // Change uniquement l'icône en survol
                      alt={item.alt}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 space-y-2">
            <ul className="flex flex-col gap-1 ">
              <p className="mb-2 text-xl font-semibold text-center md:text-start">
                Nos expertises
              </p>

              {expertises.map((item, index) => (
                <li
                  key={index}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:justify-start ">
                  {" "}
                  <Link
                    to={item.href}
                    className="text-center transition-all duration-300 ease-in-out hover:text-primary-color">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-1/3 space-y-2">
            <ul className="flex flex-col gap-1 ">
              <p className="mb-2 text-xl font-semibold text-center md:text-start">
                Informations
              </p>

              {informations.map((item, index) => (
                <li
                  key={index}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:justify-start">
                  {" "}
                  <Link
                    to={item.href}
                    className="text-center transition-all duration-300 ease-in-out hover:text-primary-color">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            className=" w-[80px] my-6 "
            src="src/assets/icons/logoC2.webp"
            alt="Logo C2 Projet Web"
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-2 border-t-[1px] border-t-slate-500 h-11">
        <span className="text-center">Copyright © {date}</span>{" "}
        <span className="text-center">
          C2 Projet Web, agence de communication à Villerest
        </span>
      </div>
    </footer>
  );
}

export default Footer;
