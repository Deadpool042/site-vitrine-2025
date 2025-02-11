// AppRouter.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "@/pages/HomePage";
import Lagence from "@/pages/Lagence";
import Site from "@/pages/Site";
import SocialMedia from "@/pages/SocialMedia";
import Expertise from "@/pages/Expertise";
import Studio from "@/pages/Studio";
import Referencement from "@/pages/Referencement";
import Identite from "@/pages/Identite";
import Animation from "@/pages/Animation";
import Partenaires from "@/pages/Partenaires";
import Contact from "@/pages/Contact";
import SiteMap from "@/pages/SiteMap";
import Confidentialites from "@/pages/Confidentialites";
import MentionsLegales from "@/pages/MentionsLegales";
import NotFound from "@/pages/NotFound";
import PageTransition from "@/lib/PageTransition";
import SiteVitrine from "@/pages/SiteVitrine";
import SiteEcommerce from "@/pages/SiteEcommere";

function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/lagence-de-communication-c2-projet-web"
          element={
            <PageTransition>
              <Lagence />
            </PageTransition>
          }
        />
        <Route
          path="/creation-site-web-roanne"
          element={
            <PageTransition>
              <Site />
            </PageTransition>
          }
        />
        <Route
          path="/creation-site-internet-roanne"
          element={
            <PageTransition>
              <SiteVitrine />
            </PageTransition>
          }
        />
        <Route
          path="/creation-site-ecommerce-roanne"
          element={
            <PageTransition>
              <SiteEcommerce />
            </PageTransition>
          }
        />
        <Route
          path="/gestion-reseaux-sociaux-roanne"
          element={
            <PageTransition>
              <SocialMedia />
            </PageTransition>
          }
        />
        <Route
          path="/conseil-communication-roanne"
          element={
            <PageTransition>
              <Expertise />
            </PageTransition>
          }
        />
        <Route
          path="/agence-design-graphique-a-roanne"
          element={
            <PageTransition>
              <Studio />
            </PageTransition>
          }
        />
        <Route
          path="/communication-digitale-seo-roanne"
          element={
            <PageTransition>
              <Referencement />
            </PageTransition>
          }
        />
        <Route
          path="/identite-de-marque"
          element={
            <PageTransition>
              <Identite />
            </PageTransition>
          }
        />
        <Route
          path="/animation-evenement-roanne/"
          element={
            <PageTransition>
              <Animation />
            </PageTransition>
          }
        />
        <Route
          path="/creations-originales-c2projetweb"
          element={
            <PageTransition>
              <Partenaires />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/plan-du-site"
          element={
            <PageTransition>
              <SiteMap />
            </PageTransition>
          }
        />
        <Route
          path="/politique-de-confidentialite"
          element={
            <PageTransition>
              <Confidentialites />
            </PageTransition>
          }
        />
        <Route
          path="/mentions-legales"
          element={
            <PageTransition>
              <MentionsLegales />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRouter;
