import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaAmazon } from 'react-icons/fa'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow-line" />
      <div className="container footer-grid">
        <div className="footer-col">
          <img src={logo} alt="Keffier Savary" className="footer-logo" />
          <p className="footer-tagline">Duty. Betrayal. Truth.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about-the-author">About Author</Link>
          <Link to="/about-the-book">About Book</Link>
          <Link to="/book-trailer">Book Trailer</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Follow Keffier</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Amazon"><FaAmazon /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Keffier Savary</p>
        <p className="footer-credit">Website designed &amp; developed by Chicago Write</p>
      </div>
    </footer>
  )
}
