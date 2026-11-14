import { motion } from 'framer-motion'

/**
 * ScrollReveal Wrapper Component
 * Silky smooth scroll-triggered entrance animations (slide-up + fade).
 * Fires ONCE per element for best performance.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 28,
  once = true,
  className = '',
  viewport,
  ease = [0.25, 0.46, 0.45, 0.94],
  ...props
}) {
  const defaultViewport = {
    once,
    amount: 0.1,
    margin: '0px 0px -30px 0px',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport || defaultViewport}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
