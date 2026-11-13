// Coordonnées ajustées pour tomber sur les sommets du dessin SVG
const MAP_SLOTS = [
  { x: 38, y: 35 }, // Slot 1 - Vallée Est du premier massif
  { x: 58, y: 21 }, // Slot 2 - Versant central
  { x: 78, y: 30 }, // Slot 3 - Plateau Est
  { x: 20, y: 28 }, // Slot 4 - Contrefort Ouest
  { x: 68, y: 32 }, // Slot 5 - Plaine haute
];

export const circuitsData = [
  {
    id: "monts-celestes-10j",
    title: "Chevauchée aux Monts Célestes",
    image: "/images/expeditions/expedition-1-main.jpg",
    duration: "10 jours",
    difficulty: "Modéré",
    difficultyColor: "text-orange-600",
    price: "1 890",
    description: "Exploration des sommets majestueux du Tian Shan.",
    longDescription: "Une aventure exceptionnelle à travers les Monts Célestes, avec des paysages à couper le souffle et une immersion totale dans la nature sauvage kirghize.",
    pdfUrl: "/pdfs/Chevauchée aux Monts Célestes - 10 jours.pdf",
    gallery: [
      "/images/expeditions/expedition-1-gallery-1.jpg",
      "/images/expeditions/expedition-1-gallery-2.jpg"
    ]
  },
  {
    id: "chatkal",
    title: "Randonnées équestres Sary-Chelek vers Montagnes de Chaktal",
    image: "/images/expeditions/expedition-2-main.jpg",
    duration: "12 jours",
    difficulty: "Sportif",
    difficultyColor: "text-red-600",
    price: "2 150",
    description: "Trek équestre dans la réserve naturelle de Chatkal.",
    longDescription: "Découvrez la beauté préservée de la réserve de Chatkal, ses forêts de noyers sauvages et ses vallées isolées. Une expérience unique loin des sentiers battus.",
    pdfUrl: "/pdfs/Randonnée équestre Sary-Chelek vers montagnes de Chatkal - 12 jours.pdf",
    gallery: [
      "/images/expeditions/expedition-2-gallery-1.jpg",
      "/images/expeditions/expedition-2-gallery-2.jpg"
    ]
  },
  {
    id: "monts-celestes-17j",
    title: "Montagnes Célestes - Grande Traversée",
    image: "/images/expeditions/expedition-3-main.jpg",
    duration: "17 jours",
    difficulty: "Expert",
    difficultyColor: "text-red-700",
    price: "2 890",
    description: "La grande traversée des montagnes célestes.",
    longDescription: "L'expédition ultime pour les cavaliers expérimentés. Traversez l'intégralité de la chaîne du Tian Shan sur 17 jours d'aventure intense.",
    pdfUrl: "/pdfs/Chevauchées dans les montagnes célestes - 17 jours.pdf",
    gallery: [
      "/images/expeditions/expedition-3-gallery-1.jpg",
      "/images/expeditions/expedition-3-gallery-2.jpg"
    ]
  },
  {
    id: "grand-tour",
    title: "Grand Tour Nord et Sud",
    image: "/images/expeditions/expedition-4-main.jpg",
    duration: "19 jours",
    difficulty: "Expert",
    difficultyColor: "text-red-700",
    price: "3 290",
    description: "Le circuit complet du Kirghizistan à cheval.",
    longDescription: "L'expédition la plus complète : du nord au sud du Kirghizistan, traversez tous les paysages emblématiques du pays. Lacs d'altitude, cols à 3500m, yourtes nomades et hospitalité kirghize.",
    pdfUrl: "/pdfs/Grand Tour Nord et Sud - 19 jours.pdf",
    gallery: [
      "/images/expeditions/expedition-4-gallery-1.jpg",
      "/images/expeditions/expedition-4-gallery-2.jpg"
    ]
  }
];

export const getExpeditionsWithCoords = () => {
  return circuitsData.map((circuit, index) => ({
    ...circuit,
    mapX: MAP_SLOTS[index]?.x || 50,
    mapY: MAP_SLOTS[index]?.y || 50,
  }));
};