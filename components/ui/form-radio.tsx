"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface Option {
  value: string
  label: string
}

interface FormRadioProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  options: Option[]
  error?: string
  required?: boolean
  icon?: ReactNode
}

export function FormRadio({ label, name, value, onChange, options, error, required = false, icon }: FormRadioProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label} {required && <span className="text-red-400">*</span>}
        </div>
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <motion.label
            key={option.value}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3 cursor-pointer p-3 rounded-full backdrop-blur-xl bg-slate-800/30 border border-cyan-500/20 hover:bg-slate-800/50 hover:border-cyan-400/30 transition-all duration-200 shadow-lg shadow-cyan-500/5"
          >
            <div className="relative">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange(e.target.value)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  value === option.value
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent"
                    : "border-cyan-400/40 bg-transparent"
                }`}
              >
                {value === option.value && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-white rounded-full absolute top-1.5 left-1.5"
                  />
                )}
              </div>
            </div>
            <span className="text-cyan-100 text-sm">{option.label}</span>
          </motion.label>
        ))}
      </div>
      {error && (
        <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 text-sm">
          {error}
        </motion.p>
      )}
    </motion.div>
  )
}
