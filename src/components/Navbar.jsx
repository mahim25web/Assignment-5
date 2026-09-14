import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from './icons.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button
          className="hamburger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        <a href="#home" className="brand">
          <span className="brand-mark">DS</span>
          Dev Stack
        </a>
        <a href="#home" className="brand brand-mobile-center">
          <span className="brand-mark">DS</span>
          Dev Stack
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={link.active ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-right">
          <a href="#signin" className="btn btn-text">Sign In</a>
          <a href="#signup" className="btn btn-primary">Sign Up</a>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={link.active ? 'active' : ''} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
