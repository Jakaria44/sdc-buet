"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

interface TimelineProps {
  data: TimelineEntry[]
}

export function Timeline({ data }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="flex justify-start pt-10 md:pt-20 md:gap-10"
        >
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white border border-neutral-300" />
            </div>
            <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-cyan-100">{item.title}</h3>
          </div>

          <div className="relative pl-20 pr-4 md:pl-4 w-full">
            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-cyan-100">{item.title}</h3>
            <div className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm">
              {item.content}
            </div>
          </div>
        </motion.div>
      ))}
      <div
        style={{
          height: `${data.length * 200}px`,
        }}
        className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      >
        <motion.div
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-cyan-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          style={{
            height: "100%",
          }}
        />
      </div>
    </div>
  )
}
