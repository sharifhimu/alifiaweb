import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import './Whoweare.css';

import missionimg from '../../../image/missionimg.png';

export default function Whoweare() {
    return (
        <div id="scroll" className="who-container">
            <Container>
                <Row >
                    <Col  lg={6} xs={12}  className="who" >
                        
                    <h1 >Who We Are</h1>
                    
                           
                    <p > Alifia Properties Limited has been working for the development of both urban 
                        and its adjacent areas since 2006. We have a great reputation for our quality
                         apartment and commercial complex construction in Dhaka city particularly in
                          remarkable areas.<br/>

                          Our reputation is built on providing best-in-class services to our clients, 
                          and successfully completing projects on time and within stipulated budgets. 
                          Accomplished and valued client's pleasure is its motto. Employing one of the 
                          largest teams of expert professionals helps us ensure an unmatched level of 
                          customer care, build quality and safety during construction.<br/><br/>


                         

                        Activities:
                        <ul>
                            <li>Residential and Commercial building development and sales</li>
                            <li>Township development and plot sales</li>
                            <li>Exterior and interior architectural design</li>
                            <li>Structural Engineering</li>
                            <li>Interior design consultancy</li>
                        
                        </ul>
 
                    </p> 
                                
                    </Col>

                    <Col lg={6} xs={12}  className="who" >
                    <img src={missionimg} className="who-img" alt="missionimg" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
