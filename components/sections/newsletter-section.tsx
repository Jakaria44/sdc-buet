"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Bell, Users } from "lucide-react"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const placeholders = [
    "Enter your email to stay updated...",
    "Get notified about workshops...",
    "Join our developer community...",
    "Never miss a hackathon...",
    "Stay connected with BUET SDC...",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    // Handle newsletter signup
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Get the latest updates on workshops, hackathons, and tech events directly in your inbox
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <CardSpotlight className="text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  <Bell className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-cyan-100 mb-4">Join Our Newsletter</h3>
            <p className="text-cyan-100/70 mb-8 max-w-2xl mx-auto">
              Be the first to know about upcoming events, workshops, and opportunities. Join over 1000+ developers who
              trust us with their inbox.
            </p>

            <div className="max-w-md mx-auto">
              <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
            </div>

            <div className="mt-6 text-cyan-300/60 text-sm">
              <p>No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  )
}
