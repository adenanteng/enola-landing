import { cn } from "@/lib/utils"

export type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  /** Seconds for one full loop of the content. Tune per usage. */
  duration?: number
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 40,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "animate-marquee flex w-max",
          reverse && "[animation-direction:reverse]"
        )}
        style={
          {
            gap: `${gap}px`,
            "--marquee-duration": `${duration}s`,
            "--marquee-gap": `${gap}px`,
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  )
}
