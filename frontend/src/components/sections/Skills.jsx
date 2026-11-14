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
    title: 'Software Engineering Experience',
    institution: 'Softengine Lab',
    note: 'Hands-on product development applying modern toolchains and software engineering workflows.',
    tag: 'Experience',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-transparent">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal yOffset={20} className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-slate-300 uppercase tracking-wider mb-4">
            Capabilities &amp; Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineering capabilities.
          </h2>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            Specialized in native Android engineering, backed by solid backend architecture and intelligent system design.
          </p>
        </ScrollReveal>

        {/* Minimalist Editorial Rows — No Heavy Card Boxes */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] mb-16">
          {CAPABILITIES.map((item, idx) => (
            <ScrollReveal
              key={item.category}
              yOffset={16}
              delay={idx * 0.06}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start group hover:bg-white/[0.015] transition-colors duration-200 -mx-4 px-4 rounded-xl"
            >
              {/* Left Column: Number & Category Title */}
              <div className="md:col-span-4 flex items-start gap-4">
                <span className="font-mono text-xs text-sky-400 mt-1 select-none">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors duration-150">
                    {item.category}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    {item.headline}
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative Description & Clean Tech Tags */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition-colors duration-150"
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
        <ScrollReveal yOffset={20} delay={0.1} className="pt-2">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
            Background &amp; Credentials
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.title}
                className="p-6 rounded-2xl border border-white/[0.12] border-t-white/[0.22] bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200"
              >
                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                  {edu.tag}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight mb-1">
                  {edu.title}
                </h4>
                <p className="text-xs font-medium text-slate-300 mb-1.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.note}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
