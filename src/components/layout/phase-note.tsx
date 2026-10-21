import Link from "next/link"

export function PhaseNote({
  title,
  body,
}: {
  title: string
  body: string
}) {
  return (
    <section className="mx-auto flex min-h-[58vh] w-full max-w-lg flex-col justify-center px-5 py-16">
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-navy">
        {title}
      </h1>
      <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
      <Link
        href="/annonces"
        className="mt-8 inline-flex h-11 w-fit items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
      >
        Voir les annonces
      </Link>
    </section>
  )
}
