import Link from "next/link"
import { Suspense } from "react"
import { Logo } from "@/components/layout/logo"
import { SearchField } from "@/components/listings/search-field"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
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
          <Link
            href="/connexion"
            className="inline-flex h-11 items-center rounded-xl px-3 text-sm font-semibold text-navy"
          >
            Connexion
          </Link>
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
