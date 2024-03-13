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
    key_techs: ["Prototypage", "Découpe laser"],
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
    key_techs: ["Prototypage", "Découpe laser"],
                slides: [
                {
                    type: "video",
                    slidePath: "/videos/impression3dCeramique.mp4",
                    slideLegend: "Vue détaillée du programme grasshopper qui permet de slicer une géométrie puis de générer le Gcode spécifique à l'imprimante3D céramique du designer Yoann Bordès Pages",
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
    key_techs: ["Prototypage", "Découpe laser"],
                slides: [                {
                    type: "picture",
                    slidePath: "/images/projets/programmation/dupre/vignetteDupre.png",
slideLegend:"<p style=\" padding:2%\" >L'entreprise de menuiserie Dupré située en Anjou souhaitait automatiser son workflow de découpe et d'usinage et notamment se passer d'un logiciel de CAM, variable selon les modèles de ses machines.</p><p style=\"padding:2%\" >Chaque table d'usinage mobilisait le concours d'un technicien pour transcrire les géométries annotées données par le bureau d'étude en instructions machines. Des efforts d'automatisation de la chaîne en amont avaient déjà été réalisés, il manquait cette dernière étape.</p><p style=\"padding:2%\" >Nous avons donc développé une définition grasshopper analysant directement les géométries issues du bureau d'étude et leurs annotations puis calculant des parcours d'outils.</p><p style=\" padding:2%\" > Ces parcours d'outils respectent ou améliorent les stratégies d'usinage déjà en place, pour un temps de calcul inférieur.</p>",
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
    key_techs: ["Prototypage", "Découpe laser"],
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
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Mixed Media"],
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
                    slidePath: "/images/projets/modelisation/tableRiva/riva85.jpeg",
                    slideLegend: "La table 1400 terminée.",
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
                }
            ]
  },
  { 
    name: "Trophées pour le festival des 3 continents",
    description:
      "Commande pour l'édition 2023",
    image_path: "/images/projets/bois/trophees/trophee10ParArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser"],
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
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Mixed Media"],
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
    name: "Coffret à Gemmes Griffon",
    description:
      "<span>Conçu pour la <a class=\"underline hover:no-underline\" href=\"https://www.bijouteriegriffon.com\" target=\"_blank\" rel=\"noopener noreferrer\">bijouterie / joaillerie Griffon</a> à Nantes.</span>",
    image_path: "/images/projets/bois/coffrets/coffretGriffon30ParArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser", "Mixed Media"],
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
  { 
    name: "Porteplume Kopis",
    description:
      "Collection Styx",
    image_path: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser"],
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
  { 
    name: "Boite à bijoux Samson",
    description:
      "Commande particulière",
    image_path: "/images/projets/bois/coffrets/samson20parArcadie.jpg",
    whiteBg: false,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser"],
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
    name: "Etuis de liseuse Kobo",
    description:
      "Commande particulière",
    image_path: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
    whiteBg: false,
    category: "Découpe numérique",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser"],
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
  }
];