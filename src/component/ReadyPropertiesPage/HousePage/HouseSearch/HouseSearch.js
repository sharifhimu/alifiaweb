import React from "react";
import {Container, Row, Col} from 'react-bootstrap'; 
import CustomSelect from "../../../PropertyPage/search custom/CustomSelect";

import {MdKeyboardArrowRight} from 'react-icons/md';

import { base_url } from "../../../../config";

import "../../../PropertyPage/search custom/SearchCustom.css";

export default class SearchCustom extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          showList: false,
          defaultPropertyText: "Property Type",
          PropertyList: [
            { id: 1, name: "Land" },
            { id: 2, name: "Apartment" },
            { id: 3, name: "House" },
           
          ],
          
          defaultLocationText: "Location",
          LocationList: [
            { id: 1, name: "Purbachal, Dhaka" },
            { id: 2, name: "Keraniganj, Dhaka" },
          
           
          ],

          defaultPlotText: "Land Size",
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
                <h1>House</h1>
                
                </div>

                <div className="searchuptext2">
                 <h3> Listings </h3>  
                 <div className="homelink"> 
                <a href={`${base_url}/`}>  Home </a> <MdKeyboardArrowRight  style={{ fontSize: '22px', color: 'rgba(0,0,0,.5)' }}  /> <a href={`${base_url}/house`} style={{ color: 'rgba(0,0,0,.5)' }}> House </a>
                </div>
                </div>

                <Row>  

           

            <Col lg={4} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultLocationText}
            optionsList={this.state.LocationList}
          />

            </Col>

            <Col lg={4} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultPlotText}
            optionsList={this.state.SizeList}
          />

            </Col>

            <Col xs={12} lg={4} className="searchcustom-searchbtn">
                        <button className="searchbtn"> SEARCH NOW </button>
                    
                    </Col> 

                
           </Row>     
        </Container>
        </div>

        )
      }








}