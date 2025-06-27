"use client"

import { motion } from "framer-motion"

interface FormCheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function FormCheckbox({ label, checked, onChange }: FormCheckboxProps) {
  return (
    <motion.label
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center space-x-3 cursor-pointer p-3 rounded-full backdrop-blur-xl bg-slate-800/30 border border-cyan-500/20 hover:bg-slate-800/50 hover:border-cyan-400/30 transition-all duration-200 shadow-lg shadow-cyan-500/5"
    >
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only" />
        <div
          className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
            checked
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent"
              : "border-cyan-400/40 bg-transparent"
          }`}
        >
          {checked && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 text-white absolute top-0.5 left-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </div>
      </div>
      <span className="text-cyan-100 text-sm">{label}</span>
    </motion.label>
  )
}
