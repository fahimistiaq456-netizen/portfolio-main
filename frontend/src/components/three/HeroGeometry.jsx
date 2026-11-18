import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const RING_OPACITY = [0.35, 0.25, 0.14]

export default function HeroGeometry({ mouse, scrollY }) {
  const groupRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const ring3Ref = useRef()

  const targetRotX = useRef(0)
  const targetRotY = useRef(0)

  useFrame(({ clock, size, viewport }) => {
    if (!groupRef.current) return

    const scroll = scrollY?.current || 0

    // Fade the rings out together with the hero so they never drift across the text of the
    // sections below. Once invisible, hide the group to skip its draw calls.
    const fade = 1 - THREE.MathUtils.smoothstep(scroll, size.height * 0.15, size.height * 0.8)
    if (fade <= 0) {
      if (groupRef.current.visible) {
        groupRef.current.visible = false
      }
      return
    }
    if (!groupRef.current.visible) {
      groupRef.current.visible = true
    }

    ;[ring1Ref, ring2Ref, ring3Ref].forEach((ring, i) => {
      if (ring.current) ring.current.material.opacity = RING_OPACITY[i] * fade
    })

    const t = clock.elapsedTime

    targetRotX.current += 0.001
    targetRotY.current += 0.0015

    const mx = mouse?.current?.x || 0
    const my = mouse?.current?.y || 0

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX.current + my * 0.12,
      0.03
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY.current + mx * 0.12,
      0.03
    )

    // Orbit the portrait: right-hand side on desktop, top-centre on the stacked mobile layout
    const isStacked = size.width < 768
    const baseY = isStacked ? viewport.height * 0.27 : 0

    // Drift upwards with the page (slower than the content) while scrolling away
    groupRef.current.position.x = isStacked ? 0 : 2.35
    groupRef.current.position.y =
      baseY + Math.sin(t * 0.5) * 0.06 + (scroll / size.height) * viewport.height * 0.4

    groupRef.current.scale.setScalar((isStacked ? 0.5 : 0.85) * (0.8 + 0.2 * fade))

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.004
      ring1Ref.current.rotation.x = Math.sin(t * 0.25) * 0.1
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= 0.003
      ring2Ref.current.rotation.y = Math.cos(t * 0.3) * 0.1
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += 0.002
    }
  })

  return (
    <group ref={groupRef} position={[2.35, 0, -0.6]}>
      {/* Primary Accent Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[2.15, 0.012, 8, 48]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
      </mesh>

      {/* Secondary Soft Ring */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3.2, Math.PI / 4, 0]}>
        <torusGeometry args={[2.48, 0.01, 8, 40]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.25} />
      </mesh>

      {/* Outer Faint Ring */}
      <mesh ref={ring3Ref} rotation={[0, 0, Math.PI / 5]}>
        <torusGeometry args={[2.80, 0.008, 6, 36]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.14} />
      </mesh>
    </group>
  )
}
