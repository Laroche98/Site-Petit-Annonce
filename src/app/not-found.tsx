import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page introuvable",
}

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[58vh] max-w-lg flex-col justify-center px-5 py-16">
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-navy">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Le lien est peut-être ancien. Le catalogue est toujours sur l&apos;accueil.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
      >
        Retour à l&apos;accueil
      </Link>
    </section>
  )
}
