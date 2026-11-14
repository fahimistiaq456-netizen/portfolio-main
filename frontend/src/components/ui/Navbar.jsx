import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import portraitImg from '../../assets/siam_portrait.png'

const NAV_LINKS = [
  { href: '#hero', label: 'Overview' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (window.lenis) {
      window.lenis.scrollTo(href, { offset: -20, duration: 1.0 })
    } else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    window.history.pushState(null, '', href)
  }

  const openCommandPalette = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))
  }

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -50% 0px' }
    )

    const sections = ['hero', 'skills', 'projects', 'contact']
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-md border-b border-white/[0.08] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-200 flex-shrink-0 bg-[#131722]">
            <img
              src={portraitImg}
              alt="Md. Fahim Istiaq Siam"
              className="w-full h-full object-contain object-top"
              width="32"
              height="32"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white tracking-tight group-hover:text-slate-200 transition-colors duration-150">
              Fahim Istiaq Siam
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Android Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#10121b]/80 border border-white/[0.08] rounded-full p-1 backdrop-blur-md">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-[#090a0f] font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Right Actions: Command Palette trigger & Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/[0.15] text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors duration-150 cursor-pointer"
            title="Search & Quick Actions (Ctrl+K or ⌘K)"
          >
            <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="text-[11px]">Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-[10px] text-slate-300">⌘K</kbd>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-1.5 px-3.5"
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openCommandPalette}
            className="p-2 rounded-lg border border-white/10 text-slate-300"
            aria-label="Search"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg border border-white/10 text-slate-300"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown with Smooth Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-white/[0.12] bg-[#090a0f]/95 backdrop-blur-2xl px-5 sm:px-6 py-4 mt-2 shadow-2xl"
          >
            <div className="space-y-1">
              {NAV_LINKS.map(({ href, label }) => {
                const id = href.replace('#', '')
                const isActive = active === id
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-white/10 text-white font-semibold border border-white/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    )}
                  </a>
                )
              })}
            </div>

            <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-xs py-2.5 px-4 font-semibold"
              >
                Download Resume (PDF) ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
