import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const PARTICLE_COUNT = 220

export default function ParticleField() {
  const pointsRef = useRef()
  const prefersReduced = useRef(false)

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      // Using deterministic seed-like spread rather than truly random each render
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2 * 7.3
      const radius = 4 + (i % 13) * 1.8
      positions[i3]     = Math.cos(angle) * radius * (1 + (i % 5) * 0.3) - 2
      positions[i3 + 1] = (((i * 17) % 28) - 14)
      positions[i3 + 2] = Math.sin(angle) * radius * 0.6 - 3

      // Sky blue / teal two-tone palette matching the new design system
      if (i % 4 === 0) {
        colors[i3] = 0.22; colors[i3 + 1] = 0.74; colors[i3 + 2] = 0.97 // sky-400
      } else {
        colors[i3] = 0.18; colors[i3 + 1] = 0.83; colors[i3 + 2] = 0.75 // teal-400
      }
    }
    return { positions, colors }
  }, [])

  useFrame(({ clock }) => {
    if (!pointsRef.current || prefersReduced.current) return
    const t = clock.elapsedTime
    pointsRef.current.rotation.y = t * 0.012
    pointsRef.current.rotation.x = t * 0.006
  })

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  )
}
