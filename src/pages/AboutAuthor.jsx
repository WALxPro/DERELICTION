import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import ParticleCanvas from '../components/ParticleCanvas.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import portrait2 from '../assets/author_prison.jpg'
import portrait1 from '../assets/author_portrait.jpg'
import SocailIcon from '../components/SocailIcon.jsx'
import '../sections.css'

export default function AboutAuthor() {
  return (
    <div>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-overlay" />
        <ParticleCanvas count={25} />
        <div className="hero-depth-layer">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </div>
        <div className="hero-content">
          <ScrollReveal><span className="eyebrow">Keffier Savary</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="hero-title" style={{ fontSize: 'clamp(1.3rem, 6vw, 4.2rem)' }}>ABOUT THE AUTHOR</h1></ScrollReveal>
          <ScrollReveal delay={200}><div className="gold-divider center" /></ScrollReveal>
          <ScrollReveal delay={260}>
            <p className="hero-subtitle" style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
              "The Man Behind Dereliction"
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* PROFILE */}
      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left">
            <div style={{ position: 'relative' }}>
              <div className="framed-image"><img src={portrait2} alt="Keffier Savary portrait" /></div>
              <div className="framed-image small-overlap"><img src={portrait1} alt="Keffier Savary" /></div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="eyebrow">The Full Story</span>
            <h2 className="section-heading" style={{ margin: '14px 0' }}>Keffier Savary</h2>
            <div className="gold-divider" />
            <p className="text-secondary" style={{ lineHeight: 1.9, marginBottom: 18 }}>
              Born in Kingston and raised between Trench Town, rural Jamaica, and Miami, Keffier
              Savary's story explores survival, identity, memory, and redemption.
            </p>
            <p className="text-secondary" style={{ lineHeight: 1.9, marginBottom: 18 }}>
              He served in the military before his life changed direction, leading him into a
              journey of reflection, truth, and transformation.
            </p>
            <p className="text-secondary" style={{ lineHeight: 1.9 }}>
              Dereliction blends memoir, personal experience, and cinematic storytelling to explore
              choices, consequences, and what it means to search for meaning after everything changes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS */}
      <section className="section darker">
        <div className="container grid-3">
          {[
            { target: 35, suffix: '+', label: 'Global Platforms' },
            { target: 1, suffix: '', label: 'Debut Book' },
            { target: 0, suffix: '', label: 'Stories To Tell', infinity: true },
          ].map((s, index) => (
            <ScrollReveal key={s.label} delay={index * 70} direction="up">
              <div className="info-card gold-card">
                <h3 className="section-heading" style={{ fontSize: '2.4rem', marginBottom: 8 }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} infinity={s.infinity} />
                </h3>
                <p className="text-secondary">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WRITING PHILOSOPHY */}
      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left">
            <p className="quote-text" style={{ textAlign: 'left' }}>
              "Truth survives when someone has the courage to write it."
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="gold-card" style={{ padding: '40px 36px', borderTop: '3px solid var(--gold)' }}>
              <h4 className="section-heading" style={{ fontSize: '1.3rem', marginBottom: 16 }}>The Writing Process</h4>
              <p className="text-secondary" style={{ lineHeight: 1.9 }}>
                Keffier writes with honesty, reflection and cinematic detail. His work focuses on
                human choices, struggle, identity and redemption.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONNECT */}
      <section className="section darker">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal direction="up"><h2 className="section-heading">Follow The <span className="gold">Journey</span></h2></ScrollReveal>
          <ScrollReveal direction="up">
            <p className="text-secondary" style={{ maxWidth: 520, margin: '18px auto 34px' }}>
              Follow Keffier's writing, future releases and updates.
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
