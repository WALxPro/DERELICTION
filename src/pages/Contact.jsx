import React, { useState } from 'react'
import { FaEnvelope, FaNewspaper, FaBuilding, FaFacebookF, FaInstagram, FaYoutube, FaAmazon, FaCheckCircle } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import '../sections.css'
import './Contact.css'

const INFO_CARDS = [
  { icon: <FaEnvelope />, title: 'Email', text: 'hello@keffiersavary.com' },
  { icon: <FaNewspaper />, title: 'Media', text: 'press@keffiersavary.com' },
  { icon: <FaBuilding />, title: 'Publisher', text: 'Chicago Write' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

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
          <ScrollReveal><h1 className="hero-title" style={{ fontSize: 'clamp(1.3rem, 5vw, 3.4rem)' }}>GET IN TOUCH</h1></ScrollReveal>
          <ScrollReveal delay={100}><div className="gold-divider center" /></ScrollReveal>
          <ScrollReveal delay={160}><p className="hero-subtitle">Media, book orders, collaboration and messages</p></ScrollReveal>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left">
            <h2 className="section-heading">We Would Love To <span className="gold">Hear From You</span></h2>
            <div className="contact-info-cards">
              {INFO_CARDS.map((c) => (
                <div key={c.title} className="contact-info-card gold-card">
                  <div className="icon-circle">{c.icon}</div>
                  <div>
                    <h4>{c.title}</h4>
                    <p className="text-secondary">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="footer-socials" style={{ marginTop: 30 }}>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Amazon"><FaAmazon /></a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="contact-form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="contact-form">
                  <label>Full Name
                    <input type="text" required placeholder="Your name" />
                  </label>
                  <label>Email
                    <input type="email" required placeholder="you@example.com" />
                  </label>
                  <label>Subject
                    <input type="text" required placeholder="Subject" />
                  </label>
                  <label>Message
                    <textarea rows={5} required placeholder="Your message"></textarea>
                  </label>
                  <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 8 }}>
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="contact-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p className="text-secondary">Thank you for reaching out. We'll respond soon.</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
