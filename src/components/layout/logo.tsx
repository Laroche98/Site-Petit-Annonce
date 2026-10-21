import Link from "next/link"

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-lg">
      <span className="grid size-9 place-items-center rounded-xl bg-navy text-white shadow-[0_8px_16px_-10px_rgba(11,61,92,0.8)]">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
          <rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor" />
          <rect x="3" y="18" width="10" height="2.2" rx="1.1" fill="#ff6b35" />
        </svg>
      </span>
      <span className="font-heading text-lg font-semibold tracking-[-0.03em] text-navy">
        Babideal
        {compact ? null : (
          <span className="sr-only">, petites annonces en Côte d’Ivoire</span>
        )}
      </span>
    </Link>
  )
}
