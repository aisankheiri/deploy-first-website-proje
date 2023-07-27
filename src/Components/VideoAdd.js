import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css"
// import BurgerVideo from "../Assets/hamburger.mp4";

const Videoadd = () => {
  return (
   <div className='burger-video'>
     {/* <Video autoPlay loop>
        <source src={BurgerVideo} type='video/webm'/>
    </Video> */}
   </div>
  )
}

export default Videoadd
