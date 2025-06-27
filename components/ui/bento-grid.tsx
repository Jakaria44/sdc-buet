"use client"

import type React from "react"

interface BentoGridProps {
  className?: string
  children: React.ReactNode
}

export function BentoGrid({ className = "", children }: BentoGridProps) {
  return <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>{children}</div>
}
