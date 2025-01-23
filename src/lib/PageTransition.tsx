import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { useNavigationDirection } from "./History";
import { useLocation } from "react-router-dom";

const pageVariants = {
  forward: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  },
  backward: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  }
};

const pageTransitionAnimation = {
  type: "tween",
  ease: "anticipate",
  duration: 1 // Durée de l'animation en secondes
};

interface PageTransitionProps {
  children: ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  const direction = useNavigationDirection();
  const location = useLocation();

  useEffect(() => {
    // Remettre le scroll à 0 après le chargement

    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, pageTransitionAnimation.duration * 1000); // Attendre la fin de la transition
    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <>
      {/* Page Transition */}
      <motion.div
        key={location.pathname} // Clé unique basée sur le chemin actuel
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants[direction]}
        transition={pageTransitionAnimation}
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden" // Évite les décalages liés au contenu qui dépasse
        }} // Fixer la hauteur pour éviter les sauts
      >
        {children}
      </motion.div>
    </>
  );
}

export default PageTransition;
