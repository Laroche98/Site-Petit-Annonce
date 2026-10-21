"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MessageCircle, Plus, Search, UserRound } from "lucide-react"
import { cn } from "cn"

const items = [
  { href: "/", label: "Accueil", icon: Home, match: (path: string) => path === "/" },
  {
    href: "/annonces",
    label: "Rechercher",
    icon: Search,
    match: (path: string) => path.startsWith("/annonces"),
  },
  {
    href: "/messages",
    label: "Messages",
    icon: MessageCircle,
    match: (path: string) => path.startsWith("/messages"),
  },
  {
    href: "/profil",
    label: "Profil",
    icon: UserRound,
    match: (path: string) => path.startsWith("/profil") || path.startsWith("/connexion"),
  },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white md:hidden"
    >
      <ul className="mx-auto grid h-16 max-w-lg grid-cols-5 items-end px-1 pb-[max(0.35rem,env(safe-area-inset-bottom))]">
        {items.slice(0, 2).map((item) => (
          <NavItem key={item.href} {...item} active={item.match(pathname)} />
        ))}
        <li className="flex items-end justify-center">
          <Link
            href="/publier"
            className="flex flex-col items-center gap-1 text-[11px] font-medium text-navy"
          >
            <span className="-mt-7 grid size-14 place-items-center rounded-full bg-coral text-foreground shadow-[0_10px_18px_-8px_rgba(15,23,42,0.55)]">
              <Plus className="size-6" aria-hidden />
            </span>
            Publier
          </Link>
        </li>
        {items.slice(2).map((item) => (
          <NavItem key={item.href} {...item} active={item.match(pathname)} />
        ))}
      </ul>
    </nav>
  )
}

function NavItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string
  label: string
  icon: typeof Home
  active: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex h-12 flex-col items-center justify-center gap-0.5 text-[11px] font-medium",
          active ? "text-navy" : "text-muted-foreground",
        )}
      >
        <Icon className="size-5" aria-hidden />
        {label}
      </Link>
    </li>
  )
}
