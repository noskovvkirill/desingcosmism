import React from 'react'
import { useRef, Suspense, useState} from 'react'
import { useThree, useFrame} from "react-three-fiber"
import { useFBX } from '@react-three/drei/useFBX'



const FBX = ({click}) => {

  
    const mesh = useRef()
    let fbx = useFBX('/models/3.fbx')
    const { 
      gl,             
      canvas,              
    } = useThree()

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
    //   if(hovered){
     
        // mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
    //   }
    })

   


      return (
       
          <mesh
          {...fbx.children[0]}
          ref={mesh}
          position={[0, 0, 6]}
          scale={[0.12,0.12,0.12]}
          name="Object_0"
          rotation={[0, 0, 0]}
          onClick={e=>click()}
          onPointerOver={e => setHover(true)}
          onPointerOut={e => setHover(false)}
        >
        </mesh>
        
    
      )
  }


  
  const Three = ({clickOne}) => {



    return (
      <Suspense callback={false}>
          <FBX click={clickOne}/>
        </Suspense>
    )
  }

  export default Three 