import { CountUp } from "@/components/ui/motion-primitives/count-up"
import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/ui/motion-primitives/reveal"

const stats = [
  { count: 2, suffix: "", label: "Produk digital kesehatan" },
  { count: 14, suffix: "+", label: "Fasilitas kesehatan telah bergabung" },
  { text: "24/7", label: "Dukungan tim profesional" },
] as const

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="max-w-4xl text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl">
            <span className="text-foreground">
              Tumbuh bersama fasilitas kesehatan.
            </span>{" "}
            Dari klinik hingga rumah sakit.
          </p>
        </Reveal>

        <Stagger className="mt-32 grid gap-12 md:grid-cols-3 xl:mt-44">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="space-y-3 border-t pt-6">
                <div className="text-5xl font-semibold tracking-tight">
                  {"count" in stat ? (
                    <CountUp to={stat.count} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
