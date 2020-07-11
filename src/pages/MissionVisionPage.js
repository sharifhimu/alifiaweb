import React, {useEffect} from 'react'

import NavBar from '../component/LandingPage/Navbar/Navbar';
import MissionVisionCarousel from '../component/MissionVisionPage/MissionVisionCarousel/MissionVisionCarousel'; 
import AddressSection from '../component/ContactPage/AddressSection/AddressSection';
import Whoweare from '../component/MissionVisionPage/Whoweare/Whoweare';
import Message from '../component/MissionVisionPage/Message/Message';
import Footer from '../component/LandingPage/Footer/Footer';

export default function MissionVisionPage() {

    useEffect(() => {

        document.title = 'Our Mission' ;
        window.scrollTo(0,0);
        
    }, [])

    return (
        <div>
            <NavBar />
            <MissionVisionCarousel />
            <Whoweare />
            <Message />
            <AddressSection />
            <Footer />
            
        </div>
    )
}
