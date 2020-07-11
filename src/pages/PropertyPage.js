import React, {useEffect} from 'react'

import PropertyNavbar from '../component/PropertyPage/PropertyNavbar/PropertyNavbar';
// import SearchSection from '../component/PropertyPage/SearchSection/SearchSection';
import PropertyCard from '../component/PropertyPage/PropertyCard/PropertyCard';
import Pagination from '../component/PropertyPage/Pagination/Pagination';
import AddressSection from '../component/ContactPage/AddressSection/AddressSection';
import Footer from '../component/LandingPage/Footer/Footer';
import SearchCustom from '../component/PropertyPage/search custom/SearchCustom';

export default function PropertyPage() {

    useEffect(() => {

        document.title = 'Properties' ;
        window.scrollTo(0,0);
        
    }, [])

    return (
        <div>
            <PropertyNavbar />
           
            <SearchCustom />
            <PropertyCard />
            <Pagination />
            <AddressSection />
            <Footer />
        </div>
    )
}
