import React from 'react'
import { Container } from 'react-bootstrap'

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerbg" >
            <Container >

                <div className="footertext" >
            <p> &copy;Copyright 2020, Alifia Properties Ltd. &nbsp;&nbsp;</p>
            <p> Designed by Beatnik Technology Ltd.  </p>
            
            </div>

            {/* <div className="footertext2" >
            <p> We Are Open &nbsp;&nbsp;</p>
            <p> Get To Know Us  </p>
            
            </div> */}

            </Container>
        </div>
    )
}
