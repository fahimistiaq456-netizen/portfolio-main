import { useEffect, useRef } from 'react'

export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const domRef = useRef(null)

  useEffect(() => {
    const el = domRef.current
    if (!el) return

    // If browser doesn't support IntersectionObserver, make visible immediately
    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        observer.unobserve(el)
      }
    }, options)

    observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [options])

  return domRef
}
