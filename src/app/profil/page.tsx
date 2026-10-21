import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { signOut } from "@/lib/auth/actions"
import { getSessionUser } from "@/lib/auth/session"
import { ProfileForm } from "@/components/profile/profile-form"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = { title: "Profil" }

export default async function ProfilPage() {
  const user = await getSessionUser()
  if (!user) redirect("/connexion?next=/profil")

  const supabase = await createClient()
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, city, bio, is_banned")
    .eq("id", user.id)
    .maybeSingle()

  if (profile?.is_banned) {
    return (
      <section className="mx-auto flex min-h-[50vh] max-w-lg flex-col justify-center px-5 py-16">
        <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-navy">
          Compte suspendu
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Ce compte ne peut plus publier ni écrire. Écrivez au support si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
        </p>
        <form action={signOut} className="mt-8">
          <button type="submit" className="h-11 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground">
            Se déconnecter
          </button>
        </form>
      </section>
    )
  }

  return (
    <section className="mx-auto w-full max-w-3xl px-5 py-10 md:py-16">
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-navy">
        Profil
      </h1>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
        Votre nom et votre ville apparaissent sur vos annonces. L&apos;e-mail n&apos;est pas public.
      </p>
      <ProfileForm
        email={user.email ?? ""}
        defaultValues={{
          fullName: profile?.full_name ?? "",
          city: profile?.city ?? "",
          bio: profile?.bio ?? "",
        }}
      />
      <form action={signOut} className="mt-6">
        <button type="submit" className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
          Se déconnecter
        </button>
      </form>
    </section>
  )
}
