"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface HighlightTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function HighlightText({ children, className = "", delay = 0 }: HighlightTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 origin-left"
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
