import React from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal.jsx'
import Accordion from '../components/Accordion.jsx'
import '../sections.css'

const FAQ_ITEMS = [
  { q: 'Where can I buy Dereliction?', a: 'Available on Amazon, Barnes & Noble, Apple Books, Google Play Books, Kobo, and other platforms.' },
  { q: 'Is the book available in print?', a: 'Yes, paperback and digital formats are available.' },
  { q: 'Who is Keffier Savary?', a: 'Author and military veteran sharing his journey through memoir storytelling.' },
  { q: 'What genre is Dereliction?', a: 'Memoir-novel combining personal experience and narrative.' },
  { q: 'Are more books coming?', a: 'Yes, upcoming works are planned.' },
  { q: 'How can I contact the author?', a: 'Use the contact page.' },
  { q: 'Is the trailer available?', a: 'Coming soon.' },
  { q: 'Can reviewers request copies?', a: 'Yes through contact form.' },
]

export default function FAQ() {
  return (
    <div>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '45vh' }}>
        <div className="hero-overlay" />
        <div className="hero-depth-layer">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </div>
        <div className="hero-content">
          <ScrollReveal><h1 className="hero-title" style={{ fontSize: 'clamp(1rem, 6vw, 4.2rem)' }}> QUESTIONS</h1></ScrollReveal>
          <ScrollReveal delay={100}><div className="gold-divider center" /></ScrollReveal>
          <ScrollReveal delay={160}><p className="hero-subtitle">Everything about Dereliction and Keffier Savary</p></ScrollReveal>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="section dark">
        <div className="container">
          <ScrollReveal direction="up"><Accordion items={FAQ_ITEMS} /></ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section darker">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-box">
              <h2 className="section-heading">Still Have <span className="gold">Questions?</span></h2>
              <Link to="/contact" className="btn btn-gold" style={{ marginTop: 30, display: 'inline-flex' }}>Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
