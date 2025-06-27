"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { Meteors } from "@/components/ui/meteors"

export function ShowcaseSection() {
  const projects = [
    {
      title: "BUET Course Planner",
      description:
        "An intelligent course planning system that helps students optimize their academic journey with AI-powered recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Python"],
      stars: 124,
      forks: 32,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Campus Navigator",
      description: "AR-powered navigation app for BUET campus with real-time location tracking and interactive maps.",
      tech: ["React Native", "ARCore", "Firebase"],
      stars: 89,
      forks: 21,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Code Review Bot",
      description:
        "Automated code review system using machine learning to provide intelligent feedback on student submissions.",
      tech: ["Python", "TensorFlow", "Docker", "FastAPI"],
      stars: 156,
      forks: 45,
      image: "/placeholder.svg?height=200&width=300",
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
            Project Showcase
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Discover amazing projects built by our talented community members
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-30" />
                <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-800/30 backdrop-blur-sm p-6 shadow-xl hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-500/40">
                    <ExternalLink className="h-2 w-2 text-cyan-400" />
                  </div>

                  <h3 className="relative z-50 mb-4 text-xl font-bold text-cyan-100 group-hover:text-cyan-50 transition-colors">
                    {project.title}
                  </h3>

                  <p className="relative z-50 mb-4 text-sm font-normal text-cyan-100/70 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="relative z-50 mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-md border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="relative z-50 flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4 text-cyan-300/60 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">View</span>
                    </button>
                  </div>
                  <Meteors number={10} />
                </div>
              </div> 
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
