import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { pageScrollY } from '../../lib/scroll'

const TONES = {
  emerald: {
    tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    bullet: 'text-emerald-400',
    node: 'bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)]',
  },
  amber: {
    tag: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    bullet: 'text-amber-400',
    node: 'bg-amber-400 shadow-[0_0_14px_rgba(251,191,36,0.7)]',
  },
}

const RAIL_CLASS = 'absolute top-2 bottom-2 left-[9px] lg:left-1/2 lg:-translate-x-1/2 w-px'

/**
 * Vertical timeline whose rail draws itself as the section scrolls through the viewport.
 * Single column with the rail on the left on small screens; entries alternate around a
 * centre rail from `lg` up.
 */
export default function Timeline({ items }) {
  const containerRef = useRef(null)
  const progress = useMotionValue(0)
  const railProgress = useSpring(progress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  // The rail starts drawing when the timeline's top reaches 75% of the viewport height and
  // completes when its bottom reaches 55%. Only tracked while the timeline is on screen.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const viewport = window.innerHeight
      const value = (viewport * 0.75 - rect.top) / (rect.height + viewport * 0.2)
      progress.set(Math.min(1, Math.max(0, value)))
    }

    let stopTracking = null
    const observer = new IntersectionObserver(([entry]) => {
      update()
      if (entry.isIntersecting && !stopTracking) {
        stopTracking = pageScrollY.on('change', update)
      } else if (!entry.isIntersecting && stopTracking) {
        stopTracking()
        stopTracking = null
      }
    })
    observer.observe(el)

    return () => {
      observer.disconnect()
      stopTracking?.()
    }
  }, [progress])

  return (
    <div ref={containerRef} className="relative">
      <div aria-hidden="true" className={`${RAIL_CLASS} bg-white/10`} />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: railProgress }}
        className={`${RAIL_CLASS} origin-top bg-gradient-to-b from-sky-400 via-teal-400 to-emerald-400 will-change-transform`}
      />

      <ol className="space-y-5 sm:space-y-6 lg:space-y-0">
        {items.map((item, idx) => (
          <TimelineItem key={item.title} item={item} index={idx} />
        ))}
      </ol>
    </div>
  )
}

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const shown = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const tone = TONES[item.tone] ?? TONES.emerald
  const onRight = index % 2 === 1

  return (
    <li
      ref={ref}
      className={`relative pl-9 sm:pl-11 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-16 ${index > 0 ? 'lg:-mt-6' : ''}`}
    >
      {/* Rail node — pops in (slight overshoot) as the entry is reached */}
      <span
        aria-hidden="true"
        className={`absolute top-7 left-[4px] lg:left-1/2 lg:-ml-[5.5px] h-[11px] w-[11px] rounded-full ring-4 ring-[#090a0f] transition-[scale,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          shown ? 'scale-100 opacity-100' : 'scale-[0.4] opacity-30'
        } ${tone.node}`}
      />

      {/* Slide-in wrapper (CSS transition) around the card, which keeps its own hover transition */}
      <div
        className={`transition-[opacity,translate] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? 'opacity-100' : `opacity-0 ${onRight ? 'translate-x-7' : '-translate-x-7'}`
        } ${onRight ? 'lg:col-start-2' : ''}`}
      >
        <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.14] border-t-white/[0.25] bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-white/30 hover:bg-white/[0.06] transition-colors duration-300">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold border ${tone.tag}`}>
              {item.tag}
            </span>
            {item.period && (
              <span className="text-xs font-mono text-slate-400">{item.period}</span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight text-balance">
            {item.title}
          </h3>
          <p
            className={`mt-1 text-xs sm:text-sm leading-relaxed ${
              item.orgAccent ? 'font-mono font-semibold text-sky-400' : 'text-slate-300'
            }`}
          >
            {item.org}
            {item.orgNote && <span className="text-slate-400"> ({item.orgNote})</span>}
          </p>

          {item.description && (
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {item.description}
            </p>
          )}

          {item.points && (
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className={`mt-0.5 select-none ${tone.bullet}`}>✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  )
}
