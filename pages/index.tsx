import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import bannner1 from "../public/images/accueil/arcadieBanner1.png";
import bannner2 from "../public/images/accueil/arcadieBanner2.png";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div
      className="flex flex-col overflow-y-scroll bg-cover bg-bottom md:overflow-hidden"
      style={{
        height: "88vh",
        backgroundImage: "url('./images/accueil/arcadieBannerFond.png')",
        backgroundOrigin: "border-box",
        backgroundPosition: "0% 0%",
        backgroundColor: "9aa0a8",
      }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row w-3/4 md:w-full mx-auto md:grow">
        <div className="md:mt-3 px-6 md:mb-0">
          <Image
            src={bannner1}
            alt="Photo"
            width="500"
            height="500"
            priority
            className="max-w-full object-cover"
          />
        </div>
        <div className="px-6 md:mt-3">
          <Image
            src={bannner2}
            alt="Photo"
            width="500"
            height="500"
            priority
            className="max-w-full object-cover"
          />
        </div>
      </div>
      <div className="relative flex-grow px-6 pb-5 bg-cover bg-bottom md:grow-0">
        <div className="grid gap-6 my-6 md:grid-cols-2 relative z-10">
          {services.map((service) => (
            <div
              className="border-2 col-span-2 p-2 bg-zinc-200 rounded-lg dark:bg-dark-200 md:col-span-1 hover:border-gray-600"
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
