import React, {useEffect} from 'react';

import PropertyNavbar from '../component/PropertyPage/PropertyNavbar/PropertyNavbar';
// import PropertyCard from '../component/PropertyPage/PropertyCard/PropertyCard';

import AddressSection from '../component/ContactPage/AddressSection/AddressSection';
import Footer from '../component/LandingPage/Footer/Footer';
import HouseCard from '../component/ReadyPropertiesPage/HousePage/HouseCard/HouseCard';
// import HousePagination from '../component/ReadyPropertiesPage/HousePage/HousePagination/HousePagination';
import HouseSearch from '../component/ReadyPropertiesPage/HousePage/HouseSearch/HouseSearch';

const LandPage = () => {

    useEffect(() => {

        document.title = 'House' ;
        window.scrollTo(0,0);
        
    }, [])

    return (
        <div>
             <PropertyNavbar />
            <HouseSearch />
             <HouseCard />
             {/* <HousePagination /> */}
           <AddressSection />
           <Footer />
        </div>
    );
};

export default LandPage;