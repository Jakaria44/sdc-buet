"use client"

import { motion } from "framer-motion"
import { LampContainer } from "@/components/ui/lamp"

export function InnovationSection() {
  return (
    <section className="relative">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-cyan-300 to-blue-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Innovation <br /> Starts Here
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-cyan-100/80 text-center text-lg max-w-2xl mx-auto leading-relaxed"
        >
          At BUET Software Development Club, we don't just follow trends – we create them. Join us in building the
          future of technology, one line of code at a time.
        </motion.p>
      </LampContainer>
    </section>
  )
}
