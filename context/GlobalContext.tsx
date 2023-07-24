import React, { useState, ReactNode } from "react";
import { IContextState, Category, IProject } from "../types";
import { projects as projectsData } from "../data";

export const GlobalContext = React.createContext<IContextState | null>(null);

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState<Category | "All">(
    "All"
  );
  const [currentProject, setCurrentProject] = useState<IProject | null>(null);
  const [projects, setProjects] = useState<IProject[]>(projectsData);
  const [activeNavBarTab, setActiveNavBarTab] = useState<string>("Home");

  const state: IContextState = {
    currentCategory,
    currentProject,
    projects,
    activeNavBarTab,
    setCurrentCategory,
    setCurrentProject,
    setProjects,
    setActiveNavBarTab,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
