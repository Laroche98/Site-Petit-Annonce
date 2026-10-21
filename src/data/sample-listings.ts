import type { CategorySlug } from "@/data/categories"

export type ListingStatus = "active" | "sold"

export type SampleListing = {
  id: string
  title: string
  description: string
  price: number
  priceSuffix?: string
  city: string
  neighborhood: string
  category: CategorySlug
  image: string
  imageAlt: string
  createdAt: string
  isPro: boolean
  proLabel?: string
  status: ListingStatus
  seller: {
    name: string
    city: string
  }
}

export const sampleListings: SampleListing[] = [
  {
    id: "citadine-cocody",
    title: "Citadine bleue, essence, entretien suivi",
    description:
      "Citadine essence, climatisation froide, pneus récents. Visible à Cocody sur rendez-vous, en journée.\n\nCarnet d'entretien disponible. Premier contact uniquement via la messagerie Babideal.",
    price: 4500000,
    city: "Abidjan",
    neighborhood: "Cocody",
    category: "automobile",
    image: "/listings/corolla.jpg",
    imageAlt: "Petite citadine bleue garée en extérieur, vue de trois quarts avant",
    createdAt: "2026-10-21T08:00:00.000Z",
    isPro: true,
    proLabel: "Auto",
    status: "active",
    seller: { name: "Koné Auto", city: "Cocody" },
  },
  {
    id: "appart-riviera",
    title: "Appartement 3 pièces meublé, Riviera",
    description:
      "Séjour lumineux, deux chambres, cuisine équipée. Résidence calme, gardien sur place, eau et électricité stables.\n\nLocation longue durée. Visite le samedi matin.",
    price: 250000,
    priceSuffix: "/ mois",
    city: "Abidjan",
    neighborhood: "Riviera",
    category: "immobilier",
    image: "/listings/appartement.jpg",
    imageAlt: "Salon clair avec canapé gris et grande fenêtre",
    createdAt: "2026-10-20T12:00:00.000Z",
    isPro: true,
    proLabel: "Immo",
    status: "active",
    seller: { name: "Résidences Lagune", city: "Cocody" },
  },
  {
    id: "iphone-marcory",
    title: "iPhone 13 128 Go, batterie 89 %",
    description:
      "Téléphone débloqué, écran sans fissure, vendu avec chargeur et coque. Facture d'achat conservée.\n\nRemise en main propre à Marcory, zone 4.",
    price: 220000,
    city: "Abidjan",
    neighborhood: "Marcory",
    category: "high-tech",
    image: "/listings/iphone.jpg",
    imageAlt: "Smartphone noir posé sur une surface claire",
    createdAt: "2026-10-21T10:30:00.000Z",
    isPro: false,
    status: "active",
    seller: { name: "Aya K.", city: "Marcory" },
  },
  {
    id: "robe-yopougon",
    title: "Robe de cérémonie, taille M",
    description:
      "Coupe droite, tissu jamais porté, étiquette encore en place. Idéale pour une cérémonie.\n\nEssayage possible à Yopougon Sicogi.",
    price: 18000,
    city: "Abidjan",
    neighborhood: "Yopougon",
    category: "mode",
    image: "/listings/robe.jpg",
    imageAlt: "Robe blanche légère suspendue, fond neutre",
    createdAt: "2026-10-18T09:00:00.000Z",
    isPro: false,
    status: "active",
    seller: { name: "Mariam D.", city: "Yopougon" },
  },
  {
    id: "moto-abobo",
    title: "Moto sportive, papiers à jour",
    description:
      "Moto entretenue, freins neufs, selle en bon état. Démarrage au kick et au démarreur.\n\nEssai accompagné dans le quartier, pas de départ seul.",
    price: 750000,
    city: "Abidjan",
    neighborhood: "Abobo",
    category: "automobile",
    image: "/listings/moto.jpg",
    imageAlt: "Moto noire de profil, phare avant visible",
    createdAt: "2026-10-19T15:00:00.000Z",
    isPro: true,
    proLabel: "Auto",
    status: "active",
    seller: { name: "Garage Abobo", city: "Abobo" },
  },
  {
    id: "canape-bingerville",
    title: "Canapé 3 places, tissu gris",
    description:
      "Canapé profond, peu servi, pieds bois. À récupérer à Bingerville, pas de livraison.",
    price: 95000,
    city: "Bingerville",
    neighborhood: "Bingerville",
    category: "maison",
    image: "/listings/canape.jpg",
    imageAlt: "Canapé gris dans un salon aux murs clairs",
    createdAt: "2026-10-15T11:00:00.000Z",
    isPro: false,
    status: "sold",
    seller: { name: "Jean-Marc B.", city: "Bingerville" },
  },
  {
    id: "terrain-bingerville",
    title: "Terrain 500 m², titre en cours",
    description:
      "Parcelle plane, accès piste, proche de la voie principale. Bornage prévu avec le géomètre.\n\nVisite sur place uniquement. Documents montrés lors du rendez-vous, jamais envoyés à l'avance.",
    price: 8500000,
    city: "Bingerville",
    neighborhood: "Bingerville",
    category: "immobilier",
    image: "/listings/terrain.jpg",
    imageAlt: "Étendue d'herbe verte sous un ciel clair",
    createdAt: "2026-10-12T10:00:00.000Z",
    isPro: true,
    proLabel: "Immo",
    status: "active",
    seller: { name: "Terres du Sud", city: "Bingerville" },
  },
  {
    id: "macbook-plateau",
    title: "MacBook Air 13 pouces, 2020",
    description:
      "8 Go de mémoire, 256 Go de stockage, chargeur d'origine. Quelques traces d'usage sur le capot, écran net.\n\nVisible au Plateau en fin de journée.",
    price: 450000,
    city: "Abidjan",
    neighborhood: "Plateau",
    category: "high-tech",
    image: "/listings/macbook.jpg",
    imageAlt: "Ordinateur portable ouvert sur un bureau en bois",
    createdAt: "2026-10-21T11:00:00.000Z",
    isPro: false,
    status: "active",
    seller: { name: "Chris A.", city: "Plateau" },
  },
]

export function getSampleListing(id: string) {
  return sampleListings.find((listing) => listing.id === id)
}
