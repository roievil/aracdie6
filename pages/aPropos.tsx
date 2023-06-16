import { useState } from "react";
import { projects as projectsData } from "../data";
import { Category } from "../types";

const APropos = () => {
  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "80vh" }}>
      L’Arcadie est une région sauvage et montagneuse de la Grèce et c’est aussi
      un idéal pour les poètes depuis l’antiquité. Au cœur du Péloponnèse c’est
      un des berceaux de la Grèce Antique, de vertes vallées où les bergers
      mènent une vie simple faite de lait et de miel. C’est pourquoi elle est
      devenue un lieu mythique pour les premières civilisations citadines, un
      point de mire, un paradis perdu auquel rêver au milieu de la frénésie
      urbaine. Chacun a son Arcadie qui lui parle de cet idéal de vie plus
      harmonieuse, plus proche de la nature. Il revient à l’artisan
      d’apprivoiser cette nature et de lui rendre hommage dans ses créations.
      Comme le poète manie les mots, l’artisan invoque la matière et la façonne
      pour jeter un pont entre nous et cette beauté lointaine qu’est l’Arcadie.
    </div>
  );
};

export default APropos;
