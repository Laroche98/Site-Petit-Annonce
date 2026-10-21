"use client"

import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { updateProfile } from "@/lib/auth/actions"
import { profileSchema, type ProfileValues } from "@/lib/validation/auth"

const fieldClass =
  "h-12 w-full rounded-xl border border-border bg-white px-3 text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary"

export function ProfileForm({
  email,
  defaultValues,
}: {
  email: string
  defaultValues: ProfileValues
}) {
  const [serverError, setServerError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues,
  })

  return (
    <form
      className="mt-8 flex max-w-lg flex-col gap-4"
      onSubmit={form.handleSubmit((values) => {
        setServerError(null)
        setMessage(null)
        startTransition(async () => {
          const result = await updateProfile(values)
          if (result.error) setServerError(result.error)
          if (result.message) setMessage(result.message)
        })
      })}
    >
      <p className="text-sm text-muted-foreground">
        E-mail privé : <span className="font-medium text-foreground">{email}</span>
      </p>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
        Nom
        <input className={fieldClass} {...form.register("fullName")} />
        {form.formState.errors.fullName ? (
          <span className="font-normal text-destructive">{form.formState.errors.fullName.message}</span>
        ) : null}
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
        Ville
        <input className={fieldClass} {...form.register("city")} />
        {form.formState.errors.city ? (
          <span className="font-normal text-destructive">{form.formState.errors.city.message}</span>
        ) : null}
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-navy">
        Bio
        <textarea
          rows={4}
          className="w-full rounded-xl border border-border bg-white px-3 py-3 text-base text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary"
          {...form.register("bio")}
        />
        {form.formState.errors.bio ? (
          <span className="font-normal text-destructive">{form.formState.errors.bio.message}</span>
        ) : null}
      </label>
      {serverError ? <p className="text-sm text-destructive" role="alert">{serverError}</p> : null}
      {message ? <p className="text-sm text-navy" role="status">{message}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="h-12 rounded-xl bg-primary text-sm font-semibold text-primary-foreground disabled:opacity-60"
      >
        {pending ? "Enregistrement…" : "Enregistrer"}
      </button>
    </form>
  )
}
