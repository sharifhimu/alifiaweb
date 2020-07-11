import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';

import './AddressSection.css';

import alifia from '../../../image/Union-brown.png';
import { TiSocialFacebookCircular } from "react-icons/ti";
import {FaWhatsapp} from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import {FaInstagram} from "react-icons/fa";

export default function AddressSection() {
    return (
        <div className="address-section-bg" > 
           
           <Container className="address-section-container">
            <Row>

                <Col xs={12} sm={12} md={6} lg={5} className="alifiapart"> 
                
                    <img src={alifia} alt="alifia-logo" />
                    
                    <p> Alifia Properties Limited is working for the<br/>
                    development both in urban and its adjacent <br/>
                    areas. It has thereputation in the quality<br/>
                    apartment and commercial complex construction<br/>
                    in the Dhaka city particularly in remarkable areas.  </p>
                    
                </Col>

                

                <Col xs={12} sm={12} md={6} lg={4} >

                <Row className="addresstext">
                <h6>Address</h6>
                <p> Priyo Prangon Tower,Plot 19,Road<br/>
                    17,Banani,Dhaka 1213,Bangladesh </p>    
                </Row>   
                
                <Row className="addresstext">
                <h6>Phone</h6>
                <p>+880-2-9821900</p>    
                </Row>  

                <Row className="addresstext">
                <h6>We are open</h6>
                <p>Mon-sat: 10 AM-8 PM</p>    
                </Row>  

                </Col>

                <Col  xs={12} sm={12} md={6} lg={3}>
                <Row className="addresstext">
                    <h6>Get to know Us</h6>
                </Row>

                <Row className="emailsection">
                    <input className="email" type="email" placeholder="Enter your email" />
                    <button>SUBSCRIBE</button>
                </Row>

                <Row className="icons">
                    <a href="/contactpage" > <TiSocialFacebookCircular style={{ fontSize: '30px' }} /> </a>
                    <a href="/contactpage" > <FaWhatsapp style={{ fontSize: '25px' }} /> </a>
                    <a href="/contactpage" > <TiSocialTwitterCircular style={{ fontSize: '30px' }} /> </a>
                    <a href="/contactpage" > <FaInstagram style={{ fontSize: '25px' }} /> </a>
                </Row>
                
                </Col>

            </Row>
            </Container>

        </div>
    )
}
