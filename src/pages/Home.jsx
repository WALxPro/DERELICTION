import React from "react";
import { FaAmazon, FaShoppingCart, FaQuoteLeft } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal.jsx";
import ParticleCanvas from "../components/ParticleCanvas.jsx";
import PlatformSlider from "../components/PlatformSlider.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import Book3DTilt from "../components/Book3DTilt.jsx";

import cover from "../assets/book_cover.webp";
import portrait from "../assets/author_portrait.webp";
import BookTrailer from "../assets/book_trailer.mp4";
import "../sections.css";
import { useEffect } from "react";
import { heroAnimation } from "../animations/heroAnimation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingCard from "../components/RotatingCard.jsx";
import {
  Shield,
  Scale,
  Mountain,
  UserRound,
  Flame,
  HeartHandshake,
} from "lucide-react";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
import TrailerSection from "../components/TrailerSection.jsx";

gsap.registerPlugin(ScrollTrigger);

const shorts = [
  {
    // sirf video ID rakho, poora URL nahi
    id: "1234567890",
    hash: "", // unlisted video ho to uska hash (e.g. "a1b2c3d4e5")
    title: "Official Trailer",
    desc: "The story behind the sentence.",
  },
];

const WHY_CARDS = [
  {
    title: "Military Life",
    text: "An unfiltered look inside the discipline, brotherhood and cost of service.",
    icon: Shield,
  },
  {
    title: "Truth & Betrayal",
    text: "The system that was supposed to protect him and the moment it failed.",
    icon: Scale,
  },
  {
    title: "Survival",
    text: "What it takes to endure when everything familiar is taken away.",
    icon: Mountain,
  },
  {
    title: "Identity",
    text: "Rebuilding a sense of self after duty, loss and reinvention.",
    icon: UserRound,
  },
  {
    title: "Redemption",
    text: "Turning pain into purpose, and silence into testimony.",
    icon: Flame,
  },
  {
    title: "Human Experience",
    text: "A story that speaks to anyone who has fought to reclaim their life.",
    icon: HeartHandshake,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "A raw, unflinching memoir that refuses to look away from the truth.",
    name: "Early Reader",
    role: "Advance Copy Review",
  },
  {
    quote: "Part confession, part reckoning I could not put this down.",
    name: "Book Club Member",
    role: "Verified Reader",
  },
  {
    quote:
      "Savary writes with the precision of someone who survived every word.",
    name: "Veteran Reader",
    role: "Community Review",
  },
];

