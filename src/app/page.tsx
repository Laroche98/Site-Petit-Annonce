import { ListingBrowser } from "@/components/listings/listing-browser"
import { getListingFeed } from "@/lib/listings"

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function HomePage({ searchParams }: PageProps) {
  const feed = getListingFeed(await searchParams)
  return <ListingBrowser feed={feed} showIntro />
}
