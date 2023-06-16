import { useState, useEffect, useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category, IContextState } from "../types";
import { GlobalContext } from "../context/GlobalContext";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState<Category | "all">("all");

  const { currentCategory, setCurrentCategory } = useContext(
    GlobalContext
  ) as IContextState;

  useEffect(() => {
    if (currentCategory) {
      handlerFilterCategory(currentCategory);
    }
  }, [currentCategory]);

  useEffect(() => {
    console.log("Active", active);
    console.log("projectsData", projectsData);
  }, [active]);

  const handlerFilterCategory = (category: Category | "all") => {
    console.log("category from handlerFilterCategory", category);
    if (category === "all") {
      console.log("category === all");
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "80vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
