import React, { useRef, useState } from 'react'
import cover from '../assets/book_cover.png'
import './Book3DTilt.css'

export default function Book3DTilt({ width = 320 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({
      transform: `perspective(1200px) rotateY(${x * 26}deg) rotateX(${-y * 26}deg) scale(1.03)`,
    })
  }

  function handleLeave() {
    setStyle({ transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)' })
  }

  return (
    <div
      className="book-tilt-wrap"
      style={{ width }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="book-tilt" style={style}>
        <img src={cover} alt="Dereliction book cover" />
        <div className="book-shimmer" />
        <div className="book-spine" />
      </div>
      <div className="book-aura" />
    </div>
  )
}
