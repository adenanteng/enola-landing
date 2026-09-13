"use client"

import { Button } from "@/components/ui/button"
import { IconMail, IconPhone } from "@tabler/icons-react"
import { useState } from "react"

// ponytail: web3forms key is public by design (same as project lama)
const WEB3FORMS_KEY = "e9558d27-f508-4d46-a38d-12ea9daee233"

const jabatanOptions = [
  "Pemilik/Manajemen",
  "Kepala Departemen",
  "IT",
  "Lainnya",
]

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [sending, setSending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus("idle")

    const data = new FormData(event.currentTarget)
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "Registrasi Faskes",
          rs: data.get("rs"),
          nama: data.get("nama"),
          jabatan: data.get("jabatan"),
          hp: data.get("hp"),
        }),
      })
      setStatus(response.ok ? "success" : "error")
      if (response.ok) event.currentTarget.reset()
    } catch {
      setStatus("error")
    } finally {
      setSending(false)
    }
  }

  const fieldClass =
    "w-full rounded-lg border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50"

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-balance lg:text-5xl">
              Hubungi kami
            </h2>
            <p className="mt-4 max-w-md text-lg text-balance text-muted-foreground">
              Ayo, dapatkan panduan langsung dari tim kami dan temukan fitur
              yang sesuai dengan kebutuhan Anda.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/6281278704532"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground duration-150 hover:text-primary"
              >
                <IconPhone className="size-4" stroke={1.75} />
                0812-7870-4532
              </a>
              <a
                href="mailto:arliyans@enola.id"
                className="flex items-center gap-3 text-muted-foreground duration-150 hover:text-primary"
              >
                <IconMail className="size-4" stroke={1.75} />
                arliyans@enola.id
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="rs" className="text-sm font-medium">
                Rumah Sakit / Klinik
              </label>
              <input
                id="rs"
                name="rs"
                type="text"
                required
                placeholder="Nama fasilitas kesehatan"
                className={fieldClass}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="nama" className="text-sm font-medium">
                Nama Lengkap Anda
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                required
                placeholder="Nama Anda"
                className={fieldClass}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="jabatan" className="text-sm font-medium">
                Jabatan Anda
              </label>
              <select
                id="jabatan"
                name="jabatan"
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih jabatan
                </option>
                {jabatanOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="hp" className="text-sm font-medium">
                Nomor Handphone
              </label>
              <input
                id="hp"
                name="hp"
                type="tel"
                required
                placeholder="08xx-xxxx-xxxx"
                className={fieldClass}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={sending}
              nativeButton={false}
              render={
                <button type="submit">
                  {sending ? "Mengirim..." : "Kirim"}
                </button>
              }
            />

            {status === "success" && (
              <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm">
                <span className="font-medium">Registrasi Berhasil!</span> Tim
                kami akan menghubungi anda secepatnya.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm">
                <span className="font-medium">Registrasi Gagal!</span> Coba
                beberapa saat lagi.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
