import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Enola Clinica",
    tagline: "Aplikasi RME untuk klinik",
    description:
      "Rawat jalan, farmasi, kasir, hingga rekam medis digital dalam satu platform yang terintegrasi.",
    href: "https://enola.up.railway.app",
    image: "/img/landing/tagihan.png",
    alt: "Tampilan aplikasi Enola Clinica",
  },
  {
    name: "Casemix Pintar",
    tagline: "Manajemen klaim BPJS berbasis AI",
    description:
      "Verifikasi otomatis, analisis kualitas klaim, dan monitoring dispute dengan bantuan Aria AI.",
    href: "https://casemixpintar.id",
    image: "/img/casemix/management.png",
    alt: "Tampilan aplikasi Casemix Pintar",
  },
]

export default function Features() {
  return (
    <section id="produk" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground">
          <span className="text-foreground">Dua produk, satu tujuan.</span>{" "}
          <br /> Digitalisasi layanan kesehatan Anda.
        </h2>
        <div className="mt-8 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="relative aspect-3/2 overflow-hidden ring-0 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-foreground/5">
              <div className="relative z-10 flex max-w-md flex-col gap-4 p-8">
                <p className="text-lg text-balance text-foreground/75">
                  <span className="font-medium text-foreground">
                    {products[0].name}.{" "}
                  </span>{" "}
                  {products[0].tagline}. {products[0].description}
                </p>
                <Link
                  href={products[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground duration-150 hover:text-primary"
                >
                  Kunjungi Platform <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <Image
                src={products[0].image}
                alt={products[0].alt}
                width={1207}
                height={929}
                className="absolute inset-0 size-full object-cover object-top opacity-40"
              />
            </Card>
          </div>

          <Card className="relative h-full min-h-96 overflow-hidden bg-zinc-100">
            <div className="relative z-10 flex max-w-sm flex-col gap-4 p-8">
              <p className="text-lg text-balance text-zinc-950/75 selection:bg-zinc-950 selection:text-white">
                <span className="font-medium text-zinc-950">
                  {products[1].name}.{" "}
                </span>{" "}
                {products[1].tagline}. {products[1].description}
              </p>
              <Link
                href={products[1].href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-zinc-950 duration-150 hover:text-primary"
              >
                Kunjungi Platform <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div
              aria-hidden
              className="absolute inset-x-8 bottom-0 z-1 mx-auto mt-auto h-2/3 w-10/12 origin-bottom scale-95 overflow-hidden rounded-t-[3rem] border border-black/5 bg-white shadow-xl ring shadow-black/6.5 ring-black/10"
            >
              <Image
                src={products[1].image}
                alt=""
                width={1207}
                height={929}
                className="size-full object-cover object-top"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
