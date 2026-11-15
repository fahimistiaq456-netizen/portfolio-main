import { useState, useEffect, useRef } from 'react'

function SearchIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function CompassIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function CodeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function FileTextIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function ExternalIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

const ITEMS = [
  { id: 'trustrag', label: 'TrustRAG Local Lab (Live Demo)', type: 'link', path: 'https://trustrag-kappa.vercel.app/', shortcut: 'T', category: 'Live Projects' },
  { id: 'nexus-rag', label: 'Nexus Enterprise RAG Assistant (Live Demo)', type: 'link', path: 'https://enterprise-rag-assistant-liard.vercel.app/', shortcut: 'N', category: 'Live Projects' },
  { id: 'travel-world', label: 'Travel World Demo (Live Web App)', type: 'link', path: 'https://travel-world-demo.vercel.app', shortcut: 'W', category: 'Live Projects' },
  { id: 'noyamati', label: 'Noyamati B2B Wholesale Marketplace (Live Platform)', type: 'link', path: 'https://noyamati.com', shortcut: 'O', category: 'Live Projects' },
  { id: 'mybusinessapp-git', label: 'MyBusinessApp Repo (Android & Spring Boot)', type: 'link', path: 'https://github.com/fahimistiaq456-netizen/MyBusinessApp', shortcut: 'M', category: 'Android' },
  { id: 'mybusinessapp-live', label: 'MyBusinessApp Web Showcase (Live Demo)', type: 'link', path: 'https://fahimistiaq456-netizen.github.io/MyBusinessApp/', shortcut: 'B', category: 'Live Projects' },
  { id: 'hero', label: 'Go to Overview / Introduction', type: 'nav', path: '#hero', shortcut: 'H', category: 'Navigation' },
  { id: 'skills', label: 'Go to Technical Stack & Foundations', type: 'nav', path: '#skills', shortcut: 'S', category: 'Navigation' },
  { id: 'projects', label: 'Go to Selected Projects', type: 'nav', path: '#projects', shortcut: 'P', category: 'Navigation' },
  { id: 'contact', label: 'Go to Contact & Collaboration', type: 'nav', path: '#contact', shortcut: 'C', category: 'Navigation' },
  { 
    id: 'resume', 
    label: 'Download Engineering Resume (PDF)', 
    type: 'action', 
    action: () => {
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Fahim_Istiaq_Siam_Resume.pdf'
      link.click()
    }, 
    shortcut: 'R', 
    category: 'Actions' 
  },
  { id: 'github', label: 'GitHub Profile', type: 'link', path: 'https://github.com/fahimistiaq456-netizen', shortcut: 'G', category: 'Social' },
  { id: 'linkedin', label: 'LinkedIn Profile', type: 'link', path: 'https://www.linkedin.com', shortcut: 'L', category: 'Social' }
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const overlayRef = useRef(null)
  const inputRef = useRef(null)

  const openPalette = () => {
    setSearch('')
    setSelectedIndex(0)
    setIsOpen(true)
    setTimeout(() => inputRef.current?.focus(), 40)
  }

  const closePalette = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((prev) => {
          if (!prev) {
            setSearch('')
            setSelectedIndex(0)
            setTimeout(() => inputRef.current?.focus(), 40)
            return true
          }
          return false
        })
      } else if (
        e.key === '/' &&
        document.activeElement !== inputRef.current &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault()
        openPalette()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredItems = ITEMS.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setSelectedIndex(0)
  }

  const handleSelect = (item) => {
    if (!item) return
    closePalette()

    if (item.type === 'nav') {
      const el = document.querySelector(item.path)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', item.path)
      }
    } else if (item.type === 'action') {
      item.action()
    } else if (item.type === 'link') {
      window.open(item.path, '_blank', 'noopener,noreferrer')
    }
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKeys = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (filteredItems.length === 0 ? 0 : (prev + 1) % filteredItems.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (filteredItems.length === 0 ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex])
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        closePalette()
      }
    }
    window.addEventListener('keydown', handleKeys)
    return () => window.removeEventListener('keydown', handleKeys)
  }, [isOpen, filteredItems, selectedIndex])

  if (!isOpen) return null

  const categories = [...new Set(filteredItems.map(item => item.category))]

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh] sm:pt-[14vh] px-3 sm:px-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === overlayRef.current) closePalette()
      }}
    >
      <div className="relative w-full max-w-lg rounded-xl overflow-hidden border border-white/10 bg-[#0d0f17] shadow-2xl flex flex-col max-h-[70vh] sm:max-h-[55vh]">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
          <SearchIcon className="w-4 h-4 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search commands, projects, sections..."
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none w-full"
          />
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-slate-400 select-none">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No matching commands found.
            </div>
          ) : (
            categories.map(category => {
              const categoryItems = filteredItems.filter(item => item.category === category)
              return (
                <div key={category} className="mb-2 last:mb-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3 py-1 select-none">
                    {category}
                  </div>
                  <div className="space-y-0.5">
                    {categoryItems.map(item => {
                      const absoluteIndex = filteredItems.indexOf(item)
                      const isSelected = absoluteIndex === selectedIndex

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                          className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors duration-100 cursor-pointer ${
                            isSelected
                              ? 'bg-white/10 text-white font-medium'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {category === 'Navigation' && <CompassIcon className="w-3.5 h-3.5 text-slate-400" />}
                            {category === 'Actions' && <FileTextIcon className="w-3.5 h-3.5 text-slate-400" />}
                            {category === 'Live Projects' && <ExternalIcon className="w-3.5 h-3.5 text-emerald-400" />}
                            {category === 'Android' && <CodeIcon className="w-3.5 h-3.5 text-sky-400" />}
                            {category === 'Social' && <ExternalIcon className="w-3.5 h-3.5 text-slate-400" />}
                            <span>{item.label}</span>
                          </div>
                          <span className="font-mono text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-white/[0.04]">
                            {item.shortcut}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Minimal Footer Info */}
        <div className="px-4 py-2 border-t border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px] font-mono text-slate-500 select-none">
          <span>Use ↑ ↓ to navigate</span>
          <span>↵ to select</span>
        </div>

      </div>
    </div>
  )
}
