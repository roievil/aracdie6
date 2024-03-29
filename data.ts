import { MdExposurePlus1 } from "react-icons/md";
import { IProject, Service } from "./types";

export const services: Service[] = [
    {
    icon: "/images/icons/robot.svg",
    title: "Programmation",
    about:
      "Je suis programmeur et <b>automaticien</b>, spécialiste de <b>Grasshopper</b>, à l'aide de quoi je peux programmer des objets paramétriques, des parcours d'outils ou des workflow sur mesure à vos besoins",
  },
     {
    icon: "/images/icons/modeling.svg",
    title: "Modélisation",
    about: "J'utilise notamment <b>Rhinoceros 3D</b> dans ma pratique et je suis aussi <b>formateur</b> sur ce logiciel, en distanciel aussi bien que sur place, dans votre établissement.",
  },
//   {
//     icon: "/images/icons/leather.svg",
//     title: "Travail du Cuir",
//     about:
//       "J'ai mis au point une interpretation des techniques de maroquinerie traditionnelles à l'aide de la découpeuse laser",
//   },
      {
    icon: "/images/icons/laser.svg",
    title: "Découpe numérique",
    about:
      "L'atelier est équipé d'une <b>découpeuse laser</b> et d'une <b>fraiseuse numérique</b> avec lesquelles je réalise les pièces elles mêmes ou bien des gabarits pour régler les machines traditionnelles.",
  },
        {
    icon: "/images/icons/ornament.svg",
    title: "Ebénisterie",
    about:
      "Je suis <b>ébéniste</b> et j'ai adapté les techniques d'<b>ornementation</b> traditionelles de ce métier aux machines <b>numériques</b> : marqueterie, incrustations, gravures...",
  },
//  {
//     icon: "/images/icons/sawBlade.svg",
//     title: "Travail du Bois",
//     about:
//       "L'atelier est équipé de machines à bois traditionnelles dimensionnées pour du <b>mobilier</b> et <b>petits objets</b>"
//   },




];

