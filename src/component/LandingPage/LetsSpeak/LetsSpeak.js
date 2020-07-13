import React from "react";
// import { Container } from 'react-bootstrap'
import { Container, CardDeck, Card } from "react-bootstrap";
import "./Lets_speak.css";
import { info } from "./spaekSectionInfo";

import { base_url } from "../../../config";

// import img from './image/buyers.png';

export default function LetsSpeak() {
  return (
    <div>
      <Container>
        <h1 className="letsheader">Lets Speak Business</h1>
       

        <CardDeck className="speaksection">
          {info.map((prop, i) => {
            return (
              // <Row>
              //    <Col>

              <Card className="lets-speak-card" key={i}> 
                <a href={`${base_url}/`}>
                  <div style={{ overflow: 'hidden' }}>
                  <Card.Img className="lets-speak-img" src={info[i].img} />
                  </div>
                  <Card.Body style={{ padding: "0" }}>
                    <div className="imgborder"></div>
                    <Card.Title className="title"> {info[i].title} </Card.Title>
                    <Card.Text className="lets-speak-text">
                      {info[i].text}
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>

              //  </Col>
              //    </Row>
            );
          })}
        </CardDeck>

         <a href={`${base_url}/contactpage`}> <button  className="contactbtn"> Contact Us </button>  </a>
      </Container>
    </div>
  );
}
