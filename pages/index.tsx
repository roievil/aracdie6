import {
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <div
      className="flex flex-col flex-grow px-6 bg-cover bg-bottom overflow-y-scroll"
      style={{
        height: "80vh",
        backgroundImage: "url('./images/accueil/IMG_1426BG.JPG')",
      }}
    >
      <div
        className="flex-grow p-4 relative"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <div className="absolute inset-0"></div>

        <h4 className="my-3 text-xl font-semibold tracking-wide text-white relative z-10">
          Activités de l'atelier
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2 relative z-10">
          {services.map((service) => (
            <div
              className="border-2 col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1  hover:border-gray-600"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
