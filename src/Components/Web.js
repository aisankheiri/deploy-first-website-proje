import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import VideoAdd from './VideoAdd';
import Work from './Work';

const Web = ({cartItems}) => {
    
    return (
        <div>
            <Home cartItems={cartItems}/>
            <About/>
            <VideoAdd/>
            <Work/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Web
