import type { Metadata } from "next"
import { PhaseNote } from "@/components/layout/phase-note"

export const metadata: Metadata = { title: "Profil" }

export default function ProfilPage() {
  return (
    <PhaseNote
      title="Profil"
      body="Votre nom, votre ville et vos annonces seront ici. L'adresse e-mail et le téléphone ne seront pas publics."
    />
  )
}
