"use client"

import Link from "next/link"
import { useState, useTransition, type ReactNode } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signIn, signInWithGoogle, signUp } from "@/lib/auth/actions"
import { signInSchema, signUpSchema, type SignInValues, type SignUpValues } from "@/lib/validation/auth"

const fieldClass =
  "h-12 w-full rounded-xl border border-border bg-white px-3 text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"

export function AuthForm({
  mode,
  nextPath,
  lienInvalide,
}: {
  mode: "connexion" | "inscription"
  nextPath: string
  lienInvalide: boolean
}) {
  return (
    <section className="mx-auto flex w-full max-w-md flex-col px-5 py-10 md:py-16">
      <h1 className="font-heading text-4xl font-semibold tracking-[-0.03em] text-navy">
        {mode === "inscription" ? "Créer un compte" : "Connexion"}
      </h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        {mode === "inscription"
          ? "Gratuit pour les particuliers. Votre e-mail reste privé."
          : "Retrouvez vos annonces et vos messages."}
      </p>

      <div className="mt-6 grid grid-cols-2 rounded-xl bg-muted p-1 text-sm font-semibold">
        <ModeLink href={`/connexion?next=${encodeURIComponent(nextPath)}`} active={mode === "connexion"}>
          Connexion
        </ModeLink>
        <ModeLink
          href={`/connexion?mode=inscription&next=${encodeURIComponent(nextPath)}`}
          active={mode === "inscription"}
        >
          Inscription
        </ModeLink>
      </div>

      {lienInvalide ? (
        <p className="mt-4 text-sm text-destructive" role="alert">
          Ce lien n&apos;est plus valable. Demandez-en un nouveau en vous connectant.
        </p>
      ) : null}

      {mode === "inscription" ? (
        <SignUpForm key="inscription" />
      ) : (
        <SignInForm key="connexion" nextPath={nextPath} />
      )}

      <GoogleButton nextPath={nextPath} />
    </section>
  )
}

function ModeLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: string
}) {
  return (
    <Link
      href={href}
      className={active ? "rounded-lg bg-white py-2 text-center text-navy" : "py-2 text-center text-muted-foreground"}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  )
}

function SignInForm({ nextPath }: { nextPath: string }) {
  const [serverError, setServerError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  })

  return (
    <form
      className="mt-6 flex flex-col gap-4"
      onSubmit={form.handleSubmit((values) => {
        setServerError(null)
        startTransition(async () => {
          const result = await signIn(values, nextPath)
          if (result?.error) setServerError(result.error)
        })
      })}
    >
      <Field label="E-mail" error={form.formState.errors.email?.message}>
        <input type="email" autoComplete="email" className={fieldClass} {...form.register("email")} />
      </Field>
      <Field label="Mot de passe" error={form.formState.errors.password?.message}>
        <input type="password" autoComplete="current-password" className={fieldClass} {...form.register("password")} />
      </Field>
      {serverError ? <p className="text-sm text-destructive" role="alert">{serverError}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="h-12 rounded-xl bg-primary text-sm font-semibold text-primary-foreground disabled:opacity-60"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  )
}

function SignUpForm() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [confirmEmail, setConfirmEmail] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", city: "", email: "", password: "" },
  })

  if (confirmEmail) {
    return (
      <div className="mt-6 rounded-2xl border border-border bg-white p-5" role="status">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-navy">
          Confirmez votre e-mail
        </h2>
        <p className="mt-3 text-base leading-relaxed text-foreground">
          Le compte est créé. Ouvrez le lien envoyé à{" "}
          <span className="font-semibold">{confirmEmail}</span>, puis revenez vous connecter.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Regardez les courriers indésirables. Sans ce lien, la connexion est refusée.
        </p>
        <Link
          href="/connexion"
          className="mt-5 inline-flex h-12 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
        >
          J&apos;ai confirmé, me connecter
        </Link>
      </div>
    )
  }

  return (
    <form
      className="mt-6 flex flex-col gap-4"
      onSubmit={form.handleSubmit((values) => {
        setServerError(null)
        startTransition(async () => {
          const result = await signUp(values)
          if (result?.error) setServerError(result.error)
          if (result?.confirmEmail) setConfirmEmail(result.confirmEmail)
        })
      })}
    >
      <Field label="Nom" error={form.formState.errors.fullName?.message}>
        <input autoComplete="name" className={fieldClass} {...form.register("fullName")} />
      </Field>
      <Field label="Ville" error={form.formState.errors.city?.message}>
        <input autoComplete="address-level2" placeholder="Abidjan" className={fieldClass} {...form.register("city")} />
      </Field>
      <Field label="E-mail" error={form.formState.errors.email?.message}>
        <input type="email" autoComplete="email" className={fieldClass} {...form.register("email")} />
      </Field>
      <Field label="Mot de passe" error={form.formState.errors.password?.message}>
        <input type="password" autoComplete="new-password" className={fieldClass} {...form.register("password")} />
      </Field>
      {serverError ? <p className="text-sm text-destructive" role="alert">{serverError}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="h-12 rounded-xl bg-coral text-sm font-semibold text-foreground disabled:opacity-60"
      >
        {pending ? "Création…" : "Créer mon compte"}
      </button>
    </form>
  )
}

function GoogleButton({ nextPath }: { nextPath: string }) {
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  return (
    <div className="mt-4">
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          setError(null)
          startTransition(async () => {
            const result = await signInWithGoogle(nextPath)
            if (result?.error) setError(result.error)
          })
        }}
        className="h-12 w-full rounded-xl border border-border bg-white text-sm font-semibold text-navy disabled:opacity-60"
      >
        {pending ? "Redirection…" : "Continuer avec Google"}
      </button>
      {error ? <p className="mt-2 text-sm text-destructive" role="alert">{error}</p> : null}
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
      {label}
      {children}
      {error ? <span className="font-normal text-destructive">{error}</span> : null}
    </label>
  )
}
