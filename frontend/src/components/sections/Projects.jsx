import { useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import ProjectCard from '../ui/ProjectCard'

export default function Projects({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('all')

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
        <ScrollReveal yOffset={20} className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-2.5 sm:mb-3">
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-3">
              Featured work.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Production-grade native Android software, distributed backend architectures, and intelligent retrieval systems with live deployments.
            </p>
          </div>

          {/* Minimal Filter Pills with Count Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
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
          </div>
        </ScrollReveal>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx + 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
