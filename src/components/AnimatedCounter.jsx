import React, { useEffect, useRef, useState } from 'react'

export default function AnimatedCounter({ target, suffix = '', duration = 1800, infinity = false }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started || infinity) return
    let startTime = null
    function step(ts) {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [started, target, duration, infinity])

  return (
    <span ref={ref} className="animated-counter">
      {infinity ? (started ? '∞' : '0') : value}{suffix}
    </span>
  )
}
