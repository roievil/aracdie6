import { MdExposurePlus1 } from "react-icons/md";
import { IProject, Service } from "./types";

export const services: Service[] = [
    {
    icon: "/images/icons/robot.svg",
    title: "Programmation",
    about:
      "Je suis programmeur et <b>automaticien</b>, spécialiste de <b>Grasshopper</b>, à l'aide de quoi je peux programmer des objets paramétriques, des parcours d'outils ou des workflow sur mesure à vos besoins",
    aboutEng:"",
  },
     {
    icon: "/images/icons/modeling.svg",
    title: "Modélisation",
    about: "J'utilise notamment <b>Rhinoceros 3D</b> dans ma pratique et je suis aussi <b>formateur</b> sur ce logiciel, en distanciel aussi bien que sur place, dans votre établissement.",
    aboutEng:"",
  },
      {
    icon: "/images/icons/laser.svg",
    title: "Découpe numérique",
    about:
      "L'atelier est équipé d'une <b>découpeuse laser</b> et d'une <b>fraiseuse numérique</b> avec lesquelles je réalise les pièces elles mêmes ou bien des gabarits pour régler les machines traditionnelles.",
    aboutEng:"",
  },
        {
    icon: "/images/icons/ornament.svg",
    title: "Ebénisterie",
    about:
      "Je suis <b>ébéniste</b> et j'ai adapté les techniques d'<b>ornementation</b> traditionelles de ce métier aux machines <b>numériques</b> : marqueterie, incrustations, gravures...",
    aboutEng:"",
  },


];

