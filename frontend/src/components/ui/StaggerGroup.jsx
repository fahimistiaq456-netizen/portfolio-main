import { motion } from 'framer-motion'

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren ?? 0.12,
      delayChildren: custom.delayChildren ?? 0.05,
    },
  }),
}

const staggerItemVariants = {
  hidden: (custom = {}) => ({
    opacity: 0,
    y: custom.yOffset ?? 24,
  }),
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.45,
      ease: custom.ease ?? [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export function StaggerGroup({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  once = true,
  viewport,
  className = '',
  ...props
}) {
  const defaultViewport = {
    once,
    amount: 0.08,
    margin: '0px 0px -30px 0px',
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      custom={{ staggerChildren, delayChildren }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport || defaultViewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  yOffset = 30,
  duration = 0.5,
  className = '',
  ...props
}) {
  return (
    <motion.div
      variants={staggerItemVariants}
      custom={{ yOffset, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default StaggerGroup
