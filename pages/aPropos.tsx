import { useState } from "react";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import Image from "next/image";
import bgImageMaclu from "../public/images/aPropos/Maclu.jpg";

const APropos = () => {
  return (
    <div
      className="relative px-5 py-2 overflow-y-scroll xl:overflow-hidden bg-cover"
      style={{
        height: "80vh",
        backgroundImage: "url('./images/aPropos/Maclu.jpg')",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 p-8 text-white text-2xl "
        style={{
          textIndent: "1em",
          maxWidth: "66%",
          margin: "auto",
          textShadow: "0px 1px 4px #000",
        }}
      >
        <p className="p-3 display-inline bg-black bg-opacity-40">
          L’Arcadie est une région sauvage et montagneuse de la Grèce et c’est
          aussi un idéal pour les poètes depuis l’antiquité.
        </p>
        <p className="p-3 display-inline bg-black bg-opacity-40">
          Au cœur du Péloponnèse c’est un des berceaux de la Grèce Antique, de
          vertes vallées où les bergers mènent une vie simple faite de lait et
          de miel.
        </p>
        <p className="p-3 display-inline bg-black bg-opacity-40">
          C’est pourquoi elle est devenue un lieu mythique pour les premières
          civilisations citadines, un point de mire, un paradis perdu auquel
          rêver au milieu de la frénésie urbaine.
        </p>
        <p className="p-3 display-inline bg-black bg-opacity-40">
          Chacun a son Arcadie qui lui parle de cet idéal de vie plus
          harmonieuse, plus proche de la nature.
        </p>
        <p className="p-3 display-inline bg-black bg-opacity-40">
          Il revient à l’artisan d’apprivoiser cette nature et de lui rendre
          hommage dans ses créations. Comme le poète manie les mots, l’artisan
          invoque la matière et la façonne pour jeter un pont entre nous et
          cette beauté lointaine qu’est l’Arcadie.
        </p>
      </div>
    </div>
  );
};

export default APropos;
