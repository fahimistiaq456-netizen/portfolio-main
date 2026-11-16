import { useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import Navbar from './components/ui/Navbar'
import CommandPalette from './components/ui/CommandPalette'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ParticleField from './components/three/ParticleField'
import HeroGeometry from './components/three/HeroGeometry'

// Project screenshot assets
import mybusinessDashboard from './assets/projects/mybusiness_dashboard.jpg'
import mybusinessPlayground from './assets/projects/mybusiness_playground.jpg'
import trustragPreview from './assets/projects/trustrag_preview.png'
import nexusPreview from './assets/projects/nexus_preview.png'
import wildhavenHero from './assets/projects/wildhaven_hero.jpg'
import wildhavenBooking from './assets/projects/wildhaven_booking.png'
import noyamatiPreview from './assets/projects/noyamati_preview.png'

// ── Curated Projects Data with High-Res Themed Previews & Engineering Details ──
const PROJECTS_DATA = [
  {
    id: 'trustrag',
    title: 'TrustRAG Local Lab',
    role: 'AI / ML & Full-Stack RAG',
    categoryLabel: 'AI / ML & Local RAG',
    mockupType: 'laptop',
    image: trustragPreview,
    deviceUrl: 'trustrag-kappa.vercel.app',
    description:
      'Interactive Local LLM laboratory with verified RAG answers, source-first hybrid retrieval, and zero external cloud transmission.',
    highlights: [
      'Local LLM laboratory with multi-model inference via Ollama',
      'Source-first hybrid retrieval with cosine vector similarity',
      'Contextual citation grounding with passage-level source verification',
    ],
    tags: ['RAG', 'Ollama', 'Next.js', 'Vector Search', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/fahimistiaq456-netizen',
    live: 'https://trustrag-kappa.vercel.app/',
    status: 'Live Deployed',
    category: 'ai',
  },
  {
    id: 'nexus-rag',
    title: 'Nexus Enterprise RAG Assistant',
    role: 'Enterprise AI & Knowledge Systems',
    categoryLabel: 'Enterprise AI Hub',
    mockupType: 'laptop',
    image: nexusPreview,
    deviceUrl: 'enterprise-rag-assistant-liard.vercel.app',
    description:
      'Scalable enterprise knowledge assistant with verified semantic answers, citation graphs, passage studio, and observability analytics.',
    highlights: [
      'Semantic Discovery & Passage Studio with citation graphs',
      'Enterprise multi-document ingestion and vector retrieval',
      'Enterprise Observability and query analytics dashboard',
    ],
    tags: ['Next.js', 'Enterprise AI', 'Vector DB', 'Semantic Search', 'TypeScript', 'RAG Pipeline'],
    github: 'https://github.com/fahimistiaq456-netizen',
    live: 'https://enterprise-rag-assistant-liard.vercel.app/',
    status: 'Live Deployed',
    category: 'ai',
  },
  {
    id: 'travel-world',
    title: 'WildWave — Travel & Wilderness Platform',
    role: 'Full-Stack Showcase',
    categoryLabel: 'Full-Stack Web',
    mockupType: 'laptop',
    image: wildhavenHero,
    secondaryImage: wildhavenBooking,
    deviceUrl: 'travel-world-demo.vercel.app',
    description:
      'Immersive travel & wilderness reservation platform featuring interactive spot exploration, date-picker booking flows, and high-performance UI.',
    highlights: [
      'Interactive destination exploration with dynamic UI components',
      'Responsive trip planning interface for mobile and desktop',
      'Production deployment on Vercel with automated CI/CD',
    ],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'UI/UX'],
    github: 'https://github.com/fahimistiaq456-netizen',
    live: 'https://travel-world-demo.vercel.app',
    status: 'Live Deployed',
    category: 'web',
  },
  {
    id: 'noyamati',
    title: 'Noyamati — B2B Wholesale Marketplace',
    role: 'Full-Stack & E-Commerce Engineering',
    categoryLabel: 'Commercial E-Commerce',
    mockupType: 'laptop',
    image: noyamatiPreview,
    deviceUrl: 'noyamati.com',
    description:
      'Production-grade B2B wholesale marketplace connecting garment manufacturers with retail shop owners across Bangladesh, featuring catalog search, inventory management, and digital order tracking.',
    highlights: [
      'Commercial wholesale marketplace engineered at Softengine Lab with high-concurrency order processing',
      'Dynamic product catalog with voice/SKU search, real-time cart state, and order tracking flows',
      'Integrated payment gateways, courier logistics tracking, and analytics telemetry',
    ],
    tags: ['React', 'REST API', 'JavaScript', 'Node.js', 'Tailwind CSS', 'E-Commerce'],
    github: 'https://github.com/fahimistiaq456-netizen',
    live: 'https://noyamati.com',
    status: 'Live Deployed',
    category: 'web',
  },
  {
    id: 'my-business-app',
    title: 'MyBusinessApp',
    role: 'Native Android & Spring Boot',
    categoryLabel: 'Android & Mobile',
    mockupType: 'phone',
    image: mybusinessDashboard,
    secondaryImage: mybusinessPlayground,
    deviceUrl: 'github.com/fahimistiaq456-netizen/MyBusinessApp',
    description:
      'Full-stack enterprise Android application built with 100% Jetpack Compose and Material 3, paired with a Spring Boot REST API & MongoDB backend.',
    highlights: [
      '100% Jetpack Compose UI with Material 3 & MVVM architecture',
      'Dynamic arc gesture side panel with custom Canvas morphing',
      'Spring Boot 3.3.4 REST API backend with MongoDB & secure auth',
      'Android home screen widget with financial quick stats & deep-links',
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Spring Boot', 'MongoDB', 'Material 3', 'Coroutines', 'Retrofit'],
    github: 'https://github.com/fahimistiaq456-netizen/MyBusinessApp',
    live: null,
    apk: 'https://github.com/fahimistiaq456-netizen/MyBusinessApp/releases/download/v1.0.0/MyBusinessApp-v1.0.0.apk',
    status: 'GitHub & APK',
    category: 'mobile',
  },
]

// ── 3D Background Canvas — fixed, GPU-optimised, pointer-events:none ─────────
function BackgroundCanvas({ mouse, scrollY }) {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 6], fov: 70, near: 0.1, far: 1000 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'default',
      }}
      dpr={1}
    >
      <ambientLight intensity={0.15} />
      <Suspense fallback={null}>
        <ParticleField />
        <HeroGeometry mouse={mouse} scrollY={scrollY} />
      </Suspense>
    </Canvas>
  )
}

// ── App Root ──────────────────────────────────────────────────────────────────
export default function App() {
  const mouse = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  })

  // Clear hash on first load
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  // Lenis Smooth Scroll + mouse tracking for 3D
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.18,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
      autoResize: true,
    })

    // Ensure we start at the top of the page (hero section)
    lenis.scrollTo(0, { immediate: true })

    window.lenis = lenis

    lenis.on('scroll', (e) => {
      scrollY.current = e.scroll
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Minimal Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 via-teal-400 to-sky-300 origin-left z-[100] pointer-events-none"
      />

      {/* Fixed 3D background scene */}
      <BackgroundCanvas mouse={mouse} scrollY={scrollY} />

      {/* Scrollable content overlay */}
      <div className="relative z-10 w-full max-w-full overflow-x-hidden">
        <CommandPalette />
        <Navbar />
        <main className="w-full max-w-full overflow-x-hidden">
          <Hero />
          <Skills />
          <Projects projects={PROJECTS_DATA} />
          <Contact />
        </main>
      </div>
    </div>
  )
}
