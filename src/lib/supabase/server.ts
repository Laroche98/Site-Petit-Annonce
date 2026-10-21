import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { requirePublicSupabase } from "@/lib/env"

export async function createClient() {
  const { url, anonKey } = requirePublicSupabase()
  const cookieStore = await cookies()

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
          })
        } catch {
          // Un Server Component ne peut pas écrire les cookies.
          // Le middleware rafraîchit la session.
        }
      },
    },
  })
}
