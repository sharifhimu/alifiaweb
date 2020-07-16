import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Contact.css';

import { base_url } from "../../../config";

export default function Contact() {
    return (
        <div className="contactbg">
            <Container >
                <Row>
                    <Col xs={1} lg={6} md={3}>
                    
                    </Col>

                    <Col xs={10} lg={5} md={6} className="contact-col" >

                        <a href={`${base_url}/contactpage`}>

                        <h1 className="contacttitle">Contact Us</h1>

                    <ul className="contact-ul">

                        <li className="infolist" > 
                        <i className="fa fa-envelope contacticon" ></i> 
                        <p className="contacttext" > contact@alifiaproperties.com </p> 
                        </li>

                        <li className="infolist" > 
                        <i className="fa fa-phone contacticon" ></i> 
                        <p className="contacttext"> +880 197 7085 851 </p> 
                        </li>

                        <li className="infolist" > 
                        <i className="fa fa-globe contacticon" ></i> 
                        <p className="contacttext"> www.alifiaproperties.com </p> 
                        </li>

                        <li className="infolist" > 
                        <i className="fa fa-map-marker contacticon" ></i> 
                        <p className="contacttext"> Suite 104, Floor 6<br />
                                                    Kamal Ataturk Avenue, Banani<br/>
                                                    Dhaka     </p> 
                        </li>

                    </ul>

                    </a>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
