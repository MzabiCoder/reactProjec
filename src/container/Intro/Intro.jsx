import React,{useState} from 'react'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {

  const vidRef = React.useRef()
  const [playVideo,setPlayVideo] =useState(false)
  return(
    <div className='app__video'>
    <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      constrol={false}
      muted
    />
     <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
              document.querySelector('.app__video-overlay').classList.remove('remove-overlay')

            } else {
              vidRef.current.play();
              document.querySelector('.app__video-overlay').classList.add('remove-overlay')
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill className="video-cursor" color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill className="video-cursor" color="#fff" fontSize={30} />
          )}
        </div>
      </div>

  </div>
  )
  
  };

export default Intro;
