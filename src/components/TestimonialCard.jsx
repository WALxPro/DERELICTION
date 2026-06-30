import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import './TestimonialCard.css'

export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="testimonial-card gold-card">
      <FaQuoteLeft className="quote-icon" />
      <p className="testimonial-quote">{quote}</p>
      <div className="testimonial-stars">
        {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
      </div>
      <div className="testimonial-meta">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-role text-secondary">{role}</span>
      </div>
    </div>
  )
}
