import type { Metadata } from "next"
import { PhaseNote } from "@/components/layout/phase-note"

export const metadata: Metadata = { title: "Publier une annonce" }

export default function PublierPage() {
  return (
    <PhaseNote
      title="Publier une annonce"
      body="La publication s'ouvrira avec la connexion. Elle restera gratuite pour les particuliers. Les photos seront limitées à dix images, aux formats JPG, PNG ou WebP."
    />
  )
}
