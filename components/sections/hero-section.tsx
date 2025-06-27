"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Users, Zap } from "lucide-react"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { GlowingButton } from "@/components/ui/glowing-button"

export function HeroSection() {
  const words = [
    { text: "Build" },
    { text: "the" },
    { text: "Future" },
    { text: "with" },
    { text: "Code", className: "text-cyan-400" },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <BackgroundBeamsWithCollision className="min-h-screen">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Code className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm">Software Development Club</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                BUET SDC
              </span>
            </h1>
          </motion.div>

          <div className="mb-8">
            <TypewriterEffect words={words} className="text-2xl md:text-4xl" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-cyan-100/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join Bangladesh University of Engineering and Technology's premier software development community. Learn,
            build, and innovate with fellow developers while mastering cutting-edge technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <GlowingButton className="group">
              <a href="#join" className="flex items-center">
                Join the Club
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </GlowingButton>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-cyan-500/30 text-cyan-100 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, title: "500+ Members", desc: "Active developers" },
              { icon: Code, title: "50+ Projects", desc: "Built together" },
              { icon: Zap, title: "Weekly Events", desc: "Learning sessions" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-slate-800/30 border border-cyan-500/20 rounded-xl backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-cyan-100 mb-2">{stat.title}</h3>
                <p className="text-cyan-300/60">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  )
}
