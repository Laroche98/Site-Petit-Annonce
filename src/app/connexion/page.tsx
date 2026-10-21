import type { Metadata } from "next"
import { PhaseNote } from "@/components/layout/phase-note"

export const metadata: Metadata = { title: "Connexion" }

export default function ConnexionPage() {
  return (
    <PhaseNote
      title="Connexion"
      body="L'inscription par e-mail arrive très bientôt. Vous pourrez ensuite publier et écrire aux vendeurs. En attendant, le catalogue d'exemples reste ouvert."
    />
  )
}
