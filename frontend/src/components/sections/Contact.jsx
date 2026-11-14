import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import ContactScene from '../three/ContactScene'
import { apiUrl } from '../../lib/api'

const INQUIRY_TYPES = [
  'Android App',
  'Software Role',
  'AI / RAG Project',
  'General Inquiry',
]

export default function Contact() {
  const currentYear = new Date().getFullYear()

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Android App',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false)
  const emailAddress = 'fahimistiaq456@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return

    setStatus('sending')

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: 'Android App', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.warn('API submission failed, offering direct fallback:', err)
      setStatus('error')
    }
  }

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 0.8 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="contact"
      className="min-h-[100dvh] lg:h-[100dvh] relative bg-transparent flex flex-col justify-between pt-16 sm:pt-20 pb-5 px-5 sm:px-8 overflow-hidden z-10"
    >
      {/* ── Subtle 3D Ambient Element in the Background ── */}
      <ContactScene />

      {/* ── Main Content Container (fits in 1 screen height) ── */}
      <div className="max-w-5xl mx-auto w-full relative z-10 my-auto">

        {/* Section Header */}
        <ScrollReveal yOffset={15} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono text-slate-300 uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let's build something exceptional.
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            Open to native Android engineering roles, backend systems, and technical collaboration.
          </p>
        </ScrollReveal>

        {/* 2-Column Minimalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* Left Column: Direct Reach & Quick Channels */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md text-emerald-300 text-xs font-mono shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire &amp; Contracts</span>
            </div>

            {/* Email Contact Line */}
            <div className="p-3.5 rounded-xl border border-white/[0.12] border-t-white/[0.2] bg-white/[0.03] backdrop-blur-xl shadow-lg shadow-black/40 hover:border-white/25 transition-all">
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                Direct Email
              </p>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors truncate"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.08] hover:bg-white/20 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer shrink-0"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Phone & Location Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              <div className="p-3 rounded-xl border border-white/[0.12] border-t-white/[0.2] bg-white/[0.03] backdrop-blur-xl shadow-lg shadow-black/40 hover:border-white/25 transition-all">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                  Phone &amp; WhatsApp
                </p>
                <a
                  href="tel:+8801934892362"
                  className="text-xs font-semibold text-white hover:text-sky-300 transition-colors"
                >
                  +880 1934-892362
                </a>
              </div>

              <div className="p-3 rounded-xl border border-white/[0.12] border-t-white/[0.2] bg-white/[0.03] backdrop-blur-xl shadow-lg shadow-black/40 hover:border-white/25 transition-all flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-xs font-semibold text-white">Mymensingh, BD</p>
                </div>
                <span className="text-[10px] font-mono text-slate-300 bg-white/[0.06] px-2 py-0.5 rounded border border-white/15 backdrop-blur-md">
                  UTC+6 • Remote
                </span>
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="pt-1">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <span>View Full Resume (PDF)</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-6 rounded-2xl border border-white/[0.12] border-t-white/[0.25] bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] relative">

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="py-10 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">Message Received</h4>
                    <p className="text-xs text-slate-400 max-w-xs mb-4 leading-relaxed">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary text-xs py-1.5 px-3.5 cursor-pointer backdrop-blur-md"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Inquiry Type Pills */}
                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {INQUIRY_TYPES.map((type) => {
                          const isSelected = formData.subject === type
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, subject: type }))}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer backdrop-blur-md ${
                                isSelected
                                  ? 'bg-sky-400 text-[#090a0f] font-bold shadow-md shadow-sky-400/20'
                                  : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08]'
                              }`}
                            >
                              {type}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-3 py-2 rounded-xl border border-white/10 border-t-white/[0.18] bg-white/[0.03] backdrop-blur-md text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-400/30 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full px-3 py-2 rounded-xl border border-white/10 border-t-white/[0.18] bg-white/[0.03] backdrop-blur-md text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-400/30 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Project timeline, scope, or engineering role..."
                        className="w-full px-3 py-2 rounded-xl border border-white/10 border-t-white/[0.18] bg-white/[0.03] backdrop-blur-md text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:bg-white/[0.07] focus:ring-1 focus:ring-sky-400/30 transition-all resize-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]"
                      />
                    </div>

                    {/* Error fallback */}
                    {status === 'error' && (
                      <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-center justify-between">
                        <span>Failed to send automatically.</span>
                        <a
                          href={`mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                          className="font-semibold underline ml-2"
                        >
                          Email Directly ↗
                        </a>
                      </div>
                    )}

                    {/* Action Bar */}
                    <div className="pt-1 flex items-center justify-between">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="btn-primary text-xs py-2 px-5 inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {status === 'sending' ? (
                          <>
                            <span className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <span>↗</span>
                          </>
                        )}
                      </button>

                      <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                        Typically replies within 24h
                      </span>
                    </div>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

      {/* ── Seamless Integrated Footer (Inside Contact) ── */}
      <div className="max-w-5xl mx-auto w-full pt-4 border-t border-white/[0.08] relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3 text-center sm:text-left">
          <span className="font-bold text-white tracking-tight">
            Md. Fahim Istiaq Siam
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <p className="text-slate-500 font-mono text-[11px]">
            © {currentYear} All rights reserved. Built with precision.
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px]">
          <a
            href="https://github.com/fahimistiaq456-netizen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Email ↗
          </a>
          <button
            onClick={scrollToTop}
            className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer ml-1"
            title="Scroll to top"
          >
            ↑ Top
          </button>
        </div>
      </div>

    </section>
  )
}
