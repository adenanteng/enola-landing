import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <h2 className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground">
            <span className="text-foreground">Dipercaya fasilitas.</span> <br />{" "}
            Cerita dari pengguna Enola.
          </h2>
          <div className="flex flex-col gap-32 md:mx-auto xl:gap-44">
            <p className="text-lg text-balance text-muted-foreground">
              &quot;Kami hampir berpikir harus menyewa detektif untuk melacak
              rekam medis pasien. Untungnya, dengan sistem ini, kami tidak perlu
              lagi. Pekerjaan jadi lebih cepat dan rapi!&quot;{" "}
            </p>

            <div className="grid grid-cols-[auto_1fr] items-center gap-7">
              <div className="relative">
                <div className="relative size-10 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:z-1 before:rounded-full before:border before:border-foreground/10">
                  <Image
                    src="/img/landing/testi.jpeg"
                    alt="Dr. Yahya Kholid"
                    width={52}
                    height={52}
                    className="size-full object-cover grayscale"
                  />
                </div>

                <div className="absolute inset-0 z-1 size-10 translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-lg shadow-black/6 before:absolute before:inset-0 before:z-2 before:rounded-full before:border before:border-foreground/10">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="fasilitas kesehatan"
                    width={52}
                    height={52}
                    className="size-full object-cover object-top grayscale"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium">Dr. Yahya Kholid</h3>
                <p className="text-sm text-muted-foreground">
                  Kepala Klinik Sidowaras Walisongo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
