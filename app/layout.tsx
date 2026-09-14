import { Geist_Mono, Poppins } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Enola",
  description:
    "Teknologi untuk layanan kesehatan: aplikasi RME klinik dan manajemen klaim BPJS berbasis AI.",
  openGraph: {
    title: "Enola.id",
    description:
      "Teknologi untuk layanan kesehatan: aplikasi RME klinik dan manajemen klaim BPJS berbasis AI.",
    images: ["https://enola.id/img/enola-dark.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enola.id",
    description:
      "Teknologi untuk layanan kesehatan: aplikasi RME klinik dan manajemen klaim BPJS berbasis AI.",
    images: ["https://enola.id/img/enola-dark.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        poppins.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
