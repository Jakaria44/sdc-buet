"use client"

import { motion } from "framer-motion"
import { CheckCircle, Share2, X } from "lucide-react"
import { GlowingButton } from "./glowing-button"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  submissionId: string
  onShare: () => void
}

export function ConfirmationModal({ isOpen, onClose, submissionId, onShare }: ConfirmationModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-slate-900 to-blue-900 border border-cyan-500/20 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-cyan-500/20"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6"
          >
            <CheckCircle className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-cyan-50 mb-4"
          >
            Application Submitted!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cyan-100/80 mb-6"
          >
            Thank you for your interest in joining our Software Club! We'll review your application and get back to you
            soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 mb-6"
          >
            <p className="text-sm text-cyan-300/60 mb-1">Submission ID</p>
            <p className="text-cyan-100 font-mono text-sm">{submissionId}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3"
          >
            <GlowingButton onClick={onShare} className="flex-1">
              <div className="flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </div>
            </GlowingButton>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-6 py-3 bg-slate-800/50 hover:bg-slate-800/70 border border-cyan-500/30 rounded-xl text-cyan-100 transition-all duration-200"
            >
              Close
            </motion.button>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 hover:bg-slate-800/70 transition-colors"
        >
          <X className="w-4 h-4 text-cyan-400" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
