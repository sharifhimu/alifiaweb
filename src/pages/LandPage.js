import React, {useEffect} from 'react';

import PropertyNavbar from '../component/PropertyPage/PropertyNavbar/PropertyNavbar';
// import PropertyCard from '../component/PropertyPage/PropertyCard/PropertyCard';

import AddressSection from '../component/ContactPage/AddressSection/AddressSection';
import Footer from '../component/LandingPage/Footer/Footer';
import LandCard from '../component/ReadyPropertiesPage/LandPage/LandCard/LandCard';
import LandPagination from '../component/ReadyPropertiesPage/LandPage/LandPagination/LandPagination';
import LandSearch from '../component/ReadyPropertiesPage/LandPage/LandSearch/LandSearch';

const LandPage = () => {

    useEffect(() => {

        document.title = 'Properties' ;
        window.scrollTo(0,0);
        
    }, [])

    return (
        <div>
             <PropertyNavbar />
             <LandSearch />
             <LandCard />
             <LandPagination />
           <AddressSection />
           <Footer />
        </div>
    );
};

export default LandPage;