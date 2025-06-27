"use client"

import { motion } from "framer-motion"
import { Code, Users, Rocket, Award, BookOpen, Globe } from "lucide-react"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export function FeaturesSection() {
  const features = [
    {
      title: "Technical Workshops",
      description:
        "Regular workshops on latest technologies, programming languages, and development frameworks led by industry experts and senior members.",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Collaborative Projects",
      description:
        "Work on real-world projects with fellow members, contributing to open-source initiatives and building impressive portfolios.",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Hackathons & Competitions",
      description:
        "Participate in national and international coding competitions, hackathons, and programming contests to showcase your skills.",
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Industry Connections",
      description:
        "Network with alumni working in top tech companies, attend guest lectures, and get insights into industry trends and opportunities.",
      icon: <Award className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Skill Development",
      description:
        "Structured learning paths for different skill levels, from beginner-friendly sessions to advanced topics in software engineering.",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Global Community",
      description:
        "Connect with developers worldwide, participate in international events, and contribute to global open-source projects.",
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
    },
  ]

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
            Why Join Us?
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Discover the benefits of being part of BUET's most active software development community
          </p>
        </motion.div>

        <HoverEffect items={features} />
      </div>
    </section>
  )
}
