import * as THREE from "three"
import React from 'react'
import { useRef, Suspense, useState} from 'react'
import { useThree, useFrame} from "react-three-fiber"
import { useFBX } from '@react-three/drei/useFBX'
import { Bloom } from '@react-three/postprocessing'
import { useRouter } from 'next/router'


const FBX = ({click}) => {

  
    const mesh = useRef()
    let fbx = useFBX('/models/1.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
      if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.1
      }
    })

   


      return (
       
          <mesh
          {...fbx.children[0]}
          ref={mesh}
          position={[0, -4, 4]}
          scale={[0.1,0.1,0.1]}
          name="Object_0"
          rotation={[0, 0, 0]}
          onClick={e=>click()}
          onPointerOver={e => setHover(true)}
          onPointerOut={e => setHover(false)}
        >
        </mesh>
    
      )
  }




  const TwoFBX = ({click}) => {
  
   
    const mesh = useRef()
    let fbx = useFBX('/models/2.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    


    useFrame(() => {
      if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.1
      }
    })

      return (
   

        <mesh
        onClick={e=>click()}
        {...fbx.children[0]}
        ref={mesh}
        position={[6, 0, 6]}
        scale={[0.1,0.1,0.1]}
        name="Object_0"
       onClick={e=>click()}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
      >
            {/* <meshBasicMaterial  attach="material" map={texture}/>   */}
      </mesh>

      )
  }

  const ThreeFBX = ({click}) => {
    
    const mesh = useRef()
    let fbx = useFBX('/models/3.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

  

    useFrame(() => {
      if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.1
      }
    })


      return (
        <mesh
        {...fbx.children[0]}
        ref={mesh}
        position={[12, 0, 8]}
        scale={[0.1,0.1,0.1]}
        name="Object_0"
        onClick={e=>click()}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
      >
            {/* <meshBasicMaterial  attach="material" map={texture}/>   */}
      </mesh>
      )
  }

  const FourFBX = ({click}) => {
    const router = useRouter()
    const mesh = useRef()
    let fbx = useFBX('/models/4.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    

    useFrame(() => {
      if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.1
      }
    })

    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
      return (
        <mesh
        {...fbx.children[0]}
        ref={mesh}
        position={[0, 4, 4]}
        scale={[0.1,0.1,0.1]}
        name="Object_0"
        rotation={[0, 0, 0]}
        onClick={e=>click()}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
      >
            {/* <meshBasicMaterial  attach="material" map={texture}/>   */}
      </mesh>
      )
  }

  const FiveFBX = ({click}) => {
    const router = useRouter()
    const mesh = useRef()
    let fbx = useFBX('/models/5.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    


    useFrame(() => {
      if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.1
      }
    })

    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

      return (
        <mesh
        {...fbx.children[0]}
        ref={mesh}
        position={[-12, 0, 8]}
        scale={[0.1,0.1,0.1]}
        name="Object_0"
        rotation={[0, 0, 0]}
        onClick={e=>click()}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
      >
            {/* <meshBasicMaterial  attach="material" map={texture}/>   */}
      </mesh>
      )
  }

  const SixFBX = ({click}) => {
    
    const mesh = useRef()
    let fbx = useFBX('/models/6.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    


    useFrame(() => {
      if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.1
      }
    })

    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

      return (
        <mesh
        {...fbx.children[0]}
        ref={mesh}
        position={[-6, 0, 6]}
        scale={[0.1,0.1,0.1]}
        name="Object_0"
        rotation={[20, 20, 0]}
        onClick={e=>click()}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}
      >
            {/* <meshBasicMaterial  attach="material" map={texture}/>   */}
      </mesh>
      )
  }
  
  const UseFBXScene = ({clickOne,clickTwo,clickThree,clickFour,clickFive,clickSix, show=1}) => {



    return (
      <Suspense callback={false}>
          <FBX click={clickOne}/>
          <TwoFBX click={clickTwo}/>
          <ThreeFBX click={clickThree}/>
          <FourFBX click={clickFour}/>
          <FiveFBX click={clickFive}/>
          <SixFBX click={clickSix}/>
        </Suspense>
    )
  }

  export default UseFBXScene 