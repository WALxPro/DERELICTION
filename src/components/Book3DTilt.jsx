import React, { useRef } from 'react'
import cover from '../assets/book_cover.webp'
import './Book3DTilt.css'

export default function Book3DTilt({ width = 320 }) {
  const ref = useRef(null)
  const cardRef = useRef(null)
  const frameRef = useRef(0)

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    frameRef.current = requestAnimationFrame(() => {
      if (cardRef.current) cardRef.current.style.transform = `perspective(1200px) rotateY(${x * 26}deg) rotateX(${-y * 26}deg) scale(1.03)`
    })
  }

  function handleLeave() {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)'
  }

  return (
    <div
      className="book-tilt-wrap"
      style={{ width }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div ref={cardRef} className="book-tilt">
        <img src={cover} alt="Dereliction book cover" />
        <div className="book-shimmer" />
        <div className="book-spine" />
      </div>
      <div className="book-aura" />
    </div>
  )
}
