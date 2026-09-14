"use client"

import { useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"

export function CountUp({
  to,
  suffix = "",
  duration = 1.6,
  className,
}: {
  to: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return

    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, reduce])

  // reduced motion: show the final value without animating
  return (
    <span ref={ref} className={className}>
      {reduce ? to : value}
      {suffix}
    </span>
  )
}