export default function Home() {
  const bookTextRef = useRef(null);
  const authorSection = useRef(null);
  const whyRef = useRef(null);
  useEffect(() => {
    console.log("GSAP running");
    heroAnimation();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".book-text-item", {
        scrollTrigger: {
          trigger: bookTextRef.current,
          start: "top 75%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },

        y: 80,
        opacity: 0,
        filter: "blur(12px)",

        duration: 1,

        stagger: 0.15,

        ease: "power4.out",
      });
    }, bookTextRef);

    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // IMAGE REVEAL

      gsap.from(".framed-image", {
        scrollTrigger: {
          trigger: authorSection.current,
          start: "top 75%",
        },

        x: -120,
        opacity: 0,
        rotateY: 25,
        scale: 0.8,
        filter: "blur(12px)",

        duration: 1.2,

        ease: "power4.out",
      });

      // TEXT CONTENT

      gsap.from(".author-content > *", {
        scrollTrigger: {
          trigger: authorSection.current,
          start: "top 70%",
        },

        y: 60,
        opacity: 0,
        filter: "blur(8px)",

        duration: 0.8,

        stagger: 0.12,

        ease: "power3.out",
      });

      // CARDS POP

      gsap.from(".gold-card", {
        scrollTrigger: {
          trigger: authorSection.current,
          start: "top 65%",
        },

        y: 70,
        opacity: 0,
        scale: 0.85,

        duration: 0.8,

        stagger: 0.15,

        ease: "back.out(1.6)",
      });

      // IMAGE FLOAT

      gsap.to(".framed-image", {
        y: -15,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      });
    }, authorSection);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="hero" style={{ minHeight: "100vh" }}>
        <div className="hero-overlay" />
        <div className="hero-glow" />

        <ParticleCanvas count={40} />

        <div className="hero-depth-layer">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </div>

        <div className="hero-content">
          <span className="hero-badge">★ Now Available on 35+ Platforms ★</span>

          <h1 className="hero-title">
            {"DERELICTION".split("").map((letter, index) => (
              <span key={index} className="title-letter">
                {letter}
              </span>
            ))}
          </h1>

          <p className="hero-subtitle">
            One Veteran's True Story of
            <br />
            Duty, Betrayal and Fighting Back
          </p>

          <p className="hero-author">BY KEFFIER SAVARY</p>

          <div className="gold-divider center" />

          <div className="hero-buttons">
            <a href="#" className="btn btn-gold magnetic">
              <FaAmazon /> Buy on Amazon
            </a>

            <a href="#" className="btn btn-outline magnetic">
              <FaShoppingCart /> Buy Directly
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      <section className="section dark">
        <div className="container grid-2">
          <ScrollReveal direction="left">
            <Book3DTilt width={360} />
          </ScrollReveal>
          <div ref={bookTextRef}>
            <span className="eyebrow book-text-item">The Book</span>

            <h2
              className="section-heading book-text-item"
              style={{ margin: "14px 0" }}
            >
              A Story The World
              <span className="gold">Needs To Hear</span>
            </h2>

            <p
              className="text-secondary book-text-item"
              style={{
                lineHeight: 1.9,
                fontSize: "1.05rem",
              }}
            >
              Dereliction is a raw, deeply personal memoir tracing one veteran's
              path through duty, institutional betrayal, and the long road back
              to himself. It is a testimony written for anyone who has ever had
              to fight for their own truth.
            </p>

            <div className="pill-row book-text-item">
              <span className="pill">Memoir</span>

              <span className="pill">Biography</span>

              <span className="pill">Survival</span>

              <span className="pill">True Story</span>
            </div>

            <div className="chapter-review book-text-item">
              <FaQuoteLeft />

              <span>
                "A haunting, elegant memoir that reads like a confession and a
                reckoning."
              </span>
            </div>

            <div
              className="hero-buttons book-text-item"
              style={{
                justifyContent: "flex-start",
                marginTop: 18,
              }}
            >
              <a href="#" className="btn btn-gold">
                <FaAmazon /> Buy on Amazon
              </a>

              <a href="#" className="btn btn-outline">
                Buy Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section darker">
        <div className="container quote-block">
          <ScrollReveal direction="up">
            <span className="quote-mark">
              <FaQuoteLeft />
            </span>
            <p className="quote-text">
              Part confession. Part survival story. Part philosophical
              reckoning.
            </p>
          </ScrollReveal>
        </div>
        <div className="container story-deep-dive">
          <div className="story-line" />
          <ScrollReveal className="story-text" direction="left">
            <p>
              Dereliction follows Keffier Savary's journey from the discipline
              of military life into a confrontation with betrayal he never saw
              coming. It is a story about what happens when the systems meant to
              protect you fail and what it takes to keep standing anyway.
            </p>
            <p>
              Told with unflinching honesty, the book moves between memory and
              reflection, weaving personal history with the larger questions of
              identity, justice and survival. It is both a personal reckoning
              and a broader meditation on duty and truth.
            </p>
            <p>
              By the final page, Dereliction is not just a memoir of what was
              lost; it is a record of what was rebuilt, one honest sentence at a
              time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section dark" ref={authorSection}>
        <div className="container grid-2">
          <ScrollReveal direction="left" delay={70}>
            <div className="framed-image">
              <img src={portrait} alt="Keffier Savary" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={120}>
            <div className="author-content">
              <span className="eyebrow">The Author</span>

              <h2 className="section-heading" style={{ margin: "14px 0" }}>
                Keffier Savary
              </h2>

              <p className="text-secondary" style={{ lineHeight: 1.9 }}>
                A veteran, storyteller and survivor, Keffier writes from lived
                experience turning duty, hardship and reflection into a memoir
                that refuses to look away.
              </p>

              <div className="grid-3">
                <div className="info-card gold-card">
                  <h4>
                    <AnimatedCounter target={5} suffix="+" />
                  </h4>
                  <p className="text-secondary">Upcoming Books</p>
                </div>

                <div className="info-card gold-card">
                  <h4>
                    <AnimatedCounter target={35} suffix="+" />
                  </h4>
                  <p className="text-secondary">Platforms</p>
                </div>

                <div className="info-card gold-card">
                  <h4>
                    <AnimatedCounter target={1} />
                  </h4>
                  <p className="text-secondary">Debut Memoir</p>
                </div>
              </div>

              <a
                href="/about-the-author"
                className="btn btn-outline"
                style={{ marginTop: 30 }}
              >
                Read Full Bio
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section darker">
        <div className="container section-intro">
          <ScrollReveal direction="up">
            <h2 className="section-heading" style={{ marginBottom: 10 }}>
              Available on <span className="gold">35+ Platforms</span>
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="up">
          <PlatformSlider />
        </ScrollReveal>
      </section>

      <section className="section dark" ref={whyRef}>
        <div className="container section-intro">
          <ScrollReveal direction="up">
            <h2
              className="section-heading why-title"
              style={{ marginBottom: 10 }}
            >
              Why Readers Need
              <span className="gold">This Story</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="container grid-6">
          {WHY_CARDS.map((c) => {
            const Icon = c.icon;

            return (
              <ScrollReveal key={c.title} direction="right">
                <div className="info-card gold-card">
                  <div className="icon-circle">
                    <Icon size={28} />
                  </div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </ScrollReveal>
            );
          })}
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
                    src={BookTrailer}
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

      <TrailerSection />
      <section className="section dark">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-box">
              <ParticleCanvas count={20} />
              <h2
                className="section-heading"
                style={{ position: "relative", zIndex: 2 }}
              >
                Don't Just Read About It.
                <br />
                <span className="gold">Own It.</span>
              </h2>
              <div className="hero-buttons">
                <a href="#" className="btn btn-gold magnetic">
                  <FaAmazon /> Buy on Amazon
                </a>

                <a href="#" className="btn btn-outline magnetic">
                  <FaShoppingCart /> Buy Directly
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
