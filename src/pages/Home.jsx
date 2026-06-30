import React from 'react'
import { FaAmazon, FaShoppingCart, FaStar, FaPlay, FaQuoteLeft } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal.jsx'
import ParticleCanvas from '../components/ParticleCanvas.jsx'
import Book3DTilt from '../components/Book3DTilt.jsx'
import PlatformSlider from '../components/PlatformSlider.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import Timeline from '../components/Timeline.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import cover from '../assets/book_cover.png'
import portrait from '../assets/author_portrait.jpg'
import '../sections.css'

const WHY_CARDS = [
  { title: 'Military Life', text: 'An unfiltered look inside the discipline, brotherhood and cost of service.' },
  { title: 'Truth & Betrayal', text: 'The system that was supposed to protect him — and the moment it failed.' },
  { title: 'Survival', text: 'What it takes to endure when everything familiar is taken away.' },
  { title: 'Identity', text: 'Rebuilding a sense of self after duty, loss and reinvention.' },
  { title: 'Redemption', text: 'Turning pain into purpose, and silence into testimony.' },
  { title: 'Human Experience', text: 'A story that speaks to anyone who has fought to reclaim their life.' },
]

const TESTIMONIALS = [
  { quote: 'A raw, unflinching memoir that refuses to look away from the truth.', name: 'Early Reader', role: 'Advance Copy Review' },
  { quote: 'Part confession, part reckoning — I could not put this down.', name: 'Book Club Member', role: 'Verified Reader' },
  { quote: 'Savary writes with the precision of someone who survived every word.', name: 'Veteran Reader', role: 'Community Review' },
]

const TIMELINE_ITEMS = [
  { label: '01', title: 'Childhood', text: 'Roots formed between cultures, shaping the values that would carry him forward.' },
  { label: '02', title: 'Military', text: 'A life defined by duty, discipline and brotherhood under uniform.' },
  { label: '03', title: 'Life Changes', text: 'The moment everything familiar was stripped away without warning.' },
  { label: '04', title: 'Writing Journey', text: 'Turning silence into language, and pain into something worth telling.' },
  { label: '05', title: 'Dereliction', text: 'The story finally given a voice — duty, betrayal, and fighting back.' },
]

