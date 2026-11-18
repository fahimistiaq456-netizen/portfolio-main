import { useRef } from 'react'
import { useInView } from 'framer-motion'

const HIDDEN_OFFSET = {
  up: 'translate-y-8',
  left: '-translate-x-7',
  right: 'translate-x-7',
}

/**
 * Fades and slides its children in the first time they scroll into view.
 * Uses a CSS transition rather than a JS-driven animation, so it runs on the compositor
 * thread and stays smooth even while the main thread is busy (3D canvas, image decoding).
 */
export default function Reveal({ children, from = 'up', delay = 0, className = '' }) {
  const ref = useRef(null)
  const shown = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,translate] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? 'opacity-100' : `opacity-0 ${HIDDEN_OFFSET[from]}`
      } ${className}`}
    >
      {children}
    </div>
  )
}
