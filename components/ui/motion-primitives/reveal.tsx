"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

// subtle-profesional: easeOutQuart, no bounce
const EASE = [0.21, 0.47, 0.32, 0.98] as const

const VIEWPORT = { once: true, margin: "-80px" } as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  scale,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  scale?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y, ...(scale && { scale }) }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  y = 16,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
