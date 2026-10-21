import {
  Briefcase,
  Building2,
  Car,
  LayoutGrid,
  Shirt,
  Smartphone,
  Sofa,
  type LucideIcon,
} from "lucide-react"

export type CategorySlug =
  | "automobile"
  | "immobilier"
  | "high-tech"
  | "mode"
  | "maison"
  | "services"
  | "autres"

export const categories: {
  slug: CategorySlug
  label: string
  fullName: string
  icon: LucideIcon
}[] = [
  { slug: "automobile", label: "Auto", fullName: "Automobile", icon: Car },
  { slug: "immobilier", label: "Immo", fullName: "Immobilier", icon: Building2 },
  { slug: "high-tech", label: "High-tech", fullName: "Téléphones & High-Tech", icon: Smartphone },
  { slug: "mode", label: "Mode", fullName: "Mode & Beauté", icon: Shirt },
  { slug: "maison", label: "Maison", fullName: "Maison & Électroménager", icon: Sofa },
  { slug: "services", label: "Services", fullName: "Emploi & Services", icon: Briefcase },
  { slug: "autres", label: "Autres", fullName: "Autres", icon: LayoutGrid },
]

export const allCategoriesIcon = LayoutGrid

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}
