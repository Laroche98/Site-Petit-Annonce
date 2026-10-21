import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, MapPin } from "lucide-react"
import { getCategory } from "@/data/categories"
import { getSampleListing, sampleListings } from "@/data/sample-listings"
import { buttonVariants } from "@/components/ui/button"
import { formatPosted, Price } from "@/lib/format"

type PageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return sampleListings.map((listing) => ({ id: listing.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const listing = getSampleListing((await params).id)
  if (!listing) return { title: "Annonce introuvable" }
  return {
    title: listing.title,
    description: `${listing.title} à ${listing.neighborhood}. Exemple d'annonce Babideal.`,
  }
}

export default async function ListingDetailPage({ params }: PageProps) {
  const listing = getSampleListing((await params).id)
  if (!listing) notFound()

  const category = getCategory(listing.category)
  const sold = listing.status === "sold"

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-5 pb-36 md:py-8 md:pb-10">
      <Link
        href={category ? `/annonces?categorie=${category.slug}` : "/annonces"}
        className="inline-flex items-center gap-1 text-sm font-medium text-navy"
      >
        <ChevronLeft className="size-4" aria-hidden />
        {category ? category.fullName : "Annonces"}
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)] md:gap-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className={sold ? "object-cover grayscale" : "object-cover"}
          />
          {sold ? (
            <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-navy">
              Vendu
            </span>
          ) : null}
        </div>

        <div className="flex flex-col">
          <h1 className="font-heading text-3xl leading-tight font-semibold tracking-[-0.03em] text-navy md:text-4xl">
            {listing.title}
          </h1>
          <Price amount={listing.price} suffix={listing.priceSuffix} size="detail" className="mt-4" />
          <p className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden />
            <span>
              {listing.neighborhood}, {listing.city}
            </span>
            <span aria-hidden>·</span>
            <span>{formatPosted(listing.createdAt)}</span>
            <span aria-hidden>·</span>
            <span>Exemple d&apos;annonce</span>
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
            <span className="grid size-11 place-items-center rounded-full bg-navy font-heading text-sm font-semibold text-white">
              {initials(listing.seller.name)}
            </span>
            <div>
              <p className="font-medium text-foreground">{listing.seller.name}</p>
              <p className="text-sm text-muted-foreground">
                {listing.isPro ? `Pro · ${listing.proLabel}` : "Particulier"}
                <span aria-hidden> · </span>
                {listing.seller.city}
              </p>
            </div>
          </div>

          <div className="mt-6 hidden md:block">
            <ContactButton sold={sold} />
          </div>
        </div>
      </div>

      <div className="mt-8 max-w-[68ch]">
        <h2 className="font-heading text-xl font-semibold tracking-[-0.03em] text-navy">
          Description
        </h2>
        <p className="mt-3 text-base leading-7 whitespace-pre-wrap text-foreground">
          {listing.description}
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-16 z-30 border-t border-border bg-white p-3 md:hidden">
        <ContactButton sold={sold} />
      </div>
    </article>
  )
}

function ContactButton({ sold }: { sold: boolean }) {
  if (sold) {
    return (
      <p className="flex h-12 items-center justify-center rounded-xl bg-muted text-sm font-semibold text-muted-foreground">
        Cette annonce est vendue
      </p>
    )
  }

  return (
    <Link
      href="/connexion"
      className={buttonVariants({
        variant: "coral",
        className: "h-12 w-full text-base",
      })}
    >
      Contacter le vendeur
    </Link>
  )
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
}
