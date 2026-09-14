import {
  IconArrowUp,
  IconBrain,
  IconClock,
  IconCode,
  IconRefresh,
  IconSparkles,
} from "@tabler/icons-react"
import { Card } from "@/components/ui/card"

const highlights = [
  {
    icon: IconBrain,
    title: "Analisis Cerdas",
    description: "Mengekstrak informasi penting dari rekam medis secara instan.",
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

function AriaChatIllustration() {
  return (
    <div aria-hidden className="w-full max-w-sm">
      <div className="rounded-3xl bg-card p-4 shadow-xl ring shadow-black/10 ring-foreground/10 dark:bg-zinc-800 dark:shadow-black/50 dark:ring-white/10">
        <div className="flex items-center gap-3 border-b border-border/60 pb-3">
          <div className="relative flex size-9 items-center justify-center rounded-full bg-primary/10">
            <IconSparkles className="size-4 text-primary" stroke={1.75} />
            <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-card" />
          </div>
          <div>
            <div className="text-sm font-medium">Aria AI</div>
            <div className="text-xs text-muted-foreground">
              Online · Siap membantu
            </div>
          </div>
        </div>

        <div className="space-y-3 py-4">
          <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-primary px-3.5 py-2 text-xs text-primary-foreground">
            Kode ICD-10 untuk appendisitis akut tanpa komplikasi?
          </div>
          <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-3.5 py-2 text-xs">
            <div className="font-medium">ICD-10: K35.80</div>
            <div className="mt-0.5 text-muted-foreground">
              Appendisitis akut tanpa komplikasi.
            </div>
            <div className="mt-0.5 text-muted-foreground">
              ICD-9 CM: 47.09
            </div>
          </div>
          <div className="flex items-center gap-1.5 pl-1">
            <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50" />
            <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:150ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:300ms]" />
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border bg-background px-3 py-2">
          <span className="text-xs text-muted-foreground">
            Tanyakan pada Aria...
          </span>
          <IconArrowUp className="ml-auto size-3.5 text-primary" />
        </div>
      </div>
    </div>
  )
}

export default function AriaAI() {
  return (
    <section
      id="aria"
      className="scroll-mt-24 bg-muted/50 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Card className="p-8 shadow-xl md:p-12 rounded-4xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex justify-center lg:order-1">
              <AriaChatIllustration />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
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
