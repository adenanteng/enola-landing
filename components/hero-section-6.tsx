import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
import { CountUp } from "@/components/ui/motion-primitives/count-up"
import { InfiniteSlider } from "@/components/ui/motion-primitives/infinite-slider"
import { Reveal } from "@/components/ui/motion-primitives/reveal"
import {
  IconCrown,
  IconLock,
  IconStarFilled,
  IconTarget,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { HeroHeader } from "@/components/hero-section-6-header"

const logos = [
  { name: "RS Bhakti Husada", src: "/img/client/RSBH_REMBANG_LOGO.png" },
  {
    name: "RS Mitra Husada Pringsewu",
    src: "/img/client/RSMH_PRINGSEWU_LOGO.png",
  },
  { name: "RSUD Pringsewu", src: "/img/client/RSUD_PRINGSEWU_LOGO.png" },
  { name: "RSUD Ahmad Yani Metro", src: "/img/client/RSUDAY_METRO_LOGO.png" },
  { name: "RS Yukum Medical Centre", src: "/img/client/RSYMC_YUKUM_LOGO.png" },
]

function Logos() {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center gap-2.5 whitespace-nowrap opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={140}
            height={48}
            className="h-9 w-auto object-contain"
          />
          <span className="text-sm font-medium">{logo.name}</span>
        </div>
      ))}
    </>
  )
}

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center">
    <span className="text-xl font-bold sm:text-2xl">{value}</span>
    <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase sm:text-xs">
      {label}
    </span>
  </div>
)

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main>
        <section className="overflow-hidden">
          <div className="relative pt-24 pb-16 lg:pt-40 lg:pb-24">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black_20%,transparent)] bg-[size:72px_72px]" />
              {/*<div className="absolute top-0 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl max-lg:size-[28rem]" />*/}
            </div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                {/* Left column */}
                <div className="flex flex-col justify-center gap-8 lg:col-span-7">
                  {/*<Reveal>*/}
                  {/*  <Link*/}
                  {/*    href="#product"*/}
                  {/*    className="inline-flex w-fit items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-accent"*/}
                  {/*  >*/}
                  {/*    <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase sm:text-xs">*/}
                  {/*      Teknologi untuk Layanan Kesehatan*/}
                  {/*      <IconStarFilled className="size-3.5 text-primary" />*/}
                  {/*    </span>*/}
                  {/*  </Link>*/}
                  {/*</Reveal>*/}

                  <Reveal delay={0.08}>
                    <h1 className="text-5xl font-medium tracking-tight text-balance md:text-6xl xl:text-7xl">
                      Teknologi{" "}
                      <span className="bg-gradient-to-br from-foreground via-foreground to-primary bg-clip-text text-transparent">
                        Kesehatan
                      </span>{" "}
                      untuk Rumah Sakit dan Klinik
                    </h1>
                  </Reveal>

                  <Reveal delay={0.16}>
                    <p className="max-w-xl text-lg text-balance text-muted-foreground">
                      Menghadirkan solusi digital terintegrasi. Mulai dari RME
                      klinik hingga manajemen klaim BPJS berbasis AI.
                    </p>
                  </Reveal>

                  <Reveal delay={0.24}>
                    <div className="flex flex-wrap gap-3">
                      <span className="relative inline-flex overflow-hidden rounded-full shadow-sm shadow-black/10">
                        <Button
                          className="w-fit"
                          nativeButton={false}
                          render={<Link href="#product">Lihat Produk</Link>}
                        />
                        <BorderBeam
                          size={48}
                          duration={5}
                          colorFrom="#f59e0b"
                          colorTo="#fcd34d"
                        />
                      </span>
                      <Button
                        variant="outline"
                        className="w-fit"
                        nativeButton={false}
                        render={<Link href="#contact">Hubungi Kami</Link>}
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Right column */}
                <div className="space-y-6 lg:col-span-5">
                  {/* Stats Card */}
                  <Reveal delay={0.32}>
                    <div className="relative overflow-hidden rounded-3xl border bg-card/60 p-8 shadow-lg backdrop-blur-xl">
                      <div className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-primary/10 blur-3xl" />

                      <div className="relative">
                        <div className="mb-8 flex items-center gap-4">
                          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                            <IconTarget className="size-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold tracking-tight">
                              <CountUp to={16} suffix="+" />
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Fasilitas kesehatan mempercayai Enola
                            </div>
                          </div>
                        </div>

                        <div className="mb-8 space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Retensi Klien
                            </span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-primary to-primary/60" />
                          </div>
                        </div>

                        <div className="mb-6 h-px w-full bg-border" />

                        <div className="grid grid-cols-3 gap-4 text-center">
                          <StatItem value="2" label="Produk" />
                          <div className="mx-auto h-full w-px bg-border" />
                          <StatItem value="1,5 jt+" label="Klaim Diproses" />
                          <div className="mx-auto h-full w-px bg-border" />
                          <StatItem value="13+" label="Modul Operasional" />
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                          <div className="inline-flex items-center gap-1.5 rounded-full border bg-background/50 px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground">
                            <span className="relative flex size-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                            </span>
                            SLA AKTIF
                          </div>
                          <div className="inline-flex items-center gap-1.5 rounded-full border bg-background/50 px-3 py-1 text-[10px] font-medium tracking-wide text-muted-foreground">
                            <IconLock className="size-3 text-yellow-500" />
                            DATA TERLINDUNGI
                          </div>
                        </div>
                      </div>
                      <BorderBeam
                        borderWidth={2}
                        size={80}
                        duration={8}
                        colorFrom="#f59e0b"
                        colorTo="#fcd34d"
                      />
                    </div>
                  </Reveal>
                  {/* Trust Marquee Card */}
                  <Reveal delay={0.4}>
                    <div className="relative overflow-hidden rounded-3xl border bg-card/60 py-8 shadow-lg backdrop-blur-xl">
                      <h3 className="mb-6 px-8 text-sm font-medium text-muted-foreground">
                        Mitra fasilitas kesehatan kami
                      </h3>
                      <div className="relative mask-x-from-85% mask-x-to-99%">
                        <InfiniteSlider gap={60} speed={60}>
                          <Logos />
                        </InfiniteSlider>
                      </div>
                      <BorderBeam
                        borderWidth={2}
                        size={80}
                        duration={8}
                        colorFrom="#f59e0b"
                        colorTo="#fcd34d"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
