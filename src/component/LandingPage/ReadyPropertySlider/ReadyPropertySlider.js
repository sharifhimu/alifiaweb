import React from 'react'
import {Card,Container} from 'react-bootstrap';
import './ReadyPropertySlider.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { base_url } from "../../../config";

export default function ReadyPropertySlider() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>

        

      <div className="ready-property-bg">
      <h1 className="headertext">Ready Properties for Sale</h1>
      <p className="headerparagraph">Ready for Construction, Ready for Life</p>
      </div>

      <Container className="slider-container">

<Slider {...settings}>

       
         
         
          <div className="slidersize">
              <a href={`${base_url}/`} style={{ textDecoration: "none" }}>
                <Card className="singlecard img1">
                  <Card.Text className="textimage"> 
                    Modern <br /> Apartment <br /> Condos
                  </Card.Text>
                </Card>

                <div className="borderdown"></div>
              </a>
            </div>
          
          
         
          <div className="slidersize">
          <a href={`${base_url}/`} style={{ textDecoration: "none" }}>
                <Card className="singlecard img2">
                  <Card.Text className="textimage">
                    High
                    <br /> Value <br /> Plots
                  </Card.Text>
                </Card>
                <div className="borderdown"></div>
              </a>
          </div>
        

        
          <div className="slidersize">
           <a href={`${base_url}/`} style={{ textDecoration: "none" }}>
                <Card className="singlecard img3 ">
                  <Card.Text className="textimage">
                    Luxury
                    <br /> Duplex <br /> Villas
                  </Card.Text>
                </Card>
                <div className="borderdown"></div>
              </a>
          </div>
        

        
          
        </Slider>

        </Container>
            
        </div>


    )
}
