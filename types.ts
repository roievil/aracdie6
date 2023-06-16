export interface Service {
  icon: string;
  title: Category;
  about: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  category: Category;
  key_techs: string[];
  pictures: IGalleryPicture[]
}

export interface IGalleryPicture {
  alt: string;
  pictureLegend: string;
  picturePath: string;
  width: number;
  height: number;
}

export interface IContextState {
    currentCategory: Category,
    activeNavBarTab: string,
    setActiveNavBarTab: (activeNavBarTab: string) => void,
    setCurrentCategory: (currentCategory: Category) => void,
}

export type Category = "Travail du Bois" | "Travail du Cuir" | "Découpe numérique" | "Ebénisterie" | "Modélisation" | "Programmation";
