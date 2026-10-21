import "server-only"
import { createClient } from "@supabase/supabase-js"
import { requireServiceRole } from "@/lib/env"

export function createAdminClient() {
  const { url, serviceRoleKey } = requireServiceRole()

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}
