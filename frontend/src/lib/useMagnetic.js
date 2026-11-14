import { useRef, useState, useEffect } from 'react'

/**
 * Custom hook for smooth 3D magnetic / tilt micro-interactions on cards and buttons.
 * Gives elements a tactile zero-gravity lean effect toward the pointer.
 */
export function useMagnetic(intensity = 15, scale = 1.02) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let rafId = null

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)

      const rotateX = (-y / (rect.height / 2)) * intensity
      const rotateY = (x / (rect.width / 2)) * intensity

      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setStyle({
          transform: `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
          transition: 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)',
        })
      })
    }

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        setStyle({
          transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        })
      })
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [intensity, scale])

  return { ref, style }
}
