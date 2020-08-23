import React from 'react'
import { Container, Row, Col,Card, } from 'react-bootstrap';
// import duplex from '../../../image/duplex.png';
import {BsArrowRight} from 'react-icons/bs';
import {MdLocationOn} from 'react-icons/md';
import {FaVectorSquare} from 'react-icons/fa';
import './LandCard.css';
import {info} from './LandCardInfo';

import { base_url } from '../../../../config';

export default function PropertyCard() {
    return (
        <div className="propertycard-bg">

            <Container className="containersize">
            {/* <CardColumns> */}

            {/* <CardDeck> */}

                <Row className="propertycard-row">

                    {info.map((prop,i) => {  

                        return(

                        

                    <Col lg={4} xs={12} key={info[i].img} className="propertycard-col" >

                    <Card className="fullcard" > 

                    <a href={`${base_url}/singleproperty`} >

                    <Card.Img className="land-image" key={info[i].img} src={info[i].img} />
                    <Card.ImgOverlay className="propertycard-imgoverlay">
                        <Card.Title className="cardtitle">{info[i].insidetitle}</Card.Title>
                    </Card.ImgOverlay>
                    
                    <Card.Body className="cardbelow" >
                        <Card.Text className="viewdetails"> Click To View Details <BsArrowRight /> </Card.Text>
                       
                       <div className="propertydetails">
                        <Card.Title>{info[i].cardtitle}</Card.Title>
                        <Card.Text className="" >
                        <MdLocationOn style={{ margin: '0 8px 0 0' }} /> <p> {info[i].location} </p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <FaVectorSquare style={{ margin: '0 8px 0 0' }} /> <p> {info[i].measure} </p>
                        </Card.Text>
                        </div>
                        
                    </Card.Body>

                    </a>

                    </Card>
                    
                    </Col>

                        )

                        } )}

       
                </Row>

               
            </Container>
            {/* </CardColumns> */}
            {/* </CardDeck> */}
        </div>
    )
}
