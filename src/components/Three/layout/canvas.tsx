import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, Backdrop, BakeShadows, Cloud, Environment, Preload, Scroll, ScrollControls, Sky, Stars } from '@react-three/drei'
import useStore from '@/utils/store'
import { Suspense, useCallback, useEffect, useState } from 'react'
import Loader from '../helpers/Loader'
import Lightbulb from '../props/environment/Lights/Lightbulb'
import CameraController from '../helpers/jsm/controls/CameraController'
import { cvURLS, nftStorageBase } from '@/constants/urls'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import AsciiBg from './ascii'

const DungeonView = ({children}) => {
  return (
    <>
      <AdaptiveDpr pixelated/>
      <AdaptiveEvents />
      <CameraController />
      <hemisphereLight color="orange" intensity={0.02}/>
      <Lightbulb position={[0, 0, 0]} intensity={.5} rotation={[-Math.PI / 2, 10, 0]} color="blue"/>
      {/* <Sky distance={50000} sunPosition={[3, 5, 1]} inclination={10} azimuth={0.25}/> */}
      <Sky turbidity={8} rayleigh={6} mieCoefficient={.005} mieDirectionalG={0.8} sunPosition={ [0, 0, 0]} />
      <Cloud
        opacity={0.5}
        speed={.5} // Rotation speed
        width={6} // Width of the full cloud
        depth={5} // Z-dir depth
        segments={20} // Number of particles
        />
      <Suspense fallback={<Loader />}>
        {children}
        <Preload all />
        <Environment preset="city"/>
        <BakeShadows/>
      </Suspense>
      <Stars radius={100} depth={50} count={1000} factor={5} saturation={0} fade speed={1} />
    </>
  )
}

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)
  const router = useRouter()//  useStore((state) => state.router)
  const [isLoading, setIsLoading] = useState(true)
 
  const onRoute = useCallback(() => {

    setTimeout(() => {
      // setIsLoading(false)
      if (router.route === '/scenes') {
        console.log('is scenes')
        router.replace('/scenes/dungeon')
        setTimeout(() => {
  
          setIsLoading(false)
        }, 2000)
      } else {
  
        setIsLoading(false)
      }
    }, 2000)

 
  }, [ setIsLoading, router.route])

  useEffect(() => {
    if (typeof window !== 'undefined') {
     
      window.addEventListener('pageshow', () => {
        console.log('window is loading')
        if (router.route.includes('scenes/dungeon')) {
          router.replace('/scenes')
          
        }
      }        
      )
      // window.removeEventListener('pageshow', () => {
      //   setIsLoading(true)
      // })
    }
  }, [router.route])


  useEffect(() => {
    if (isLoading) {
      
      onRoute()
    } 
  }, [onRoute, isLoading])

  return !isLoading ? (
      <Canvas
        shadows // ={router.route.includes('dungeon')}
        flat={router.route.includes('cv')}
        dpr={!router.route.includes('dungeon') && [1, 2]} 
        // @ts-ignore
        raycaster={ router.route.includes('dungeon') && { computeOffsets:({ clientX, clientY }) => ({
            offsetX: clientX, offsetY: clientY 
          })
      }}
        // className="canvas"
        style={{background: "navy", }}
      // @ts-ignore
        // mode='concurrent'
        camera={router.route.includes('dungeon') ? {
          position: [-1, 0, 15],
          rotation: [Math.PI / 2, 10, 0],
        } : router.route.includes('cv') 
            ? { fov: 15, zoom:  1, position: [0, 0, 2] }
            : { position: [0, 0, 0]}}
        onCreated={(state) => state.events.connect(dom.current)}
      >
        {
          router.route.includes('cv') ? (
            <>
              <ScrollControls damping={6} pages={20} >
                {/* @ts-ignore */}
              <Scroll html style={{ width: '100%', height: '100%'}}>
                  {Object.values(cvURLS).map((cv) =>  (
                    <HTMLItem key={`page-${cv.page}`}>
                      {cv.url && <Redirect key={`link-${cv.page}`} href={cv.url} target="_blank"/>}
                      <img key={`${cv.name}`} height={'800px'} width="100%" src={`${nftStorageBase}/${cv.cid}`} alt="test-cv-page"/>
                    </HTMLItem>
                  ))}
                </Scroll>
                
                <Suspense fallback={null}>
                  {children}
                  <Preload all />
                </Suspense>
              </ScrollControls>
            </>
          ) : router.route.includes('dungeon') ? (
              <DungeonView>{children}</DungeonView>
          ) : (
            <>
              <color attach="background" args={['#000000']} />
              <CameraController />
              <Backdrop castShadow floor={2} >
                <AsciiBg />
              </Backdrop>
              <Suspense fallback={null}>
                {children}
                <Preload all />
              </Suspense>
            </>
          )
        }
        
      </Canvas>
  ) : (
    <></>
  )
}


const HTMLItem = styled.div`
  position: relative;
`;

const Redirect = styled.a`
  position: absolute;
  top: 6%;
  right: 5%;
  width: calc(100vw / 4);
  height: calc(100vw / 18);
  cursor: pointer;
`;

export default LCanvas
