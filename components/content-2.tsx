import { Cpu, Zap } from "lucide-react"

export default function ContentSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-12">
          <h2 className="max-w-md text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            Membantu fasilitas kesehatan bertransformasi digital.
          </h2>
          <div className="space-y-6 lg:space-y-12">
            <p className="text-lg text-balance text-muted-foreground">
              Enola percaya teknologi harus menyesuaikan fasilitas, bukan
              sebaliknya. Karena itu setiap solusi kami dirancang untuk berjalan
              di atas sistem dan perangkat yang sudah ada, didampingi tim yang
              siap membantu kapan pun.
            </p>

            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              <p className="text-lg text-balance text-muted-foreground">
                <span className="font-medium text-foreground">
                  <Zap className="inline size-4 -translate-y-0.5" /> Transisi
                  mulus.
                </span>{" "}
                Integrasi dengan sistem yang sudah berjalan di fasilitas Anda.
              </p>

              <p className="text-lg text-balance text-muted-foreground">
                <span className="font-medium text-foreground">
                  <Cpu className="inline size-4 -translate-y-0.5" /> Penggunaan
                  optimal.
                </span>{" "}
                Dukungan profesional dari tim ahli kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
