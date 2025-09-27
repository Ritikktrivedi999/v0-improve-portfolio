"use client"

import { useEffect, useRef } from "react"

export default function UniverseBackground({ isDark = false }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = []
    const shootingStars = []
    const nebulaClouds = []

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    // Create nebula clouds with theme-aware colors
    for (let i = 0; i < 5; i++) {
      const hue = isDark ? Math.random() * 60 + 200 : Math.random() * 60 + 200
      const saturation = isDark ? 70 : 50
      const lightness = isDark ? 60 : 80

      nebulaClouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 200 + 100,
        opacity: isDark ? Math.random() * 0.15 + 0.05 : Math.random() * 0.08 + 0.02,
        drift: Math.random() * 0.5 + 0.2,
        color: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      })
    }

    // Create shooting stars
    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        opacity: 1,
        angle: (Math.random() * Math.PI) / 4 + Math.PI / 4,
      })
    }

    let animationId
    let lastShootingStar = 0

    function animate(currentTime) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw nebula clouds
      nebulaClouds.forEach((cloud) => {
        const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.radius)
        gradient.addColorStop(0, cloud.color.replace(")", `, ${cloud.opacity})`).replace("hsl", "hsla"))
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2)
        ctx.fill()

        cloud.x += cloud.drift * 0.1
        cloud.y += cloud.drift * 0.05

        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius
      })

      // Draw stars with theme-aware colors
      stars.forEach((star) => {
        star.opacity += Math.sin(currentTime * star.twinkleSpeed) * 0.01
        star.opacity = Math.max(0.1, Math.min(1, star.opacity))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)

        if (isDark) {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`
        } else {
          ctx.fillStyle = `rgba(59, 130, 246, ${star.opacity * 0.4})`
        }
        ctx.fill()

        // Add sparkle effect for larger stars
        if (star.radius > 1.5) {
          if (isDark) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.5})`
          } else {
            ctx.strokeStyle = `rgba(59, 130, 246, ${star.opacity * 0.3})`
          }
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(star.x - star.radius * 2, star.y)
          ctx.lineTo(star.x + star.radius * 2, star.y)
          ctx.moveTo(star.x, star.y - star.radius * 2)
          ctx.lineTo(star.x, star.y + star.radius * 2)
          ctx.stroke()
        }
      })

      // Create shooting stars occasionally
      if (currentTime - lastShootingStar > 3000 + Math.random() * 5000) {
        createShootingStar()
        lastShootingStar = currentTime
      }

      // Draw shooting stars with theme-aware colors
      shootingStars.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length,
        )

        if (isDark) {
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        } else {
          gradient.addColorStop(0, `rgba(59, 130, 246, ${star.opacity})`)
        }
        gradient.addColorStop(1, "transparent")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x - Math.cos(star.angle) * star.length, star.y - Math.sin(star.angle) * star.length)
        ctx.stroke()

        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.opacity -= 0.01

        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1)
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
