import Image from "next/image"
import { Reveal } from "@/components/ui/motion-primitives/reveal"

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <h2 className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground">
              <span className="text-foreground">Dipercaya fasilitas.</span>{" "}
              <br /> Cerita dari pengguna Enola.
            </h2>
            <div className="flex flex-col gap-10 md:mx-auto xl:gap-16">
              <p className="text-lg text-balance text-muted-foreground">
                &quot;Selama ini datanya sebenarnya sudah ada, cuma susah kalau
                mau dianalisa satu-satu. Setelah pakai Casemix Pintar jadi lebih
                kelihatan mana klaim yang perlu diperhatikan dan mana yang masih
                bisa dioptimalkan.&quot;{" "}
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                <div className="relative">
                  <div className="relative size-10 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:z-1 before:rounded-full before:border before:border-foreground/10">
                    <Image
                      src="/img/arliyans.jpeg"
                      alt="Arliyans"
                      width={52}
                      height={52}
                      className="size-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium">
                    Arliyans, Amd. RMIK., S.Ars
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Kepala Casemix RS Yukum Medical Centre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
