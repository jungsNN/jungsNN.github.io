import { OrbitControls, useCursor } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AsciiEffect } from 'three-stdlib'

const AsciiBg = (props) => {
  const mesh = useRef<any>(null);

  return (
    <mesh ref={mesh} {...props}>
      <color attach="background" args={['black']} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <OrbitControls />
      {/* <AsciiRenderer invert /> */}
    </mesh>
  )
}

function Torusknot(props) {
  const ref = useRef()
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  // @ts-ignore
  useFrame((state, delta) => typeof ref?.current?.rotation !== 'undefined' && (ref.current.rotation.x = ref.current.rotation!.y += delta / 2))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1.25}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <torusKnotGeometry args={[1, 0.2, 128, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export function AsciiRenderer({ renderIndex = 1, characters = ' .:-+*=%@#', ...options }) {
    // Reactive state
    const { size, gl, scene, camera } = useThree()
  
    // Create effect
    const effect = useMemo(() => {
      const effect = new AsciiEffect(gl, characters, options)
      effect.domElement.style.position = 'absolute'
      effect.domElement.style.top = '0px'
      effect.domElement.style.left = '0px'
      effect.domElement.style.color = 'white'
      effect.domElement.style.backgroundColor = 'black'
      effect.domElement.style.pointerEvents = 'none'
      return effect
    }, [characters, options.invert, gl, options])
  
    // Append on mount, remove on unmount
    // @ts-ignore
    useEffect(() => {
      gl.domElement.parentNode.appendChild(effect.domElement)
      return () => gl.domElement.parentNode.removeChild(effect.domElement)
    }, [effect, gl.domElement.parentNode])
  
    // Set size
    useEffect(() => {
      effect.setSize(size.width, size.height)
    }, [effect, size])
  
    // Take over render-loop (that is what the index is for)
    useFrame((state) => {
      effect.render(scene, camera)
    }, renderIndex)
  
    // This component returns nothing, it has no view, it is a purely logical
    return null;
  }
  


export default AsciiBg