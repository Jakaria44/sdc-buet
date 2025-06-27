"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { Upload, X, FileText } from "lucide-react"

interface FormFileUploadProps {
  label: string
  file: File | null
  onChange: (file: File | null) => void
  accept?: string
  error?: string
  icon?: ReactNode
}

export function FormFileUpload({ label, file, onChange, accept, error, icon }: FormFileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    onChange(selectedFile)
  }

  const handleRemoveFile = () => {
    onChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
      <label className="block text-sm font-medium text-cyan-100">
        <div className="flex items-center gap-2">
          {icon}
          {label}
        </div>
      </label>

      <div className="relative">
        <input ref={fileInputRef} type="file" accept={accept} onChange={handleFileSelect} className="hidden" />

        {!file ? (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={`w-full p-6 border-2 border-dashed ${
              error ? "border-red-400/50" : "border-cyan-400/30"
            } rounded-3xl backdrop-blur-xl bg-slate-800/30 hover:bg-slate-800/50 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer shadow-lg shadow-cyan-500/5`}
          >
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="w-8 h-8 text-cyan-400" />
              <p className="text-cyan-100 text-sm">Click to upload file</p>
              <p className="text-cyan-300/60 text-xs">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-between p-4 backdrop-blur-xl bg-slate-800/50 border border-cyan-500/30 rounded-3xl shadow-lg shadow-cyan-500/5"
          >
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-cyan-100 text-sm font-medium">{file.name}</p>
                <p className="text-cyan-300/60 text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleRemoveFile}
              className="p-1 rounded-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
            >
              <X className="w-4 h-4 text-red-400" />
            </motion.button>
          </motion.div>
        )}

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