export default function Home() {
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="hero" style={{ minHeight: '100vh' }}>
        {/* <div className="hero-bg" style={{ backgroundImage: `url(${cover})` }} /> */}
        <div className="hero-overlay" />
        <ParticleCanvas count={40} />
        <div className="hero-content">
          <ScrollReveal><span className="hero-badge">★ Now Available on 35+ Platforms ★</span></ScrollReveal>
          <ScrollReveal delay={100}><h1 className="hero-title">DERELICTION</h1></ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="hero-subtitle">One Veteran's True Story of<br />Duty, Betrayal and Fighting Back</p>
          </ScrollReveal>
          <ScrollReveal delay={300}><p className="hero-author">BY KEFFIER SAVARY</p></ScrollReveal>
          <ScrollReveal delay={350}><div className="gold-divider center" /></ScrollReveal>
          <ScrollReveal delay={420}>
            <div className="hero-buttons">
              <a href="#" className="btn btn-gold"><FaAmazon /> Buy on Amazon</a>
              <a href="#" className="btn btn-outline"><FaShoppingCart /> Buy Directly</a>
            </div>
          </ScrollReveal>
        </div>
        <div className="hero-scroll"><span>SCROLL</span><div className="hero-scroll-line" /></div>
      </section>

      {/* SECTION 2 — BOOK SHOWCASE */}
      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left"><Book3DTilt width={360} /></ScrollReveal>
          <ScrollReveal direction="right">
            <span className="eyebrow">The Book</span>
            <h2 className="section-heading" style={{ margin: '14px 0' }}>A Story The World <span className="gold">Needs To Hear</span></h2>
            <p className="text-secondary" style={{ lineHeight: 1.9, fontSize: '1.05rem' }}>
              Dereliction is a raw, deeply personal memoir tracing one veteran's path through duty,
              institutional betrayal, and the long road back to himself. It is a testimony written
              for anyone who has ever had to fight for their own truth.
            </p>
            <div className="pill-row">
              <span className="pill">Memoir</span>
              <span className="pill">Biography</span>
              <span className="pill">Survival</span>
              <span className="pill">True Story</span>
            </div>
            <div className="stars-row">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}</div>
            <div className="hero-buttons" style={{ justifyContent: 'flex-start', marginTop: 18 }}>
              <a href="#" className="btn btn-gold"><FaAmazon /> Buy on Amazon</a>
              <a href="#" className="btn btn-outline">Buy Directly</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3 — STORY DEEP DIVE */}
      <section className="section darker">
        <div className="container quote-block">
          <ScrollReveal>
            <span className="quote-mark"><FaQuoteLeft /></span>
            <p className="quote-text">Part confession. Part survival story. Part philosophical reckoning.</p>
          </ScrollReveal>
        </div>
        <div className="container story-deep-dive">
          <div className="story-line" />
          <ScrollReveal className="story-text">
            <p>Dereliction follows Keffier Savary's journey from the discipline of military life into
            a confrontation with betrayal he never saw coming. It is a story about what happens when
            the systems meant to protect you fail  and what it takes to keep standing anyway.</p>
            <p>Told with unflinching honesty, the book moves between memory and reflection, weaving
            personal history with the larger questions of identity, justice and survival. It is both
            a personal reckoning and a broader meditation on duty and truth.</p>
            <p>By the final page, Dereliction is not just a memoir of what was lost  it is a record
            of what was rebuilt, one honest sentence at a time.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 4 — AUTHOR PREVIEW */}
      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left">
            <div className="framed-image"><img src={portrait} alt="Keffier Savary" /></div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="eyebrow">The Author</span>
            <h2 className="section-heading" style={{ margin: '14px 0' }}>Keffier Savary</h2>
            <p className="text-secondary" style={{ lineHeight: 1.9 }}>
              A veteran, storyteller and survivor, Keffier writes from lived experience  turning
              duty, hardship and reflection into a memoir that refuses to look away.
            </p>
            <div className="grid-3" style={{ marginTop: 30 }}>
              <div className="info-card gold-card">
                <h4><AnimatedCounter target={5} suffix="+" /></h4>
                <p className="text-secondary">Upcoming Books</p>
              </div>
              <div className="info-card gold-card">
                <h4><AnimatedCounter target={35} suffix="+" /></h4>
                <p className="text-secondary">Platforms</p>
              </div>
              <div className="info-card gold-card">
                <h4><AnimatedCounter target={1} /></h4>
                <p className="text-secondary">Debut Memoir</p>
              </div>
            </div>
            <a href="/about-the-author" className="btn btn-outline" style={{ marginTop: 30 }}>Read Full Bio</a>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5 — PLATFORM SLIDER */}
      <section className="section darker">
        <div className="container section-intro">
          <ScrollReveal><h2 className="section-heading" style={{marginBottom:10}}>Available on <span className="gold">35+ Platforms</span></h2></ScrollReveal>
        </div>
        <ScrollReveal><PlatformSlider /></ScrollReveal>
      </section>

      {/* SECTION 6 — WHY THIS BOOK */}
      <section className="section dark">
        <div className="container section-intro">
          <ScrollReveal><h2 className="section-heading" style={{marginBottom:10}}>Why Readers Need <span className="gold">This Story</span></h2></ScrollReveal>
        </div>
        <div className="container grid-6 stagger">
          {WHY_CARDS.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 90}>
              <div className="info-card gold-card">
                <h4>{c.title}</h4>
                <p className="text-secondary">{c.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="section darker">
        <div className="container section-intro">
          <ScrollReveal><h2 className="section-heading" style={{marginBottom:10}}>Reader <span className="gold">Impact</span></h2></ScrollReveal>
        </div>
        <div className="container grid-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}><TestimonialCard {...t} /></ScrollReveal>
          ))}
        </div>
      </section>

      

      {/* SECTION 9 — TRAILER PREVIEW */}
      <section className="section darker">
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal><h2 className="section-heading" style={{marginBottom:10}}>Official <span className="gold">Trailer</span></h2></ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="trailer-box glow-pulse">
              <button className="play-button"><FaPlay /></button>
            </div>
            <p style={{ marginTop: 24, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', color: 'var(--gold)' }}>
              Official Trailer — Coming Soon
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="section dark">
        <div className="container">
          <ScrollReveal>
            <div className="cta-box">
              <ParticleCanvas count={20} />
              <h2 className="section-heading" style={{ position: 'relative', zIndex: 2 }}>
                Don't Just Read About It.<br /><span className="gold">Own It.</span>
              </h2>
              <div className="hero-buttons" style={{ position: 'relative', zIndex: 2 }}>
                <a href="#" className="btn btn-gold"><FaAmazon /> Buy on Amazon</a>
                <a href="#" className="btn btn-outline">Buy Directly</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
