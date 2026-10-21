import type { Metadata } from "next"
import { ListingBrowser } from "@/components/listings/listing-browser"
import { getListingFeed } from "@/lib/listings"

export const metadata: Metadata = {
  title: "Annonces",
  description: "Parcourez les petites annonces en Côte d'Ivoire.",
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function AnnoncesPage({ searchParams }: PageProps) {
  const feed = getListingFeed(await searchParams)
  return <ListingBrowser feed={feed} />
}
