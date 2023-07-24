import { FunctionComponent, useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { IContextState, IProject } from "../types";
import { GlobalContext } from "../context/GlobalContext";

import Image from "next/image";
import Slider from "./Slider";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);
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
    setShowDetail(true);
    console.log("showDetail");
  };

  const handleHideDetail = () => {
    setCurrentProject(null);
    setShowDetail(false);
    console.log("hideDetail");
  };

  if (project) {
    return (
      <div className="relative">
        <Image
          src={project.image_path}
          alt={project.name}
          className="cursor-pointer"
          onClick={() => handleShowDetail()}
          height="400"
          width="400"
          priority
        />
        {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
        <p className="my-2 text-center">{project.name}</p>

        {currentProject && (
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
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProjectCard;
