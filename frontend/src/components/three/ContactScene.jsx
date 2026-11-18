import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function FloatingCore() {
  const meshRef = useRef()
  const ringRef = useRef()
  const ring2Ref = useRef()
  const particlesRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime

    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.12
      meshRef.current.rotation.y = t * 0.16
      meshRef.current.position.y = Math.sin(t * 0.7) * 0.1
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.2
      ringRef.current.rotation.x = Math.sin(t * 0.4) * 0.25
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = t * 0.15
      ring2Ref.current.rotation.y = Math.cos(t * 0.35) * 0.25
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.04
    }
  })

  // Subtle constellation coordinates
  const points = new Float32Array([
    1.6, 0.5, 0.3,
    -1.5, -0.7, 0.5,
    0.4, 1.7, -0.4,
    -0.5, -1.6, -0.5,
    1.1, -0.8, 1.2,
    -0.9, 1.1, -1.1,
    1.8, -0.2, -0.6,
    -1.4, 0.9, 0.8,
  ])

  return (
    <group position={[0.4, 0, 0]}>
      {/* Central Geometric Core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshBasicMaterial
          color="#2dd4bf"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Orbital Accent Ring 1 */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.9, 0.012, 8, 48]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.22} />
      </mesh>

      {/* Orbital Accent Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.3, 0.008, 8, 48]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.18} />
      </mesh>

      {/* Micro-spark Points */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={8}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#38bdf8"
          transparent
          opacity={0.5}
        />
      </points>
    </group>
  )
}

export default function ContactScene({ className = '' }) {
  const containerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el || !('IntersectionObserver' in window)) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { rootMargin: '300px 0px' } // Pre-render 300px before scrolling into view for instant smoothness
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 ${className}`}
    >
      {/* Ambient background glow behind the subtle 3D object */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(45,212,191,0.04)_50%,transparent_75%)] blur-3xl pointer-events-none" />

      <Canvas
        frameloop={isInView ? 'always' : 'never'}
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        dpr={1}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.5} />
        <FloatingCore />
      </Canvas>
    </div>
  )
}
