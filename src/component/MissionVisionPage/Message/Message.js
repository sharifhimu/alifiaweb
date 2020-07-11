import React from 'react'
import {Container,Row,Col, Card} from 'react-bootstrap';

import './Message.css';
import {GoMailRead} from 'react-icons/go';

export default function Message() {
    return (
        <div className="message-bg" >
            <Container  className="mission-container">

                <Row>
                    
                    <Col lg={4} className="missiontext"> 
                    <h1>Our Mission</h1>
                    <p>

                    To develop real estate product both as building and township that: <br/><br/> 
                    <ul>
                        <li>Address the larger segment of the real estate demand.</li>
                        <li>Maintains social and environmental concern.</li>
                        <li>Makes efficient use of resources like land, materials, fund, people and technology.</li>
                        <li>Brings uniqueness in value creation combining aesthetics and quality.</li>
                    </ul>

                    </p> 
                     
                    </Col>
                  

                    <Col lg={4} className="missiontext">
                    <h1>Our Vision</h1>
                    <p>
                    To become a unique real estate company with highest social responsibility.
                     To engage in real estate activities that address human need, environment
                      and efficient use of resources and at the same time aesthetic and exclusivity.

                    </p> 
                     
                    </Col>

                    <Col lg={4} >

                    <Card className="msgcard">
                        <GoMailRead className="mailicon"/> 
                        <h1 className="msgtitle">Leave Your Message</h1>
                   
                    <Card.Body className="msgbtm">
                    
                    <form >
                        <div className="msggroup">
                            <input 
                            type="text"
                            className="msgform"
                            placeholder="Enter Your Name" />
                        </div>

                        <div className="msggroup">
                            <input 
                            type="email"
                            className="msgform"
                            placeholder="Enter Your Email" />
                        </div>

                        <div className="msggroup">
                            <textarea  
                            rows="7"
                            className="msgarea"
                            placeholder="Your Message" />
                        
                        
                        </div>

                        <div className="msggroup">
                        <input type="submit"
                        value="SEND"
                        className="sendmsgbtn" 
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
