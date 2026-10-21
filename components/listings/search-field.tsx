"use client"

import { Search } from "lucide-react"
import { useId } from "react"
import { useSearchParams } from "next/navigation"
import { cn } from "cn"

export function SearchField({ className }: { className?: string }) {
  const params = useSearchParams()
  const id = useId()
  const query = params.get("q") ?? ""
  const category = params.get("categorie") ?? ""

  return (
    <form
      action="/annonces"
      role="search"
      className={cn(
        "flex h-12 items-center gap-2 rounded-2xl border border-border bg-white pr-1.5 pl-3 shadow-[0_12px_28px_-18px_rgba(15,76,129,0.65)]",
        className,
      )}
    >
      <Search className="size-4 shrink-0 text-primary" aria-hidden />
      <label htmlFor={id} className="sr-only">
        Rechercher une annonce
      </label>
      <input
        id={id}
        key={query}
        name="q"
        defaultValue={query}
        placeholder="Voiture, téléphone, quartier…"
        autoComplete="off"
        maxLength={80}
        className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
      />
      {category ? <input type="hidden" name="categorie" value={category} /> : null}
      <button
        type="submit"
        aria-label="Rechercher"
        className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground sm:hidden"
      >
        <Search className="size-4" aria-hidden />
      </button>
      <button
        type="submit"
        className="hidden h-9 shrink-0 items-center rounded-xl bg-primary px-3 text-sm font-semibold text-primary-foreground sm:inline-flex"
      >
        Rechercher
      </button>
    </form>
  )
}
