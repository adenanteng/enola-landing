"use client"

import {
  Activity,
  ArrowRightLeft,
  Bell,
  Calculator,
  Calendar,
  ChevronDown,
  Clock,
  CloudDownload,
  History,
  Link2,
  ListChecks,
  Mail,
  MonitorDown,
  Pill,
  Plug,
  Stethoscope,
  User,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/ui/motion-primitives/reveal"
import { Button } from "@/components/ui/button"
import {
  IconArrowUp,
  IconHeadset,
  IconMicrophone,
  IconPaperclip,
} from "@tabler/icons-react"

const features = [
  { id: "workflow-agents", label: "RME Terintegrasi" },
  { id: "alerts", label: "AI untuk Klaim" },
  { id: "timeline", label: "Integrasi Nasional" },
  { id: "integrations", label: "Dukungan Profesional" },
] as const

type FeatureId = (typeof features)[number]["id"]

const featureHighlights: Record<
  FeatureId,
  { icon: LucideIcon; label: string }[]
> = {
  "workflow-agents": [
    { icon: ArrowRightLeft, label: "Dasbor & data pasien" },
    { icon: ListChecks, label: "Rawat jalan, inap & IGD" },
    { icon: Zap, label: "Rekam medis digital" },
  ],
  alerts: [
    { icon: Bell, label: "Verifikasi klaim otomatis" },
    { icon: Clock, label: "Analisis CMG real-time" },
    { icon: Activity, label: "Monitoring dispute" },
  ],
  timeline: [
    { icon: History, label: "Terintegrasi Satusehat" },
    { icon: Users, label: "Klaim BPJS" },
    { icon: Mail, label: "Perangkat keras existing" },
  ],
  integrations: [
    { icon: Plug, label: "Pelatihan tim fasilitas" },
    { icon: Calendar, label: "Implementasi 1-2 minggu" },
    { icon: Link2, label: "Dukungan teknis 24/7" },
  ],
}

function FeatureList({
  items,
}: {
  items: { icon: LucideIcon; label: string }[]
}) {
  return (
    <ul className="mt-8 divide-y text-muted-foreground *:flex *:items-center *:gap-3 *:py-3">
      {items.map(({ icon: Icon, label }) => (
        <li key={label}>
          <Icon className="size-4" />
          {label}
        </li>
      ))}
    </ul>
  )
}

export default function FeaturesSection() {
  const [activeId, setActiveId] = useState<FeatureId>("workflow-agents")
  const sectionRefs = useRef<Partial<Record<FeatureId, HTMLDivElement | null>>>(
    {}
  )

  const scrollToFeature = (id: FeatureId) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setActiveId(id)
  }

  useEffect(() => {
    const sections = features
      .map((feature) => sectionRefs.current[feature.id])
      .filter((section): section is HTMLDivElement => section != null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = visible[0]?.target.id as FeatureId | undefined
        if (nextId) setActiveId(nextId)
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.55, 0.75] }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pillar" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground">
            <span className="text-foreground">Satu ekosistem.</span> Empat pilar
            layanan Enola.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:mt-32 lg:grid-cols-[auto_1fr]">
          <div className="sticky top-24 h-fit w-56 max-lg:hidden">
            <div className="text-sm text-muted-foreground">Pilar</div>
            <div className="mt-4 -ml-4 flex flex-col *:justify-start">
              {features.map((feature) => (
                <Button
                  key={feature.id}
                  type="button"
                  variant="ghost"
                  data-state={activeId === feature.id ? "active" : undefined}
                  onClick={() => scrollToFeature(feature.id)}
                  className="not-data-[state=active]:text-muted-foreground hover:bg-transparent"
                >
                  {feature.label}
                </Button>
              ))}
            </div>
          </div>
          <Reveal className="flex flex-col gap-16 md:gap-32" delay={0.1}>
            <div
              ref={(element) => {
                sectionRefs.current["workflow-agents"] = element
              }}
              id="workflow-agents"
              className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12"
            >
              <div className="flex flex-col justify-between pb-4 md:col-span-2">
                <div className="md:pr-6 lg:pr-0">
                  <h3 className="mb-6 text-sm font-medium text-muted-foreground">
                    RME Terintegrasi
                  </h3>
                  <p className="text-lg font-medium text-balance text-muted-foreground">
                    <span className="text-foreground">
                      Satu sistem untuk seluruh alur klinis.
                    </span>{" "}
                    Enola Clinica menghubungkan pendaftaran hingga kasir, dengan
                    rekam medis digital yang mudah diakses dokter dan perawat.
                  </p>
                </div>
                <FeatureList items={featureHighlights["workflow-agents"]} />
              </div>
              <div className="relative flex aspect-square rounded-3xl border border-border bg-foreground/2 p-3 md:col-span-3 dark:bg-white/5">
                <RMEIllustration />
              </div>
            </div>

            <div
              ref={(element) => {
                sectionRefs.current.alerts = element
              }}
              id="alerts"
              className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12"
            >
              <div className="flex flex-col justify-between pb-4 md:col-span-2">
                <div className="md:pr-6 lg:pr-0">
                  <h3 className="mb-6 text-sm font-medium text-muted-foreground">
                    AI untuk Klaim
                  </h3>
                  <p className="text-lg font-medium text-balance text-muted-foreground">
                    <span className="text-foreground">
                      Casemix Pintar didukung Aria AI.
                    </span>{" "}
                    Membedah rekam medis dan memberikan rekomendasi koding yang
                    akurat untuk klaim BPJS.
                  </p>
                </div>
                <FeatureList items={featureHighlights.alerts} />
              </div>
              <div className="relative flex aspect-square rounded-3xl border border-border bg-foreground/2 p-3 md:col-span-3 dark:bg-white/5">
                <AIInputIllustration />
              </div>
            </div>

            <div
              ref={(element) => {
                sectionRefs.current.timeline = element
              }}
              id="timeline"
              className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12"
            >
              <div className="flex flex-col justify-between pb-4 md:col-span-2">
                <div className="md:pr-6 lg:pr-0">
                  <h3 className="mb-6 text-sm font-medium text-muted-foreground">
                    Integrasi Nasional
                  </h3>
                  <p className="text-lg font-medium text-balance text-muted-foreground">
                    <span className="text-foreground">
                      Terhubung dengan standar nasional.
                    </span>{" "}
                    Integrasi Satusehat dan klaim BPJS, serta kompatibel dengan
                    perangkat keras yang sudah ada di fasilitas Anda.
                  </p>
                </div>
                <FeatureList items={featureHighlights.timeline} />
              </div>
              <div className="relative flex aspect-square items-center rounded-3xl border border-border bg-foreground/2 p-3 md:col-span-3 dark:bg-white/5">
                <DynamicIslandIllustration />
              </div>
            </div>

            <div
              ref={(element) => {
                sectionRefs.current.integrations = element
              }}
              id="integrations"
              className="grid scroll-mt-32 gap-6 sm:grid-cols-2 md:grid-cols-5 lg:gap-12"
            >
              <div className="flex flex-col justify-between pb-4 md:col-span-2">
                <div className="md:pr-6 lg:pr-0">
                  <h3 className="mb-6 text-sm font-medium text-muted-foreground">
                    Dukungan Profesional
                  </h3>
                  <p className="text-lg font-medium text-balance text-muted-foreground">
                    <span className="text-foreground">
                      Kami dampingi dari hari pertama.
                    </span>{" "}
                    Pelatihan tim, implementasi terpandu, dan dukungan teknis
                    yang selalu siap kapan pun dibutuhkan.
                  </p>
                </div>
                <FeatureList items={featureHighlights.integrations} />
              </div>
              <div className="relative flex aspect-square rounded-3xl border border-border bg-foreground/2 p-3 md:col-span-3 dark:bg-white/5">
                <DownloadIllustration />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function RMEIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-8 z-1 m-auto h-fit max-w-sm scale-95"
    >
      <div className="h-fit rounded-3xl bg-card p-3 shadow-xl ring shadow-black/15 ring-foreground/15 dark:bg-zinc-800 dark:shadow-black/50 dark:ring-white/15">
        <div className="flex items-center justify-between p-2 pb-3">
          <div className="text-sm text-muted-foreground">Alur rawat jalan</div>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            3 pasien
          </span>
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 rounded-xl px-3 py-1.5 hover:bg-muted">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 *:m-auto *:size-3.5">
              <User className="text-primary" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-medium">Anisa Putri</div>
              <div className="text-xs text-muted-foreground">
                Pendaftaran · 09.30
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl px-3 py-1.5 hover:bg-muted">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 *:m-auto *:size-3.5">
              <Stethoscope className="text-primary" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-medium">Pemeriksaan dokter</div>
              <div className="text-xs text-muted-foreground">
                Rekam medis digital · 09.45
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl px-3 py-1.5 hover:bg-muted">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 *:m-auto *:size-3.5">
              <Pill className="text-primary" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-medium">Resep #1024</div>
              <div className="text-xs text-muted-foreground">
                Farmasi · Disiapkan
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl px-3 py-1.5 hover:bg-muted">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 *:m-auto *:size-3.5">
              <Calculator className="text-primary" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-medium">Pembayaran</div>
              <div className="text-xs text-muted-foreground">Kasir · Lunas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DownloadIllustration() {
  return (
    <div className="absolute inset-0 z-1 m-auto size-fit scale-95">
      <Button
        variant="secondary"
        className="ml-1 bg-background/25 inset-ring inset-ring-foreground/25 backdrop-blur"
        size="sm"
        render={<div />}
        nativeButton={false}
      >
        <IconHeadset className="opacity-75" />
        <span className="border-r pr-2">Bantuan</span>
        <ChevronDown className="opacity-50" />
      </Button>

      <div className="mt-3 min-w-52 rounded-2xl bg-card p-1 shadow-xl ring shadow-black/6.5 ring-black/6.5 *:cursor-pointer dark:bg-zinc-800 dark:shadow-black/50 dark:ring-white/10">
        <div className="peer flex gap-2 rounded-xl px-3 py-1.5 hover:bg-black/5">
          <MonitorDown className="size-4 translate-y-0.5" />
          <div className="space-y-0.5">
            <div className="text-xs font-medium">Tim Lokal</div>
            <div className="text-xs text-muted-foreground">Siap 24/7</div>
          </div>
        </div>

        <div className="flex gap-2 rounded-xl px-3 py-1.5 not-peer-hover:bg-black/5">
          <CloudDownload className="size-4 translate-y-0.5" />
          <div className="space-y-0.5">
            <div className="text-xs font-medium">Pelatihan</div>
            <div className="text-xs text-muted-foreground">Termasuk paket</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AIInputIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-8 z-1 m-auto h-fit max-w-sm scale-95"
    >
      <div className="mt-auto h-fit rounded-3xl bg-card p-3 shadow-xl ring shadow-black/15 ring-foreground/15 dark:bg-zinc-800 dark:shadow-black/50 dark:ring-white/15">
        <div className="p-2 pb-3 text-sm text-muted-foreground">
          Aria sedang membedah berkas klaim...
        </div>
        <div className="flex justify-between gap-3">
          <div className="flex items-center gap-1">
            <div className="flex size-7 cursor-pointer rounded-full *:m-auto *:size-4 hover:bg-muted">
              <IconPaperclip />
            </div>
            <div className="flex size-7 cursor-pointer rounded-full *:m-auto *:size-4 hover:bg-muted">
              <IconMicrophone />
            </div>
          </div>

          <div className="flex size-7 cursor-pointer rounded-full bg-foreground text-background *:m-auto *:size-4 hover:brightness-110">
            <IconArrowUp />
          </div>
        </div>
      </div>
    </div>
  )
}

function DynamicIslandIllustration() {
  return (
    <div
      aria-hidden
      className="absolute inset-x-0 bottom-0 z-1 mx-auto mt-auto h-2/3 w-full max-w-96 origin-bottom scale-95 rounded-t-[4rem] border border-border mask-b-from-background px-4 pt-4"
    >
      <div className="h-full overflow-hidden rounded-t-[3rem] bg-foreground/2 p-3 shadow-lg ring shadow-black/15 ring-foreground/10 dark:bg-white/5 dark:shadow-black/50 dark:ring-white/10">
        <div className="relative">
          <div className="relative rounded-[2.25rem] bg-card p-2 shadow-xl ring shadow-black/6.5 ring-foreground/10 dark:bg-zinc-800 dark:shadow-black/50 dark:ring-white/10">
            <div className="flex gap-2">
              <div className="relative size-18 overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20">
                <Image
                  src="/img/avatar-placeholder.svg"
                  alt="pasien"
                  width={136}
                  height={136}
                />
              </div>
              <div className="py-1 pr-4">
                <div className="text-sm font-medium">Satusehat</div>
                <div className="mt-1.5 flex items-center gap-3">
                  <div>
                    <div className="text-xs text-foreground/50">
                      Data pasien
                    </div>
                    <div className="mt-0.5 text-sm font-semibold">
                      Tersinkron
                    </div>
                  </div>
                  <div className="h-7 w-px bg-border" />
                  <div>
                    <div className="text-xs text-foreground/50">Klaim</div>
                    <div className="mt-0.5 text-sm font-semibold">
                      Real-time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
