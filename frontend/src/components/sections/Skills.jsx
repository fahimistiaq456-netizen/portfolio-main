import ScrollReveal from '../ui/ScrollReveal'

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

const EDUCATION = [
  {
    title: 'B.Sc. in Computer Science & Engineering',
    institution: 'Mymensingh Engineering College',
    note: 'Affiliated with the University of Dhaka. Final examination completed.',
    tag: 'Education',
  },
  {
    title: 'SSC (Science) – GPA 5.00',
    institution: 'Baunia Abdul Jalil High School, Dhaka',
    note: 'Completed in 2018',
    tag: 'Education',
  },
  {
    title: 'HSC (Science) – GPA 4.83',
    institution: 'Milestone College, Dhaka',
    note: 'Completed in 2020',
    tag: 'Education',
  },
  {
    title: 'Software Engineering Experience',
    institution: 'softtrills.com',
    note: 'Hands-on product development applying modern toolchains and software engineering workflows.',
    tag: 'Experience',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative bg-transparent">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal yOffset={20} className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[10px] sm:text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-2.5 sm:mb-3">
            Capabilities &amp; Stack
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2.5 sm:mb-3">
            Engineering capabilities.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            Specialized in native Android engineering, backed by solid backend architecture and intelligent system design.
          </p>
        </ScrollReveal>

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

                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Credentials / Education & Experience Bar */}
        <ScrollReveal yOffset={20} delay={0.1} className="pt-2 sm:pt-4">
          <div className="mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-wider">
              Background &amp; Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Education feature card */}
            <div className="p-6 sm:p-7 lg:p-8 rounded-2xl border border-white/[0.14] border-t-white/[0.25] bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[290px]">
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/25">
                    Education
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3.5 sm:mb-4">
                  Academic Qualifications
                </h3>
                <ul className="space-y-3 sm:space-y-3.5">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1 select-none text-sm">✦</span>
                    <div>
                      <strong className="text-white font-bold block text-sm sm:text-base">
                        B.Sc. in Computer Science &amp; Engineering
                      </strong>
                      <span className="text-slate-300 text-xs sm:text-sm leading-relaxed block mt-0.5">
                        Mymensingh Engineering College{' '}
                        <span className="text-slate-400">(Affiliated with the University of Dhaka)</span>
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1 select-none text-sm">✦</span>
                    <div>
                      <strong className="text-white font-bold block text-sm sm:text-base">
                        Higher Secondary Certificate (HSC) — GPA 4.83
                      </strong>
                      <span className="text-slate-300 text-xs sm:text-sm block mt-0.5">
                        Milestone College, Dhaka <span className="text-slate-400 font-mono">(2020)</span>
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1 select-none text-sm">✦</span>
                    <div>
                      <strong className="text-white font-bold block text-sm sm:text-base">
                        Secondary School Certificate (SSC) — GPA 5.00
                      </strong>
                      <span className="text-slate-300 text-xs sm:text-sm block mt-0.5">
                        Baunia Abdul Jalil High School, Dhaka <span className="text-slate-400 font-mono">(2018)</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience feature card */}
            <div className="p-6 sm:p-7 lg:p-8 rounded-2xl border border-white/[0.14] border-t-white/[0.25] bg-white/[0.04] backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:border-white/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[290px]">
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                    Experience
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 sm:mb-1.5">
                  Software Engineering Experience
                </h3>
                <p className="text-sm sm:text-base font-semibold text-sky-400 mb-3.5 sm:mb-4 flex items-center gap-2 font-mono">
                  softtrills.com
                </p>
                <div className="space-y-3 sm:space-y-3.5">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    Hands-on product development applying modern toolchains, native Android architecture, and disciplined software engineering workflows.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-0.5 select-none">✦</span>
                      <span>Production Android engineering with Kotlin, Jetpack Compose, Coroutines, and clean MVVM.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-emerald-400 mt-0.5 select-none">✦</span>
                      <span>Robust backend integration, REST API contracts, and scalable local storage implementations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
