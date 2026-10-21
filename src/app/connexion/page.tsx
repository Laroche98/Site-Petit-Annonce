import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { AuthForm } from "@/components/auth/auth-form"
import { safeNextPath } from "@/lib/auth/redirect"
import { getSessionUser } from "@/lib/auth/session"

export const metadata: Metadata = { title: "Connexion" }

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function readParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

export default async function ConnexionPage({ searchParams }: PageProps) {
  const params = await searchParams
  const nextPath = safeNextPath(readParam(params.next))
  const user = await getSessionUser()
  if (user) redirect(nextPath)

  const mode = readParam(params.mode) === "inscription" ? "inscription" : "connexion"

  return (
    <AuthForm
      mode={mode}
      nextPath={nextPath}
      lienInvalide={readParam(params.erreur) === "lien"}
    />
  )
}
