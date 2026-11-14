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
      className="relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-between items-center pt-24 pb-8 sm:pt-28 sm:pb-8 lg:py-0 overflow-hidden bg-minimal-dots"
    >
      {/* Invisible spacer on desktop to balance the bottom scroll indicator */}
      <div className="hidden lg:block h-12" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Minimal, Powerful Copy & Smooth Name Reveal */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Status Indicator Badge with micro-pulse */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 sm:mb-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>CSE Graduate • Android Developer</span>
              </div>
            </motion.div>

            {/* Smooth Masked Reveal Name Heading */}
            <div className="mb-2 sm:mb-3">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
                >
                  Md. Fahim Istiaq
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: '115%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]"
                >
                  <span className="minimal-accent-text">Siam</span>
                </motion.div>
              </div>
            </div>

            {/* Sub-headline: Role & Focus */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mb-3 sm:mb-4"
            >
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-200 tracking-tight flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span>Android &amp; Software Engineer</span>
                <span className="text-sky-400 font-bold">•</span>
                <span className="text-slate-400 font-normal">Kotlin &amp; Jetpack Compose</span>
              </h2>
            </motion.div>

            {/* Concise, Powerful 2-Line Value Statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6 sm:mb-7 font-normal"
            >
              Architecting production-grade native Android applications with Kotlin, Compose, and clean MVVM architecture, backed by modern REST APIs and intelligent retrieval systems.
            </motion.p>

            {/* CTAs with Micro-Animations */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group py-2.5 px-5 text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-white/5"
              >
                <span>Selected Work</span>
                <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary py-2.5 px-5 text-xs cursor-pointer"
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 2 }}
                className="px-3 py-2 text-xs font-mono text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1"
              >
                <span>Resume</span>
                <span>↗</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Compact 3D Perspective Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full order-1 lg:order-2">
            <HeroPortrait />
          </div>

        </div>
      </div>

      {/* Subtle Micro-Animated Scroll Indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.5 },
          y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' },
        }}
        className="hidden sm:flex flex-col items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-colors duration-150 cursor-pointer pb-2"
        aria-label="Scroll to projects"
      >
        <span>Explore Work</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.button>
    </section>
  )
}
