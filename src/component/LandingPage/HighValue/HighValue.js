import React from 'react'
import './High_value.css';
import {Image, Container,Row, Col} from 'react-bootstrap';
import highvalue from '../../../image/highvalue.png';

export default function HighValue() {
    return (
        <div className="highvalue" >

            <Container>

                <div className="bgtext">

                <h1>High Value Properties<br/>In the City of Tomorrow... </h1>

                <Row>
            <Col lg={4}>

            <div className="bgtextp">
            
            <p>
            Alifia Properties Ltd. is a fast growing quality
             construction and developer company in Dhaka, executing
              with the ambition of creating breathable apartments and
               superbly planned townships. We are working for the development
                of both urban and its adjacent areas and are now a
                 trusted name in the quality apartment and 
                 commercial complex construction scene in Dhaka
            </p>
        </div>  

            </Col>
            
            <Col lg={8}>

                   <div className="">
                    <Image src={highvalue} fluid />
                    </div>

            </Col>
        
        
            </Row>  

            </div>
           
        </Container>

        </div>
    )
}
