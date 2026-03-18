import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 500 }) {
    const mesh = useRef()
    const light = useRef()

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)
        const sizes = new Float32Array(count)

        const purpleColors = [
            [0.486, 0.231, 0.929],  // #7c3aed
            [0.659, 0.333, 0.969],  // #a855f7
            [0.545, 0.361, 0.965],  // #8b5cf6
            [0.753, 0.518, 0.988],  // #c084fc
            [0.408, 0.114, 0.851],  // #681dd9
        ]

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            positions[i3] = (Math.random() - 0.5) * 20
            positions[i3 + 1] = (Math.random() - 0.5) * 20
            positions[i3 + 2] = (Math.random() - 0.5) * 15

            const color = purpleColors[Math.floor(Math.random() * purpleColors.length)]
            colors[i3] = color[0]
            colors[i3 + 1] = color[1]
            colors[i3 + 2] = color[2]

            sizes[i] = Math.random() * 3 + 0.5
        }

        return { positions, colors, sizes }
    }, [count])

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (mesh.current) {
            mesh.current.rotation.y = time * 0.03
            mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1

            const positions = mesh.current.geometry.attributes.position.array
            for (let i = 0; i < count; i++) {
                const i3 = i * 3
                positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.002
            }
            mesh.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}

function FloatingOrbs() {
    const group = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (group.current) {
            group.current.children.forEach((child, i) => {
                child.position.y = Math.sin(time * 0.5 + i * 2) * 2
                child.position.x = Math.cos(time * 0.3 + i * 1.5) * 3
            })
        }
    })

    return (
        <group ref={group}>
            {[...Array(5)].map((_, i) => (
                <mesh key={i} position={[(i - 2) * 3, 0, -5 - i]}>
                    <sphereGeometry args={[0.3 + i * 0.1, 32, 32]} />
                    <meshStandardMaterial
                        color={`hsl(${270 + i * 10}, 80%, ${50 + i * 5}%)`}
                        emissive={`hsl(${270 + i * 10}, 80%, ${20 + i * 3}%)`}
                        emissiveIntensity={0.5}
                        transparent
                        opacity={0.4}
                    />
                </mesh>
            ))}
        </group>
    )
}

export default function ParticleBackground() {
    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={0.5} color="#7c3aed" />
                <pointLight position={[-5, -5, 5]} intensity={0.3} color="#a855f7" />
                <Particles />
                <FloatingOrbs />
            </Canvas>
        </div>
    )
}
