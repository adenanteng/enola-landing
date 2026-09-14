import { Card } from "@/components/ui/card"
import { BorderBeam } from "@/components/ui/border-beam"
import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/ui/motion-primitives/reveal"
import { ArrowUpRight } from "lucide-react"
import {
  IconBell,
  IconClock,
  IconFilter,
  IconSearch,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Casemix Pintar",
    tagline: "Manajemen klaim BPJS berbasis AI",
    description:
      "Verifikasi otomatis, analisis kualitas klaim, dan monitoring dispute dengan bantuan Aria AI.",
    href: "https://casemixpintar.id",
  },
  {
    name: "Enola Clinica",
    tagline: "Aplikasi RME untuk klinik",
    description:
      "Rawat jalan, farmasi, kasir, hingga rekam medis digital dalam satu platform yang terintegrasi.",
    href: "https://enola.up.railway.app",
  },
]

const clinicaStats = [
  {
    label: "Kunjungan Rawat Jalan",
    value: "134",
    accent: "text-emerald-600 dark:text-emerald-400",
    bar: "bg-emerald-500",
  },
  {
    label: "Kunjungan Rawat Inap",
    value: "56",
    accent: "text-blue-600 dark:text-blue-400",
    bar: "bg-blue-500",
  },
  {
    label: "Pasien IGD",
    value: "3",
    accent: "text-red-600 dark:text-red-400",
    bar: "bg-red-500",
  },
  {
    label: "Kunjungan Kecantikan",
    value: "5",
    accent: "text-blue-600 dark:text-blue-400",
    bar: "bg-blue-500",
  },
]

function ClinicaIllustration() {
  return (
    <div aria-hidden className="p-4 sm:p-5">
      <div className="flex items-center gap-2.5">
        <div className="flex w-4 flex-col gap-1">
          <span className="h-0.5 rounded-full bg-foreground" />
          <span className="h-0.5 rounded-full bg-foreground" />
        </div>
        <div className="flex h-7 flex-1 items-center gap-1.5 rounded-full border bg-background px-2.5">
          <IconSearch className="size-3 shrink-0 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Cari</span>
          <span className="ml-auto rounded-md bg-muted px-1.5 py-0.5 text-[8px] font-medium text-muted-foreground">
            CTRL+S
          </span>
        </div>
        <IconBell className="size-3.5 shrink-0 text-muted-foreground" />
        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background">
          A
        </div>
      </div>

      <div className="mt-4">
        <span className="box-decoration-clone px-1 py-0.5 text-sm font-bold text-foreground">
          Selamat Pagi Aden
        </span>
        <div className="mt-1 text-xs text-muted-foreground">
          Jangan lupa good mood ya!
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-semibold text-amber-950">
          <IconClock className="size-3" /> Presensi
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium">
          <IconFilter className="size-3 text-muted-foreground" /> Filter
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        {clinicaStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border bg-card p-3 shadow-sm"
          >
            <div className="text-[11px] text-muted-foreground">
              {stat.label}
            </div>
            <div className="text-xl font-bold">{stat.value}</div>
            <div className={`text-[10px] font-medium ${stat.accent}`}>
              01 Sep 2026 - 14 Sep 2026
            </div>
            <div className={`mt-2 h-0.5 rounded-full ${stat.bar}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="product" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground">
            <span className="text-foreground">Dua produk, satu tujuan.</span>{" "}
            <br /> Digitalisasi layanan kesehatan Anda.
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="relative h-full overflow-hidden ring-0 duration-200 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-foreground/5 max-md:aspect-auto md:aspect-3/2 md:hover:-translate-y-1">
              <BorderBeam
                size={80}
                duration={8}
                colorFrom="#f59e0b"
                colorTo="#fcd34d"
              />
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

              {/* ponytail: tune translate/width to adjust the desktop crop */}
              <div className="z-1 px-6 pb-6 md:absolute md:right-0 md:bottom-0 md:w-[55rem] md:translate-x-1/3 md:translate-y-1/5 md:px-0 md:pb-0">
                <Image
                  src="/img/casemix-pintar-competency.svg"
                  alt="Tampilan aplikasi Casemix Pintar"
                  width={1207}
                  height={929}
                  className="rounded-lg border border-2"
                />
              </div>
            </Card>
          </div>

          <StaggerItem className="h-full">
            <Card className="relative h-full min-h-96 overflow-hidden bg-zinc-100 duration-200 hover:-translate-y-1 dark:bg-white/5">
              <BorderBeam
                size={80}
                duration={8}
                delay={2}
                colorFrom="#f59e0b"
                colorTo="#fcd34d"
              />
              <div className="relative z-10 flex max-w-sm flex-col gap-4 p-8">
                <p className="text-lg text-balance text-foreground/75">
                  <span className="font-medium text-foreground">
                    {products[1].name}.{" "}
                  </span>{" "}
                  {products[1].tagline}. {products[1].description}
                </p>
                <Link
                  href={products[1].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground duration-150 hover:text-primary"
                >
                  Kunjungi Platform <ArrowUpRight className="size-4" />
                </Link>
              </div>

              <div
                aria-hidden
                className="relative mx-auto mt-2 h-80 w-10/12 origin-bottom overflow-hidden rounded-t-[3rem] border-t border-black/5 bg-white shadow-xl ring shadow-black/6.5 ring-black/10 max-md:rounded-b-none md:absolute md:inset-x-8 md:bottom-0 md:mx-0 md:mt-0 md:h-2/3 md:scale-95 dark:border-white/10 dark:bg-zinc-800 dark:shadow-black/50 dark:ring-white/10"
              >
                <ClinicaIllustration />
              </div>
            </Card>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
