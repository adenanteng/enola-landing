"use client"

import { useMedia } from "@/hooks/use-media"
import { InfiniteSlider } from "@/components/ui/motion-primitives/infinite-slider"
import Image from "next/image"

const logos = [
  { name: "RS Darussyifa", src: "/img/logo-darussyifa.png" },
  { name: "Fyglow", src: "/img/logo-fyglow.png" },
  { name: "Klinik Sidowaras", src: "/img/logo-sidowaras.png" },
  { name: "WSC", src: "/img/logo-wsc.png" },
]

function Logos() {
  return (
    <>
      {logos.map((logo) => (
        <Image
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          width={140}
          height={48}
          className="h-10 w-auto object-contain opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
        />
      ))}
    </>
  )
}

export default function LogoCloud() {
  const isLarge = useMedia("(min-width: 64rem)")

  return (
    <section className="bg-background">
      <div className="relative m-auto max-w-7xl lg:px-6">
        <p className="pt-12 text-center text-sm text-muted-foreground">
          Telah dipercaya oleh fasilitas kesehatan terkemuka
        </p>
        {isLarge ? (
          <div className="relative flex items-center justify-between px-6 py-12">
            <Logos />
          </div>
        ) : (
          <InfiniteSlider
            gap={44}
            className="mask-x-from-85% mask-x-to-99% py-8 *:[&>svg]:scale-80"
          >
            <Logos />
          </InfiniteSlider>
        )}
      </div>
    </section>
  )
}
