import type { Metadata } from "next"
import { PhaseNote } from "@/components/layout/phase-note"

export const metadata: Metadata = { title: "Messages" }

export default function MessagesPage() {
  return (
    <PhaseNote
      title="Messages"
      body="Les conversations resteront privées : seuls l'acheteur, le vendeur et l'administration pourront les lire. Aucun numéro n'est affiché sur les annonces."
    />
  )
}
