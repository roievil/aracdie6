import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import bannner1 from "../public/images/accueil/arcadieBanner1.png";
import bannner2 from "../public/images/accueil/arcadieBanner2.png";
import Image from "next/image";
import ReactPlayer from "react-player";

const About: NextPage = () => {
  return (
    <ReactPlayer
      url={"/videos/impression3dCeramique.mp4"}
      type="video/mp4"
      //style={{ maxWidth: "100%" }} // Add this style
      width="100%"
      height="100%"
      controls
      playing={true}
    />
  );
};

export default About;
