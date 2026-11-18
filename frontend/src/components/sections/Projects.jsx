import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useReducedMotion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import ProjectCard from '../ui/ProjectCard'
import Reveal from '../ui/Reveal'
import RevealText from '../ui/RevealText'
import SectionEyebrow from '../ui/SectionEyebrow'

const EASE_OUT = [0.16, 1, 0.3, 1]

export default function Projects({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const reduceMotion = useReducedMotion()
  const gridWrapRef = useRef(null)
  const heightBeforeFilter = useRef(null)

  const changeFilter = (id) => {
    if (id === activeFilter) return
    heightBeforeFilter.current = gridWrapRef.current?.offsetHeight ?? null
    setActiveFilter(id)
  }

  // Glide the grid from its old height to the new one, so the rest of the page
  // doesn't snap when a filter adds or removes rows of cards.
  useLayoutEffect(() => {
    const el = gridWrapRef.current
    const from = heightBeforeFilter.current
    heightBeforeFilter.current = null
    if (!el || from == null || reduceMotion) return

    el.style.height = ''
    const to = el.offsetHeight
    if (from === to) return

    // Pin the old height straight away so the first painted frame doesn't flash the new layout,
    // and clip top/bottom only so card shadows aren't cut off at the sides
    el.style.height = `${from}px`
    el.style.clipPath = 'inset(0px -80px)'
    let superseded = false
    const controls = animate(el, { height: [from, to] }, { duration: 0.55, ease: EASE_OUT })
    controls.then(() => {
      if (superseded) return
      el.style.height = ''
      el.style.clipPath = ''
    })

    return () => {
      superseded = true
      controls.stop()
    }
  }, [activeFilter, reduceMotion])

  const counts = {
    all: projects.length,
    mobile: projects.filter(p => p.category === 'mobile' || p.tags?.some(t => ['Kotlin', 'Jetpack Compose'].includes(t))).length,
    ai: projects.filter(p => p.category === 'ai' || p.tags?.some(t => ['RAG', 'AI', 'Vector Search'].includes(t))).length,
    live: projects.filter(p => Boolean(p.live)).length,
  }

  const categories = [
    { id: 'all', label: `All (${counts.all})` },
    { id: 'mobile', label: `Android (${counts.mobile})` },
    { id: 'ai', label: `AI & RAG (${counts.ai})` },
    { id: 'live', label: `Live Demos (${counts.live})` },
  ]

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'live') return Boolean(project.live)
    if (activeFilter === 'ai') return project.category === 'ai' || project.tags?.some(t => ['RAG', 'AI', 'Vector Search'].includes(t))
    if (activeFilter === 'mobile') return project.category === 'mobile' || project.tags?.some(t => ['Kotlin', 'Jetpack Compose'].includes(t))
    return true
  })

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative bg-transparent">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <SectionEyebrow className="mb-2.5 sm:mb-3">Selected Work</SectionEyebrow>
            <RevealText
              as="h2"
              text="Featured work."
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-3"
            />
            <ScrollReveal yOffset={12} delay={0.2}>
              <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
                Production-grade native Android software, distributed backend architectures, and intelligent retrieval systems with live deployments.
              </p>
            </ScrollReveal>
          </div>

          {/* Minimal Filter Pills with Count Badges */}
          <ScrollReveal yOffset={12} delay={0.25} className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => changeFilter(cat.id)}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-150 cursor-pointer backdrop-blur-md ${
                    isActive
                      ? 'bg-white text-[#090a0f] font-semibold shadow-md'
                      : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </ScrollReveal>
        </div>

        {/* 2-Column Responsive Grid — cards rise in on scroll and reflow when filtered */}
        <div ref={gridWrapRef}>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout="position"
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2, layout: { duration: 0.5, ease: EASE_OUT } }}
                >
                  <Reveal delay={(idx % 2) * 80} className="h-full">
                    <ProjectCard project={project} index={idx + 1} />
                  </Reveal>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
