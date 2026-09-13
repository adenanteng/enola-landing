import Link from "next/link"
import { Logo } from "@/components/logo"
import { Gemini } from "@/components/ui/svgs/gemini"
import { ClaudeAI } from "@/components/ui/svgs/claude-ai"
import { Openai } from "@/components/ui/svgs/openai"
import { Button } from "@/components/ui/button"

const footerLinks = [
  {
    name: "Produk",
    links: [
      {
        href: "https://enola.up.railway.app",
        label: "Enola Clinica",
      },
      {
        href: "https://casemixpintar.id",
        label: "Casemix Pintar",
      },
      { href: "#produk", label: "Semua Produk" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    name: "Kontak",
    links: [
      { href: "#contact", label: "Hubungi Kami" },
      { href: "https://wa.me/6281278704532", label: "WhatsApp" },
      { href: "mailto:arliyans@enola.id", label: "Email" },
      { href: "#produk", label: "Lihat Produk" },
    ],
  },
  {
    name: "Legal",
    links: [
      {
        href: "https://pse.komdigi.go.id/tdpse-detail/20820",
        label: "PSE Komdigi",
      },
      {
        href: "https://satusehat.kemkes.go.id/platform/system-rme-list/1047",
        label: "RME Terdaftar Kemkes",
      },
      { href: "#", label: "Kebijakan Privasi" },
    ],
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl space-y-16 px-6 pt-32 pb-6">
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-3">
            <Link href="/" aria-label="go home">
              <span className="inline-flex items-center rounded-xl bg-foreground p-2 text-background">
                <Logo />
              </span>
            </Link>
          </div>

          {footerLinks.map((linksGroup, index) => (
            <div key={index}>
              <span className="text-sm text-foreground">{linksGroup.name}</span>
              <ul className="mt-4 list-inside space-y-4">
                {linksGroup.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground duration-150 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 grid gap-x-3 gap-y-6 border-t pt-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">
              Dapatkan ringkasan AI dari halaman ini
            </p>
            <div className="mt-2 -ml-2.5 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                nativeButton={false}
                render={
                  <Link href="#" aria-label="Claude AI">
                    <ClaudeAI />
                  </Link>
                }
              />
              <Button
                variant="ghost"
                size="icon"
                nativeButton={false}
                render={
                  <Link href="#" aria-label="OpenAI">
                    <Openai />
                  </Link>
                }
              />
              <Button
                variant="ghost"
                size="icon"
                nativeButton={false}
                render={
                  <Link href="#" aria-label="Gemini">
                    <Gemini />
                  </Link>
                }
              />
            </div>
          </div>
          <span className="block text-sm text-muted-foreground">
            &copy; 2026 Enola. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
