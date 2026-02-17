"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code2, Zap, Sparkles, Cpu, Database, Globe } from "lucide-react"

const icons = [Code2, Zap, Sparkles, Cpu, Database, Globe]

const FloatingIcon = ({ Icon, delay = 0, duration = 8, isDark = false }) => {
  const [position, setPosition] = useState({
    x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
    y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
  })

  return (
    <motion.div
      initial={{
        x: position.x,
        y: position.y,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: [position.x, position.x + (Math.random() - 0.5) * 200],
        y: [position.y, position.y + (Math.random() - 0.5) * 200],
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="absolute pointer-events-none"
    >
      <div
        className={`p-3 rounded-full backdrop-blur-sm border ${
          isDark ? "bg-white/5 border-white/10 text-white/60" : "bg-black/5 border-black/10 text-black/40"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>
    </motion.div>
  )
}

export default function FloatingElements({ isDark = false }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {icons.map((Icon, index) => (
        <FloatingIcon key={index} Icon={Icon} delay={index * 2} duration={8 + index} isDark={isDark} />
      ))}
    </div>
  )
}
