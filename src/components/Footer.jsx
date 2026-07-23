import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaAmazon } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal.jsx'
import logo from '../assets/logo.png'
import SocialIcon from './SocailIcon.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow-line" />
      <div className="hero-depth-layer">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
      </div>
      <div className="container footer-grid">
        <ScrollReveal direction="left" className="footer-col">
          <Link to="/" className="footer-logo">
                    <img src={logo} alt="Keffier Savary" />
                  </Link>
          <p className="footer-tagline">Duty. Betrayal. Truth.</p>
        </ScrollReveal>

        <ScrollReveal direction="up" className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about-the-author">About Author</Link>
          <Link to="/about-the-book">About Book</Link>
          <Link to="/book-trailer">Book Trailer</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </ScrollReveal>

        <ScrollReveal direction="right" className="footer-col">
  <h4>Follow Keffier</h4>
  <ul className="footer-socials">
    <li className="icon-content">
      <a href="#" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <div className="tooltip">Facebook</div>
    </li>
    <li className="icon-content">
      <a href="#" aria-label="Instagram">
        <FaInstagram />
      </a>
      <div className="tooltip">Instagram</div>
    </li>
    <li className="icon-content">
      <a href="#" aria-label="YouTube">
        <FaYoutube />
      </a>
      <div className="tooltip">YouTube</div>
    </li>
    <li className="icon-content">
      <a href="#" aria-label="Amazon">
        <FaAmazon />
      </a>
      <div className="tooltip">Amazon</div>
    </li>
  </ul>
</ScrollReveal>
      </div>

      <ScrollReveal direction="up" className="footer-bottom">
        <p>© 2026 Keffier Savary</p>
        <p className="footer-credit">Website designed &amp; developed by Chicago Write</p>
      </ScrollReveal>
    </footer>
  )
}
