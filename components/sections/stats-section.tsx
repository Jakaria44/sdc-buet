"use client"

import { motion } from "framer-motion"
import { Users, Code, Trophy, Calendar } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      number: 500,
      label: "Active Members",
      suffix: "+",
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      number: 150,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Trophy className="w-8 h-8 text-cyan-400" />,
      number: 25,
      label: "Awards Won",
      suffix: "+",
    },
    {
      icon: <Calendar className="w-8 h-8 text-cyan-400" />,
      number: 5,
      label: "Years Active",
      suffix: "",
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
            Our Impact
          </h2>
          <p className="text-xl text-cyan-100/80 max-w-3xl mx-auto">
            Numbers that showcase our growing community and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-slate-800/30 border border-cyan-500/20 rounded-xl backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold text-cyan-100 mb-2">
                <NumberTicker value={stat.number} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-cyan-300/60 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
