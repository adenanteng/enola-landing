"use client"

import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/ui/motion-primitives/reveal"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  IconAlertTriangle,
  IconArrowUpRight,
  IconCircleCheck,
  IconMail,
  IconPhone,
  IconSend,
} from "@tabler/icons-react"
import { useState } from "react"

const jabatanOptions = [
  "Pemilik / Manajemen",
  "Kepala Departemen",
  "IT",
  "Lainnya",
]

// ponytail: inlined into the client bundle at build time — value is public by design
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""

const contactChannels = [
  {
    icon: IconPhone,
    label: "WhatsApp",
    value: "0812-7870-4532",
    href: "https://wa.me/6281278704532",
    external: true,
  },
  {
    icon: IconMail,
    label: "Email",
    value: "support@enola.id",
    href: "mailto:support@enola.id",
    external: false,
  },
]

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [sending, setSending] = useState(false)
  const [jabatan, setJabatan] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus("idle")

    // currentTarget is null after await — capture the form up front
    const form = event.currentTarget
    const data = new FormData(form)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Registrasi Faskes",
          rs: data.get("rs"),
          nama: data.get("nama"),
          jabatan,
          hp: data.get("hp"),
          pesan: data.get("pesan"),
        }),
      })
      setStatus(response.ok ? "success" : "error")
      if (response.ok) {
        form.reset()
        setJabatan(null)
      }
    } catch {
      setStatus("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="max-w-md text-4xl font-medium tracking-tight text-balance text-muted-foreground lg:text-5xl">
                <span className="text-foreground">Hubungi kami.</span> Ceritakan
                kebutuhan fasilitas Anda.
              </h2>
              <p className="mt-4 max-w-md text-lg text-balance text-muted-foreground">
                Isi formulir di samping atau hubungi langsung — tim kami akan
                membantu menemukan solusi yang sesuai.
              </p>

              <div className="mt-8 space-y-3">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 rounded-2xl border bg-card p-4 duration-200 hover:border-primary/40"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background">
                      <channel.icon
                        className="size-4 text-primary"
                        stroke={1.75}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {channel.label}
                      </div>
                      <div className="text-sm font-medium">{channel.value}</div>
                    </div>
                    <IconArrowUpRight className="ml-auto size-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <form
            onSubmit={handleSubmit}
            className="h-fit space-y-5 rounded-3xl border bg-card p-6 shadow-xl md:p-8"
          >
            <div className="space-y-1.5">
              <label htmlFor="rs" className="text-sm font-medium">
                Rumah Sakit / Klinik
              </label>
              <Input
                id="rs"
                name="rs"
                type="text"
                required
                disabled={sending}
                placeholder="Nama fasilitas kesehatan"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="nama" className="text-sm font-medium">
                  Nama Lengkap Anda
                </label>
                <Input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  disabled={sending}
                  placeholder="Nama Anda"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="jabatan" className="text-sm font-medium">
                  Jabatan Anda
                </label>
                <Combobox
                  items={jabatanOptions}
                  value={jabatan}
                  onValueChange={(value) => setJabatan(value as string | null)}
                >
                  <ComboboxInput
                    id="jabatan"
                    placeholder="Pilih jabatan"
                    showClear
                    disabled={sending}
                    className="w-full"
                  />
                  <ComboboxContent>
                    <ComboboxList>
                      {(item: string) => (
                        <ComboboxItem key={item} value={item}>
                          {item}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                    <ComboboxEmpty>Jabatan tidak ditemukan</ComboboxEmpty>
                  </ComboboxContent>
                </Combobox>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="hp" className="text-sm font-medium">
                Nomor Whatsapp
              </label>
              <Input
                id="hp"
                name="hp"
                type="tel"
                required
                disabled={sending}
                placeholder="08123456789"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="pesan" className="text-sm font-medium">
                Pesan
              </label>
              <Textarea
                id="pesan"
                name="pesan"
                rows={4}
                required
                disabled={sending}
                placeholder="Ceritakan kebutuhan atau pertanyaan Anda di sini..."
              />
            </div>

            <div className="flex justify-end">
              <span className="relative inline-flex w-full overflow-hidden rounded-full shadow-sm shadow-black/10">
                <Button type="submit" className="w-full" disabled={sending}>
                  <IconSend className="size-4" />
                  {sending ? "Mengirim..." : "Kirim Pesan"}
                </Button>
                <BorderBeam
                  size={40}
                  duration={5}
                  colorFrom="#f59e0b"
                  colorTo="#fcd34d"
                />
              </span>
            </div>

            {status === "success" && (
              <p className="flex items-start gap-2.5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                <IconCircleCheck
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  stroke={1.75}
                />
                <span>
                  <span className="font-medium">Registrasi Berhasil!</span> Tim
                  kami akan menghubungi anda secepatnya.
                </span>
              </p>
            )}
            {status === "error" && (
              <p className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm">
                <IconAlertTriangle
                  className="mt-0.5 size-4 shrink-0 text-destructive"
                  stroke={1.75}
                />
                <span>
                  <span className="font-medium">Registrasi Gagal!</span> Coba
                  beberapa saat lagi.
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
