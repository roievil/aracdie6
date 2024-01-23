import { FunctionComponent, useContext, useEffect, useState } from "react";
import { IContextState, IProject } from "../types";
import { GlobalContext } from "../context/GlobalContext";

import Image from "next/image";
import Slider from "./Slider";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({ project }) => {
  const [selectedSlideLegend, setSelectedSlideLegend] = useState("");

  const { currentProject, setCurrentProject } = useContext(
    GlobalContext
  ) as IContextState;

  const handleSlideLegendChange = (legend) => {
    setSelectedSlideLegend(legend);
    console.log("legend", legend);
  };

  const handleShowDetail = () => {
    setCurrentProject(project);
    console.log("showDetail project", project);
    console.log("showDetail currentProject", currentProject);
  };

  const handleHideDetail = () => {
    setCurrentProject(null);
    console.log("hideDetail");
  };

  if (project) {
    if (!currentProject) {
      return (
        <div className="relative overflow-hidden">
          <div
            className={`cursor-pointer ${currentProject ? "hidden" : ""}`}
            onClick={() => handleShowDetail()}
          >
            <Image
              src={project.image_path}
              alt={project.name}
              className="object-cover w-full h-full"
              height="400" // Adjust this value to suit your layout
              width="400" // Adjust this value to suit your layout
              priority
            />
            {/* Project Name Overlay */}
            <p
              className={`absolute bottom-5 left-1/2 transform -translate-x-1/2 ${
                project.whiteBg ? "text-black" : "text-white"
              } text-center font-bold text-lg`}
            >
              <span className="text-shadow-white">{project.name}</span>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {
            <div className="absolute top-0 left-0 z-10 grid w-full h p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 rounded-lg">
              <div className="overflow-hidden">
                {/* <img src={image_path} alt={name} /> */}
                <Slider
                  slides={project.slides}
                  onSlideLegendChange={handleSlideLegendChange}
                />
                {/* <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            /> */}
              </div>

              <div>
                <h2 className="mb-3 text-xl font-medium md:text-2xl">
                  {project.name}
                </h2>
                <h3
                  className="mb-3 font-medium"
                  dangerouslySetInnerHTML={{
                    __html: project.description,
                  }}
                ></h3>
                <div className="flex flex-wrap mt-5 mb-20 space-x-2 text-sm tracking-wider">
                  {project.key_techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span
                  className=" text-2xl"
                  dangerouslySetInnerHTML={{
                    __html: selectedSlideLegend,
                  }}
                ></span>
              </div>

              <button
                onClick={() => handleHideDetail()}
                className="absolute top-3 right-3 p-1  rounded-full focus:outline-none"
              >
                <div className=" text-black">
                  {" "}
                  {/* Change the size of the cross button */}
                  <img
                    src="/images/icons/cross.svg"
                    alt="cross"
                    className="w-4 h-4"
                  />
                </div>
              </button>
            </div>
          }
        </div>
      );
    }
  } else {
    return <></>;
  }
};

export default ProjectCard;
