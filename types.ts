import { FunctionComponent } from "react";
import { IconType } from "react-icons";
export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  category: Category[];
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

export type Category = "Travail du Bois" | "Travail du Cuir" | "Découpe numérique" | "Modélisation" | "Ebénisterie";
