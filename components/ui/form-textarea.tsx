"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FormTextareaProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  placeholder?: string
  rows?: number
  icon?: ReactNode
}

export function FormTextarea({
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 4,
  icon,
}: FormTextareaProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label} {required && <span className="text-red-400">*</span>}
        </div>
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-4 py-3 backdrop-blur-xl bg-slate-800/50 border ${
            error ? "border-red-400/50" : "border-cyan-500/30"
          } rounded-3xl text-cyan-50 placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/5 resize-vertical`}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-400 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
