"use client"

import { useMedia } from "@/hooks/use-media"
import { InfiniteSlider } from "@/components/ui/motion-primitives/infinite-slider"
import { Stagger, StaggerItem } from "@/components/ui/motion-primitives/reveal"
import Image from "next/image"

const logos = [
  { name: "RS Bhakti Husada", src: "/img/client/RSBH_REMBANG_LOGO.png" },
  {
    name: "RS Mitra Husada Pringsewu",
    src: "/img/client/RSMH_PRINGSEWU_LOGO.png",
  },
  { name: "KSUD Pringsewu", src: "/img/client/RSUD_PRINGSEWU_LOGO.png" },
  { name: "RSUD Ahmad Yani Metro", src: "/img/client/RSUDAY_METRO_LOGO.png" },
  { name: "RS Yukum Medical Centre", src: "/img/client/RSYMC_YUKUM_LOGO.png" },
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
          <Stagger className="relative flex items-center justify-between px-6 py-12">
            {logos.map((logo) => (
              <StaggerItem key={logo.name}>
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={48}
                  className="h-10 w-auto object-contain opacity-70 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </StaggerItem>
            ))}
          </Stagger>
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
