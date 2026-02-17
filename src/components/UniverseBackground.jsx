import { useEffect, useRef } from 'react'

export default function UniverseBackground({ theme }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 1.5
        this.opacity = Math.random() * 0.5 + 0.5
        this.velocity = {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3,
        }
        this.twinkleSpeed = Math.random() * 0.03 + 0.01
      }

      update() {
        this.x += this.velocity.x
        this.y += this.velocity.y

        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        this.opacity += (Math.random() - 0.5) * this.twinkleSpeed
        this.opacity = Math.max(0.2, Math.min(1, this.opacity))
      }

      draw() {
        ctx.fillStyle = theme === 'dark'
          ? `rgba(255, 255, 255, ${this.opacity})`
          : `rgba(59, 130, 246, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize stars
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Star())
    }

    const animate = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      if (theme === 'dark') {
        gradient.addColorStop(0, 'rgba(17, 24, 39, 0.5)')
        gradient.addColorStop(1, 'rgba(30, 41, 59, 0.5)')
      } else {
        gradient.addColorStop(0, 'rgba(240, 249, 255, 0.3)')
        gradient.addColorStop(1, 'rgba(224, 242, 254, 0.3)')
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
