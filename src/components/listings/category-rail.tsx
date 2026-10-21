import Link from "next/link"
import { allCategoriesIcon, categories, getCategory, type CategorySlug } from "@/data/categories"
import { createClient } from "@/lib/supabase/server"
import { cn } from "cn"

async function loadCategories() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("categories")
      .select("slug, name")
      .eq("is_active", true)
      .order("order_index")

    if (error || !data?.length) return categories

    return data.map((row) => {
      const known = getCategory(row.slug)
      return {
        slug: row.slug as CategorySlug,
        label: known?.label ?? row.name,
        fullName: row.name,
        icon: known?.icon ?? allCategoriesIcon,
      }
    })
  } catch {
    return categories
  }
}

export async function CategoryRail({
  active,
  query,
}: {
  active: string
  query: string
}) {
  const categories = await loadCategories()
  const items = [
    { slug: "", label: "Tout", fullName: "Toutes les catégories", icon: allCategoriesIcon },
    ...categories,
  ]

  return (
    <nav aria-label="Catégories">
      <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const selected = item.slug === active
          const params = new URLSearchParams()
          if (query) params.set("q", query)
          if (item.slug) params.set("categorie", item.slug)
          const href = params.size ? `/annonces?${params.toString()}` : "/annonces"
          const Icon = item.icon

          return (
            <li key={item.slug || "tout"} className="shrink-0">
              <Link
                href={href}
                aria-current={selected ? "true" : undefined}
                title={item.fullName}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-sm font-medium",
                  selected
                    ? "border-navy bg-navy text-white"
                    : "border-border bg-white text-foreground",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
