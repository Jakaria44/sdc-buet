"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
  className?: string
}

export function GlowingButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: GlowingButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        boxShadow: disabled ? "none" : "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
