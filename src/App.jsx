import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import AboutAuthor from './pages/AboutAuthor.jsx'
import AboutBook from './pages/AboutBook.jsx'
import BookTrailer from './pages/BookTrailer.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollProgress />
        <ScrollToTop />

      <Navbar />
      <main key={location.pathname} className="page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-the-author" element={<AboutAuthor />} />
          <Route path="/about-the-book" element={<AboutBook />} />
          <Route path="/book-trailer" element={<BookTrailer />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
