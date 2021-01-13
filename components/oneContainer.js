import { useRef,  Suspense, useEffect } from 'react'
import { Canvas, useThree} from "react-three-fiber"
import One from '../components/one'
import React from 'react'
import { motion } from "framer-motion"

function Camera(props) {
    const ref = useRef()
    const { setDefaultCamera } = useThree()
    useEffect(() => void setDefaultCamera(ref.current), [])
    return <perspectiveCamera ref={ref} {...props} />
  }
  

const OneContainer = ({clickOne, number=1, title}) => {  
  

  return (
    <motion.div  initial={{ y: 600, opacity: 0 }}
    transition={{ duration: 2.5 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -300, opacity: 0 }}
    className='three'
    onClick={(e)=>{e.preventDefault();clickOne(number)}}
    >
      <span>{title}</span>
        <Canvas>
            <Camera position={[0, 0, 15]} />
            <ambientLight intensity={1.0} />
            <pointLight position={[40, 40, 40]} />
            <Suspense fallback={null}> 
                <One number={number}/>
            </Suspense>
        </Canvas>
    </motion.div>
 
  )
}

export default React.memo(OneContainer)
   
   
 