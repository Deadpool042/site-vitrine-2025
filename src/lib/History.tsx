import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigationContext } from "./NavigationContext";

export function useNavigationDirection() {
  const location = useLocation();
  const { history, addToHistory } = useNavigationContext();
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentPathIndex = history.indexOf(location.pathname);

    if (currentPathIndex === -1) {
      // Nouvelle page (naviguer en avant)
      addToHistory(location.pathname);
      setDirection("forward");
    } else if (currentPathIndex < history.length - 1) {
      // Page précédente (naviguer en arrière)
      setDirection("backward");
    }
  }, [location, history, addToHistory]);

  return direction;
}
