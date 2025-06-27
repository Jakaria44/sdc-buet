"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FormInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  placeholder?: string
  type?: string
  icon?: ReactNode
}

export function FormInput({
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  type = "text",
  icon,
}: FormInputProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label} {required && <span className="text-red-400">*</span>}
        </div>
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 backdrop-blur-xl bg-slate-800/50 border ${
            error ? "border-red-400/50" : "border-cyan-500/30"
          } rounded-full text-cyan-50 placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/5`}
        />
        {error && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-red-300 text-sm mt-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
