import { useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Section label pill followed by a hairline rule that draws itself across
 * once the section header scrolls into view. CSS-driven (compositor thread).
 */
export default function SectionEyebrow({ children, compact = false, className = '' }) {
  const ref = useRef(null)
  const shown = useInView(ref, { once: true, amount: 0.8 })

  return (
    <div ref={ref} className={`flex items-center gap-3 ${className}`}>
      <span
        className={`inline-flex items-center gap-2 shrink-0 rounded-full border border-white/10 bg-white/[0.03] font-mono text-slate-300 uppercase tracking-wider transition-[opacity,translate] duration-[450ms] ease-out ${
          shown ? 'opacity-100' : 'opacity-0 -translate-x-2'
        } ${compact ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-[10px] sm:text-[11px]'}`}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={`h-px flex-1 origin-left bg-gradient-to-r from-sky-400/50 via-white/10 to-transparent transition-[scale] duration-[900ms] delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </div>
  )
}
