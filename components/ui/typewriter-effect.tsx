"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Word {
  text: string
  className?: string
}

interface TypewriterEffectProps {
  words: Word[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({ words, className = "", cursorClassName = "" }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const fullText = word.text

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length + 1))
          if (currentText === fullText) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <div className={`inline-block ${className}`}>
      <span className={words[currentWordIndex]?.className || "text-cyan-100"}>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className={`inline-block w-0.5 h-8 bg-cyan-400 ml-1 ${cursorClassName}`}
      />
    </div>
  )
}
