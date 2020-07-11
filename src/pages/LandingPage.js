import React from 'react'


import NavBar from '../component/LandingPage/Navbar/Navbar';
import Carouselpart from '../component/LandingPage/Carousel/Carouselpart';
import HighValue from '../component/LandingPage/HighValue/HighValue';

import LetsSpeak from '../component/LandingPage/LetsSpeak/LetsSpeak';
import Contact from '../component/LandingPage/Contact/Contact';
import Footer from '../component/LandingPage/Footer/Footer';
import ReadyPropertySlider from '../component/LandingPage/ReadyPropertySlider/ReadyPropertySlider';


export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <Carouselpart />
            <HighValue />
          
            <ReadyPropertySlider />
            <LetsSpeak />
            <Contact />
            <Footer />
        </div>
    )
}
