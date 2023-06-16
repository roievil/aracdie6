import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const bgImage = "/images/contact/portrait.jpg";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h6 className="my-3 text-base font-medium">
        Bienvenue à l'Atelier Arcadie Un atelier c'est surtout des projets, mais
        aussi un artisan !
      </h6>
      <div
        className="flex-grow p-4 mt-5 relative"
        style={{
          marginLeft: "-1.5rem",
          marginRight: "-1.5rem",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            layout="fill"
            objectFit="cover"
            alt="Background Image"
          />
        </div>

        <h4 className="my-3 text-xl font-semibold tracking-wide text-white relative z-10">
          Activités de l'atelier
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2 relative z-10">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
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
