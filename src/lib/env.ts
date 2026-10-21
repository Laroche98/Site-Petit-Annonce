export function normalizeSupabaseUrl(value: string) {
  const url = new URL(value.trim())
  let path = url.pathname.replace(/\/+$/, "")
  if (path.endsWith("/rest/v1")) {
    path = path.slice(0, -"/rest/v1".length)
  }
  if (path === "" || path === "/") return url.origin
  return `${url.origin}${path}`
}

function readUrl(name: string, value: string | undefined) {
  if (!value || !URL.canParse(value)) {
    throw new Error(`Configuration manquante ou invalide : ${name}.`)
  }
  return normalizeSupabaseUrl(value)
}

function readSecret(name: string, value: string | undefined) {
  if (!value || value.length < 20) {
    throw new Error(`Configuration manquante ou invalide : ${name}.`)
  }
  return value
}

export function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return Boolean(url && URL.canParse(url) && normalizeSupabaseUrl(url) && anonKey && anonKey.length >= 20)
}

export function requirePublicSupabase() {
  return {
    url: readUrl("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
    anonKey: readSecret(
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    ),
  }
}

export function requireServiceRole() {
  return {
    url: readUrl("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL),
    serviceRoleKey: readSecret(
      "SUPABASE_SERVICE_ROLE_KEY",
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    ),
  }
}

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL
  if (value && URL.canParse(value)) return value
  return "http://localhost:3000"
}
