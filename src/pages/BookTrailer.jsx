import React from 'react'
import { FaPlay, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import ParticleCanvas from '../components/ParticleCanvas.jsx'
import '../sections.css'

export default function BookTrailer() {
  return (
    <div>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '65vh' }}>
        <div className="hero-overlay" />
        <ParticleCanvas count={20} />
        <div className="hero-content">
          <ScrollReveal><span className="eyebrow">Visual Experience</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)' }}>WATCH THE TRAILER</h1></ScrollReveal>
          <ScrollReveal delay={180}><div className="gold-divider center" /></ScrollReveal>
          <ScrollReveal delay={240}><p className="hero-subtitle">Dereliction — Brought To Life</p></ScrollReveal>
        </div>
      </section>

      {/* OFFICIAL TRAILER */}
      <section className="section dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div className="trailer-box">
              <button className="play-button"><FaPlay /></button>
            </div>
            <h3 className="section-heading" style={{ fontSize: '1.6rem', marginTop: 30 }}>Official Book Trailer</h3>
            <p className="gold-text" style={{ marginTop: 8, fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>Coming Soon</p>
            <p className="text-secondary" style={{ marginTop: 14 }}>The official trailer is currently in production.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* SHORT FILM */}
      {/* <section className="section darker">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="section-heading">Dereliction <span className="gold">Short Film</span></h2>
            <div className="trailer-box crimson" style={{ marginTop: 36 }}>
              <button className="play-button" style={{ borderColor: 'var(--crimson)', color: '#e6a3a3' }}><FaPlay /></button>
            </div>
            <p className="text-secondary" style={{ marginTop: 20, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
              A cinematic adaptation is currently being developed.
            </p>
            <span className="pill" style={{ marginTop: 16, display: 'inline-block', borderColor: 'rgba(123,30,30,0.6)', color: '#e6a3a3' }}>
              Coming Soon
            </span>
          </ScrollReveal>
        </div>
      </section> */}
      

      {/* STAY UPDATED */}
      <section className="section dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal><h2 className="section-heading">Be The First To <span className="gold">Know</span></h2></ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-secondary" style={{ maxWidth: 520, margin: '18px auto 34px' }}>
              Follow updates about the trailer, short film and upcoming releases.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-outline"><FaFacebookF /> Facebook</a>
              <a href="#" className="btn btn-outline"><FaInstagram /> Instagram</a>
              <a href="#" className="btn btn-outline"><FaYoutube /> YouTube</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
