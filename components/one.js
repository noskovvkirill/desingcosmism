import React from 'react'
import { useRef, Suspense, useState} from 'react'
import { useThree, useFrame} from "react-three-fiber"
import { useFBX } from '@react-three/drei/useFBX'



const FBX = ({number}) => {

  
    const mesh = useRef()
    let fbx = useFBX(`/models/${number}.fbx`)
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)


    useFrame(() => {
        mesh.current.rotation.y += 0.01   
        if(hovered){
          mesh.current.rotation.x = 0;
          mesh.current.rotation.y = 0;
          mesh.current.rotation.z = 0;
        }

    })

   


      return (
       
          <mesh
          {...fbx.children[0]}
          ref={mesh}
          position={[0, 0, 4]}
          scale={[0.12,0.12,0.12]}
          name="Object_0"
          rotation={[0, 0, 0]}
          onPointerOver={e => setHover(true)}
          onPointerOut={e => setHover(false)}
        >
        </mesh>
    
      )
  }


  
  const One = ({number}) => {



    return (
      <Suspense callback={false}>
          <FBX number={number}/>
        </Suspense>
    )
  }

  export default One 