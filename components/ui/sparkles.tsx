"use client"

import { useEffect, useRef, useState } from "react"

interface SparklesProps {
  id: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export function SparklesCore({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.0,
  particleDensity = 120,
  className = "",
  particleColor = "#FFF",
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
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

    // Initialize particles
    const initParticles = () => {
      const newParticles = []
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random(),
          fadeSpeed: Math.random() * 0.02 + 0.005,
        })
      }
      setParticles(newParticles)
    }

    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          particle.x += particle.speedX
          particle.y += particle.speedY

          // Update opacity
          particle.opacity += particle.fadeSpeed
          if (particle.opacity >= 1 || particle.opacity <= 0) {
            particle.fadeSpeed = -particle.fadeSpeed
          }

          // Wrap around edges
          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          // Draw particle
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particleColor
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          return particle
        }),
      )

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [particleDensity, minSize, maxSize, particleColor])

  return <canvas ref={canvasRef} id={id} className={className} style={{ background }} />
}
