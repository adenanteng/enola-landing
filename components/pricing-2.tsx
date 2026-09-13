import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const steps = [
  {
    name: "Konsultasi",
    tagline: "Pahami kebutuhan fasilitas Anda",
    step: "Langkah 1",
    cta: "Hubungi Kami",
    items: [
      "Diskusi kebutuhan fasilitas",
      "Demo produk langsung",
      "Rekomendasi solusi yang sesuai",
    ],
  },
  {
    name: "Implementasi",
    tagline: "Pengaturan dan pelatihan tim",
    step: "Langkah 2",
    popular: true,
    cta: "Mulai Sekarang",
    items: [
      "Setup & integrasi data",
      "Pelatihan tim fasilitas",
      "Umumnya 2-4 minggu",
    ],
  },
  {
    name: "Dukungan",
    tagline: "Pendampingan berkelanjutan",
    step: "Langkah 3",
    cta: "Hubungi Kami",
    items: [
      "Dukungan teknis 24/7",
      "Pembaruan fitur berkala",
      "Konsultasi berkelanjutan",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl">
            <span className="text-foreground">Mulai dari konsultasi.</span>{" "}
            <br /> Kami dampingi sampai berjalan.
          </h1>
        </div>

        <div className="mt-12 grid gap-6 border *:p-8 max-lg:mx-auto max-lg:max-w-sm lg:mt-20 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.name}
              className={
                step.popular
                  ? "relative flex flex-col gap-8 bg-card shadow-xl max-lg:border-y lg:border-x"
                  : "flex flex-col gap-8 max-lg:border-b max-lg:last:border-t lg:border-r lg:last:border-l"
              }
            >
              {step.popular && (
                <div className="absolute top-0 right-0 w-fit translate-x-px -translate-y-px rounded-bl bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200 inset-ring inset-ring-foreground/10 [corner-shape:bevel]">
                  Paling penting
                </div>
              )}
              <div>
                <p className="text-lg font-medium">{step.name}</p>
                <p className="text-lg font-medium text-muted-foreground">
                  {step.tagline}
                </p>

                <div className="my-8 block text-4xl font-medium tracking-tight">
                  {step.step}
                </div>

                <Button
                  className="w-full"
                  variant={step.popular ? "default" : "outline"}
                  nativeButton={false}
                  render={<Link href="#contact">{step.cta}</Link>}
                />
              </div>

              <ul className="list-outside space-y-3 text-muted-foreground">
                {step.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="size-3 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
