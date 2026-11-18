import { Fragment, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Masked word-by-word text reveal: every word slides up from behind its own clip box
 * the first time the text is in view (immediately on load for text above the fold).
 * CSS-driven, so it runs on the compositor thread.
 */
export default function RevealText({
  text,
  as: Tag = 'div',
  delay = 0,
  stagger = 0.08,
  className = '',
  wordClassName = '',
}) {
  // Observe the container: the words start fully clipped, so they would never
  // register as "in view" on their own.
  const ref = useRef(null)
  const shown = useInView(ref, { once: true, amount: 0.6 })

  return (
    <Tag ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 && ' '}
          {/* Extra bottom padding keeps descenders (q, g, y) from being clipped */}
          <span className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
            <span
              style={{ transitionDelay: `${delay + i * stagger}s` }}
              className={`inline-block transition-[translate] duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                shown ? 'translate-y-0' : 'translate-y-[115%]'
              } ${wordClassName}`}
            >
              {word}
            </span>
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}
