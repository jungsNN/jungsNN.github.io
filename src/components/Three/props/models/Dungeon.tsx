/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Ankledot (https://sketchfab.com/Ankledot)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/small-scene-2efd162a656648f4b7f295b9bef74835
title: Small Scene
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Circle_M_Circle_0: THREE.Mesh
    Circle_M_Circle_Water_0: THREE.Mesh
    Circle_M_Circle_Net_0: THREE.Mesh
    Circle_M_Circle_Dirt_0: THREE.Mesh
    Circle_Material002_0: THREE.Mesh
    Circle_M_Collumn_0: THREE.Mesh
    Circle_M_Collumn_0_1: THREE.Mesh
  }
  materials: {
    M_Circle: THREE.MeshStandardMaterial
    M_Circle_Water: THREE.MeshStandardMaterial
    M_Circle_Net: THREE.MeshStandardMaterial
    M_Circle_Dirt: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    M_Collumn: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  // const ref = useRef<any>(null);
  const { nodes, materials } = useGLTF('/dungeon-transformed.glb') as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Circle_M_Circle_0.geometry} material={materials.M_Circle} >
              <meshStandardMaterial toneMapped
                color="#1D9553" metalness={1} roughness={5}/>
            </mesh>
            <mesh geometry={nodes.Circle_M_Circle_Water_0.geometry} material={materials.M_Circle_Water}>
            {/* <meshReflectorMaterial color="blue"/> */}
            <planeBufferGeometry />
            {/* <MeshReflectorMaterial
                blur={[100, 100]}
                resolution={256}
                attach="material"
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#3BBBE2"
                metalness={0.5} mirror={1}            /> */}
              </mesh>
              {/* <Wave  /> */}
            <mesh geometry={nodes.Circle_M_Circle_Net_0.geometry} material={materials.M_Circle_Net}>
            <meshStandardMaterial toneMapped
                color="#C2BF63"  roughness={5}/>
            </mesh>
            <mesh geometry={nodes.Circle_M_Circle_Dirt_0.geometry} material={materials.M_Circle_Dirt} >
            {/* <meshStandardMaterial toneMapped color="blue" roughness={10}/> */}
            <planeBufferGeometry />
            {/* <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={256}
                attach="material"
                mixBlur={1}
                mixStrength={40}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#3BBBE2"
                metalness={0.5} mirror={1}/> */}
              </mesh>
            <mesh geometry={nodes.Circle_Material002_0.geometry} material={materials['Material.002']} >
            <meshStandardMaterial fog toneMapped color="#847B3A" roughness={7}/>
              </mesh>
            <mesh geometry={nodes.Circle_M_Collumn_0.geometry} material={materials.M_Collumn}/>
            <mesh geometry={nodes.Circle_M_Collumn_0_1.geometry} material={materials.M_Collumn} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dungeon-transformed.glb')
