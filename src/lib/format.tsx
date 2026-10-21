import { cn } from "cn"

type PriceProps = {
  amount: number
  suffix?: string
  className?: string
  size?: "card" | "detail"
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("fr-FR")
    .format(amount)
    .replace(/[\u202f\u00a0]/g, "\u00a0")
}

const REFERENCE = new Date("2026-10-21T12:00:00.000Z")

export function formatPosted(iso: string, now = REFERENCE) {
  const date = new Date(iso)
  const hours = Math.round((now.getTime() - date.getTime()) / 36e5)

  if (hours < 1) return "À l'instant"
  if (hours < 24) return `Il y a ${hours} h`

  const days = Math.round(hours / 24)
  if (days === 1) return "Hier"
  if (days < 7) return `Il y a ${days} jours`

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "short",
    timeZone: "Africa/Abidjan",
  }).format(date)
}

export function Price({ amount, suffix, className, size = "card" }: PriceProps) {
  return (
    <p
      className={cn(
        "font-heading font-semibold tracking-[-0.03em] text-coral-ink tabular-nums",
        size === "card" ? "text-[0.95rem] sm:text-lg" : "text-3xl md:text-4xl",
        className,
      )}
    >
      <span>{formatPrice(amount)}</span>
      <span
        className={cn(
          "ml-1 font-semibold tracking-normal",
          size === "card" ? "text-[0.68rem]" : "text-sm",
        )}
      >
        FCFA
      </span>
      {suffix ? (
        <span
          className={cn(
            "ml-1 font-medium tracking-normal",
            size === "card" ? "text-[0.68rem]" : "text-sm",
          )}
        >
          {suffix}
        </span>
      ) : null}
    </p>
  )
}
