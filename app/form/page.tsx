"use client"

import { SoftwareClubForm } from "@/components/software-club-form"
import { Navbar } from "@/components/ui/navbar"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { motion } from "framer-motion"
import { Code } from "lucide-react"

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-grid-cyan/[0.03] bg-[size:60px_60px]" />
      <div className="relative">
        <Navbar />

        {/* Header Section - Only one pointer highlight for main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto px-4 pt-24 pb-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6"
          >
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 text-sm">Join Our Community</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
             <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h1>
              </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Fill out the form below to become part of BUET's most vibrant software development community
          </motion.p> 
            <p className="text-cyan-300/80">
              No prior experience required • Applications open year-
            </p> 
        </motion.div>

        <SoftwareClubForm />
      </div>
    </div>
  )
}
