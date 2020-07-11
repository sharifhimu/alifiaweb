import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap';
import map2 from '../../../image/map2.png';

import {GoMailRead} from 'react-icons/go';

import './VisitSection.css';

export default function VisitSection() {
    return (
        <div className="visit-sec-bg" >
            <Container className="visitsection-container">
                <Row>
                    <Col lg={8} xs={12} className="visit-sec-col" >
                    <a href="/"> <img className="map2" src={map2}  alt="map"/>   </a>
                    </Col>

                    <Col lg={4} xs={12}>

                    <Card className="visitcard">
                        <GoMailRead className="visit-mailicon"/>
                        <h1 className="visitmsg-title">Want to Visit?</h1>
                   
                    <Card.Body  className="visit-sec-cardbody">
                    
                    <form >
                        <div className="visit-msg">
                            <input 
                            type="text"
                            className="visitmsg-form"
                            placeholder="Enter Your Name" />
                        </div>

                        <div className="visit-msg"> 
                            <input 
                            type="email"
                            className="visitmsg-form"
                            placeholder="Enter Your Number" />
                        </div>

                        <div className="visit-msg">
                            <textarea  
                            rows="4"
                            className="visitmsg-area"
                            placeholder="Your Message" />
                        
                        
                        </div>

                        <div className="visit-msg">
                        <input type="submit"
                        value="SEND"
                        className="visitmsg-btn" 
                        />
                        </div>

                    </form>

                    </Card.Body>
                </Card>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
