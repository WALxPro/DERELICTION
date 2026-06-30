import React from 'react'
import './PlatformSlider.css'

const ROW_1 = ['Amazon Kindle', 'Barnes & Noble', 'Apple Books', 'Google Play Books', 'Kobo']
const ROW_2 = ['Scribd', 'OverDrive', 'Hoopla', 'Draft2Digital', 'Ingram']

function Row({ items, reverse }) {
  const loop = [...items, ...items, ...items]
  return (
    <div className={`ticker-row ${reverse ? 'reverse' : ''}`}>
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span className="ticker-item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default function PlatformSlider() {
  return (
    <div className="platform-slider">
      <Row items={ROW_1} />
      <Row items={ROW_2} reverse />
    </div>
  )
}
