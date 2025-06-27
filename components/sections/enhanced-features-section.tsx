"use client"

import { motion } from "framer-motion"
import { Code, Users, Rocket, Award, BookOpen, Globe } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { PointerHighlight } from "@/components/ui/pointer-highlight"

export function EnhancedFeaturesSection() {
  const features = [
    {
      title: "Technical Workshops",
      description:
        "Regular workshops on latest technologies, programming languages, and development frameworks led by industry experts and senior members.",
      link: "#",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Collaborative Projects",
      description:
        "Work on real-world projects with fellow members, contributing to open-source initiatives and building impressive portfolios.",
      link: "#",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Hackathons & Competitions",
      description:
        "Participate in national and international coding competitions, hackathons, and programming contests to showcase your skills.",
      link: "#",
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Industry Connections",
      description:
        "Network with alumni working in top tech companies, attend guest lectures, and get insights into industry trends and opportunities.",
      link: "#",
      icon: <Award className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Skill Development",
      description:
        "Structured learning paths for different skill levels, from beginner-friendly sessions to advanced topics in software engineering.",
      link: "#",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Global Community",
      description:
        "Connect with developers worldwide, participate in international events, and contribute to global open-source projects.",
      link: "#",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center">
            <PointerHighlight>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Why Join Us?
              </h2>
            </PointerHighlight>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-xl text-cyan-100/80 max-w-3xl mx-auto"
          >
            Discover the benefits of being part of BUET's most active software development community
          </motion.p>
        </motion.div>

        <HoverEffect items={features} />
      </div>
    </section>
  )
}
