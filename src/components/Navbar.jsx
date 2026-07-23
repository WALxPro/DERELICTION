import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.webp'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-the-author', label: 'About Author' },
  { to: '/about-the-book', label: 'About Book' },
  { to: '/book-trailer', label: 'Book Trailer' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 30) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Keffier Savary" />
        </Link>

        <div className="navbar-center">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>


        <button className="navbar-hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
          <FaBars />
        </button>
      </div>

      <div className={`navbar-drawer ${open ? 'open' : ''}`}>
        <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <FaTimes />
        </button>
        <div className="drawer-links">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          
        </div>
      </div>
      {open && <div className="drawer-backdrop" onClick={() => setOpen(false)} />}
    </nav>
  )
}
