import { motion } from 'framer-motion'
import HeroPortrait from '../ui/HeroPortrait'

export default function Hero() {
  const scrollToProjects = () => {
    if (window.lenis) {
      window.lenis.scrollTo('#projects', { offset: -20, duration: 1 })
    } else {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-[100dvh] flex flex-col overflow-hidden bg-minimal-dots"
    >
      {/* ── MOBILE layout: portrait top-right, text below, all in 100dvh ── */}
      {/* ── DESKTOP layout: side-by-side grid centered ── */}

      {/* Content wrapper — fills full viewport height */}
      <div className="relative flex-1 flex flex-col max-w-6xl mx-auto px-4 sm:px-6 w-full z-10 pt-16 sm:pt-20 pb-4 sm:pb-6">

        {/* ══ MOBILE: stacked portrait + text that fits in one screen ══ */}
        <div className="flex flex-col h-full md:hidden">

          {/* Portrait — compact on mobile, centered */}
          <div className="flex justify-center shrink-0">
            <HeroPortrait />
          </div>

          {/* Text + CTAs block — takes remaining space */}
          <div className="flex flex-col items-center text-center flex-1 justify-between pb-1 min-h-0">

            {/* Text content */}
            <div className="flex flex-col items-center gap-0.5">
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-1"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-medium text-slate-300 backdrop-blur-md">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  <span>CSE Graduate • Android Developer</span>
                </div>
              </motion.div>

              {/* Name */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-[1.65rem] xs:text-3xl font-extrabold tracking-tight text-white leading-[1.1]"
                >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                  Md. Fahim Istiaq
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="text-[1.65rem] xs:text-3xl font-extrabold tracking-tight leading-[1.1]"
                >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                  <span className="minimal-accent-text">Siam</span>
                </motion.div>
              </div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="mt-0.5"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <h2 className="text-[0.72rem] xs:text-xs font-semibold text-slate-200 tracking-tight whitespace-nowrap">
                  <span>Android & Software Engineer</span>
                  <span className="text-sky-400 font-bold mx-1">•</span>
                  <span className="text-slate-400 font-normal">Kotlin & Compose</span>
                </h2>
              </motion.div>

              {/* Description — 2 lines max on mobile */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36 }}
                className="text-slate-400 text-[0.72rem] xs:text-xs leading-snug max-w-xs mt-1 px-1 line-clamp-3"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                Architecting production-grade native Android applications with Kotlin, Compose, and clean MVVM architecture, backed by modern REST APIs and intelligent retrieval systems.
              </motion.p>
            </div>

            {/* CTAs — full-width stack on tiny screens, 2+1 on xs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-col sm:flex-row justify-center gap-2 w-full max-w-[340px] mt-0"
            >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
              {/* Button: Selected Work */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="btn-primary flex-none min-w-[70px] !py-2 !px-2 text-xs inline-flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <span>Selected Work</span>
                <span>↓</span>
              </a>

              {/* Button: Get In Touch */}
              <a
                href="#contact"
                className="btn-secondary flex-1 min-w-[100px] !py-2 !px-3 text-xs inline-flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <span>Get In Touch</span>
              </a>

              {/* Button: Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-none min-w-[70px] !py-2 !px-2 text-xs inline-flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <svg className="w-3 h-3 text-sky-400 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume</span>
              </a>
            </motion.div>

          </div>
        </div>

        {/* ══ DESKTOP (md+): side-by-side grid ══ */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-center h-full">

          {/* Left: Text */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>CSE Graduate • Android Developer</span>
              </div>
            </motion.div>

            <div className="mb-2">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.12 }}
                  className="text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
                >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                  Md. Fahim Istiaq
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.22 }}
                  className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]"
                >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                  <span className="minimal-accent-text">Siam</span>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mb-3"
            >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
              <h2 className="text-lg lg:text-xl font-semibold text-slate-200 tracking-tight">
                <span>Android & Software Engineer</span>
                <span className="text-sky-400 font-bold mx-1.5">•</span>
                <span className="text-slate-400 font-normal">Kotlin & Jetpack Compose</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mb-5"
            >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
              Architecting production-grade native Android applications with Kotlin, Compose, and clean MVVM architecture, backed by modern REST APIs and intelligent retrieval systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="flex flex-row items-center gap-3"
            >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary !py-2.5 !px-5 text-sm inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-white/5 whitespace-nowrap"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <span>Selected Work</span>
                <span>↓</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary !py-2.5 !px-5 text-sm cursor-pointer inline-flex items-center justify-center whitespace-nowrap"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative group !py-2.5 !px-4 text-sm font-semibold rounded-[0.625rem] bg-gradient-to-r from-sky-500/15 via-teal-500/15 to-sky-500/15 hover:from-sky-500/25 hover:via-teal-500/25 hover:to-sky-500/25 border border-sky-400/40 hover:border-sky-300 text-sky-200 hover:text-white shadow-[0_0_15px_rgba(56,189,248,0.2)] backdrop-blur-md transition-all duration-200 inline-flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
                <svg className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume ↗</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <HeroPortrait />
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
        }}
        className="hidden md:flex flex-col items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors duration-150 cursor-pointer pb-4 mx-auto"
        aria-label="Scroll to projects"
      >
      {/* Layered glassmorphism graphic */}
      <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-10 hidden md:block">
        <svg viewBox="0 0 200 200" className="w-80 h-80 text-white/15 fill-current">
          <rect x="30" y="30" width="140" height="140" rx="20" transform="rotate(15 100 100)" />
        </svg>
      </div>
        <span>Explore Work</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.button>
    </section>
  )
}
