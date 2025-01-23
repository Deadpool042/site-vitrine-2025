import React, { createContext, useContext, useState } from "react";

type NavigationContextType = {
  history: string[];
  addToHistory: (path: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [history, setHistory] = useState<string[]>([]);

  const addToHistory = (path: string) => {
    setHistory(prevHistory => {
      if (prevHistory[prevHistory.length - 1] !== path) {
        return [...prevHistory, path];
      }
      return prevHistory;
    });
  };

  return (
    <NavigationContext.Provider value={{ history, addToHistory }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    );
  }
  return context;
};
