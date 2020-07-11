import React from 'react'
import {Container, } from 'react-bootstrap';

import './ContactCarousel.css';


import {IoIosArrowDropdown} from 'react-icons/io';


export default function Carouselpart(  ) {

    const scrollbyid =() => {
        let el = document.getElementById('contact');
        let navbarscroll = document.getElementById('navbar'); 
        window.scrollTo({
            top: el.offsetTop - navbarscroll.clientHeight,
            left: 0,
            behavior: 'smooth'

        });
    }    

    return (
        <div className="contacthomebg" >

         
               
                
               
               
            <Container className="contactbg-inside">

            

                {/* <Row style={{ justifyContent: 'center' }}> */}
                
                <h1> Get in touch with Alifia Properties Limited </h1>

                {/* </Row> */}

                {/* <Row   style={{ justifyContent: 'center' }}>    */}
                     
              {/* <Link to="contact" smooth={true} duration={500}> <IoIosArrowDropdown className="downarrow"  /> </Link> */}
     
              <IoIosArrowDropdown onClick={scrollbyid} className="downarrow"  />              
     
                {/* </Row> */}
                     
         
                     
                     </Container> 

               
            
        </div>
    )
}
