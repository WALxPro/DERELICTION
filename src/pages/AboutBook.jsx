import React from 'react'
import { FaAmazon, FaShoppingCart, FaShieldAlt, FaMask, FaWater, FaDove, FaFingerprint, FaBalanceScale, FaPray, FaBrain } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import PlatformSlider from '../components/PlatformSlider.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import cover from '../assets/book_cover_full.webp'
import '../sections.css'
import TestimonialSlider from '../components/TestimonialSlider.jsx'

const DETAILS = [
  { label: 'Genre', value: 'Memoir-Novel' },
  { label: 'Format', value: 'Print + eBook' },
  { label: 'Author', value: 'Keffier Savary' },
  { label: 'Release', value: '2025' },
  { label: 'Platforms', value: '35+' },
  { label: 'Publisher', value: 'Chicago Write' },
]

const CORE = [
  { icon: <FaShieldAlt />, title: 'Duty', text: 'A commitment that shaped every decision that followed.' },
  { icon: <FaMask />, title: 'Betrayal', text: 'The moment trust in the system collapsed without warning.' },
  { icon: <FaWater />, title: 'Survival', text: 'Holding on through what should have broken him.' },
  { icon: <FaDove />, title: 'Redemption', text: 'Rebuilding identity from the wreckage of what was lost.' },
]

const THEMES = [
  { icon: <FaFingerprint />, title: 'Identity' },
  { icon: <FaBalanceScale />, title: 'Truth' },
  { icon: <FaPray />, title: 'Faith' },
  { icon: <FaBrain />, title: 'Human Choices' },
]

const TESTIMONIALS = [
  { quote: 'Every chapter hits with the weight of lived truth.', name: 'Reader Review', role: 'Verified Purchase' },
  { quote: 'A memoir that earns every page of its honesty.', name: 'Book Critic', role: 'Independent Review' },
  { quote: 'I felt every betrayal and every act of survival.', name: 'Veteran Reader', role: 'Community Review' },
]

export default function AboutBook() {
  return (
    <div>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '100vh' }}>
        <div className="hero-bg"  />
        <div className="hero-overlay" />
        <div className="hero-depth-layer">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </div>
        <div className="hero-content">
          <ScrollReveal><span className="hero-badge">The Book</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="hero-title">DERELICTION</h1></ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="hero-subtitle">One Veteran's True Story of Duty,<br />Betrayal and Fighting Back</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="hero-buttons">
              <a href="#" className="btn btn-gold"><FaAmazon /> Buy on Amazon</a>
              <a href="#" className="btn btn-outline"><FaShoppingCart /> Buy Directly</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BOOK OVERVIEW */}
      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left">
            <div className="framed-image"><img src={cover} alt="Dereliction book cover" /></div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="section-heading">More Than A <span className="gold">Prison Story</span></h2>
            <p className="text-secondary" style={{ lineHeight: 1.9, margin: '20px 0' }}>
              Dereliction is a raw, deeply personal memoir-novel exploring survival, memory, choices
              and consequence — a story that earns its honesty one chapter at a time.
            </p>
            <div className="pill-row">
              <span className="pill">Memoir</span>
              <span className="pill">True Story</span>
              <span className="pill">Biography</span>
              <span className="pill">Survival</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="section darker">
        <div className="container grid-6">
          {DETAILS.map((d, i) => (
            <ScrollReveal key={d.label} delay={i * 70} direction="up">
              <div className="info-card gold-card">
                <span className="eyebrow">{d.label}</span>
                <h4 style={{ marginTop: 10 }}>{d.value}</h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CORE OF STORY */}
      <section className="section dark">
        <div className="container section-intro">
          <ScrollReveal direction="up"><h2 className="section-heading">The Core Of <span className="gold">The Story</span></h2></ScrollReveal>
        </div>
        <div className="container grid-4">
          {CORE.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80} direction="left">
              <div className="info-card gold-card">
                <div className="icon-circle">{c.icon}</div>
                <h4>{c.title}</h4>
                <p className="text-secondary">{c.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* THEMES */}
      <section className="section darker">
        <div className="container section-intro">
          <ScrollReveal direction="up"><h2 className="section-heading">Themes That Run <span className="gold">Deep</span></h2></ScrollReveal>
        </div>
        <div className="container grid-4">
          {THEMES.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 80} direction="right">
              <div className="info-card gold-card">
                <div className="icon-circle">{t.icon}</div>
                <h4>{t.title}</h4>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>



      <section className="section darker">
              <div className="container section-intro">
                <ScrollReveal direction="up">
                  <h2 className="section-heading" style={{ marginBottom: 10 }}>
                    Reader <span className="gold">Impact</span>
                  </h2>
                </ScrollReveal>
              </div>
              <div className="container">
                <ScrollReveal direction="up">
                  <TestimonialSlider
                    testimonials={TESTIMONIALS}
                    autoPlay
                    interval={4000}
                  />
                </ScrollReveal>
              </div>
            </section>

      {/* DETAILS TABLE */}
      <section className="section darker">
        <div className="container">
          <ScrollReveal direction="up">
            <table className="elegant-table">
              <tbody>
                <tr><td>Title</td><td>Dereliction</td></tr>
                <tr><td>Author</td><td>Keffier Savary</td></tr>
                <tr><td>Genre</td><td>Memoir-Novel</td></tr>
                <tr><td>Format</td><td>Print + eBook</td></tr>
                <tr><td>Publisher</td><td>Chicago Write</td></tr>
                <tr><td>Platforms</td><td>35+</td></tr>
                <tr><td>Year</td><td>2025</td></tr>
              </tbody>
            </table>
          </ScrollReveal>
        </div>
      </section>

      {/* PLATFORM DISTRIBUTION */}
      <section className="section dark">
        <div className="container section-intro">
          <ScrollReveal direction="up"><h2 className="section-heading">Platform <span className="gold">Distribution</span></h2></ScrollReveal>
        </div>
        <ScrollReveal direction="up" blur>
          <PlatformSlider />
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="section darker">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-box">
              <h2 className="section-heading">Your Copy Is <span className="gold">Waiting</span></h2>
              <div className="hero-buttons">
                <a href="#" className="btn btn-gold glow-pulse"><FaAmazon /> Buy Now</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
