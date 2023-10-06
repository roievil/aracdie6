import { useState } from "react";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { NextPage } from "next";

const APropos: NextPage = () => {
  return (
    <div
      className="relative bg-cover bg-center overflow-y-scroll xl:overflow-hidden"
      style={{
        height: "80vh",
        backgroundImage: "url('./images/aPropos/Maclu.jpg')",
      }}
    >
      <div
        className="flex flex-col justify-end p-8 text-white text-2xl flex-grow md:px-32 xl:px-96 "
        style={{
          textIndent: "1em",
          margin: "auto",
          textShadow: "0px 1px 4px #000",
          minHeight: "100%", // Set minimum height to ensure it takes up the full height
        }}
      >
        <p className="p-3  bg-black bg-opacity-40">
          L’Arcadie est une région sauvage et montagneuse de la Grèce et c’est
          aussi un idéal pour les poètes depuis l’antiquité.
        </p>
        <p className="p-3  bg-black bg-opacity-40">
          Au cœur du Péloponnèse c’est un des berceaux de la Grèce Antique, de
          vertes vallées où les bergers mènent une vie simple faite de lait et
          de miel.
        </p>
        <p className="p-3 bg-black bg-opacity-40">
          C’est pourquoi elle est devenue un lieu mythique pour les premières
          civilisations citadines, un point de mire, un paradis perdu auquel
          rêver au milieu de la frénésie urbaine.
        </p>
        <p className="p-3 bg-black bg-opacity-40">
          Chacun a son Arcadie qui lui parle de cet idéal de vie plus
          harmonieuse, plus proche de la nature.
        </p>
        <p className="p-3 bg-black bg-opacity-40">
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
