import { useRef } from 'react'
import { useInView } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import RevealText from '../ui/RevealText'
import SectionEyebrow from '../ui/SectionEyebrow'
import Timeline from '../ui/Timeline'

const CAPABILITIES = [
  {
    num: '01',
    category: 'Native Android',
    headline: 'Kotlin & Jetpack Compose',
    description:
      'Full-lifecycle native Android development with 100% declarative UI, reactive coroutines pipelines, and clean MVVM architecture.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Coroutines & Flow',
      'Material 3',
      'MVVM / UDF',
      'Room & SQLite',
      'Retrofit',
      'Android SDK & Studio',
    ],
  },
  {
    num: '02',
    category: 'Backend & Core',
    headline: 'Spring Boot & APIs',
    description:
      'Server-side service design, RESTful API contracts, relational and NoSQL databases, and robust OOP fundamentals.',
    technologies: [
      'Spring Boot',
      'REST APIs',
      'MongoDB',
      'SQL Databases',
      'Java',
      'Python',
      'C / C++',
      'OOP & Algorithms',
    ],
  },
  {
    num: '03',
    category: 'Intelligent Systems',
    headline: 'RAG & Retrieval Pipelines',
    description:
      'Designing privacy-first local LLM inference labs, hybrid vector retrieval, and semantic citation grounding.',
    technologies: [
      'RAG Architecture',
      'Ollama / Local LLMs',
      'Vector Search',
      'Citation Grounding',
      'TypeScript',
      'Next.js',
    ],
  },
  {
    num: '04',
    category: 'Tooling & Workflow',
    headline: 'Engineering Standards',
    description:
      'Modern version control, build optimization, API testing suites, and disciplined software development practices.',
    technologies: [
      'Git & GitHub',
      'Gradle Build Tool',
      'Postman API Testing',
      'Linux Environment',
      'Clean Code',
      'CI/CD Pipelines',
    ],
  },
]

const BACKGROUND = [
  {
    tag: 'Experience',
    tone: 'emerald',
    title: 'Software Engineering Experience',
    org: 'softtrills.com',
    orgAccent: true,
    description:
      'Hands-on product development applying modern toolchains, native Android architecture, and disciplined software engineering workflows.',
    points: [
      'Production Android engineering with Kotlin, Jetpack Compose, Coroutines, and clean MVVM.',
      'Robust backend integration, REST API contracts, and scalable local storage implementations.',
    ],
  },
  {
    tag: 'Education',
    tone: 'amber',
    title: 'B.Sc. in Computer Science & Engineering',
    org: 'Mymensingh Engineering College',
    orgNote: 'Affiliated with the University of Dhaka',
  },
  {
    tag: 'Education',
    tone: 'amber',
    title: 'Higher Secondary Certificate (HSC) — GPA 4.83',
    org: 'Milestone College, Dhaka',
    period: '2020',
  },
  {
    tag: 'Education',
    tone: 'amber',
    title: 'Secondary School Certificate (SSC) — GPA 5.00',
    org: 'Baunia Abdul Jalil High School, Dhaka',
    period: '2018',
  },
]

// Tech tags pop in one after another once their row is in view (CSS transitions).
function TechTags({ technologies }) {
  const ref = useRef(null)
  const shown = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  return (
    <div ref={ref} className="flex flex-wrap gap-1.5">
      {technologies.map((tech, i) => (
        // The outer span carries the staggered entrance; the tag keeps its own hover transition
        <span
          key={tech}
          style={{ transitionDelay: `${150 + i * 35}ms` }}
          className={`inline-flex transition-[opacity,translate] duration-300 ease-out ${
            shown ? 'opacity-100' : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors duration-150">
            {tech}
          </span>
        </span>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative bg-transparent">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <SectionEyebrow className="mb-2.5 sm:mb-3">Capabilities &amp; Stack</SectionEyebrow>
          <RevealText
            as="h2"
            text="Engineering capabilities."
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-3"
          />
          <ScrollReveal yOffset={12} delay={0.2}>
            <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
              Specialized in native Android engineering, backed by solid backend architecture and intelligent system design.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimalist Editorial Rows — No Heavy Card Boxes */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] mb-8 sm:mb-12">
          {CAPABILITIES.map((item, idx) => (
            <ScrollReveal
              key={item.category}
              yOffset={16}
              delay={idx * 0.06}
              className="py-4 sm:py-5 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 md:gap-6 items-start group hover:bg-white/[0.015] transition-colors duration-200 px-3 sm:px-4 rounded-xl"
            >
              {/* Left Column: Number & Category Title */}
              <div className="md:col-span-4 flex items-start gap-3 sm:gap-4">
                <span className="font-mono text-xs text-sky-400 mt-1 select-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors duration-150">
                    {item.category}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5 sm:mt-1">
                    {item.headline}
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative Description & Clean Tech Tags */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5 sm:mb-3">
                  {item.description}
                </p>

                <TechTags technologies={item.technologies} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Background Timeline — Experience & Education */}
        <div className="pt-2 sm:pt-4">
          <SectionEyebrow className="mb-5 sm:mb-7">Background &amp; Credentials</SectionEyebrow>
          <Timeline items={BACKGROUND} />
        </div>

      </div>
    </section>
  )
}
