import Image from "next/image"
import { cn } from "@/lib/utils"

// white Enola logo (public/img/red-white.svg) — for use on dark surfaces
export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/img/red-white.svg"
      alt="Enola"
      width={120}
      height={32}
      className={cn("h-7 w-auto", className)}
      priority
    />
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/img/red-white.svg"
      alt="Enola"
      width={120}
      height={32}
      className={cn("h-7 w-auto", className)}
    />
  )
}
