import {
  IconBrain,
  IconClock,
  IconCode,
  IconRefresh,
} from "@tabler/icons-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const highlights = [
  {
    icon: IconBrain,
    title: "Analisis Cerdas",
    description:
      "Mengekstrak informasi penting dari rekam medis secara instan.",
  },
  {
    icon: IconCode,
    title: "Koding Presisi",
    description: "Rekomendasi kode ICD-10 & ICD-9 CM dengan akurasi tinggi.",
  },
  {
    icon: IconRefresh,
    title: "Selalu Terkini",
    description:
      "Terintegrasi dengan regulasi dan panduan casemix BPJS terbaru.",
  },
  {
    icon: IconClock,
    title: "Siap 24/7",
    description: "Teman diskusi koding Anda kapan pun dibutuhkan tanpa henti.",
  },
]

export default function AriaAI() {
  return (
    <section
      id="aria"
      className="scroll-mt-24 bg-muted/50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Card className="p-8 shadow-xl md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex justify-center lg:order-1">
              <Image
                src="/img/casemix/aria-portrait.png"
                alt="Aria AI"
                width={480}
                height={480}
                className="w-full max-w-sm rounded-3xl border object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-muted-foreground">
                ✨ AI Regulatory Intelligence Assistant
              </span>
              <h3 className="mt-6 text-3xl font-medium tracking-tight md:text-4xl">
                Kenalkan, Aria AI
              </h3>
              <p className="mt-4 text-balance text-muted-foreground">
                Bukan sekadar sistem biasa. Aria dirancang khusus untuk memahami
                kompleksitas klaim BPJS, membedah rekam medis, dan memberikan
                rekomendasi koding yang akurat berdasarkan regulasi terbaru.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <item.icon
                        className="size-4 text-primary"
                        stroke={1.75}
                      />
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
