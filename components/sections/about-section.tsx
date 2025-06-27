"use client"

import { motion } from "framer-motion"
import { Code2, Users, Lightbulb, Trophy } from "lucide-react"
import { CardSpotlight } from "@/components/ui/card-spotlight"

export function AboutSection() {
  const features = [
    {
      title: "Learn & Grow",
      description:
        "Master programming languages, frameworks, and development methodologies through hands-on workshops and mentorship programs.",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      className: "md:col-span-2",
    },
    {
      title: "Build Together",
      description: "Collaborate on real-world projects and contribute to open-source initiatives.",
      icon: <Users className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Innovate",
      description: "Participate in hackathons, coding competitions, and innovation challenges.",
      icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Achieve Excellence",
      description: "Win competitions, secure internships, and build a strong portfolio for your career.",
      icon: <Trophy className="w-6 h-6 text-cyan-400" />,
      className: "md:col-span-2",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            About BUET SDC
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto leading-relaxed">
            The Software Development Club at Bangladesh University of Engineering and Technology is a vibrant community
            of passionate developers, innovators, and tech enthusiasts dedicated to advancing software engineering
            excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={feature.className || ""}
            >
              <CardSpotlight className="h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-cyan-100">{feature.title}</h3>
                </div>
                <p className="text-cyan-100/70 leading-relaxed">{feature.description}</p>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <CardSpotlight className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-100 mb-4">Our Mission</h3>
            <p className="text-lg text-cyan-100/80 leading-relaxed">
              To foster a collaborative environment where BUET students can enhance their software development skills,
              work on innovative projects, and prepare for successful careers in the tech industry. We believe in
              learning by doing, sharing knowledge, and building solutions that make a difference.
            </p>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  )
}
