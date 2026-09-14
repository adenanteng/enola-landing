import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
import { Reveal } from "@/components/ui/motion-primitives/reveal"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { HeroHeader } from "@/components/hero-section-6-header"
import LogoCloud from "@/components/hero-section-6-logo-cloud"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main>
        <section className="overflow-hidden">
          <div className="relative pt-24 lg:pt-40">
            <div className="space-y-12 md:space-y-16">
              <div className="relative mx-auto max-w-7xl px-6">
                <Reveal>
                  <Link
                    href="#product"
                    className="flex w-fit items-center gap-2 font-medium"
                  >
                    <span>Enola</span>
                    {/*<span className="text-muted-foreground">*/}
                    {/*  Teknologi untuk Layanan Kesehatan*/}
                    {/*</span>*/}

                    <ArrowRight className="size-3.5" />
                  </Link>
                </Reveal>

                <div className="mt-8 grid items-end gap-4 md:grid-cols-2 md:gap-6">
                  <Reveal delay={0.08}>
                    <h1 className="text-5xl font-medium tracking-tight text-balance md:text-6xl xl:text-7xl">
                      Teknologi Kesehatan untuk Rumah Sakit dan Klinik
                    </h1>
                  </Reveal>
                  <div className="mx-auto flex max-w-md flex-col gap-6">
                    <Reveal delay={0.16}>
                      <p className="text-lg text-balance text-muted-foreground">
                        Menghadirkan solusi digital terintegrasi — dari RME
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
                </div>
              </div>

              <Reveal delay={0.32} y={32}>
                <div className="mx-auto max-w-7xl max-xl:px-2">
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted md:aspect-5/3 lg:aspect-video">
                    <div className="absolute top-4 left-4 z-10 min-w-4xl rounded-3xl bg-background p-2 shadow-lg ring ring-foreground/6.5 before:absolute before:-inset-px before:z-10 before:size-56 before:rounded-tl-2xl before:border-t before:border-l before:border-foreground/10 before:mask-radial-[100%_60%] before:mask-radial-from-65% before:mask-radial-at-top-left before:ring-foreground lg:top-16 lg:left-16 lg:min-w-5xl xl:min-w-7xl">
                      <div
                        aria-hidden
                        className="absolute inset-0 z-1 rounded-2xl bg-foreground/2"
                      />
                      <Image
                        className="relative rounded-2xl bg-background"
                        src="/img/casemix-pintar-dashboard.svg"
                        alt="casemix-pintar-dashboard"
                        width="2700"
                        height="1440"
                        priority
                      />
                    </div>

                    <Image
                      src="https://images.unsplash.com/photo-1772037440088-2ef162671434?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      width={1313}
                      height={1000}
                      sizes="(max-width: 768px) 100vw, 1280px"
                      className="size-full rotate-180 rounded-3xl object-cover object-bottom"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        <LogoCloud />
      </main>
    </>
  )
}
