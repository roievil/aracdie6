import React, { Fragment } from "react";
import Image from "next/image";
import portrait from "../public/images/contact/portrait.jpg";
import bgImageMacluForet from "../public/images/contact/MacluForet.jpg";
import MapComponent from "../components/MapComponent";

// <div className="max-w-full">
//   <MapComponent />
// </div>;

const Contact = (): JSX.Element => {
  return (
    <>
      <div
        className="relative overflow-y-scroll xl:overflow-hidden bg-cover bg-center"
        style={{
          height: "88vh",
          backgroundImage: "url('./images/contact/MacluForet.jpg')",
        }}
      >
        <div
          className="absolute text-white"
          style={{ textIndent: "1em", textShadow: "0px 1px 4px #000" }}
        >
          <div className="flex flex-col md:flex-row  justify-center md:justify-between space-y-4 md:space-y-0 py-8 px-4 md:px-8 z-10">
            <div className="md:w-1/2 md:grow mr-4 text-center md:text-left md:px-5">
              <p className="p-3 mb-4 md:text-lg font-medium leading-loose display-inline bg-black bg-opacity-50">
                Après des études d’Écologie à Paris et Montréal, suivies de dix
                ans en tant qu’informaticien au service de la recherche
                scientifique j’ai voulu laisser libre cours à ma passion pour la
                création et le travail du bois.
              </p>
              <p className="p-3 mb-4 md:text-lg font-medium leading-loose display-inline bg-black bg-opacity-50">
                Formé en 2014 en Ébénisterie à l’école Boulle, j’ai ensuite
                travaillé à l’Atelier Figurasfondo où j’ai pu consolider mon
                goût et ma pratique de la fabrication numérique. Je me suis
                approprié cette nouvelle manière de créer, enfin de compte
                naturelle pour moi qui vient du monde de l’informatique. La
                difficulté et l’apprentissage ne résident plus seulement dans la
                répétition du geste de l’artisan, dans sa connaissance intime
                jusqu’à l’excellence, mais aussi dans la recherche et la
                compréhension de la machine. Celle-ci a son propre langage, et
                son propre rapport à la matière. La répétition a alors aussi
                pour but de trouver le fichier juste, la bonne communication
                avec la machine.
              </p>
              <p className="p-3 mb-4 md:text-lg font-medium leading-loose display-inline bg-black bg-opacity-50">
                En 2016, avec ma collection Styx, je suis lauréat du prix Jeune
                Talent organisé par le Carrousel des Métiers d’Art et de
                Création.
              </p>
              <p className="p-3 mb-4 md:text-lg font-medium leading-loose display-inline bg-black bg-opacity-50">
                Depuis 2019 je navigue entre mon atelier où j'ai un travail
                artisanal, mon bureau ou je fais du développement informatique
                appliqué à la fabrication via grasshopper 3d et rhinoceros
                (robotique, usinage, automatisation des process, dessin
                géneratif) et les entreprises dans lesquelles je fais des
                formations ou des interventions sous forme d'atelier de
                fabrication numérique.
              </p>
              <div className="w-full bg-black bg-opacity-50 p-4 rounded-lg ml-auto mt-4">
                <div className="flex items-center justify-between">
                  <p className="font-bold mb-2">Olivier Glorieux</p>
                  <p className="font-bold mb-2"> 06 62 49 24 08 </p>
                  <p className="font-bold mb-2">
                    <a
                      href="mailto:olivier@atelierarcadie.fr"
                      className=" hover:text-blue-300 underline"
                    >
                      olivier@atelierarcadie.fr
                    </a>
                  </p>
                </div>
                <p className="mb-2">3 rue du Bois Haligan 44100 Nantes</p>

                <div className="flex items-center justify-between">
                  <p className="mb-2">Sur Rendez-Vous</p>
                  <p className="mb-2">
                    <a
                      href="/CVOlivierGlorieuxProgrammeurEbeniste.pdf"
                      target="_blank"
                      className="hover:text-blue-300 underline"
                    >
                      Curriculum Vitae
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-full mb-8">
              <Image
                src={portrait}
                alt="Photo"
                width="700"
                height="700"
                priority
                className="max-w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
