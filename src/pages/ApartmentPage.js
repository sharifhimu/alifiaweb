import React, {useEffect} from 'react';

import PropertyNavbar from '../component/PropertyPage/PropertyNavbar/PropertyNavbar';
// import PropertyCard from '../component/PropertyPage/PropertyCard/PropertyCard';
import ApartmentPagination from '../component/ReadyPropertiesPage/ApartmentPage/ApartmentPagination/ApartmentPagination';
import AddressSection from '../component/ContactPage/AddressSection/AddressSection';
import Footer from '../component/LandingPage/Footer/Footer';
import ApartmentCard from '../component/ReadyPropertiesPage/ApartmentPage/ApartmentCard/ApartmentCard';
import ApartmentSearch from '../component/ReadyPropertiesPage/ApartmentPage/ApartmentSearch/ApartmentSearch';

const ApartmentPage = () => {

    useEffect(() => {

        document.title = 'Properties' ;
        window.scrollTo(0,0);
        
    }, [])

    return (
        <div>
             <PropertyNavbar />
             <ApartmentSearch />
            <ApartmentCard />
           <ApartmentPagination />
           <AddressSection />
           <Footer />
        </div>
    );
};

export default ApartmentPage;