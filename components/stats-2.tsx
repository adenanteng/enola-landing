export default function StatsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl">
          <span className="text-foreground">
            Tumbuh bersama fasilitas kesehatan.
          </span>{" "}
          Dari klinik hingga rumah sakit.
        </p>

        <div className="mt-32 grid gap-12 md:grid-cols-3 xl:mt-44">
          <div className="space-y-3 border-t pt-6">
            <div className="text-5xl font-semibold tracking-tight">2</div>
            <p className="text-muted-foreground">Produk digital kesehatan</p>
          </div>
          <div className="space-y-3 border-t pt-6">
            <div className="text-5xl font-semibold tracking-tight">15+</div>
            <p className="text-muted-foreground">
              Fasilitas kesehatan telah bergabung
            </p>
          </div>
          <div className="space-y-3 border-t pt-6">
            <div className="text-5xl font-semibold tracking-tight">24/7</div>
            <p className="text-muted-foreground">Dukungan tim profesional</p>
          </div>
        </div>
      </div>
    </section>
  )
}
