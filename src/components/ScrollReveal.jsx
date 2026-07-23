import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  as: Tag = 'div',
  intensity = 1,
  blur = false,
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const directionMap = {
    up: { y: 40 * intensity, opacity: 0 },
    down: { y: -40 * intensity, opacity: 0 },
    left: { x: -60 * intensity, opacity: 0 },
    right: { x: 60 * intensity, opacity: 0 },
  }

  const initial = prefersReducedMotion ? { opacity: 1, y: 0, x: 0, scale: 1 } : { ...directionMap[direction], scale: 0.97, filter: blur ? 'blur(12px)' : 'blur(0px)' }
  const animate = prefersReducedMotion ? { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 1, y: 0, x: 0, scale: 1, filter: 'blur(0px)' }

  return (
    <motion.div
      ref={ref}
      as={Tag}
      className={className}
      initial={initial}
      animate={visible ? animate : initial}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
