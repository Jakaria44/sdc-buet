"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"

interface FormInputStandaloneProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  placeholders: string[]
  type?: string
  icon?: ReactNode
}

export function FormInputStandalone({
  label,
  value,
  onChange,
  error,
  required = false,
  placeholders,
  type = "text",
  icon,
}: FormInputStandaloneProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    if (!isFocused && !value) {
      const interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [placeholders.length, isFocused, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-2"
    >
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label} {required && <span className="text-red-400">*</span>}
        </div>
      </label>
      <div className="relative">
        <motion.input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholders[currentPlaceholder]}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full px-4 py-3 bg-slate-800/50 border ${
            error ? "border-red-400/50" : "border-cyan-500/30"
          } rounded-xl text-cyan-50 placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 backdrop-blur-sm`}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-red-300 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
