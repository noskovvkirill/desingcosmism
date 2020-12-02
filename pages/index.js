import { useState } from 'react'
import Layout from '../components/layout'
import OneContainer from '../components/oneContainer'
import TwoContainer from '../components/twoContainer'
import ThreeContainer from '../components/threeContainer'
import FourContainer from '../components/fourContainer'
import FiveContainer from '../components/fiveContainer'
import SixContainer from '../components/sixContainer'
import React from 'react'
import { AnimatePresence } from "framer-motion"
// import ReactAudioPlayer from 'react-audio-player';

import { PlayButton, Timer } from 'react-soundplayer/components';

// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = "/audio/1.aac";

// some track meta information
const trackTitle = 'Great song by random artist';


const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle } = props;

  return (
    <div>
      <PlayButton {...props} />
      <h2>{trackTitle}</h2>
    </div>
  );
});


const Index = () => {  
  const [objectDisplay, setObjectDisplay] = useState(0)

  const NextObject = () =>{
    if(objectDisplay<5){
    setObjectDisplay(objectDisplay+1)
    } else {
      setObjectDisplay(0)
    }
  }

  const titles = ['Active agent in Evolution', 'SHIFTING FROM EGOISM TO UNITY', 'ANDROGYNOUS WHOLENESS', 'IMMORTALITY',  'SOLIPSISM', 'HUMAN AS SUBJECT TO COSMIC LAWS OF NATURE']


  const descriptions = ['The idea of active evolution, the necessity for a new conscious stage of development of the world, when humanity directs it on a course which reason and moral feeling determine, when man takes, so to say, the wheel of evolution into his own hands… Man, for actively evolutionary thinkers, is a being in transition, in the process of growing, far from complete, but also consciously creative, called upon to overcome not only the outer world but also his own inner nature. As we shift our perspective from an earrth-centered to a cosmos-centred view, emphasises that present humanity is not the end point of evolution, and in addition evolutionary process has a long future, and humanity is now in a position to direct and shape its own future evolution.', 'What would happen if man could make himself so submissive that he wholly rid himself of freedom? This would be the highest degree of human perfection. Every movement of his soul would then be produced by the principle which produced all other movements of the world. Thus, instead of being separated from nature, as he now is, man would fuse with it. Instead of the feeling of his own will, which separates him from the general order of things, which makes him being apart, he would find the feeling of universal will, the profound awareness of his real relation to the whole of creation. Under what conditions, will I no longer mean domination or negation of all except oneself, and altruism no longer mean servitude or self-negation? Or: when will I (=egoism) no longer mean isolation (solipsism), and other( =altruism) no longer mean alienation, discord (separatism)? The synthesis of egoism (individualism, solipsism) and altruism can be expressed by the joining of two words: “we” and “all”. When all will recognise themselves in all, and thereby become even more closely related, then will come multi-unity.', 'Sexual union becomes a step toward the more perfect union of androgynous wholeness. Physical union is a striving toward spiritual union. Eventually that striving will lead humanity, now suffering from sexual division into male and female, to consciously develop the wholeness of the human being. Human wholeness must include the masculine and feminine principles balanced in every individual.', 'Death is not permanently inherent in nature, but is a temporary adaptation to facilitate the process of evolution - old forms of life must die so that new forms may arise.But with the development of the noosphere, humanity has evolved to the point that death is no longer needed for future evolution - human reason, not biological necessity, will shape the future of humanity. The great obstacle to overcoming death is not physical but intellectual and emotional - we now simply assume that the elimination of death is one of those things that cannot be done. The first step to indefinite longevity must be a change in attitude and orientation. Elixir of immortality: Decline and death result from some genetic defect that leads to the failure in the cell’s process of self-renewal.',  'SOLIPSISM', "The principle behind everything, including human culture and history, is electricity, the power of electrons to attract, combine and form larger units of matter and energy. Gravity, magnetism, space-time, and matter-energy are all, fundamentally, electronic phenomena. The sun's influence on the biosphere, including on human behaviour, is a matter of the transfer of electrons. The discovery that patterns of solar activity - sun storms, sunspots - coincide with patterns of mass human behaviour - wars, revolutions, epidemics - represents, a large first step toward uniting 'the science of matter' and 'science of human culture', resulting in defining a single governing principle for the entire cosmos."]




  const objects = [ <OneContainer key={1} clickOne={NextObject}/>,
    <TwoContainer  key={2} clickOne={NextObject}/>,
    <ThreeContainer  key={3} clickOne={NextObject}/>,
    <FourContainer key={4}  clickOne={NextObject}/>,
    <FiveContainer  key={5} clickOne={NextObject}/>,
    <SixContainer  key={6} clickOne={NextObject}/>]
 


  return (
   <Layout description={descriptions[objectDisplay]}>
   <div className="audio">
    <AWSSoundPlayer
          streamUrl={streamUrl}
          preloadType="auto" />
    </div>
     <h1 className='header' onClick={(e)=>{e.preventDefault(); NextObject()}}>{titles[objectDisplay]}</h1>
     <AnimatePresence>
       {objects[objectDisplay]}
        {/* <OneContainer clickOne={NextObject} visible={objectDisplay===1 ? true : false}/>
        <TwoContainer  clickOne={NextObject} visible={objectDisplay===2 ? true : false}/>
        <ThreeContainer  clickOne={NextObject} visible={objectDisplay===3 ? true : false}/>
        <FourContainer  clickOne={NextObject} visible={objectDisplay===4 ? true : false}/>
        <FiveContainer  clickOne={NextObject} visible={objectDisplay===5 ? true : false}/>
        <SixContainer  clickOne={NextObject} visible={objectDisplay===6 ? true : false}/> */}
     </AnimatePresence>
    </Layout>
  )
}

export default Index

