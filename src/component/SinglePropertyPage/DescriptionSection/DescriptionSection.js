import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './DescriptionSection.css';

import ImageShower from '../ImageShower/ImageShower';

import {AiFillHome} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
import {FaVectorSquare} from 'react-icons/fa';
import {FiPhone} from 'react-icons/fi';
import {FaFilePdf} from 'react-icons/fa';

export default function DescriptionSection() {
    return (
        <div style={{ margin: '5rem 0' }}>

            <Container className="description-section-container">

            <Row>
                <Col lg={7} sm={12} className="mb-5">

                    <ImageShower />
                
                </Col>

                <Col lg={5} sm={12} className="description-text">
                
                <h1>Description</h1>
                <p> A satellite township on 100-acre land on 120 feet wide Dhaka
                     – Mawa Highway at Keraniganj that delivers the exhilaration
                      of cosmopolitan life and provides the serenity of a suburb.
                       It will be green planned urbanization comprising 1000 housing
                        plots with all civic Dhaka, the capital city of Bangladesh, is
                         estimated to receive 40% of all urban migration.
                     
                     </p>

                     <div className="address-bar" >
                        <AiFillHome style={{ margin: '0 10px 0 0', fontSize: '26px' }} /> <p> Plot 19, Road 17, Purbachal, Dhaka </p>
                     </div>

                     <div className="location-contact">
                         <MdLocationOn className="location-contact-icon"  /> <p> Dhaka </p> <FaVectorSquare className="location-contact-icon"  /> <p> 3200 SQ FT </p> <FiPhone className="location-contact-icon"  /> <p style={{ margin: '0' }}> +880-2-9821900  </p>
                     </div>

                     <div className="download-pdf">
                         <a href="/"> <FaFilePdf  style={{ margin: '0 20px 0 0', fontSize: '26px'}} /> <p> Download PDF </p> </a>
                     </div>

                </Col>
            </Row>

            </Container>
        </div>
    )
}
