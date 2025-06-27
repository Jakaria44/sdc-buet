"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Code, Rocket } from "lucide-react"
import { GlowingButton } from "@/components/ui/glowing-button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="join" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <CardSpotlight className="relative overflow-hidden">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                    <Users className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                    <Code className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                    <Rocket className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Ready to Join Us?
              </h2>

              <p className="text-xl text-cyan-100/80 mb-8 leading-relaxed">
                Take the first step towards an exciting journey in software development. Join BUET's most vibrant tech
                community and unlock your potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/form">
                  <GlowingButton className="group">
                    <div className="flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlowingButton>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-100 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>

              <div className="mt-8 text-cyan-300/60">
                <p className="text-sm">Applications are open year-round • No prior experience required</p>
              </div>
            </motion.div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  )
}
