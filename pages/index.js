import { useState, useEffect, useRef } from 'react'
import Layout from '../components/layout'
import OneContainer from '../components/oneContainer'
import React from 'react'
import Introduction from '../components/text/introduction'
import One from '../components/text/1'
import Two from '../components/text/2'
import Three from '../components/text/3'
import Four from '../components/text/4'
import Five from '../components/text/5'
import Audio from '../components/audio'
import { motion, AnimatePresence, useElementScroll } from "framer-motion"
// import ReactAudioPlayer from 'react-audio-player';
import { Resizable, ResizableBox } from 'react-resizable';



const Handle = () =>{
  return(
    <div className='button-sidebar'>
      <div className='button-sidebar-content' style={{userSelect:'none'}}>||</div>
    </div>
  )
}


const HandleHorizontal = () =>{
  return(
    <div className='button-sidebar-horizontal'>
      <div className='button-sidebar-content' style={{userSelect:'none', transform:'rotate(90deg)'}}>||</div>
    </div>
  )
}



const Index = () => {  
  const [objectDisplay, setObjectDisplay] = useState(0)
  const [scrollMax, setScrollMax] = useState(0)
  const [count, setCount] = useState(1)

  

  // const { scrollYProgress } = useElementScroll(ref)


  const NextObject = (number) =>{
   
    setObjectDisplay(number)
   
  }

  const Animate = () => {
    // console.log('scroll',  scrollMax,  ref.current.scrollTop)
    // if(ref.current){
    //   ref.current.scrollTop =  ref.current.scrollTop+count;
    //   // console.log(ref.current.scrollTop)
    //   if(ref.current.scrollTop > 250) {
    //     console.log('more!', ref.current.scrollTop)
    //     setCount(-1)
    //   }
    //   if(ref.current.scrollTop === 0) {
    //     setCount(1)
    //   }
    //   requestAnimationFrame(Animate)
    // }
  }

  // useEffect(()=>{
  //   console.log('scroll',  ref.current.scrollHeight, ref.current.clientHeight)
  //   setScrollMax(ref.current.clientHeight)
  //   requestAnimationFrame(Animate)
  // },[])

  const titles = ['COSMIST FUTURISM', 'Active agent in Evolution', 'MultiUnity', 'ANDROGYNOUS WHOLENESS', 'Horizon of Eternity',  'SUBJECT TO COSMIC LAW']


  const descriptions = [<Introduction/>, <One/>, <Two/>, <Three/>, <Four/>, <Five/>]

 

  return (
   <Layout>
    <main>
    <ResizableBox resizeHandles={["nw"]}
           handle={HandleHorizontal}
           height={700} 
           axis={'y'}
           minConstraints={[300, 256]} maxConstraints={[5000,5000]}
           className='object-main-container'
          >
   <div className='object-main'>
      <div className='object-text'>
       {descriptions[objectDisplay]}
        {/* <div className='object-text-three'></div> */}
      </div>
          <ResizableBox 
           resizeHandles={["w"]}
           handle={Handle}
           width={600} 
           axis={'x'}
           minConstraints={[24, 100]} maxConstraints={[1200, 400]}
           className='object-three' 
          >

            <motion.div className='sidebar-objects'>
            <AnimatePresence>
              {titles.map((object, index)=>{
                return(
                  <React.Fragment key={index}>
                    <OneContainer title={object} number={index} clickOne={NextObject}/>
                  </React.Fragment>
                  )
              })}
            </AnimatePresence>
            </motion.div>
          </ResizableBox>
          
        </div>
        </ResizableBox>
            <div className="footer">
              <Audio title={titles[objectDisplay]}/>
              <div className="card-footer">
                <div><h5>COSMIST FUTURISM</h5></div>
                <div><h5>PRoject by Petra E & Kirill N</h5></div>
              </div>
            </div>
       
            
      
      </main>
    </Layout>
  )
}

export default Index

