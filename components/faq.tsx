import Link from "next/link"

const faqs = [
  {
    question: "Apa saja produk dari Enola?",
    answer: (
      <>
        Enola memiliki dua produk utama:{" "}
        <Link
          href="https://enola.up.railway.app"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-primary"
        >
          Enola Clinica
        </Link>
        , aplikasi RME untuk klinik, dan{" "}
        <Link
          href="https://casemixpintar.id"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-primary"
        >
          Casemix Pintar
        </Link>
        , aplikasi manajemen klaim BPJS berbasis AI.
      </>
    ),
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk implementasi?",
    answer:
      "Biasanya, implementasi memakan waktu 2-4 minggu tergantung pada ukuran fasilitas dan kompleksitas kebutuhan. Pelatihan tim sudah termasuk dalam paket.",
  },
  {
    question:
      "Bisakah sistem ini diintegrasikan dengan sistem atau perangkat keras yang sudah ada?",
    answer:
      "Ya, sistem kami dirancang untuk integrasi mudah dengan sistem dan perangkat keras yang sudah ada, termasuk integrasi Satusehat dan klaim BPJS.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-24">
          <h2 className="text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            Pertanyaan Umum
          </h2>

          <div className="divide-y border-y">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="text-muted-foreground transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-balance text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