export const projects: IProject[] = [
{
    name: "Génération de parcours d'outils",
    nameEng: "Toolpath Generation",
    description: "<span>Automatisation de la chaîne de production de semelles orthopédiques de <a class=\"underline hover:no-underline\" href=\"https://www.ergorecherche.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ErgoRecherche</a>.",
    descriptionEng: "Automation of the orthopedic insole production chain at ErgoRecherche.",
    image_path: "/images/projets/programmation/ergoRecherche/vignetteErgoRecherche.png",
    whiteBg: false,
    category: "Programmation",
    key_techs: ["Grasshopper", "Toolpath", "gCode"],
    slides: [
        {
            type: "video",
            slidePath: "/videos/toolpathGeneration.mp4",
            slideLegend: "<span>L'entreprise de fabrication de semelles orthopédiques ErgoRecherche située à Dijon avait consenti à de nombreux efforts d'automatisation de sa chaîne de commande et de fabrication. La dernière pierre à apporter à l'édifice étant de remplacer le logiciel de CAM Powermill par un système automatisé de création de parcours d'outils et d'instructions machines (gCode propriétaire).<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">ErgoRecherche fournit au podologue un logiciel lui permettant de spécifier en 3D la prothèse qu'il souhaite prescrire à son patient (réalisé par Kinematiq à l'aide de Rhinceros3D et de Grasshopper)</li><li style=\" padding:2%\">La commande est reçue à l'usine de Dijon où elle est dispatchée par l'équipe de ErgoRecherche qui se sert du logiciel podofeet (réalisé par Kinematiq) pour constituer la table d'usinage où les semelles à usiner sont placées automatiquement en fonction de leurs caractéristiques (taille, matériau...) et d'autres critères relatifs à la charge de travail par exemple.</li><li style=\" padding:2%\">Vient ensuite la définition grasshopper que j'ai réalisée pour Kinematiq et ErgoRecherche qui remplace le logiciel Powermill. Powermill mobilisait pour chaque table d'usinage le concours d'un technicien, la définition grasshopper analyse directement les géométries dessinées par les podologues et en calculant des parcours d'outils. Ces parcours d'outils respectent ou améliorent les stratégies d'usinage déjà en place, pour un temps de calcul inférieur.</li><li style=\" padding:2%\">Les tables sont donc usinées et une fois les semelles sorties elles sont finies puis envoyées au podologues.</li></ul></span>",
            slideLegendEng: "<span>The orthopedic insole manufacturing company ErgoRecherche, located in Dijon, had made numerous efforts to automate its ordering and manufacturing chain. The final step was to replace the CAM software Powermill with an automated system for toolpath generation and machine instructions (proprietary gCode).<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">ErgoRecherche provides podiatrists with software allowing them to specify in 3D the prosthesis they wish to prescribe to their patient (developed by Kinematiq using Rhinoceros3D and Grasshopper).</li><li style=\" padding:2%\">The order is received at the Dijon factory where it is processed by the ErgoRecherche team using the podofeet software (developed by Kinematiq) to set up the machining table where the insoles to be machined are automatically placed according to their characteristics (size, material...) and other criteria related to workload, for example.</li><li style=\" padding:2%\">Then comes the Grasshopper definition I created for Kinematiq and ErgoRecherche, replacing the Powermill software. Powermill required the assistance of a technician for each machining table, while the Grasshopper definition directly analyzes the geometries drawn by the podiatrists and calculates toolpaths. These toolpaths either adhere to or improve upon the existing machining strategies, with lower calculation times.</li><li style=\" padding:2%\">The tables are then machined, and once the insoles are finished, they are sent to the podiatrists.</li></ul></span>",
            alt: "porteplume en valchromat noir",
            width: 800,
            height: 800
        }
    ]
},
{
    name: "Impression 3D céramique",
    nameEng: "Ceramic 3D Printing",
    description: "<span>Programmation d'une cinématique non planaire pour le designer et concepteur de la machine <a class=\"underline hover:no-underline\" href=\"https://www.yoannbordespages.com\" target=\"_blank\" rel=\"noopener noreferrer\">Yoann Bordès Pages</a>, à Nantes.</span>",
    descriptionEng: "<span>Programming of a non-planar kinematics for the designer and creator of the machine <a class=\"underline hover:no-underline\" href=\"https://www.yoannbordespages.com\" target=\"_blank\" rel=\"noopener noreferrer\">Yoann Bordès Pages</a> in Nantes.</span>",
    image_path: "/images/projets/programmation/impression3dCeramique/vignetteImpression3DCeramique.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Toolpath", "gCode", "3DPrinting"],
    slides: [
        {
            type: "video",
            slidePath: "/videos/impression3dCeramique.mp4",
            slideLegend: "<span>Vue détaillée du programme grasshopper qui permet de slicer une géométrie puis de générer le Gcode spécifique à l'imprimante3D céramique du designer Yoann Bordès Pages. <ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Une cinématique non planaire signifie que les couches d'impressions ne sont pas a priori planes, les coordonnées en Z du cordon d'impressions varient en fonction du modèle.</li><li style=\" padding:2%\"> Le facteur d'Extrusion 'E' est lui aussi variable et calculé pour chaque point en fonction du modèle.</li></ul></span>",
            slideLegendEng: "<span>Detailed view of the Grasshopper program that allows slicing a geometry and then generating G-code specific to the ceramic 3D printer of designer Yoann Bordès Pages. <ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">A non-planar kinematics means that the printing layers are not necessarily flat; the Z coordinates of the printing path vary depending on the model.</li><li style=\" padding:2%\"> The Extrusion factor 'E' is also variable and calculated for each point depending on the model.</li></ul></span>",
            alt: "Impression 3D céramique",
            width: 800,
            height: 800
        },
        {
            type: "picture",
            slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique20.jpg",
            slideLegend: "Une cinématique non planaire signifie que l'argile n'est pas déposée en couches planes mais plutôt en suivant une hélice.",
            slideLegendEng: "A non-planar kinematics means that the clay is not deposited in flat layers but rather follows a helix.",
            alt: "Impression 3D céramique",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique25.jpg",
            slideLegend: "Le défi supplémentaire de ce projet est aussi d'imprimer dans un moule, ce qui permet d'obtenir des formes concaves sans avoir recours à un échaffaudage",
            slideLegendEng: "The additional challenge of this project is also to print in a mold, which allows obtaining concave shapes without the need for scaffolding.",
            alt: "Impression 3D céramique",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique45.jpg",
            slideLegend: "Sur cette deuxième pièce le non planaire prend tout son sens.",
            slideLegendEng: "On this second piece, the non-planar nature becomes evident.",
            alt: "Impression 3D céramique",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique40.jpg",
            slideLegend: "Après avoir fait la spirale plane au centre, la tête d'impression redescend pour remplir les trois pieds.",
            slideLegendEng: "After creating the flat spiral in the center, the print head descends to fill the three feet.",
            alt: "Impression 3D céramique",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/programmation/impression3dCeramique/impression3dCeramique50.jpg",
            slideLegend: "au niveau des pieds les spires sont plus écartées il faut donc faire aussi varier la valeur d'extrusion pour remplir d'avantage.",
            slideLegendEng: "at the level of the feet, the spirals are more spaced out so the extrusion value must also be varied to fill more.",
            alt: "Impression 3D céramique",
            width: 1620,
            height: 1620
        }
    ]
},
{ 
    name: "Trophées pour le YBN 2024",
    nameEng:"Trophies for the le YBN 2024",
    description:
      "Commande du festival de Ultimate frisbee sur plage Yes But Nau, pour l'édition 2024",
    descriptionEng:"Bespoke order for the year 2024",
    image_path: "/images/projets/bois/YBN/YBN.JPG",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Hêtre massif", "Plastique recyclé"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/bois/YBN/YBN10.JPG",
            slideLegend: "Chaque année a lieu le Yes but Nau, festival européen de Ultimate frisbee, sur la plage du Nau, au Pouligen. Cette année je leur ai proposé d'expérimenter le recyclage des frisbee déclassés du club et d'utiliser cette matière première pour façonner les trophées.",
            slideLegendEng:"Chaque année a lieu le Yes but Nau, festival européen de Ultimate frisbee a lieu sur la plage du Nau, au Pouligen.",
            alt: "trophee festival des 3 continents",
            width: 2072,
            height: 2072
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/YBN/YBN20.JPG",
            slideLegend: "Il s'agit donc de 4 trophées, le socle est en hêtre massif gravé au laser.",
            slideLegendEng:"Each of the 5 trophies features the festival's logo engraved in oak and then embedded with a metal plate.",
            alt: "trophee festival des 3 continents",
            width: 2336,
            height: 2336
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/YBN/YBN30.JPG",
            slideLegend: "Anneaux réalisés en LDPE recyclé, avec inclusions blues de HPDE, recyclé lui aussi",
            slideLegendEng:"Silver hot air balloon, aluminum inlay.",
            alt: "trophee festival des 3 continents",
            width: 1688,
            height: 1688
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/YBN/YBN40.JPG",
            slideLegend: "",
            slideLegendEng:"Text engraving done with laser cutting.",
            alt: "trophee festival des 3 continents",
            width: 2588,
            height: 2588
        },
        {
            type: "video",
            slidePath: "/videos/YBN.mp4",
            slideLegend: "Le trophée YBN 2024 sur la scelette !",
            slideLegendEng:"The silver hot air balloon on the skeleton!",
            alt: "trophee festival des 3 continents",
            width: 800,
            height: 800
        }
    ]
}
,
{
    name: "Automatisation pour Dupré",
    nameEng: "Automation for Dupré",
    description: "<span>Automatisation pour le workflow de l'entreprise de menuiserie Os2m",
    descriptionEng: "Automation for the workflow of the carpentry company Os2m",
    image_path: "/images/projets/programmation/dupre/vignetteDupre.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Toolpath", "gCode"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/programmation/dupre/vignetteDupre.png",
            slideLegend: "<span>L'entreprise de menuiserie Dupré située en Anjou souhaitait automatiser son workflow de découpe et d'usinage et notamment se passer d'un logiciel de CAM, variable selon les modèles de ses machines.<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Chaque table d'usinage mobilisait le concours d'un technicien pour transcrire les géométries annotées données par le bureau d'étude en instructions machines. Des efforts d'automatisation de la chaîne en amont avaient déjà été réalisés, il manquait cette dernière étape.</li><li style=\" padding:2%\">Nous avons donc développé une définition grasshopper analysant directement les géométries issues du bureau d'étude et leurs annotations puis calculant des parcours d'outils.</li><li style=\" padding:2%\"> Ces parcours d'outils respectent ou améliorent les stratégies d'usinage déjà en place, pour un temps de calcul inférieur.</li></ul></span>",
            slideLegendEng: "<span>The carpentry company Dupré, located in Anjou, wanted to automate its cutting and machining workflow, particularly by eliminating the need for CAM software, which varied depending on the models of its machines.<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Each machining table required the assistance of a technician to transcribe the annotated geometries provided by the design office into machine instructions. Efforts to automate the chain upstream had already been made; this last step was missing.</li><li style=\" padding:2%\">We therefore developed a Grasshopper definition that directly analyzes the geometries from the design office and their annotations, and then calculates toolpaths.</li><li style=\" padding:2%\"> These toolpaths adhere to or improve upon the existing machining strategies, with lower calculation times.</li></ul></span>",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        }
    ]
},

