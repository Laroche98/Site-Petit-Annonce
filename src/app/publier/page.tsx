import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { PhaseNote } from "@/components/layout/phase-note"
import { getSessionUser } from "@/lib/auth/session"

export const metadata: Metadata = { title: "Publier une annonce" }

export default async function PublierPage() {
  const user = await getSessionUser()
  if (!user) redirect("/connexion?mode=inscription&next=/publier")

  return (
    <PhaseNote
      title="Publier une annonce"
      body="Votre compte est prêt. Le formulaire de publication, avec les photos, arrive à l'étape suivante. Ce sera gratuit pour les particuliers."
    />
  )
}
