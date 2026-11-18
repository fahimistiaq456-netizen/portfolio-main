import { motionValue } from 'framer-motion'

// Current page scroll position in px, fed by the Lenis instance in App.jsx. Scroll-linked
// effects read this single value instead of each attaching their own scroll tracker.
export const pageScrollY = motionValue(0)

export function scrollToSection(target, { offset = -20, duration = 1 } = {}) {
  if (window.lenis) {
    window.lenis.scrollTo(target, { offset, duration })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Click handler for in-page anchor links: glide instead of the browser's instant jump
export function handleAnchorClick(e, href) {
  e.preventDefault()
  scrollToSection(href)
  window.history.pushState(null, '', href)
}