{
    name: "Génération de patrons 2D",
    nameEng: "2D Pattern Generation",
    description: "<span>Automatisation de la génération de patrons pour l'entreprise de vêtements orthopédiques <a class=\"underline hover:no-underline\" href=\"https://www.orthomixt3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Orthomixt3d</a>.",
    descriptionEng: "Automation of pattern generation for the orthopedic clothing company Orthomixt3d.",
    image_path: "/images/projets/programmation/os2m/vignetteOs2m.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Mise en Plan"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/programmation/os2m/vignetteOs2m.png",
            slideLegend: "<span>L'entreprise Os2m située à Cholet souhaitait automatiser la génération des patrons de découpe de ses vêtements.<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Via le site internet <a class=\"underline hover:no-underline\" href=\"https://www.orthomixt3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Orthomixt3d</a> les mesures des utilisateurs sont récoltées</li><li style=\" padding:2%\">Elles sont ensuite compilées dans un fichier excel au sein duquel des macros calculent les paramètres de génération du patron sur mesures</li><li style=\" padding:2%\">Ces données sont lues dans le fichier excel par le programme grasshopper qui calcule un patron à taille réelle, cotté, annoté et imprimable</li><li style=\" padding:2%\">le patron est modifiable directement dans rhinoceros 3D, puis le programme grasshopper exporte les fichiers d'usinage calibrés pour les découpeuses laser de l'entreprise.</li></ul></span>",
            slideLegendEng: "<span>The company Os2m located in Cholet wanted to automate the generation of cutting patterns for its clothing.<ul style=\"list-style: circle; padding-top: 2%; margin-left: 2%; \"><li style=\" padding:2%\">Through the website <a class=\"underline hover:no-underline\" href=\"https://www.orthomixt3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Orthomixt3d</a>, user measurements are collected.</li><li style=\" padding:2%\">They are then compiled into an excel file where macros calculate the parameters for generating the custom pattern.</li><li style=\" padding:2%\">This data is read in the excel file by the Grasshopper program which calculates a full-size, dimensioned, annotated, and printable pattern.</li><li style=\" padding:2%\">the pattern can be modified directly in Rhinoceros 3D, then the Grasshopper program exports the calibrated machining files for the company's laser cutters.</li></ul></span>",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        }
    ]
},
{
    name: "Tables basses RIVA",
    nameEng: "RIVA Coffee Tables",
    description: "<span>Modelisation et conception des gabarits de façonnage et collage pour @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a> à Clisson.</span>",
    descriptionEng: "Modeling and design of shaping and bonding jigs for @atelierJulesB in Clisson.",
    image_path: "/images/projets/modelisation/tableRiva/riva.jpg",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Mise en Plan", "Gabarits", "Chêne Massif"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva10a.png",
            slideLegend: "Croquis d'intention de Jules, de @atelierJulesB.",
            slideLegendEng: "Intention sketch by Jules, from @atelierJulesB.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva20.jpg",
            slideLegend: "Modelisation des deux tables",
            slideLegendEng: "Modeling of the two tables",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva25.jpg",
            slideLegend: "Il s'agit donc de deux tables constituées de la répétition de deux pièces de noyer massif et de leurs connecteurs.",
            slideLegendEng: "These are two tables consisting of the repetition of two solid walnut pieces and their connectors.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva30.jpg",
            slideLegend: "Détail de la table 1400.",
            slideLegendEng: "Detail of the 1400 table.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva40.jpg",
            slideLegend: "Vue de profil cotée des pièces répétées de la table 1200.",
            slideLegendEng: "Profile view dimensioned of the repeated parts of the 1200 table.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva50.jpeg",
            slideLegend: "Gabarit de collage / placement de la table 1200, réalisé à l'aide de la découpeuse laser.",
            slideLegendEng: "Gluing / placement jig for the 1200 table, made using the laser cutter.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva60.jpeg",
            slideLegend: "Gabarit de collage / placement de la table 1400.",
            slideLegendEng: "Gluing / placement jig for the 1400 table.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva70.jpeg",
            slideLegend: "Usage du gabarit.",
            slideLegendEng: "Using the jig.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva80.jpg",
            slideLegend: "Fichiers d'usinage des gabarits de rabotage des pièces répétées. Les gabarits sont usinées à l'aide d'une 5 axe à l'atelier <a class=\"underline hover:no-underline\" href=\"https://www.usinage-numerique-bois.fr\" target=\"_blank\" rel=\"noopener noreferrer\">UTB</a>.</span>.",
            slideLegendEng: "Machining files for the planing jigs of the repeated parts. The jigs are machined using a 5-axis machine at the UTB workshop.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva90.jpeg",
            slideLegend: "La table 1200 dans l'atelier de Jules Battais, Clisson.",
            slideLegendEng: "The 1200 table in Jules Battais' workshop, Clisson.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/tableRiva/riva85.jpeg",
            slideLegend: "La table 1400 terminée.",
            slideLegendEng: "The 1400 table finished.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        }
    ]
},

