import React from "react";
import { FaPlay, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal.jsx";
import ParticleCanvas from "../components/ParticleCanvas.jsx";
import "../sections.css";
import TrailerSection from "../components/TrailerSection.jsx";
import Booktrailer from "../assets/book_trailer.mp4";

export default function BookTrailer() {
  return (
    <div>
      {/* HERO */}
      <section className="hero" style={{ minHeight: "65vh" }}>
        <div className="hero-overlay" />
        <ParticleCanvas count={20} />
        <div className="hero-depth-layer">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </div>
        <div className="hero-content">
          <ScrollReveal>
            <span className="eyebrow">Visual Experience</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1
              className="hero-title"
              style={{ fontSize: 'clamp(1.3rem, 6vw, 4.2rem)' }}
            >
              WATCH THE TRAILER
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <div className="gold-divider center" />
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <p className="hero-subtitle">Dereliction Brought To Life</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section trailer-section">
        <div className="container">
          <div className="trailer-layout">
            <ScrollReveal direction="left">
              <div className="trailer-content">
                <div className="trailer-eyebrow">
                  <span />
                  The Story Behind Dereliction
                </div>

                <h2 className="trailer-heading">
                  More Than a<span> Prison Story</span>
                </h2>

                <div className="trailer-copy">
                  <p>
                    <strong>Dereliction</strong> is a raw, deeply personal
                    memoir-novel exploring survival, memory, choices, and
                    consequence.
                  </p>

                  <p>
                    It goes beyond prison walls to examine the relationships,
                    decisions, and painful truths that shape a life and what it
                    means to confront the past while searching for identity,
                    accountability, and redemption.
                  </p>

                  <p>
                    This is not simply a story about confinement. It is a human
                    story about resilience, loss, transformation, and
                    consequences that remain long after a sentence has been
                    served.
                  </p>
                </div>

                <blockquote className="trailer-quote">
                  <span>“</span>
                  Every choice leaves a mark. Every consequence tells a story.
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} direction="right">
              <div className="trailer-media">
                <div className="trailer-frame">
                  <video
                    src={Booktrailer}
                    controls
                    playsInline
                    preload="metadata"
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                  />
                </div>

                <div className="trailer-caption">
                  <span />
                  Official Trailer
                  <span />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    <TrailerSection/>
    </div>
  );
}

