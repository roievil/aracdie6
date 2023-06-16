import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    "capitalize cursor-pointer font-normal text-gray-700 hover:text-gray-400";
  if (active === value) className += " font-bold";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="Travail du Bois" {...props} />
      <NavItem value="Travail du Cuir" {...props} />
      <NavItem value="Découpe numérique" {...props} />
      <NavItem value="Ebénisterie" {...props} />
      <NavItem value="Modélisation" {...props} />
      <NavItem value="Programmation" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
