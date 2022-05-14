/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Urpo (https://sketchfab.com/Urpo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/retro-computer-f844c0357d284fd8baa1435e9ff31bb2
title: Retro computer
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh
    defaultMaterial_1: THREE.Mesh
  }
  materials: {
    Part2: THREE.MeshStandardMaterial
    Part1: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/retro-computer-transformed.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Part2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Part1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
