"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface NumberTickerProps {
  value: number
  direction?: "up" | "down"
  delay?: number
  className?: string
}

export function NumberTicker({ value, direction = "up", delay = 0, className = "" }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value)
      }, delay * 1000)
    }
  }, [motionValue, isInView, delay, value, direction])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }, [springValue])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
    </motion.span>
  )
}
