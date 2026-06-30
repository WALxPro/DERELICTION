import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClass = direction === 'left' ? 'from-left' : direction === 'right' ? 'from-right' : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${dirClass} ${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
