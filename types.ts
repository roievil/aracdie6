export interface Service {
  icon: string;
  title: Category;
  about: string;
  aboutEng: string;
}

export interface IProject {
  name: string;
  nameEng: string;
  description: string;
  descriptionEng: string;
  image_path: string;
  category: Category;
  whiteBg: boolean;
  key_techs: string[];
  slides: IGallerySlide[]
}

export interface IGallerySlide {
  alt: string;
  slideLegend: string;
  slideLegendEng: string;
  slidePath: string;
  width: number;
  height: number;
  type: "picture" | "video" ;
}

export interface IContextState {
    currentCategory: Category | "All",
    currentProject: IProject | null,
    projects: IProject[],
    activeNavBarTab: string,
    setActiveNavBarTab: (activeNavBarTab: string) => void,
    setCurrentCategory: (currentCategory: Category | "All") => void,
    setCurrentProject: (currentProject: IProject | null) => void,
    setProjects: (previousProjects: IProject[]) => void,
}

export type Category = "Travail du Bois" | "Travail du Cuir" | "Découpe numérique" | "Ebénisterie" | "Modélisation" | "Programmation" | "noCategory";