export const projects: IProject[] = [
    {
      name: "Génération de parcours d'outils",
    description:
      "<span>Automatisation de la chaîne de production de semelles orthopédiques de <a class=\"underline hover:no-underline\" href=\"https://www.ergorecherche.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ErgoRecherche</a>.",
    image_path: "/images/projets/programmation/ergoRecherche/vignetteErgoRecherche.png",
    whiteBg: false,
    category: "Programmation",
    key_techs: ["Grasshopper", "Toolpath", "gCode"],
                slides: [                                {
                    type: "video",
                    slidePath: "/videos/toolpathGeneration.mp4",
                    slideLegend: "<span >L'entreprise de fabrication de semelles orthopédiques ErgoRecherche située à Dijon avait consenti à de nombreux efforts d'automatisation de sa chaîne de commande et de fabrication. La dernière pierre à apporter à l'édifice étant de remplacer le logiciel de CAM Powermill par un système automatisé de création de parcours d'outils et d'instructions machines (gCode propriétaire).<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">ErgoRecherche fournit au podologue un logiciel lui permettant de spécifier en 3D la prothèse qu'il souhaite prescrire à son patient (réalisé par Kinematiq à l'aide de Rhinceros3D et de Grasshopper)</li><li style=\" padding:2%\">La commande est reçue à l'usine de Dijon où elle est dispatchée par l'équipe de ErgoRecherche qui se sert du logiciel podofeet (réalisé par Kinematiq) pour constituer la table d'usinage où les semelles à usiner sont placées automatiquement en fonction de leurs caractéristiques (taille, matériau...) et d'autres critères relatifs à la charge de travail par exemple.</li><li style=\" padding:2%\">Vient ensuite la définition grasshopper que j'ai réalisée pour Kinematiq et ErgoRecherche qui remplace le logiciel Powermill. Powermill mobilisait pour chaque table d'usinage le concours d'un technicien, la définition grasshopper analyse directement les géométries dessinées par les podologues et en calculant des parcours d'outils. Ces parcours d'outils respectent ou améliorent les stratégies d'usinage déjà en place, pour un temps de calcul inférieur.</li><li style=\" padding:2%\">Les tables sont donc usinées et une fois les semelles sorties elles sont finies puis envoyées au podologues.</li></ul></span>",
                    alt: "porteplume en valchromat noir",
                    width: 800,
                    height: 800
                }]
            },
    { 
    name: "Impression 3D céramique",
    description:
      "<span>Programmation d'une cinématique non planaire pour le designer et concepteur de la machine <a class=\"underline hover:no-underline\" href=\"https://www.yoannbordespages.com\" target=\"_blank\" rel=\"noopener noreferrer\">Yoann Bordès Pages</a>, à Nantes.</span>",
    image_path: "/images/projets/programmation/impression3dCeramique/vignetteImpression3DCeramique.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Toolpath", "gCode", "3DPrinting"],
                slides: [
                {
                    type: "video",
                    slidePath: "/videos/impression3dCeramique.mp4",
                    slideLegend: "<span>Vue détaillée du programme grasshopper qui permet de slicer une géométrie puis de générer le Gcode spécifique à l'imprimante3D céramique du designer Yoann Bordès Pages. <ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Une cinématique non planaire signifie que les couches d'impressions ne sont pas a priori planes, les coordonnées en Z du cordon d'impressions varient en fonction du modèle.</li><li style=\" padding:2%\"> Le facteur d'Extrusion 'E' est lui aussi variable et calculé pour chaque point en fonction du modèle.</li></ul></span>",
                    alt: "Impression 3D céramique",
                    width: 800,
                    height: 800
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique20.jpg",
                    slideLegend: "Une cinématique non planaire signifie que l'argile n'est pas déposée en couches planes mais plutôt en suivant une hélice.",
                    alt: "Impression 3D céramique",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique25.jpg",
                    slideLegend: "Le défi supplémentaire de ce projet est aussi d'imprimer dans un moule, ce qui permet d'obtenir des formes concaves sans avoir recours à un échaffaudage",
                    alt: "Impression 3D céramique",
                    width: 1620,
                    height: 1620
                },
                                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique45.jpg",
                    slideLegend: "Sur cette deuxième pièce le non planaire prends tout son sens.",
                    alt: "Impression 3D céramique",
                    width: 1620,
                    height: 1620
                },                                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique40.jpg",
                    slideLegend: "Après avoir fait la spirale plane au centre, la tête d'impression redescend pour remplir les trois pieds.  ",
                    alt: "Impression 3D céramique",
                    width: 1620,
                    height: 1620
                },
                                                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique50.jpg",
                    slideLegend: "au niveau des pieds les spires sont plus écartées il faut donc faire aussi varier la valeur d'extrusion pour remplir d'avantage.",
                    alt: "Impression 3D céramique",
                    width: 1620,
                    height: 1620
                }
            ]
  },{
      name: "Automatisation pour Dupré",
    description:
      "<span>Automatisation pour le workflow de l'entreprise de menuiserie Os2m",
    image_path: "/images/projets/programmation/dupre/vignetteDupre.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Toolpath", "gCode"],
                slides: [                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/dupre/vignetteDupre.png",
slideLegend:"<span >L'entreprise de menuiserie Dupré située en Anjou souhaitait automatiser son workflow de découpe et d'usinage et notamment se passer d'un logiciel de CAM, variable selon les modèles de ses machines.<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Chaque table d'usinage mobilisait le concours d'un technicien pour transcrire les géométries annotées données par le bureau d'étude en instructions machines. Des efforts d'automatisation de la chaîne en amont avaient déjà été réalisés, il manquait cette dernière étape.</li><li style=\" padding:2%\">Nous avons donc développé une définition grasshopper analysant directement les géométries issues du bureau d'étude et leurs annotations puis calculant des parcours d'outils.</li><li style=\" padding:2%\"> Ces parcours d'outils respectent ou améliorent les stratégies d'usinage déjà en place, pour un temps de calcul inférieur.</li></ul></span>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }]
            },
            {
      name: "Génération de patrons 2D",
    description:
      "<span>Automatisation de la génération de patrons pour l'entreprise de vêtements orthopédiques <a class=\"underline hover:no-underline\" href=\"https://www.orthomixt3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Orthomixt3d</a>.",
    image_path: "/images/projets/programmation/os2m/vignetteOs2m.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Mise en Plan"],
                slides: [                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/os2m/vignetteOs2m.png",
                    slideLegend: "<span >L'entreprise Os2m située à Cholet souhaitait automatiser la génération des patrons de découpe de ses vêtements.<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Via le site internet <a class=\"underline hover:no-underline\" href=\"https://www.orthomixt3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Orthomixt3d</a> les mesures des utilisateurs sont récoltées</li><li style=\" padding:2%\">Elles sont ensuite compilées dans un fichier excel au sein duquel des macros calculent les paramètres de génération du patron sur mesures</li><li style=\" padding:2%\">Ces données sont lues dans le fichier excel par le programme grasshopper qui calcule un patron à taille réelle, cotté, annoté et imprimable</li><li style=\" padding:2%\">le patron est modifiable directement dans rhinoceros 3D, puis le programme grasshopper exporte les fichiers d'usinage calibrés pour les découpeuses laser de l'entreprise.</li></ul></span>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }]
            },
    { 
    name: "Tables basses RIVA",
    description:
      "<span>Modelisation et conception des gabarits de façonnage et collage pour @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a> à Clisson.</span>",
    image_path: "/images/projets/modelisation/tableRiva/riva.jpg",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Mise en Plan", "Gabarits", "Chêne Massif"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva10a.png",
                    slideLegend: "Croquis d'intention de Jules, de @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a>.</span>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva20.jpg",
                    slideLegend: "Modelisation des deux tables",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva25.jpg",
                    slideLegend: "Il s'agit donc de deux tables constituées de la répétition de deux pièces de noyer massif et de leurs connecteurs.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva30.jpg",
                    slideLegend: "Détail de la table 1400.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva40.jpg",
                    slideLegend: "Vue de profil cotée des pièces répétées de la table 1200.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva50.jpeg",
                    slideLegend: "Gabarit de collage / placement de la table 1200, réalisé à l'aide de la découpeuse laser.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva60.jpeg",
                    slideLegend: "Gabarit de collage / placement de la table 1400.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
                ,
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva70.jpeg",
                    slideLegend: "Usage du gabarit.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
                ,
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva80.jpg",
                    slideLegend: "Fichiers d'usinage des gabarits de rabotage des pièces répétées. Les gabarits sont usinées à l'aide d'une 5 axe à l'atelier <a class=\"underline hover:no-underline\" href=\"https://www.usinage-numerique-bois.fr\" target=\"_blank\" rel=\"noopener noreferrer\">UTB</a>.</span>.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
                                ,
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva90.jpeg",
                    slideLegend: "La table 1200 dans l'atelier de Jules Battais, Clisson.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                } ,               {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/tableRiva/riva85.jpeg",
                    slideLegend: "La table 1400 terminée.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
                
            ]
  },
    { 
    name: "Arbre aux Hérons",
    description:
      "<span>Modelisation et conception des escaliers et passerelles de l'Arbre aux Hérons pour la compagnie <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr\" target=\"_blank\" rel=\"noopener noreferrer\">La Machine</a> à Nantes.</span>",
    image_path: "/images/projets/modelisation/arbre/arbreDessusSqFront.jpg",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Rhinoceros3D", "Grasshopper", "Bureau d'Etudes"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/arbreDessusSq.jpg",
                    slideLegend: "<p>Au sein du bureau d'étude de <a class=\"underline hover:no-underline\" href=\"https://arbreauxherons.fr\" target=\"_blank\" rel=\"noopener noreferrer\">l'Arbre aux Hérons</a>, œuvre imaginée par François Delaroziere et Pierre Orefice, j'ai participé à l'étude et la modélisation en taille réelle sur Rhinoceros3D de l'arbre. </p> <br> <p> Nous étions une vingtaine à étudier et concevoir le modèle, en concertation avec les auteurs et j'étais responsable des passerelles et escaliers.</p>",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/ArbreCroquis.png",
                    slideLegend: "\"Niché au cœur du Jardin Extraordinaire à Nantes, l’Arbre aux Hérons est une sculpture monumentale imaginée par Pierre Orefice et François Delaroziere. <br> Inspiré des banians, il mesure 35 mètres de haut et 50 mètres de diamètre. Une vingtaine de branches accueille des jardins suspendus sous forme de micro-paysages. <br>L’Arbre est une arche végétale où se développent plus de 130 espèces. <br>Un bestiaire mécanique composé d’une trentaine d’animaux y a élu domicile. On y croise des colibris, un paresseux, des papillons, des oies sauvages…<br>À sa cime niche un couple de Hérons.\" <br> <br> extrait du site <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/projets-urbains/larbre-aux-herons/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr</a>",
                    //sideLegendEng:"the Herons Tree is a colossal 35 meters high (110 feet) and 1700 tons steel sculpture. The plant take root in this metal structure, taking the form of hanging gardens. It is crowned by 2 giant herons; each can carry up to twelve passengers for a circular flight. The tree’s 22 branches stretcha combined length of 1.4 kilometres (0,7miles). Plants take root in the steel and the public can visit incredible gardens going form branch to branch, like a series of interconnected hanging terraces. Accesses to the herons and to the hanging gardens are separate. <br> <br> from the website <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/en/projets-urbains/the-heron-tree/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr/en</a>",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/circulationEtageMoyen2.jpg",
                    slideLegend: "<p>Vue du deuxième étage de l'arbre, on voit les circulations possibles sur les branches en turquoise et les connexions sur lesquelles j'ai travaillé en violet, il s'agit de passerelles ou d'escaliers.</p><p><br><p>Les ramures turquoises sont le squelette à partir duquel la définition grasshopper va générer les extrusions visible dans la prochaine vue.</p>",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/circulationEtageMoyen2A.jpg",
                    slideLegend: "Vue du deuxième étage de l'arbre, avec l'acier, les volumes ont été générés par grasshopper, ainsi si l'on modifie l'âme turquoise d'une branche on pourra recalculer les volumes automatiquement.",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/circulationEtageMoyenRender.jpg",
                    slideLegend: "Vue de détail du deuxième étage.",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/passerelle.jpg",
                    slideLegend: "Détail d'une passerelle.",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/ConnexionPasserelle.jpg",
                    slideLegend: "Détail de la connexion passerelle / branche.",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/coupeTechniquePasserelle.jpg",
                    slideLegend: "Coupe technique de passerelle.",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/brancheProto.jpg",
                    slideLegend: "Photo de la branche prototype présente sur le site des machines de l'île, Nantes.",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
                                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/arbre/vueOuestSq.jpg",
                    slideLegend: "Vue Ouest de l'arbre. <br> <br> <i>source <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/projets-urbains/larbre-aux-herons/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr</a></i>",
                    alt: "Arbre aux Herons",
                    width: 2560,
                    height: 2560
                },
            ]
  },
  { 
    name: "Trophées pour le festival des 3 continents",
    description:
      "Commande pour l'édition 2023",
    image_path: "/images/projets/bois/trophees/trophee10ParArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Chêne massif"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee10ParArcadie.jpg",
                    slideLegend: "Réalisée en chêne massif, le logo est réalisé en découpes de métal, laiton, aluminium ou cuivre dépendemment du prix correspondant",
                    alt: "trophee festival des 3 continents",
                    width: 2072,
                    height: 2072
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee20ParArcadie.jpg",
                    slideLegend: "Chacun des 5 trophées comporte le logo du festival gravé dans le chêne puis incrusté de plaque de métal.",
                    alt: "trophee festival des 3 continents",
                    width: 2336,
                    height: 2336
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee30ParArcadie.jpg",
                    slideLegend: "Mongolfière d'argent, incrustation d'aluminium.",
                    alt: "trophee festival des 3 continents",
                    width: 1688,
                    height: 1688
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee40ParArcadie.jpg",
                    slideLegend: "Gravure des textes réalisées à la découpeuse laser.",
                    alt: "trophee festival des 3 continents",
                    width: 2588,
                    height: 2588
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee50ParArcadie.jpg",
                    slideLegend: "Mongolfière d'argent, incrustation de laiton.",
                    alt: "trophee festival des 3 continents",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee60ParArcadie.jpg",
                    slideLegend: "Le chêne brut de sciage a ensuite été fini à l'huile cire dure pour une protection durable des trophées.",
                    alt: "trophee festival des 3 continents",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/trophees/trophee70ParArcadie.jpg",
                    slideLegend: "Prix du public, incrustation de cuivre.",
                    alt: "trophee festival des 3 continents",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "video",
                    slidePath: "/videos/trophee.mp4",
                    slideLegend: "La mongoflière d'argent sur la scelette !",
                    alt: "trophee festival des 3 continents",
                    width: 800,
                    height: 800
                }
            ]
  },
    { 
    name: "Rocking chair",
    description:
      "<span>Modelisation et conception des gabarits de cintrage pour @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a> à Clisson.</span>",
    image_path: "/images/projets/modelisation/chaiseJules/chaiseJules10.jpeg",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Ébénisterie", "Gabarits", "Cintrage", "Noyer"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules20.jpeg",
                    slideLegend: "Rapide croquis d'intention de Jules, de @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a>.</span>",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules40.jpeg",
                    slideLegend: "Modélisation du meuble et aide à la fabrication : les berces et la coque seront réalisées par cintrage de lamelles ou feuilles de bois.",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules50.jpeg",
                    slideLegend: "Pour réaliser des pièces de bois cintrées il faut encoller les lamelles puis les serrer dans un gabarit en deux parties : forme et contreforme.",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules60.jpeg",
                    slideLegend: "Fichiers d'usinage des gabarits pour les berces",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules70.jpeg",
                    slideLegend: "Gabarits en cours d'usinage.",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules80.jpeg",
                    slideLegend: "Gabarits prêts à l'usage, les deux parties de chaque gabarits coulissent l'une sur l'autre, grâce à des guides qui permettent aussi de garder un alignement parfait et donc permettent un serrage optimal.",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules95.jpeg",
                    slideLegend: "Le fauteuil terminé.",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules99.jpeg",
                    slideLegend: "Détail des berces.",
                    alt: "rocking Chair templates",
                    width: 2560,
                    height: 2560
                }
            ]
  },
            {
      name: "Formation Grasshopper",
    description:
      "<span> Formation Grasshopper appliquée aux programmes de robotique de <a class=\"underline hover:no-underline\" href=\"https://www.batiprint3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Batiprint3d, à Nantes</a>.",
    image_path: "/images/projets/programmation/batiprint/vignetteBatiprint.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Formation"],
                slides: [                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/batiprint/vignetteBatiprintFull.png",
                    slideLegend: "<p>L'entreprise Batiprint3D souhaitait former une partie de son staff à la programmation grasshopper.</p><p><br></p><p>Kinematiq m'a demandé de leur préparer une formation de plusieurs jours personnalisée, appliquée aux définitions de production de Batiprint. </p>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }]
            },
  { 
    name: "Coffret à Gemmes Griffon",
    description:
      "<span>Conçu pour la <a class=\"underline hover:no-underline\" href=\"https://www.bijouteriegriffon.com\" target=\"_blank\" rel=\"noopener noreferrer\">bijouterie / joaillerie Griffon</a> à Nantes.</span>",
    image_path: "/images/projets/bois/coffrets/coffretGriffon30ParArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Découpe numérique", "Valchromat"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon10ParArcadie.jpg",
                    slideLegend: "<span>Conçu pour la <a class=\"underline hover:no-underline\" href=\"https://www.bijouteriegriffon.com\" target=\"_blank\" rel=\"noopener noreferrer\">bijouterie / joaillerie Griffon</a> à Nantes.</span>",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon20ParArcadie.jpg",
                    slideLegend: "5 plateaux empilables réalisés en valchromat noir",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon30ParArcadie.jpg",
                    slideLegend: "Chaque Plateau est destiné à recevoir des boites à gemmes en plexiglass de deux tailles différentes, qui viennent s’insérer dans les logements mousse EVA. ",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon40ParArcadie.jpg",
                    slideLegend: "Les plateaux sont surmontés d’un étage de présentation comportant une gravure du logo de la joaillerie réalisée au laser dans du plexiglass givré.",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon50ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon60ParArcadie.jpg",
                    slideLegend: "Le principe de la boite à gemmes qui vient se loger dans les alvéoles du plateau a été repris pour cette fausse boîte à gemme qui reprend le logo de la joaillerie.",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon70ParArcadie.jpg",
                    slideLegend: "Détail du cabochon, la gravure est rehaussée d’une incrustation de fil d’argent massif, technique signature de l’atelier arcadie.",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon80ParArcadie.jpg",
                    slideLegend: "Les pieds en aluminium anodisé sont equipés de petits patins de liège pour une manipulation silencieuse.",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon90ParArcadie.jpg",
                    slideLegend: "Dans une deuxième version de l’étage de présentation la gravure du logo a été rehaussée de noir.",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon100ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon110ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon120ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "video",
                    slidePath: "/videos/laserMousse.mp4",
                    slideLegend: "decoupe laser sur mousse EVA",
                    alt: "decoupe laser sur mousse EVA",
                    width: 800,
                    height: 800
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon130ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon140ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/coffretGriffon150ParArcadie.jpg",
                    slideLegend: "",
                    alt: "présentoirs noirs inscrustations d'argent",
                    width: 2560,
                    height: 2560
                },
            ]
  },
  ,
  { 
    name: "Appuis vélos",
    description:
      "Design et mise en plan d'une série d'appuis vélos pour ATAO",
    image_path: "/images/projets/modelisation/appuisVelo/appuisVeloSQ.png",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Design", "Mise en Plan"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo.jpg",
                    slideLegend: "Conception d'une série d'appuis vélos destinés à l'île de Nantes pour <a class=\"underline hover:no-underline\" href=\"https://www.atao-insertion.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ATAO</a>.</span>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo10.jpg",
                    slideLegend: "Les appuis vélos devaient cibler les vélos classiques mais aussi les vélos cargos, voire uniquement ces derniers à leurs emplacements réservés.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo20.png",
                    slideLegend: "Toute la série d'appuis vélos devait répondre au normes énoncées dans le CCTP (Cahier des Clauses Techniques Particulières) rédigé par la Direction de l'espace public de Nantes Métropole.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo30.jpg",
                    slideLegend: "ATAO est une association d'insertion professionnelle, les appuis vélos sont fabriqués par des apprenants et doivent donc prendre en compte des contraintes pédagogiques.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo40.jpg",
                    slideLegend: "Un modèle d'appuis vélo cargo fabriqué et installé.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
            ]
  },
  { 
    name: "Porteplume Kopis",
    description:
      "Collection Styx",
    image_path: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Gravure Laser", "Découpe numérique", "Valchromat"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
                    slideLegend: "Plumier / Porte carte Kopis Structure en valchromat noir et gris, inclusions de laiton.",
                    alt: "porteplume en valchromat noir",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis20parArcadie.jpg",
                    slideLegend: "Modèle Kopis : Longueur 393mm, Largeur 70mm, Épaisseur 16mm",
                    alt: "porteplume en valchromat noir",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis30parArcadie.jpg",
                    slideLegend: "Le porteplume comporte des logements pour cartes de visite.",
                    alt: "porteplume en valchromat noir",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis40parArcadie.jpg",
                    slideLegend: "",
                    alt: "porteplume en valchromat noir",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis50parArcadie.jpg",
                    slideLegend: "",
                    alt: "porteplume en valchromat noir",
                    width: 1620,
                    height: 1620
                },
                                {
                    type: "video",
                    slidePath: "/videos/laserValchro.mp4",
                    slideLegend: "decoupe laser sur valchro",
                    alt: "porteplume en valchromat noir",
                    width: 800,
                    height: 800
                }
            ]
  },
    ,
  { 
    name: "Tête fraiseuse CNC",
    description:
      "Design, mise en plan et fabrication d'un module porte broche et aspiration d'une fraiseuse CNC",
    image_path: "/images/projets/modelisation/Z/Z.png",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Design", "Mise en Plan", "Prototypage"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/Z/Z10.png",
                    slideLegend: "Remplacement du porte broche suite à un changement de broche de fraiseuse, passage d'une Kress à une broche plus puissante, refroidie à l'eau, intégration du module d'aspiration.</span>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/Z/Z.png",
                    slideLegend: "",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/Z/Z20.png",
                    slideLegend: "La tête de fraiseuse en vrai avec la jupe d'aspiration menant au tube de plexiglas auquel est attaché le tuyau d'aspiration. La jupe coulisse dans l'axe Z et peut être enlevée si besoin.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
            ]
  },
  { 
    name: "Boite à bijoux Samson",
    description:
      "Commande particulière",
    image_path: "/images/projets/bois/coffrets/samson20parArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Gravure Laser", "Découpe numérique", "Valchromat"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson10parArcadie.jpg",
                    slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson20parArcadie.jpg",
                    slideLegend: "Les portes latérales ont des rangements pour colliers, l’abattant est muni d’une glace sur l’envers. ",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson30parArcadie.jpg",
                    slideLegend: "",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson40parArcadie.jpg",
                    slideLegend: "Détail des crochets à colliers réalisés en aluminium poli.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson50parArcadie.jpg",
                    slideLegend: "Les colonnes sont elles aussi en aluminium poli. ",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson60parArcadie.jpg",
                    slideLegend: "",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson70parArcadie.jpg",
                    slideLegend: "Détail des ornementations.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson80parArcadie.jpg",
                    slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson90parArcadie.jpg",
                    slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/samson100parArcadie.jpg",
                    slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                }
            ]
  },
  { 
    name: "Local Services NMH",
    description:
      "Mise en plan d'un local poubelle pour Nantes Métropole Habitat",
    image_path: "/images/projets/modelisation/NMH/localPoubelle.png",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Mise en plan"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/NMH/localPoubelle05.png",
                    slideLegend: "Modelisation et mise en plan réalisée pour <a class=\"underline hover:no-underline\" href=\"https://www.atao-insertion.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ATAO</a> à l'aide du logiciel Solidworks.</span>",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/NMH/localPoubelle10.png",
                    slideLegend: "Une sélection des plans réalisés pour ce local, ATAO est une association d'insertion professionnelle.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/NMH/localPoubelle20.png",
                    slideLegend: "En concertation avec les encadrants de ATAO j'ai fait la mise en plan ainsi qu'une partie de la conception pour obtenir un résultat adapté aux apprenants.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/NMH/localPoubelle30.png",
                    slideLegend: "L'atelier d'ATAO est un atelier centré sur le travail du métal mais comporte aussi toute une partie menuiserie.",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/modelisation/NMH/localPoubelle40.png",
                    slideLegend: "",
                    alt: "coffee tables templates",
                    width: 2560,
                    height: 2560
                }
            ]
  },
  { 
    name: "Etuis de liseuse Kobo",
    description:
      "Commande particulière",
    image_path: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Ébénisterie", "Découpe laser", "Prototypage", "Cuir"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
                    slideLegend: "Etuis sur mesure pour une liseuse.",
                    alt: "étuis en cuir pour liseuse kobo",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie.jpg",
                    slideLegend: "Les découpes des pièces en cuir sont réalisées à l'aide de la découpeuse laser. ",
                    alt: "étuis en cuir pour liseuse kobo",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie32.jpg",
                    slideLegend: "La couture est elle aussi facilitée par la découpe au laser, un lacet est passé dans les oeillets prévu en amont.",
                    alt: "étuis en cuir pour liseuse kobo",
                    width: 1620,
                    height: 1620
                }
            ]
  },
  { 
    name: "Range capsules nespresso",
    description:
      "Commande particulière",
    image_path: "/images/projets/laser/rangeCapsulesNespresso.jpg",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Prototypage", "Découpe laser"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/laser/rangeCapsulesNespresso2.jpg",
                    slideLegend: "Chaque module peut contenir 10 capsules, soit le contenu d'une boite",
                    alt: "range capsules nespresso",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/laser/rangeCapsulesNespresso3.jpg",
                    slideLegend: "Les modules sont détachable pour un remplissage confortable à l'horizontal, ou ludique à la verticale.",
                    alt: "range capsules nespresso",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/laser/rangeCapsulesNespresso4.jpg",
                    slideLegend: "Détail de la fixation des modules",
                    alt: "range capsules nespresso",
                    width: 1620,
                    height: 1620
                }
            ]
  },
  { 
    name: "Marqueterie de cuir",
    description:
      "Modernisation de technique traditionnelle",
    image_path: "/images/projets/cuir/marqueterieCuir/WrongSQ.png",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Prototypage", "Découpe laser"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/marqueterieCuir/WrongSQ.png",
                    slideLegend: "Inspiré de la technique traditionnelle de marqueterie de placage de bois, la marqueterie de cuir est réalisée à l'aide de la découpeuse laser.",
                    alt: "range capsules nespresso",
                    width: 1620,
                    height: 1620
                },
                                {
                    type: "video",
                    slidePath: "/videos/marqueterieCuir.mp4",
                    slideLegend: "découpe laser sur cuir",
                    alt: "decoupe laser sur cuir",
                    width: 800,
                    height: 800
                }
            ]
  }
];