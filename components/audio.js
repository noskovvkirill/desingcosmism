
import { PlayButton, Timer, Progress } from 'react-soundplayer/components';
import React from 'react'
import Star from '../components/interface/star'
// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = "/audio/1.aac";

// some track meta information
const trackTitle = 'Great song by random artist';


const AWSSoundPlayer = withCustomAudio(props => {
  const { trackTitle, duration, currentTime } = props;



  return (
      <>
      <h5 style={{marginBottom:'8px', border:'1px solid white', padding:'4px'}}>AUDIO: {trackTitle}</h5>
    <div className='player-container'>
      <PlayButton {...props} />
        <div style={{display:'flex', flexDirection:'column', marginLeft:'32px'}}>
            <div className='player-progress-icon' style={{transform:`translateX(${(currentTime/duration)*200-16}px) translateY(-50%)`}}><Star/></div>
            <Progress className={'progressbar'} innerClassName={'progressbar-inner'} value={(currentTime/duration)*100}/>
        </div>
    </div>
    </>
  );
});


const Audio = ({title}) =>{
    return(
        <div className="audio">
        <AWSSoundPlayer
        streamable={false}
        trackTitle={title}
        streamUrl={streamUrl}
        preloadType="auto" />
      </div>
    )
}

export default React.memo(Audio)