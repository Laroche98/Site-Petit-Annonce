"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { mapAuthError } from "@/lib/auth/errors"
import { safeNextPath } from "@/lib/auth/redirect"
import { getSiteUrl } from "@/lib/env"
import { LIMITS } from "@/lib/security/limits"
import { sanitizeText } from "@/lib/security/text"
import { createClient } from "@/lib/supabase/server"
import { profileSchema, signInSchema, signUpSchema } from "@/lib/validation/auth"

export async function signIn(input: unknown, nextPath: string) {
  const parsed = signInSchema.safeParse(input)
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Vérifiez les champs." }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  })

  if (error) return { error: mapAuthError(error.message, "signin", error.code) }
  redirect(safeNextPath(nextPath))
}

export async function signUp(input: unknown) {
  const parsed = signUpSchema.safeParse(input)
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Vérifiez les champs." }
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        full_name: sanitizeText(parsed.data.fullName, LIMITS.title),
        city: sanitizeText(parsed.data.city, LIMITS.city),
      },
      emailRedirectTo: `${getSiteUrl()}/auth/callback`,
    },
  })

  if (error) return { error: mapAuthError(error.message, "signup", error.code) }
  if (data.session) redirect("/")
  return {
    confirmEmail: parsed.data.email,
  }
}

export async function signInWithGoogle(nextPath: string) {
  const supabase = await createClient()
  const next = safeNextPath(nextPath)
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${getSiteUrl()}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  })

  if (error || !data.url) {
    return { error: "Google n'est pas activé sur ce projet pour le moment." }
  }

  redirect(data.url)
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect("/")
}

export async function updateProfile(input: unknown) {
  const parsed = profileSchema.safeParse(input)
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Vérifiez les champs." }
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { error: "Connectez-vous pour enregistrer votre profil." }

  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: sanitizeText(parsed.data.fullName, 80),
      city: sanitizeText(parsed.data.city, LIMITS.city),
      bio: sanitizeText(parsed.data.bio, LIMITS.bio),
    })
    .eq("id", user.id)

  if (error) return { error: "Le profil n'a pas pu être enregistré." }

  revalidatePath("/profil")
  revalidatePath("/")
  return { message: "Profil enregistré." }
}
