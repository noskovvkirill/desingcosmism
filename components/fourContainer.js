import { useRef,  Suspense, useEffect } from 'react'
import { Canvas, useThree} from "react-three-fiber"
import Four from '../components/four'
import React from 'react'
import {motion} from 'framer-motion'

function Camera(props) {
    const ref = useRef()
    const { setDefaultCamera } = useThree()
    useEffect(() => void setDefaultCamera(ref.current), [])
    return <perspectiveCamera ref={ref} {...props} />
  }
  

const FourContainer = ({clickOne, key}) => {  

  return (
    <motion.div  key={key} initial={{ y: 300, opacity: 0 }}
    transition={{ duration: 2.5 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -300, opacity: 0 }}
    className='three'>

    <Canvas>
            <Camera position={[0, 0, 15]} />
            <ambientLight intensity={1.0} />
            <pointLight position={[40, 40, 40]} />
            <Suspense fallback={null}> 
                <Four clickOne={clickOne}/>
            </Suspense>
        </Canvas>
    </motion.div>    
  )
}

export default FourContainer