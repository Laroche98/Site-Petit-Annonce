import type { Metadata, Viewport } from "next"
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google"
import { SiteShell } from "@/components/layout/site-shell"
import { getSiteUrl } from "@/lib/env"
import "./globals.css"

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
})

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Babideal — Petites annonces en Côte d'Ivoire",
    template: "%s — Babideal",
  },
  description:
    "Achetez et vendez près de chez vous. Gratuit pour les particuliers, en Côte d'Ivoire.",
  applicationName: "Babideal",
  openGraph: {
    title: "Babideal — Petites annonces en Côte d'Ivoire",
    description:
      "Achetez et vendez près de chez vous. Gratuit pour les particuliers.",
    locale: "fr_CI",
    type: "website",
    url: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: "#0F4C81",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
