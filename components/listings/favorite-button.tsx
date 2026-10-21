"use client"

import { Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "cn"

export function FavoriteButton({
  title,
  className,
}: {
  title: string
  className?: string
}) {
  const [saved, setSaved] = useState(false)

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Retirer ${title} des favoris` : `Ajouter ${title} aux favoris`}
      onClick={() => setSaved((value) => !value)}
      className={cn(
        "grid size-9 place-items-center rounded-full bg-white text-navy shadow-[0_8px_16px_-10px_rgba(15,23,42,0.7)]",
        className,
      )}
    >
      <Heart
        className={cn("size-4", saved && "fill-coral-ink text-coral-ink")}
        aria-hidden
      />
    </button>
  )
}
