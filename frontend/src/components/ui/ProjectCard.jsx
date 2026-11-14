function DeviceMockup({ project }) {
  const isPhone = project.mockupType === 'phone'

  if (isPhone) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3 bg-gradient-to-b from-[#131726] to-[#07090f] overflow-hidden select-none">
        {/* Ambient radial glow */}
        <div className="absolute w-44 h-44 rounded-full bg-sky-500/15 blur-2xl pointer-events-none" />

        {/* Smart Clean Smartphone Mockup */}
        <div className="relative z-10 h-full aspect-[9/18.5] rounded-[1.5rem] sm:rounded-[1.75rem] border-2 border-white/25 bg-[#12141e] p-1 shadow-[0_15px_35px_rgba(0,0,0,0.85)] flex flex-col transition-transform duration-300 group-hover:scale-[1.04]">
          <div className="relative w-full h-full rounded-[1.25rem] sm:rounded-[1.45rem] overflow-hidden bg-black flex flex-col">
            {/* Dynamic Island Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-20 w-9 sm:w-11 h-2 sm:h-2.5 bg-black rounded-full border border-white/10 flex items-center justify-end px-1 sm:px-1.5 shadow-sm">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-sky-400 animate-pulse" />
            </div>

            {/* Screen Screenshot */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />

            {/* Bottom Home Indicator Bar */}
            <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-8 sm:w-10 h-0.5 bg-white/40 rounded-full" />
            
            {/* Screen Glass Specular Highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
          </div>
        </div>
      </div>
    )
  }

  // Smart Clean Browser Window Mockup
  return (
    <div className="relative w-full h-full p-2.5 sm:p-4 bg-gradient-to-b from-[#131726] to-[#07090f] flex items-center justify-center overflow-hidden select-none">
      {/* Ambient radial glow */}
      <div className="absolute w-60 h-40 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />

      {/* Floating Browser Mockup Frame */}
      <div className="relative z-10 w-full h-full rounded-lg sm:rounded-xl border border-white/20 bg-[#0d1019] shadow-[0_15px_35px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
        
        {/* Browser Chrome Header */}
        <div className="h-6 sm:h-7 px-2.5 sm:px-3 bg-[#141826] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ef4444]" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#eab308]" />
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#22c55e]" />
          </div>

          {/* Centered URL Capsule */}
          <div className="px-2 sm:px-3 py-0.5 rounded-md bg-black/40 border border-white/10 text-[9px] sm:text-[10px] font-mono text-slate-300 flex items-center gap-1 sm:gap-1.5 max-w-[140px] sm:max-w-[200px] truncate">
            <svg className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm2 6V6a2 2 0 10-4 0v2h4z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{project.deviceUrl || 'preview'}</span>
          </div>

          <div className="w-4 sm:w-8" />
        </div>

        {/* Screen Area */}
        <div className="relative flex-1 w-full overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle screen gloss */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.04] pointer-events-none" />
        </div>

      </div>
    </div>
  )
}

export default function ProjectCard({ project, index }) {
  const isLive = Boolean(project.live)
  const num = index ? String(index).padStart(2, '0') : ''
  const primaryHref = project.live || project.github || '#'

  return (
    <article className="rounded-2xl border border-white/[0.12] border-t-white/[0.25] bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:border-white/25 hover:bg-white/[0.05] flex flex-col justify-between h-full transition-all duration-300 overflow-hidden group">
      <div>
        {/* ── Smart Mockup Stage ── */}
        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.08]">
          <DeviceMockup project={project} />

          {/* Hover Explore Action Pill */}
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-[2px]"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#090a0f] text-xs font-bold tracking-tight shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>{isLive ? 'Open Live App' : 'View on GitHub'}</span>
              <span>↗</span>
            </span>
          </a>
        </div>

        {/* ── Content Body ── */}
        <div className="p-4 sm:p-6 lg:p-7">
          {/* Status & Category Bar (Clean & Unobstructed) */}
          <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
            <div className="flex items-center gap-2">
              {num && (
                <span className="text-sky-400 font-mono font-bold text-xs select-none">
                  {num}
                </span>
              )}
              {num && <span className="text-slate-600">•</span>}
              <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                {project.categoryLabel || project.category}
              </span>
            </div>

            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Deployed</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[10px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>{project.status || 'GitHub & APK'}</span>
              </span>
            )}
          </div>

          {/* Project Title with External Arrow */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight mb-2 sm:mb-2.5">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 hover:text-sky-300 transition-colors duration-150"
            >
              <span>{project.title}</span>
              <span className="text-slate-500 group-hover:text-sky-300 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base sm:text-lg">
                ↗
              </span>
            </a>
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
            {project.description}
          </p>

          {/* Key Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 sm:mb-5 pt-3 sm:pt-3.5 border-t border-white/[0.08]">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                Engineering Highlights
              </p>
              <ul className="space-y-1 sm:space-y-1.5">
                {project.highlights.slice(0, 3).map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-300">
                    <span className="text-sky-400 select-none font-bold mt-0.5">›</span>
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Monospace Pills */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Action Bar ── */}
      <div className="px-4 sm:px-6 lg:px-7 pb-4 sm:pb-6 pt-3 sm:pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-3.5 inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Live App</span>
              <span>↗</span>
            </a>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-3.5 inline-flex items-center gap-1.5 shadow-sm"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Repo</span>
              <span>↗</span>
            </a>
          )}

          {project.apk && (
            <a
              href={project.apk}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-[0.625rem] bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 hover:bg-emerald-500/20 backdrop-blur-md transition-colors duration-150 font-semibold inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-7 8h10" />
              </svg>
              <span>Download APK</span>
            </a>
          )}
        </div>

        {project.github && project.live && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-150 font-mono inline-flex items-center gap-1 py-1"
          >
            <span>Source Code</span>
            <span>↗</span>
          </a>
        )}
      </div>
    </article>
  )
}
