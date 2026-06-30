import React, { useMemo } from 'react'

export default function ParticleCanvas({ count = 35 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 3,
      duration: 8 + Math.random() * 14,
      delay: Math.random() * 14,
      drift: (Math.random() * 60 - 30).toFixed(0) + 'px',
    }))
  }, [count])

  return (
    <div className="particle-canvas" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': p.drift,
          }}
        />
      ))}
    </div>
  )
}
