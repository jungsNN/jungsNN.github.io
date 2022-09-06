/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PKY_studio (https://sketchfab.com/PKY_studio)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/painting-314948a937824ee5a56e35aeed23701d
title: Painting
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Image, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pCube1_blinn2_0: THREE.Mesh
  }
  materials: {
    blinn2: THREE.MeshStandardMaterial
  }
}

function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/golden-frame-transformed.glb', 's') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'Sketchfab_model' }}>
        <group rotation={[Math.PI / 2, 0, 0]} userData={{ name: '9a584149b9784b9e94be446827e2dc7c.fbx' }}>
          <group userData={{ name: 'RootNode' }}>
            <group position={[0, 0.03, 0]} scale={10.18} userData={{ name: 'pCube1' }}>
              <mesh geometry={nodes.pCube1_blinn2_0.geometry} material={materials.blinn2} />
              <Picture scale={1.01}/>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

const Picture = (props) => {
  const mesh = useRef<any>(null);
  return (
  <mesh ref={mesh} {...props}>
    <Image 
      url="https://nftstorage.link/ipfs/QmYU8aQefZYZi6hLPBCu6ms44Ca7kDJvEKMSVk5YhvGRV3"
    />
  </mesh>)
}

const GoldenFrame = (props) => {
  const mesh = useRef<any>(null);

  return (
    <mesh ref={mesh} {...props}>
       {/* <rectAreaLight position={[-13, -1, 1]}/> */}
       <Model />
    </mesh>
  )
}

useGLTF.preload('/golden-frame-transformed.glb')

export default GoldenFrame