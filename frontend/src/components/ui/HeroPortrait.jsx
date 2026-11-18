import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import portraitImg from '../../assets/siam_portrait.png'

export default function HeroPortrait() {
  const containerRef = useRef(null)

  // Fluid mouse parallax
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 18 }
  const mouseX = useSpring(x, springConfig)
  const mouseY = useSpring(y, springConfig)

  // Subtle natural parallax shifts (not a card tilt)
  const moveX = useTransform(mouseX, [-0.5, 0.5], [-12, 12])
  const moveY = useTransform(mouseY, [-0.5, 0.5], [-10, 10])

  const badgeX = useTransform(mouseX, [-0.5, 0.5], [10, -10])
  const badgeY = useTransform(mouseY, [-0.5, 0.5], [8, -8])

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left) / rect.width - 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(normX)
    y.set(normY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px] h-[clamp(150px,30dvh,270px)] sm:h-[300px] md:h-[380px] lg:h-[440px] flex items-end justify-center select-none"
    >
      {/* ── Atmospheric Studio Spotlight Glow behind cutout ── */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[340px] h-[200px] sm:h-[340px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(45,212,191,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none -z-10"
      />

      {/* ── Soft Geometric Halo Ring behind head ── */}
      <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-36 sm:w-52 h-36 sm:h-52 rounded-full border border-sky-400/20 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none -z-10 blur-[1px]" />

      {/* ── The Transparent Cutout Portrait with Seamless Bottom Dissolve ── */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-full flex items-end justify-center"
      >
        <img
          src={portraitImg}
          alt="Md. Fahim Istiaq Siam"
          className="w-auto h-full max-h-[98%] object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
          }}
          loading="eager"
          width="400"
          height="480"
        />
      </motion.div>

      {/* ── Floating Micro-Badge: Top Left (Available for Hire) ── */}
      <motion.div
        style={{ x: badgeX, y: badgeY }}
        initial={{ opacity: 0, scale: 0.8, x: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:inline-flex absolute top-1 sm:top-6 left-0 sm:-left-4 z-20 items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-[#0d1017]/85 backdrop-blur-xl border border-white/10 text-[10px] sm:text-xs font-medium text-slate-200 shadow-xl shadow-black/50"
      >
        <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-emerald-400" />
        </span>
        <span className="tracking-tight">Available for Hire</span>
      </motion.div>

      {/* ── Floating Micro-Chip: Bottom Right (Specialization Pill, hidden on phone to avoid obscuring portrait) ── */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        initial={{ opacity: 0, scale: 0.8, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="hidden sm:flex absolute bottom-4 sm:bottom-6 right-1 sm:-right-4 z-20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-[#0d1017]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 items-center gap-2 sm:gap-2.5"
      >
        <div className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-white tracking-tight leading-tight">
            Android Specialist
          </span>
          <span className="text-[9px] font-mono text-sky-300">
            Kotlin • Jetpack Compose
          </span>
        </div>
      </motion.div>
    </div>
  )
}