{
    name: "Arbre aux Hérons",
    nameEng: "Heron Tree",
    description: "<span>Modelisation et conception des escaliers et passerelles de l'Arbre aux Hérons pour la compagnie <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr\" target=\"_blank\" rel=\"noopener noreferrer\">La Machine</a> à Nantes.</span>",
    descriptionEng: "Modeling and design of stairs and walkways for the Heron Tree for the company <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr\" target=\"_blank\" rel=\"noopener noreferrer\">La Machine</a> in Nantes.",
    image_path: "/images/projets/modelisation/arbre/arbreDessusSqFront.jpg",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Rhinoceros3D", "Grasshopper", "Bureau d'Etudes"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/arbreDessusSq.jpg",
            slideLegend: "<p>Au sein du bureau d'étude de <a class=\"underline hover:no-underline\" href=\"https://arbreauxherons.fr\" target=\"_blank\" rel=\"noopener noreferrer\">l'Arbre aux Hérons</a>, œuvre imaginée par François Delaroziere et Pierre Orefice, j'ai participé à l'étude et la modélisation en taille réelle sur Rhinoceros3D de l'arbre. </p> <br> <p> Nous étions une vingtaine à étudier et concevoir le modèle, en concertation avec les auteurs et j'étais responsable des passerelles et escaliers.</p>",
            slideLegendEng: "<p>Within the design office of the <a class=\"underline hover:no-underline\" href=\"https://arbreauxherons.fr\" target=\"_blank\" rel=\"noopener noreferrer\">Heron Tree</a>, a work imagined by François Delaroziere and Pierre Orefice, I participated in the study and full-scale modeling of the tree in Rhinoceros3D.</p> <br> <p> We were about twenty to study and design the model, in consultation with the authors, and I was responsible for the walkways and stairs.</p>",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/ArbreCroquis.png",
            slideLegend: "\"Niché au cœur du Jardin Extraordinaire à Nantes, l’Arbre aux Hérons est une sculpture monumentale imaginée par Pierre Orefice et François Delaroziere. <br> Inspiré des banians, il mesure 35 mètres de haut et 50 mètres de diamètre. Une vingtaine de branches accueille des jardins suspendus sous forme de micro-paysages. <br>L’Arbre est une arche végétale où se développent plus de 130 espèces. <br>Un bestiaire mécanique composé d’une trentaine d’animaux y a élu domicile. On y croise des colibris, un paresseux, des papillons, des oies sauvages…<br>À sa cime niche un couple de Hérons.\" <br> <br> extrait du site <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/projets-urbains/larbre-aux-herons/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr</a>",
            slideLegendEng: "\"Nestled in the heart of the Extraordinary Garden in Nantes, the Heron Tree is a monumental sculpture imagined by Pierre Orefice and François Delaroziere. <br> Inspired by banyans, it is 35 meters high and 50 meters in diameter. About twenty branches host suspended gardens in the form of micro-landscapes. <br>The Tree is a botanical arch where over 130 species thrive. <br>A mechanical menagerie composed of about thirty animals has taken up residence. You can encounter hummingbirds, a sloth, butterflies, wild geese...<br>At its peak nestles a couple of herons.\" <br> <br> excerpt from the website <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/en/projets-urbains/the-heron-tree/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr/en</a>",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/circulationEtageMoyen2.jpg",
            slideLegend: "<p>Vue du deuxième étage de l'arbre, on voit les circulations possibles sur les branches en turquoise et les connexions sur lesquelles j'ai travaillé en violet, il s'agit de passerelles ou d'escaliers.</p><p><br><p>Les ramures turquoises sont le squelette à partir duquel la définition grasshopper va générer les extrusions visible dans la prochaine vue.</p>",
            slideLegendEng: "<p>View from the second floor of the tree, we can see the possible circulations on the branches in turquoise and the connections I worked on in purple, which are walkways or stairs.</p><p><br><p>The turquoise branches are the skeleton from which the grasshopper definition will generate the extrusions visible in the next view.</p>",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/circulationEtageMoyen2A.jpg",
            slideLegend: "Vue du deuxième étage de l'arbre, avec l'acier, les volumes ont été générés par grasshopper, ainsi si l'on modifie l'âme turquoise d'une branche on pourra recalculer les volumes automatiquement.",
            slideLegendEng: "View from the second floor of the tree, with the steel, the volumes were generated by grasshopper, so if we modify the turquoise core of a branch we will be able to recalculate the volumes automatically.",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/circulationEtageMoyenRender.jpg",
            slideLegend: "Vue de détail du deuxième étage.",
            slideLegendEng: "Detailed view of the second floor.",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/passerelle.jpg",
            slideLegend: "Détail d'une passerelle.",
            slideLegendEng: "Detail of a walkway.",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/ConnexionPasserelle.jpg",
            slideLegend: "Détail de la connexion passerelle / branche.",
            slideLegendEng: "Detail of the walkway / branch connection.",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/coupeTechniquePasserelle.jpg",
            slideLegend: "Coupe technique de passerelle.",
            slideLegendEng: "Technical section of a walkway.",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/brancheProto.jpg",
            slideLegend: "Photo de la branche prototype présente sur le site des machines de l'île, Nantes.",
            slideLegendEng: "Photo of the prototype branch present on the Machines de l'île website, Nantes.",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/arbre/vueOuestSq.jpg",
            slideLegend: "Vue Ouest de l'arbre. <br> <br> <i>source <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/projets-urbains/larbre-aux-herons/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr</a></i>",
            slideLegendEng: "West view of the tree. <br> <br> <i>source <a class=\"underline hover:no-underline\" href=\"https://www.lamachine.fr/projets-urbains/larbre-aux-herons/\" target=\"_blank\" rel=\"noopener noreferrer\">www.lamachine.fr</a></i>",
            alt: "Arbre aux Herons",
            width: 2560,
            height: 2560
        }
    ]
}
,
{ 
    name: "Trophées pour le festival des 3 continents",
    nameEng:"Trophies for the \"Festival des 3 continents\"",
    description:
      "Commande pour l'édition 2023",
    descriptionEng:"Bespoke order for the year 2023",
    image_path: "/images/projets/bois/trophees/trophee10ParArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Chêne massif"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee10ParArcadie.jpg",
            slideLegend: "Réalisée en chêne massif, le logo est réalisé en découpes de métal, laiton, aluminium ou cuivre dépendemment du prix correspondant",
            slideLegendEng:"Made of solid oak, the logo is crafted from metal cuts, brass, aluminum, or copper depending on the corresponding price",
            alt: "trophee festival des 3 continents",
            width: 2072,
            height: 2072
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee20ParArcadie.jpg",
            slideLegend: "Chacun des 5 trophées comporte le logo du festival gravé dans le chêne puis incrusté de plaque de métal.",
            slideLegendEng:"Each of the 5 trophies features the festival's logo engraved in oak and then embedded with a metal plate.",
            alt: "trophee festival des 3 continents",
            width: 2336,
            height: 2336
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee30ParArcadie.jpg",
            slideLegend: "Mongolfière d'argent, incrustation d'aluminium.",
            slideLegendEng:"Silver hot air balloon, aluminum inlay.",
            alt: "trophee festival des 3 continents",
            width: 1688,
            height: 1688
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee40ParArcadie.jpg",
            slideLegend: "Gravure des textes réalisées à la découpeuse laser.",
            slideLegendEng:"Text engraving done with laser cutting.",
            alt: "trophee festival des 3 continents",
            width: 2588,
            height: 2588
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee50ParArcadie.jpg",
            slideLegend: "Mongolfière d'argent, incrustation de laiton.",
            slideLegendEng:"Silver hot air balloon, brass inlay.",
            alt: "trophee festival des 3 continents",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee60ParArcadie.jpg",
            slideLegend: "Le chêne brut de sciage a ensuite été fini à l'huile cire dure pour une protection durable des trophées.",
            slideLegendEng:"The rough-sawn oak was then finished with hard wax oil for lasting protection of the trophies.",
            alt: "trophee festival des 3 continents",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/trophees/trophee70ParArcadie.jpg",
            slideLegend: "Prix du public, incrustation de cuivre.",
            slideLegendEng:"Audience Award, copper inlay.",
            alt: "trophee festival des 3 continents",
            width: 1620,
            height: 1620
        },
        {
            type: "video",
            slidePath: "/videos/trophee.mp4",
            slideLegend: "La mongoflière d'argent sur la scelette !",
            slideLegendEng:"The silver hot air balloon on the skeleton!",
            alt: "trophee festival des 3 continents",
            width: 800,
            height: 800
        }
    ]
}
,
{ 
    name: "Rocking chair",
    nameEng:"Rocking chair",
    description:
      "<span>Modelisation et conception des gabarits de cintrage pour @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a> à Clisson.</span>",
    descriptionEng:"",
    image_path: "/images/projets/modelisation/chaiseJules/chaiseJules10.jpeg",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Ébénisterie", "Gabarits", "Cintrage", "Noyer"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules20.jpeg",
            slideLegend: "Rapide croquis d'intention de Jules, de @<a class=\"underline hover:no-underline\" href=\"https://www.instagram.com/atelierjulesb\" target=\"_blank\" rel=\"noopener noreferrer\">atelierJulesB</a>.</span>",
            slideLegendEng:"Quick sketch of Jules' intention, from @atelierJulesB, Clisson.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules40.jpeg",
            slideLegend: "Modélisation du meuble et aide à la fabrication : les berces et la coque seront réalisées par cintrage de lamelles ou feuilles de bois.",
            slideLegendEng:"Furniture modeling and assistance in fabrication: the rockers and the shell will be made by bending slats or sheets of wood.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules50.jpeg",
            slideLegend: "Pour réaliser des pièces de bois cintrées il faut encoller les lamelles puis les serrer dans un gabarit en deux parties : forme et contreforme.",
            slideLegendEng:"To make curved wooden parts, it is necessary to glue the slats and then clamp them in a two-part jig: form and counterform.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules60.jpeg",
            slideLegend: "Fichiers d'usinage des gabarits pour les berces",
            slideLegendEng:"Machining files for the rockers jigs",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules70.jpeg",
            slideLegend: "Gabarits en cours d'usinage.",
            slideLegendEng:"Jigs being machined.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules80.jpeg",
            slideLegend: "Gabarits prêts à l'usage, les deux parties de chaque gabarits coulissent l'une sur l'autre, grâce à des guides qui permettent aussi de garder un alignement parfait et donc permettent un serrage optimal.",
            slideLegendEng:"Jigs ready for use, the two parts of each jig slide over each other, thanks to guides that also allow to maintain a perfect alignment and thus ensure optimal clamping.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules95.jpeg",
            slideLegend: "Le fauteuil terminé.",
            slideLegendEng:"The finished armchair.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/chaiseJules/chaiseJules99.jpeg",
            slideLegend: "Détail des berces.",
            slideLegendEng:"Detail of the rockers.",
            alt: "rocking Chair templates",
            width: 2560,
            height: 2560
        }
    ]
}
,
{
    name: "Formation Grasshopper",
    nameEng:"Grasshopper course",
    description: "<span> Formation Grasshopper appliquée aux programmes de robotique de <a class=\"underline hover:no-underline\" href=\"https://www.batiprint3d.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Batiprint3d, à Nantes</a>.",
    descriptionEng:"",
    image_path: "/images/projets/programmation/batiprint/vignetteBatiprint.png",
    whiteBg: true,
    category: "Programmation",
    key_techs: ["Grasshopper", "Formation"],
    slides: [{
        type: "picture",
        slidePath: "/images/projets/programmation/batiprint/vignetteBatiprintFull.png",
        slideLegend: "<p>L'entreprise Batiprint3D souhaitait former une partie de son staff à la programmation grasshopper.</p><p><br></p><p>Kinematiq m'a demandé de leur préparer une formation de plusieurs jours personnalisée, appliquée aux définitions de production de Batiprint. </p>",
        slideLegendEng:"Batiprint3D company wanted to train part of its staff in Grasshopper programming.</p><p><br></p><p>Kinematiq asked me to prepare a personalized multi-day training applied to Batiprint's production definitions.",
        alt: "coffee tables templates",
        width: 2560,
        height: 2560
    }]
},
{
    name: "Coffret à Gemmes Griffon",
    nameEng:"Gems box for Griffon",
    description: "<span>Conçu pour la <a class=\"underline hover:no-underline\" href=\"https://www.bijouteriegriffon.com\" target=\"_blank\" rel=\"noopener noreferrer\">bijouterie / joaillerie Griffon</a> à Nantes.</span>",
    descriptionEng:"",
    image_path: "/images/projets/bois/coffrets/coffretGriffon30ParArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Découpe numérique", "Valchromat"],
    slides: [{
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon10ParArcadie.jpg",
            slideLegend: "<span>Conçu pour la <a class=\"underline hover:no-underline\" href=\"https://www.bijouteriegriffon.com\" target=\"_blank\" rel=\"noopener noreferrer\">bijouterie / joaillerie Griffon</a> à Nantes.</span>",
            slideLegendEng:"Designed for the Griffon jewelry store in Nantes.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon20ParArcadie.jpg",
            slideLegend: "5 plateaux empilables réalisés en valchromat noir",
            slideLegendEng:"5 stackable trays made of black valchromat.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon30ParArcadie.jpg",
            slideLegend: "Chaque Plateau est destiné à recevoir des boites à gemmes en plexiglass de deux tailles différentes, qui viennent s’insérer dans les logements mousse EVA. ",
            slideLegendEng:"Each tray is designed to hold gem boxes made of plexiglass in two different sizes, which fit into the EVA foam slots.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon40ParArcadie.jpg",
            slideLegend: "Les plateaux sont surmontés d’un étage de présentation comportant une gravure du logo de la joaillerie réalisée au laser dans du plexiglass givré.",
            slideLegendEng:"The trays are topped with a display stage featuring a laser-engraved logo of the jewelry store on frosted plexiglass.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon50ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon60ParArcadie.jpg",
            slideLegend: "Le principe de la boite à gemmes qui vient se loger dans les alvéoles du plateau a été repris pour cette fausse boîte à gemme qui reprend le logo de la joaillerie.",
            slideLegendEng:"The principle of the gem box fitting into the tray slots was applied to this fake gem box featuring the jewelry store logo.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon70ParArcadie.jpg",
            slideLegend: "Détail du cabochon, la gravure est rehaussée d’une incrustation de fil d’argent massif, technique signature de l’atelier arcadie.",
            slideLegendEng:"Detail of the cabochon, the engraving is enhanced with an inlay of solid silver wire, a signature technique of the arcadie workshop.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon80ParArcadie.jpg",
            slideLegend: "Les pieds en aluminium anodisé sont equipés de petits patins de liège pour une manipulation silencieuse.",
            slideLegendEng:"The anodized aluminum feet are equipped with small cork pads for silent handling.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon90ParArcadie.jpg",
            slideLegend: "Dans une deuxième version de l’étage de présentation la gravure du logo a été rehaussée de noir.",
            slideLegendEng:"In a second version of the display stage, the logo engraving was enhanced with black.",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon100ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon110ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon120ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "video",
            slidePath: "/videos/laserMousse.mp4",
            slideLegend: "decoupe laser sur mousse EVA",
            slideLegendEng:"laser cutting on EVA foam",
            alt: "decoupe laser sur mousse EVA",
            width: 800,
            height: 800
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon130ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon140ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/coffretGriffon150ParArcadie.jpg",
            slideLegend: "",
            slideLegendEng:"",
            alt: "présentoirs noirs inscrustations d'argent",
            width: 2560,
            height: 2560
        }
    ]
}
  ,
{
    name: "Appuis vélos",
    nameEng: "Bike Racks",
    description: "Design et mise en plan d'une série d'appuis vélos pour ATAO",
    descriptionEng: "Design and drafting of a series of bike racks for ATAO",
    image_path: "/images/projets/modelisation/appuisVelo/appuisVeloSQ.png",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Design", "Mise en Plan"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo.jpg",
            slideLegend: "Conception d'une série d'appuis vélos destinés à l'île de Nantes pour <a class=\"underline hover:no-underline\" href=\"https://www.atao-insertion.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ATAO</a>.</span>",
            slideLegendEng: "Designing a series of bike racks for the Nantes island for <a class=\"underline hover:no-underline\" href=\"https://www.atao-insertion.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ATAO</a>.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo10.jpg",
            slideLegend: "Les appuis vélos devaient cibler les vélos classiques mais aussi les vélos cargos, voire uniquement ces derniers à leurs emplacements réservés.",
            slideLegendEng: "The bike racks were intended for both standard bicycles and cargo bikes, possibly only the latter at their designated locations.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo20.png",
            slideLegend: "Toute la série d'appuis vélos devait répondre au normes énoncées dans le CCTP (Cahier des Clauses Techniques Particulières) rédigé par la Direction de l'espace public de Nantes Métropole.",
            slideLegendEng: "The entire series of bike racks had to meet the standards outlined in the CCTP (Cahier des Clauses Techniques Particulières) drafted by the Direction de l'espace public de Nantes Métropole.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo30.jpg",
            slideLegend: "ATAO est une association d'insertion professionnelle, les appuis vélos sont fabriqués par des apprenants et doivent donc prendre en compte des contraintes pédagogiques.",
            slideLegendEng: "ATAO is a professional integration association; the bike racks are manufactured by learners and must therefore take into account pedagogical constraints.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/appuisVelo/appuisVelo40.jpg",
            slideLegend: "Un modèle d'appuis vélo cargo fabriqué et installé.",
            slideLegendEng: "A model of cargo bike rack manufactured and installed.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        }
    ]
}
,
    ,
 {
    name: "Porteplume Kopis",
    nameEng: "Kopis Pen Holder",
    description: "Collection Styx",
    descriptionEng: "Styx Collection",
    image_path: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Gravure Laser", "Découpe numérique", "Valchromat"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
            slideLegend: "Plumier / Porte carte Kopis Structure en valchromat noir et gris, inclusions de laiton.",
            slideLegendEng: "Kopis Pen Holder: Structure made of black and gray valchromat, brass inlays.",
            alt: "porteplume en valchromat noir",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/Kopis20parArcadie.jpg",
            slideLegend: "Modèle Kopis : Longueur 393mm, Largeur 70mm, Épaisseur 16mm",
            slideLegendEng: "Kopis Model: Length 393mm, Width 70mm, Thickness 16mm",
            alt: "porteplume en valchromat noir",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/Kopis30parArcadie.jpg",
            slideLegend: "Le porteplume comporte des logements pour cartes de visite.",
            slideLegendEng: "The pen holder has slots for business cards.",
            alt: "porteplume en valchromat noir",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/Kopis40parArcadie.jpg",
            slideLegend: "",
            slideLegendEng: "",
            alt: "porteplume en valchromat noir",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/Kopis50parArcadie.jpg",
            slideLegend: "",
            slideLegendEng: "",
            alt: "porteplume en valchromat noir",
            width: 1620,
            height: 1620
        },
        {
            type: "video",
            slidePath: "/videos/laserValchro.mp4",
            slideLegend: "decoupe laser sur valchro",
            slideLegendEng: "Laser cutting on valchromat",
            alt: "porteplume en valchromat noir",
            width: 800,
            height: 800
        }
    ]
}
,
{
    name: "Boite à bijoux Samson",
    nameEng: "Samson Jewelry Box",
    description: "Commande particulière",
    descriptionEng: "Custom Order",
    image_path: "/images/projets/bois/coffrets/samson20parArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Gravure Laser", "Découpe numérique", "Valchromat"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson10parArcadie.jpg",
            slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
            slideLegendEng: "Made of black valchromat, the flap and the 5 drawers are adorned with solid silver wire.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson20parArcadie.jpg",
            slideLegend: "Les portes latérales ont des rangements pour colliers, l’abattant est muni d’une glace sur l’envers.",
            slideLegendEng: "The side doors have compartments for necklaces, the flap has a mirror on the inside.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson30parArcadie.jpg",
            slideLegend: "",
            slideLegendEng: "",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson40parArcadie.jpg",
            slideLegend: "Détail des crochets à colliers réalisés en aluminium poli.",
            slideLegendEng: "Detail of the necklace hooks made of polished aluminum.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson50parArcadie.jpg",
            slideLegend: "Les colonnes sont elles aussi en aluminium poli.",
            slideLegendEng: "The columns are also made of polished aluminum.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson60parArcadie.jpg",
            slideLegend: "",
            slideLegendEng: "",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson70parArcadie.jpg",
            slideLegend: "Détail des ornementations.",
            slideLegendEng: "Detail of the ornaments.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson80parArcadie.jpg",
            slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
            slideLegendEng: "Made of black valchromat, the flap and the 5 drawers are adorned with solid silver wire.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson90parArcadie.jpg",
            slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
            slideLegendEng: "Made of black valchromat, the flap and the 5 drawers are adorned with solid silver wire.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/bois/coffrets/samson100parArcadie.jpg",
            slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
            slideLegendEng: "Made of black valchromat, the flap and the 5 drawers are adorned with solid silver wire.",
            alt: "coffret noir inscrustations d'argent",
            width: 1620,
            height: 1620
        }
    ]
}
,
  {
    name: "Local Services NMH",
    nameEng: "NMH Service Room",
    description: "Mise en plan d'un local poubelle pour Nantes Métropole Habitat",
    descriptionEng: "Drafting of a garbage room for Nantes Métropole Habitat",
    image_path: "/images/projets/modelisation/NMH/localPoubelle.png",
    whiteBg: true,
    category: "Modélisation",
    key_techs: ["Mise en plan"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/NMH/localPoubelle05.png",
            slideLegend: "Modelisation et mise en plan réalisée pour <a class=\"underline hover:no-underline\" href=\"https://www.atao-insertion.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ATAO</a> à l'aide du logiciel Solidworks.",
            slideLegendEng: "Modeling and drafting done for <a class=\"underline hover:no-underline\" href=\"https://www.atao-insertion.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">ATAO</a> using Solidworks software.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/NMH/localPoubelle10.png",
            slideLegend: "Une sélection des plans réalisés pour ce local, ATAO est une association d'insertion professionnelle.",
            slideLegendEng: "A selection of the plans made for this room, ATAO is a professional integration association.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/NMH/localPoubelle20.png",
            slideLegend: "En concertation avec les encadrants de ATAO j'ai fait la mise en plan ainsi qu'une partie de la conception pour obtenir un résultat adapté aux apprenants.",
            slideLegendEng: "In consultation with ATAO supervisors, I did the drafting and part of the design to obtain a result suitable for learners.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/NMH/localPoubelle30.png",
            slideLegend: "L'atelier d'ATAO est un atelier centré sur le travail du métal mais comporte aussi toute une partie menuiserie.",
            slideLegendEng: "ATAO's workshop focuses on metalwork but also includes a woodworking section.",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        },
        {
            type: "picture",
            slidePath: "/images/projets/modelisation/NMH/localPoubelle40.png",
            slideLegend: "",
            slideLegendEng: "",
            alt: "coffee tables templates",
            width: 2560,
            height: 2560
        }
    ]
}
,
{
    name: "Etuis de liseuse Kobo",
    nameEng: "Kobo E-Reader Cases",
    description: "Commande particulière",
    descriptionEng: "Custom Order",
    image_path: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Ébénisterie", "Découpe laser", "Prototypage", "Cuir"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
            slideLegend: "Etuis sur mesure pour une liseuse.",
            slideLegendEng: "Custom cases for an e-reader.",
            alt: "étuis en cuir pour liseuse kobo",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie.jpg",
            slideLegend: "Les découpes des pièces en cuir sont réalisées à l'aide de la découpeuse laser.",
            slideLegendEng: "The leather pieces are cut using a laser cutter.",
            alt: "étuis en cuir pour liseuse kobo",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie32.jpg",
            slideLegend: "La couture est elle aussi facilitée par la découpe au laser, un lacet est passé dans les oeillets prévu en amont.",
            slideLegendEng: "Sewing is also facilitated by laser cutting, a lace is passed through the eyelets provided upstream.",
            alt: "étuis en cuir pour liseuse kobo",
            width: 1620,
            height: 1620
        }
    ]
}
,
{
    name: "Range capsules nespresso",
    nameEng: "Nespresso Capsule Holder",
    description: "Commande particulière",
    descriptionEng: "Custom Order",
    image_path: "/images/projets/laser/rangeCapsulesNespresso.jpg",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Prototypage", "Découpe laser"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/laser/rangeCapsulesNespresso2.jpg",
            slideLegend: "Chaque module peut contenir 10 capsules, soit le contenu d'une boite",
            slideLegendEng: "Each module can hold 10 capsules, the content of one box",
            alt: "range capsules nespresso",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/laser/rangeCapsulesNespresso3.jpg",
            slideLegend: "Les modules sont détachables pour un remplissage confortable à l'horizontal, ou ludique à la verticale.",
            slideLegendEng: "The modules are detachable for easy filling horizontally, or playful vertically.",
            alt: "range capsules nespresso",
            width: 1620,
            height: 1620
        },
        {
            type: "picture",
            slidePath: "/images/projets/laser/rangeCapsulesNespresso4.jpg",
            slideLegend: "Détail de la fixation des modules",
            slideLegendEng: "Detail of the module fixation",
            alt: "range capsules nespresso",
            width: 1620,
            height: 1620
        }
    ]
}
,
 {
    name: "Marqueterie de cuir",
    nameEng: "Leather Marquetry",
    description: "Modernisation de technique traditionnelle",
    descriptionEng: "Modernization of a traditional technique",
    image_path: "/images/projets/cuir/marqueterieCuir/WrongSQ.png",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Prototypage", "Découpe laser"],
    slides: [
        {
            type: "picture",
            slidePath: "/images/projets/cuir/marqueterieCuir/WrongSQ.png",
            slideLegend: "Inspiré de la technique traditionnelle de marqueterie de placage de bois, la marqueterie de cuir est réalisée à l'aide de la découpeuse laser.",
            slideLegendEng: "Inspired by the traditional technique of wood veneer marquetry, leather marquetry is done using a laser cutter.",
            alt: "range capsules nespresso",
            width: 1620,
            height: 1620
        },
        {
            type: "video",
            slidePath: "/videos/marqueterieCuir.mp4",
            slideLegend: "découpe laser sur cuir",
            slideLegendEng: "laser cutting on leather",
            alt: "decoupe laser sur cuir",
            width: 800,
            height: 800
        }
    ]
}

];