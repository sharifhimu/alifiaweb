import React from 'react'
import {Container } from 'react-bootstrap';
import './Carouselpart.css';
import {IoIosArrowDown} from 'react-icons/io';
// import img1 from '../../../image/bg1.png';

export default function Carouselpart(  ) {
    return (
        <div className="bg" >

         
               
                
               
               
            <Container>

            <div className="bg-inside">

                {/* <Row > */}
                
                <h1> Make your <br/> Next Address < br/> Close to your Heart </h1>

                {/* </Row> */}

                {/* <Row>    */}
                     
                     <div className="dropdown">
                     <button className="dropbtn">Explore Properties <IoIosArrowDown className="fa" /> </button>
                     <div className="dropdown-content">
                         <a href="/">Property 1</a>
                         <a href="/">Property 2</a>
                         <a href="/">Property 3</a>
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
