import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import "./Ready_properties.css";

import { base_url } from "../config";

export default function ReadyProperties() {

  

  return (
    <div className="ready-property-bg">
      <h1 className="headertext">Ready Properties for Sale</h1>
      <p className="headerparagraph">Ready for Construction, Ready for Life</p>

      <Container>
        {/* <CardDeck className="cardgrp" > */}
        {/* <CardColumns > */}

        <Row className="ready-property-row">

          <Col className="">
          <a href={`${base_url}/singleproperty`} style={{ textDecoration: "none" }}>
            <div>
             
                <Card className="singlecard img1">
                  <Card.Text className="textimage"> 
                    Modern <br /> Apartment <br /> Condos
                  </Card.Text>
                </Card>

                <div className="borderdown"></div>
             
            </div>
            </a>
          </Col>

          <Col className="">
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <Card className="singlecard img2">
                  <Card.Text className="textimage">
                    High
                    <br /> Value <br /> Plots
                  </Card.Text>
                </Card>
                <div className="borderdown"></div>
              </a>
            </div>
          </Col>

          <Col className=" col3">
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <Card className="singlecard img3 ">
                  <Card.Text className="textimage">
                    Luxury
                    <br /> Duplex <br /> Villas
                  </Card.Text>
                </Card>
                <div className="borderdown"></div>
              </a>
            </div>
          </Col>
        </Row>



        

        {/* <Row className="lastrow ready-property-row">

          <Col className="">
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <Card className="singlecard img1">
                  <Card.Text className="textimage">
                    Modern <br /> Apartment <br /> Condos
                  </Card.Text>
                </Card>
                <div className="borderdown"></div>
              </a>
            </div>
          </Col>

          <Col className="">
            <div>
              <a href="/" style={{ textDecoration: "none" }}>
                <Card className="singlecard img2">
                  <Card.Text className="textimage">
                    High
                    <br /> Value <br /> Plots
                  </Card.Text>
                </Card>
                <div className="borderdown"></div>
              </a>
            </div>
          </Col>
        </Row> */}

        {/* </CardDeck> */}
        {/* </CardColumns> */}
      </Container>
    </div>
  );
}
