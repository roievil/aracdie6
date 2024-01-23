import { IProject, Service } from "./types";

export const services: Service[] = [
    {
    icon: "/images/icons/robot.svg",
    title: "Programmation",
    about:
      "Je suis programmeur et <b>automaticien</b>, spécialiste de <b>Grasshopper</b>, à l'aide de quoi je peux programmer des objets paramétriques, des parcours d'outils ou des workflow sur mesure à vos besoins",
  },
      {
    icon: "/images/icons/ornament.svg",
    title: "Ebénisterie",
    about:
      "Je suis <b>ébéniste</b> et j'ai adapté les techniques d'<b>ornementation</b> traditionelles de ce métier aux machines <b>numériques</b> : marqueterie, incrustations, gravures...",
  },
    {
    icon: "/images/icons/laser.svg",
    title: "Découpe numérique",
    about:
      "L'atelier est équipé d'une <b>découpeuse laser</b> et d'une <b>fraiseuse numérique</b> avec lesquelles je réalise les pièces elles mêmes ou bien des gabarits pour régler les machines traditionnelles.",
  },  {
    icon: "/images/icons/leather.svg",
    title: "Travail du Cuir",
    about:
      "J'ai mis au point une interpretation des techniques de maroquinerie traditionnelles à l'aide de la découpeuse laser",
  },   {
    icon: "/images/icons/modeling.svg",
    title: "Modélisation",
    about: "J'utilise notamment <b>Rhinoceros 3D</b> dans ma pratique et je suis aussi <b>formateur</b> sur ce logiciel, en distanciel aussi bien que sur place, dans votre établissement.",
  },

 {
    icon: "/images/icons/sawBlade.svg",
    title: "Travail du Bois",
    about:
      "L'atelier est équipé de machines à bois traditionnelles dimensionnées pour du <b>mobilier</b> et <b>petits objets</b>"
  },



];

export const projects: IProject[] = [
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
                    slidePath: "/images/projets/bois/trophees/trophee80ParArcadie.mp4",
                    slideLegend: "La mongoflière d'argent sur la scelette !",
                    alt: "trophee festival des 3 continents",
                    width: 1620,
                    height: 1620
                }
            ]
  },
    { 
    name: "Impression 3D céramique",
    description:
      "<span>Programmation d'une cinématique non planaire pour le designer et concepteur de la machine <a class=\"underline hover:no-underline\" href=\"https://www.yoannbordespages.com\" target=\"_blank\" rel=\"noopener noreferrer\">Yoann Bordès Pages</a>, à Nantes.</span>",
    image_path: "/images/projets/programmation/impression3dCeramique/impression3dCeramique.jpg",
    whiteBg: false,
    category: "Programmation",
    key_techs: ["Prototypage", "Découpe laser"],
                slides: [
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
                },
                {
                    type: "video",
                    slidePath: "/videos/impression3dCeramique.mp4",
                    slideLegend: "Impression de la première pièce.",
                    alt: "Impression 3D céramique",
                    width: 650,
                    height: 650
                }
            ]
  },
  { 
    name: "Coffret à Gemmes Griffon",
    description:
      "<span>Conçu pour la <a class=\"underline hover:no-underline\" href=\"https://www.bijouteriegriffon.com\" target=\"_blank\" rel=\"noopener noreferrer\">bijouterie / joaillerie Griffon</a> à Nantes.</span>",
    image_path: "/images/projets/bois/coffrets/coffretGriffon10ParArcadie.jpg",
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
                    width: 450,
                    height: 450
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
    name: "Boite à bijoux Samson",
    description:
      "Commande particulière",
    image_path: "/images/projets/bois/coffrets/samson10parArcadie.jpg",
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
    name: "Porteplume Kopis",
    description:
      "Collection Styx",
    image_path: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
    whiteBg: true,
    category: "Ebénisterie",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis10parArcadie.jpg",
                    slideLegend: "Plumier / Porte carte Kopis Structure en valchromat noir et gris, inclusions de laiton.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis20parArcadie.jpg",
                    slideLegend: "Modèle Kopis : Longueur 393mm, Largeur 70mm, Épaisseur 16mm",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis30parArcadie.jpg",
                    slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis40parArcadie.jpg",
                    slideLegend: "Détail des crochets à colliers réalisés en aluminium poli.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/bois/coffrets/Kopis50parArcadie.jpg",
                    slideLegend: "Les colonnes sont elles aussi en aluminium poli. ",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                                {
                    type: "video",
                    slidePath: "/videos/laserValchro.mp4",
                    slideLegend: "decoupe laser sur valchro",
                    alt: "decoupe laser sur valchro",
                    width: 650,
                    height: 650
                }
            ]
  },
  { 
    name: "Etuis de liseuse Kobo",
    description:
      "Commande particulière",
    image_path: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
    whiteBg: false,
    category: "Travail du Cuir",
    key_techs: ["Ébénisterie", "Prototypage", "Gravure Laser"],
                slides: [
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie23.jpg",
                    slideLegend: "Réalisée en valchromat noir, l’abattant et les 5 tiroirs sont ornementés de fil d’argent massif.",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie.jpg",
                    slideLegend: "Les portes latérales ont des rangements pour colliers, l’abattant est muni d’une glace sur l’envers. ",
                    alt: "coffret noir inscrustations d'argent",
                    width: 1620,
                    height: 1620
                },
                {
                    type: "picture",
                    slidePath: "/images/projets/cuir/pochetteCuirLiseuseParArcadie32.jpg",
                    slideLegend: "",
                    alt: "coffret noir inscrustations d'argent",
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