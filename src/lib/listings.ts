import { getCategory, type CategorySlug } from "@/data/categories"
import { sampleListings, type SampleListing } from "@/data/sample-listings"
import { formatPosted } from "@/lib/format"
import { LIMITS } from "@/lib/security/limits"
import { sanitizeText } from "@/lib/security/text"

export type ListingCardModel = SampleListing & {
  postedLabel: string
  categoryLabel: string
}

type SearchParams = Record<string, string | string[] | undefined>

function readParam(value: string | string[] | undefined) {
  const raw = Array.isArray(value) ? value[0] : value
  return sanitizeText(raw ?? "", LIMITS.title)
}

export type ListingFeed = {
  listings: ListingCardModel[]
  query: string
  category: string
  categoryUnknown: boolean
}

export function getListingFeed(params: SearchParams): ListingFeed {
  const query = readParam(params.q).toLowerCase()
  const category = readParam(params.categorie).toLowerCase()
  const known = !category || Boolean(getCategory(category))

  const listings = sampleListings
    .filter((listing) => {
      if (!known) return false
      if (category && listing.category !== (category as CategorySlug)) return false
      if (!query) return true
      const haystack = `${listing.title} ${listing.city} ${listing.neighborhood}`.toLowerCase()
      return haystack.includes(query)
    })
    .map((listing) => ({
      ...listing,
      postedLabel: formatPosted(listing.createdAt),
      categoryLabel: getCategory(listing.category)?.fullName ?? listing.category,
    }))

  return {
    listings,
    query: readParam(params.q),
    category,
    categoryUnknown: Boolean(category) && !known,
  }
}
