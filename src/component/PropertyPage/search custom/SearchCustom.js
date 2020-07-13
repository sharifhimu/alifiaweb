import React from "react";
import {Container, Row, Col} from 'react-bootstrap'; 
import CustomSelect from "./CustomSelect";

import {MdKeyboardArrowRight} from 'react-icons/md';

import { base_url } from "../../../config";

import "./SearchCustom.css";

export default class SearchCustom extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          showList: false,
          defaultPropertyText: "Property Type",
          PropertyList: [
           
            { id: 1, name: "Apartment" },
            { id: 2, name: "House" },
           
          ],
          
          defaultLocationText: "Location",
          LocationList: [
            { id: 1, name: "Purbachal, Dhaka" },
            { id: 2, name: "Keraniganj, Dhaka" },
          
           
          ],

          defaultPlotText: "Plot Size",
          SizeList: [
            { id: 1, name: "3200 SQ FT" },
            { id: 2, name: "2.5 to 10 (Khata)" },
           
           
          ],
        };
      }

      render() {
        return (

            <div className="test">

                <Container className="searchcontainer">

                <div className="searchuptext">
                <h1>All Property</h1>
                
                </div>

                <div className="searchuptext2">
                 <h3> Listings </h3>  
                 <div className="homelink"> 
                <a href={`${base_url}/`}>  Home </a> <MdKeyboardArrowRight  style={{ fontSize: '22px', color: 'rgba(0,0,0,.5)' }}  /> <a href={`${base_url}/property`} style={{ color: 'rgba(0,0,0,.5)' }}> Properties </a>
                </div>
                </div>

                <Row>  

               <Col lg={3} xs={6} className="searchcustom-box" style={{  zIndex: '11' }}> 
          <CustomSelect
            defaultText={this.state.defaultPropertyText}
            optionsList={this.state.PropertyList}
          />

            </Col>

            <Col lg={3} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultLocationText}
            optionsList={this.state.LocationList}
          />

            </Col>

            <Col lg={3} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultPlotText}
            optionsList={this.state.SizeList}
          />

            </Col>

            <Col xs={6} lg={3} className="searchcustom-searchbtn">
                        <button className="searchbtn"> SEARCH NOW </button>
                    
                    </Col> 

                
           </Row>     
        </Container>
        </div>

        )
      }








}