import Link from "next/link"
import Image from "next/image"

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
      { href: "#product", label: "Semua Produk" },
      // { href: "#faq", label: "FAQ" },
    ],
  },
  {
    name: "Kontak",
    links: [
      { href: "#contact", label: "Hubungi Kami" },
      { href: "https://wa.me/6281278704532", label: "WhatsApp" },
      { href: "mailto:support@enola.id", label: "Email" },
      // { href: "#product", label: "Lihat Produk" },
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
      // { href: "#", label: "Kebijakan Privasi" },
    ],
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl space-y-16 px-6 pt-32 pb-6">
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-full lg:col-span-3">
            <div className="flex items-center gap-6">
              <Link href="/" aria-label="go home">
                <Image
                  src="/img/enola-dark.svg"
                  alt=""
                  width={300}
                  height={300}
                  className="h-8 w-auto dark:brightness-0 dark:invert"
                />
              </Link>

              <Link
                href="https://pse.komdigi.go.id/tdpse-detail/20820"
                aria-label="pse"
              >
                <Image
                  src="/img/pse.png"
                  alt=""
                  width={300}
                  height={300}
                  className="h-6 w-auto dark:brightness-0 dark:invert"
                />
              </Link>

              <Link
                href="https://satusehat.kemkes.go.id/platform/system-rme-list/1047"
                aria-label="satusehat"
              >
                <Image
                  src="/img/satusehat.png"
                  alt=""
                  width={300}
                  height={300}
                  className="h-8 w-auto dark:brightness-0 dark:invert"
                />
              </Link>
            </div>
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
          <span className="block text-sm text-muted-foreground">
            &copy; 2026 Enola. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
