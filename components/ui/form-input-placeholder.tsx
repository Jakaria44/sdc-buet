"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"

interface FormInputPlaceholderProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  placeholders: string[]
  type?: string
  icon?: ReactNode
}

export function FormInputPlaceholder({
  label,
  value,
  onChange,
  error,
  required = false,
  placeholders,
  type = "text",
  icon,
}: FormInputPlaceholderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label} {required && <span className="text-red-400">*</span>}
        </div>
      </label>
      <div className="relative">
        <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={handleSubmit} />
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
