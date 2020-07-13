import React from 'react'
import {Container } from 'react-bootstrap';
import './Carouselpart.css';
import {IoIosArrowDown} from 'react-icons/io';
// import img1 from '../../../image/bg1.png';

import {base_url} from '../../../config';

export default function Carouselpart(  ) {
    return (
        <div className="bg" >

         
               
                
               
               
            <Container>

            <div className="bg-inside">

                {/* <Row > */}
                
                <h1> Make Your <br/> Next Address < br/> Close To Your Heart </h1>

                {/* </Row> */}

                {/* <Row>    */}
                     
                     <div className="dropdown"> 
                     <button className="dropbtn">Explore Properties <IoIosArrowDown className="fa" /> </button>
                     <div className="dropdown-content">
                         <a href={`${base_url}/singleproperty`} >Townhouse Villa</a>
                         <a href={`${base_url}/singleproperty`} >Keraniganj Model Town</a>
                         
                     </div>
                     </div>
     
                    
     
                     {/* </Row> */}
                     
         
                     </div>
                     </Container> 

                {/* </Carousel.Caption>
            </Carousel.Item>
            </Carousel> */}
            
        </div>
    )
}
