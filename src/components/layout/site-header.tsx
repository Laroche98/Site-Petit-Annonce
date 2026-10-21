import Link from "next/link"
import { Suspense } from "react"
import { Logo } from "@/components/layout/logo"
import { SearchField } from "@/components/listings/search-field"
import { signOut } from "@/lib/auth/actions"
import { createClient } from "@/lib/supabase/server"
import { buttonVariants } from "@/components/ui/button"

export async function SiteHeader() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let label = "Profil"
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", user.id)
      .maybeSingle()
    label = profile?.full_name?.split(" ")[0] || "Profil"
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4">
        <Logo />
        <div className="hidden min-w-0 flex-1 md:block">
          <Suspense fallback={<div className="h-12 rounded-2xl bg-muted" />}>
            <SearchField />
          </Suspense>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {user ? (
            <>
              <Link
                href="/profil"
                className="inline-flex h-11 max-w-36 items-center truncate rounded-xl px-3 text-sm font-semibold text-navy"
              >
                {label}
              </Link>
              <form action={signOut} className="hidden sm:block">
                <button type="submit" className="h-11 rounded-xl px-3 text-sm font-semibold text-muted-foreground">
                  Sortir
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/connexion"
              className="inline-flex h-11 items-center rounded-xl px-3 text-sm font-semibold text-navy"
            >
              Connexion
            </Link>
          )}
          <div className="hidden md:block">
            <Link
              href="/publier"
              className={buttonVariants({
                variant: "coral",
                className: "h-11 px-4",
              })}
            >
              Publier
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
