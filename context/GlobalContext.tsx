import React, { useState, ReactNode } from "react";
import { IContextState, Category } from "../types";

export const GlobalContext = React.createContext<IContextState | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [activeNavBarTab, setActiveNavBarTab] = useState<string>("Home");

  const state: IContextState = {
    currentCategory,
    activeNavBarTab,
    setCurrentCategory,
    setActiveNavBarTab,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
