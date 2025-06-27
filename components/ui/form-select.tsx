"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Option {
  value: string
  label: string
}

interface FormSelectProps {
  label: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  error?: string
  required?: boolean
  icon?: ReactNode
}

export function FormSelect({ label, value, onChange, options, error, required = false, icon }: FormSelectProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label} {required && <span className="text-red-400">*</span>}
        </div>
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 backdrop-blur-xl bg-slate-800/50 border ${
            error ? "border-red-400/50" : "border-cyan-500/30"
          } rounded-full text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/5 appearance-none cursor-pointer`}
        >
          <option value="" className="bg-slate-800">
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-800">
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
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
