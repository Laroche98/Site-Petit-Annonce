import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { FavoriteButton } from "@/components/listings/favorite-button"
import { Price } from "@/lib/format"
import type { ListingCardModel } from "@/lib/listings"

export function ListingCard({
  listing,
  priority = false,
}: {
  listing: ListingCardModel
  priority?: boolean
}) {
  const sold = listing.status === "sold"

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_14px_34px_-24px_rgba(15,23,42,0.55)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[:focus-visible]:ring-offset-2 motion-safe:transition-shadow motion-safe:md:hover:shadow-[0_22px_40px_-24px_rgba(15,23,42,0.6)]">
      <FavoriteButton
        title={listing.title}
        className="absolute top-2.5 right-2.5 z-10"
      />
      <Link href={`/annonces/${listing.id}`} className="flex h-full flex-col outline-none">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            className={cnSold(sold)}
          />
          {listing.isPro ? (
            <span className="absolute top-2.5 left-2.5 rounded-full bg-navy px-2 py-1 text-[11px] font-semibold text-white">
              Pro{listing.proLabel ? ` · ${listing.proLabel}` : ""}
            </span>
          ) : null}
          {sold ? (
            <span className="absolute inset-x-0 bottom-0 bg-navy/80 px-3 py-2 text-xs font-semibold text-white">
              Vendu
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-3">
          <Price amount={listing.price} suffix={listing.priceSuffix} />
          <h2 className="line-clamp-2 text-[15px] leading-snug font-medium tracking-[-0.02em] text-foreground">
            {listing.title}
          </h2>
          <p className="mt-auto flex items-center gap-1 pt-1 text-sm text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">
              {listing.neighborhood}
              <span aria-hidden> · </span>
              <span className="sr-only">, </span>
              {listing.postedLabel}
            </span>
          </p>
        </div>
      </Link>
    </article>
  )
}

function cnSold(sold: boolean) {
  return sold
    ? "object-cover grayscale"
    : "object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:md:group-hover:scale-[1.03]"
}
