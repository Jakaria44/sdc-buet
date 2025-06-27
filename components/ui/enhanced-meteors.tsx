"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const EnhancedMeteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const [meteors, setMeteors] = useState<
    Array<{
      id: number
      delay: number
      duration: number
      left: number
      size: number
      color: string
    }>
  >([])

  useEffect(() => {
    const meteorCount = number || 20
    const newMeteors = Array.from({ length: meteorCount }, (_, idx) => ({
      id: idx,
      delay: Math.random() * 5,
      duration: Math.floor(Math.random() * (10 - 5) + 5),
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "#06b6d4" : "#3b82f6",
    }))
    setMeteors(newMeteors)
  }, [number])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className={cn("absolute h-0.5 w-0.5 rotate-[45deg] rounded-full shadow-[0_0_0_1px_#ffffff10]", className)}
          style={{
            backgroundColor: meteor.color,
            left: `${meteor.left}%`,
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
          }}
          initial={{
            top: "-40px",
            opacity: 0,
          }}
          animate={{
            top: "100vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div
            className="absolute top-1/2 h-[1px] w-[50px] -translate-y-[50%] transform bg-gradient-to-r to-transparent"
            style={{
              backgroundImage: `linear-gradient(to right, ${meteor.color}, transparent)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
