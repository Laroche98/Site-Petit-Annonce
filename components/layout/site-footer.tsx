import Link from "next/link"

const links = [
  { href: "/annonces", label: "Annonces" },
  { href: "/publier", label: "Publier" },
  { href: "/messages", label: "Messages" },
  { href: "/connexion", label: "Connexion" },
]

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-white pb-24 md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold tracking-[-0.03em] text-navy">
            Babideal
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Petites annonces en Côte d&apos;Ivoire. Les échanges se font dans la
            messagerie, jamais par un paiement sur le site.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-navy">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
