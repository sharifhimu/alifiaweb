import React from 'react'
import {Container, } from 'react-bootstrap';

import './MissionVisionCarousel.css';


import {IoIosArrowDropdown} from 'react-icons/io';


export default function Carouselpart(  ) {

    // useEffect(() => {
           
    //     let el = document.getElementById('scroll');
    //     let navbarscroll = document.getElementById('navbar'); 
    //     window.scrollTo({
    //         top: el.offsetTop - navbarscroll.clientHeight,
    //         left: 0,
    //         behavior: 'smooth'


    //     });



    // }) 

    const scrollbyid =() => {
        let el = document.getElementById('scroll');
        let navbarscroll = document.getElementById('navbar'); 
        window.scrollTo({
            top: el.offsetTop - navbarscroll.clientHeight,
            left: 0,
            behavior: 'smooth'

        });
    }

    return (
        <div className="missionbg" >

         
               
                
               
               
            <Container className="missionbg-inside">

            

                {/* <Row style={{ justifyContent: 'center' }}> */}
                
                <h1>Mission & Vision </h1>

                {/* </Row> */}

                {/* <Row   style={{ justifyContent: 'center' }}>    */} 
                     
              {/* <Link to="scroll" smooth={true} duration={500}> <IoIosArrowDropdown  className="downarrow"  /> </Link> */}
     
              <IoIosArrowDropdown onClick={scrollbyid} className="downarrow"  />
     
                {/* </Row> */}
                     
         
                     
                     </Container> 

               
            
        </div>
    )
}
