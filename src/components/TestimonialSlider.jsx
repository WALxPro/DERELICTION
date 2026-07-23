import React, { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import TestimonialCard from './TestimonialCard'
import './TestimonialSlider.css'

export default function TestimonialSlider({ testimonials, autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)
  const total = testimonials.length

  const goTo = (index) => setCurrent((index + total) % total)
  const nextSlide = () => goTo(current + 1)
  const prevSlide = () => goTo(current - 1)

  useEffect(() => {
    if (!autoPlay) return
    timerRef.current = setInterval(nextSlide, interval)
    return () => clearInterval(timerRef.current)
  }, [current, autoPlay, interval])

  const pause = () => clearInterval(timerRef.current)
  const resume = () => {
    if (autoPlay) timerRef.current = setInterval(nextSlide, interval)
  }

  // position of each card relative to current: -1 = left, 0 = center, 1 = right
  const getPosition = (i) => {
    let diff = i - current
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <div className="testimonial-slider" onMouseEnter={pause} onMouseLeave={resume}>
      <div className="slider-track">
        {testimonials.map((t, i) => {
          const pos = getPosition(i)
          let className = 'slide'
          if (pos === 0) className += ' center'
          else if (pos === -1 || pos === total - 1) className += ' left'
          else if (pos === 1 || pos === -(total - 1)) className += ' right'
          else className += ' hidden'

          return (
            <div key={t.name} className={className} onClick={() => pos !== 0 && goTo(i)}>
              <TestimonialCard {...t} />
            </div>
          )
        })}
      </div>

      <div className="slider-controls">
        <button className="slider-arrow" onClick={prevSlide} aria-label="Previous">
          <FaChevronLeft />
        </button>
        <div className="slider-dots">
          {testimonials.map((_, i) => (
            <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
          ))}
        </div>
        <button className="slider-arrow" onClick={nextSlide} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}