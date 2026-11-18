import { useScrollReveal } from '../../lib/useScrollReveal'

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      {/* Background ambient glow spots */}
      
      

      <div ref={sectionRef} className="section-fade relative max-w-7xl mx-auto px-5 sm:px-6 w-full z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#13e6c4]/20 bg-[#13e6c4]/5 text-[10px] sm:text-xs font-bold tracking-widest text-[#13e6c4] uppercase mb-4">
            ABOUT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            <span className="text-white">Architecture-first.</span>{' '}
            <span className="text-slate-500 font-bold">Not just code.</span>
          </h2>
        </div>

        {/* 2-Column Grid: Code Card on Left, Bio on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Developer.kt Code Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Subtle back glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#13e6c4]/20 via-indigo-500/10 to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 -z-10" />

              {/* Window Frame */}
              <div className="rounded-2xl border border-white/10 bg-[#0a101a]/90 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:border-[#13e6c4]/30 transition-all duration-300">
                {/* Window Titlebar */}
                <div className="px-4 py-3 border-b border-white/5 bg-white/[0.02] flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/90 shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/90 shadow-sm" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/90 shadow-sm" />
                  </div>
                  <span className="ml-2 font-mono text-[11px] sm:text-xs text-slate-400 font-medium">
                    Developer.kt
                  </span>
                </div>

                {/* Code Snippet */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto selection:bg-[#13e6c4]/20">
                  <div className="text-slate-100">
                    <span className="text-[#ec4899] font-medium">data class</span>{' '}
                    <span className="text-[#38bdf8] font-semibold">Developer</span>
                    <span className="text-slate-300">(</span>
                  </div>
                  <div className="pl-4 sm:pl-6 space-y-1 my-1">
                    <div>
                      <span className="text-slate-300">name</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-[#34d399]">"Md. Fahim Istiaq Siam"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-slate-300">role</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-[#34d399]">"Android Engineer"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-slate-300">location</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-[#34d399]">"Mymensingh, BD"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-slate-300">stack</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-[#34d399]">"Kotlin & Jetpack Compose"</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-slate-300">available</span>{' '}
                      <span className="text-slate-400">=</span>{' '}
                      <span className="text-[#38bdf8] font-semibold">true</span>
                    </div>
                  </div>
                  <div className="text-slate-300">)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I'm a Computer Science & Engineering graduate from{' '}
              <strong className="text-white font-semibold">Mymensingh Engineering College</strong> (Affiliated with the University of Dhaka) with a strong interest in{' '}
              <strong className="text-white font-semibold">Android Application Development</strong>,{' '}
              <strong className="text-white font-semibold">Artificial Intelligence</strong>, and{' '}
              <strong className="text-white font-semibold">Machine Learning</strong>.
            </p>

            <p>
              Experienced with <strong className="text-white font-semibold">Kotlin</strong> and <strong className="text-white font-semibold">Jetpack Compose</strong> for building modern, high-performance mobile applications. Having gained technical experience with Softengine Lab, I focus on clean code, Object-Oriented Programming (OOP), and solid software architecture.
            </p>

            <p>
              Eager to contribute to innovative software projects while continuously expanding my technical problem-solving capabilities. Based in{' '}
              <strong className="text-white font-semibold">Muktagacha, Mymensingh, Bangladesh</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#13e6c4]/60 bg-[#13e6c4]/15 hover:bg-[#13e6c4] text-[#13e6c4] hover:text-black font-bold text-xs tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#13e6c4]/20 active:scale-95"
              >
                <span>Let's Connect</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="https://github.com/fahimistiaq456-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white font-medium text-xs tracking-wider transition-all duration-200 active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
