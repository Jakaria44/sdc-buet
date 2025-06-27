"use client"
import { cn } from "@/lib/utils"
import React, { useRef } from "react"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    const startTime = Date.now()

    const animate = () => {
      const currentTime = Date.now()
      const elapsed = (currentTime - startTime) / 1000

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const dotSize = 3
      const spacing = 20

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const opacity = Math.sin(elapsed * animationSpeed + x * 0.01 + y * 0.01) * 0.5 + 0.5
          const color = colors[0] || [0, 255, 255]

          ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity * 0.6})`
          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [animationSpeed, colors])

  return (
    <div className={cn("h-full relative bg-transparent w-full", containerClassName)}>
      <canvas ref={canvasRef} className="w-full h-full" />
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
