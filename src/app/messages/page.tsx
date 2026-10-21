import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { PhaseNote } from "@/components/layout/phase-note"
import { getSessionUser } from "@/lib/auth/session"

export const metadata: Metadata = { title: "Messages" }

export default async function MessagesPage() {
  const user = await getSessionUser()
  if (!user) redirect("/connexion?next=/messages")

  return (
    <PhaseNote
      title="Messages"
      body="Les conversations resteront privées : seuls l'acheteur, le vendeur et l'administration pourront les lire. La messagerie arrive à l'étape suivante."
    />
  )
}
