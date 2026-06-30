import React, { useState, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import './Accordion.css'

function AccordionItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null)

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <button className="accordion-question" onClick={onToggle}>
        <span>{item.q}</span>
        <span className="accordion-icon"><FaPlus /></span>
      </button>
      <div
        className="accordion-answer"
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px' }}
      >
        <p className="text-secondary">{item.a}</p>
      </div>
    </div>
  )
}

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
