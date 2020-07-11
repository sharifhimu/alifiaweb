import React, {useEffect} from 'react'

import Navbar from '../component/PropertyPage/PropertyNavbar/PropertyNavbar';
import Address from '../component/ContactPage/AddressSection/AddressSection';
import Footer from '../component/LandingPage/Footer/Footer';
import PropertyAddress from '../component/SinglePropertyPage/PropertyAddress/PropertyAddress';
import DescriptionSection from '../component/SinglePropertyPage/DescriptionSection/DescriptionSection';
import VisitSection from '../component/SinglePropertyPage/VisitSection/VisitSection';

export default function SinglePropertyPage() {

    useEffect(() => {

        document.title = 'Property Details' ;
        window.scrollTo(0,0);
        
    }, [] )

    return (
        <div>
            <Navbar /> 
            <PropertyAddress />
            <DescriptionSection />
            <VisitSection />
            <Address />
            <Footer />
        </div>
    )
}
