import Link from "next/link"
import { Suspense } from "react"
import { CategoryRail } from "@/components/listings/category-rail"
import { ListingCard } from "@/components/listings/listing-card"
import { SearchField } from "@/components/listings/search-field"
import type { ListingFeed } from "@/lib/listings"

export function ListingBrowser({
  feed,
  showIntro = false,
}: {
  feed: ListingFeed
  showIntro?: boolean
}) {
  const countLabel =
    feed.listings.length === 1
      ? "1 annonce"
      : `${feed.listings.length} annonces`

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:py-10">
      {showIntro ? (
        <div className="max-w-2xl">
          <h1 className="font-heading text-[2rem] leading-[1.08] font-semibold tracking-[-0.03em] text-navy md:text-5xl">
            Achetez et vendez près de chez vous.
          </h1>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Petites annonces en Côte d&apos;Ivoire, gratuites pour les particuliers.
            Les cartes ci-dessous sont des exemples, en attendant les vraies publications.
          </p>
        </div>
      ) : (
        <h1 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-navy">
          Annonces
        </h1>
      )}

      <div className="mt-6 md:hidden">
        <Suspense fallback={<div className="h-12 rounded-2xl bg-white" />}>
          <SearchField />
        </Suspense>
      </div>

      <div className="mt-5">
        <CategoryRail active={feed.category} query={feed.query} />
      </div>

      {feed.listings.length > 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          {feed.query ? `${countLabel} pour « ${feed.query} »` : countLabel}
        </p>
      ) : null}

      {feed.listings.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-border bg-white px-5 py-12 text-center">
          <p className="font-heading text-xl font-semibold text-navy">
            {feed.categoryUnknown
              ? "Cette catégorie n'existe pas."
              : "Aucune annonce pour cette recherche."}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Essayez un autre mot, ou revenez à tout le catalogue.
          </p>
          <Link
            href="/annonces"
            className="mt-5 inline-flex h-11 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
          >
            Voir toutes les annonces
          </Link>
        </div>
      ) : (
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {feed.listings.map((listing, index) => (
            <li key={listing.id}>
              <ListingCard listing={listing} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
