import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

function Backup() {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler la page vers le haut avec un effet fluide
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Afficher le bouton après un certain défilement
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Revenir en haut"
          className="fixed p-2 transition-all duration-300 ease-in-out border rounded-sm group bottom-5 right-5 bg-primary-color hover:bg-black hover:border-primary-color border-primary-color">
          <ChevronUp className="text-black transition-all duration-300 ease-in-out group-hover:text-white" />
        </button>
      )}
    </>
  );
}

export default Backup;
