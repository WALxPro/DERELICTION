import React from 'react'
import ScrollReveal from './ScrollReveal.jsx'
import './Timeline.css'

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      <div className="timeline-line" />
      {items.map((item, i) => (
        <ScrollReveal
          key={i}
          direction={i % 2 === 0 ? 'left' : 'right'}
          className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="timeline-dot" />
          <div className="timeline-card gold-card">
            <span className="timeline-label">{item.label}</span>
            <h4>{item.title}</h4>
            <p className="text-secondary">{item.text}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
