import { FunctionComponent, useState } from "react";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";
import Slider from "./Slider";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: { name, image_path, category, description, key_techs, pictures },
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedSlideLegend, setSelectedSlideLegend] = useState("");

  const handleSlideLegendChange = (legend) => {
    setSelectedSlideLegend(legend);
    console.log("legend", legend);
  };

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12">
          <div className="overflow-hidden">
            {/* <img src={image_path} alt={name} /> */}
            <Slider
              slides={pictures}
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
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 mb-20 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className=" text-2xl">{selectedSlideLegend}</span>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
