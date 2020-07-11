import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import {MdKeyboardArrowRight} from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';

import './SearchSection.css';
import Select from 'react-select';


const searchbox1 = [
    { value: 'cLand', label: 'Land' },
    { value: 'Apartment', label: 'Apartment' },
    { value: 'House', label: 'House' }
  ]

export default function SearchSection() {
    return (
        <div style={{  padding: '10rem 0 2rem 0', backgroundColor: 'rgba(204,187,143,.1)' }} >
            
            <Container className="searchcontainer">
            <div className="searchuptext">
                <h1>Properties</h1>
                
                </div>

                <div className="searchuptext2">
                 <h3> Listings </h3>  
                 <div className="homelink"> 
                <a href="/">  Home </a> <MdKeyboardArrowRight  style={{ fontSize: '22px', color: 'rgba(0,0,0,.5)' }}  /> <a href="/" style={{ color: 'rgba(0,0,0,.5)' }}> Properties </a>
                </div>
                </div>

                <Row>

                    <Col xs={4} lg={3} style={{  justifyContent:'flex-start', marginBottom: '10px' }}>

                    {/* <div className="propertydropdowns">
                        <button className="propertybtn">  <IoIosArrowDown className="arrow" /> Property Type </button>
                        <div className="propertydropdown">
                            <a href="/">Land</a>
                            <a href="/">Apartment</a>
                            <a href="/">House</a>
                        </div>
                        </div> */}

                        <Select options={searchbox1} placeholder=" select propperty"/>

                        {/* <div className="select-container">

                        <select>

                            <option selected="selected" class="country">Country Name</option>

                            <option value="1">India</option>

                            <option value="2">us</option>

                        </select>
                        </div> */}
                    
                    </Col>

                    <Col xs={4} lg={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    
                    <div className="propertydropdowns">
                        <button className="propertybtn">  <IoIosArrowDown className="arrow" /> Property Type </button>
                        <div className="propertydropdown">
                            <a href="/">Land</a>
                            <a href="/">Apartment</a>
                            <a href="/">House</a>
                        </div>
                        </div>

                    </Col>

                    <Col xs={4} lg={3} style={{ display: 'flex', justifyContent:'flex-end' }}>

                    <div className="propertydropdowns">
                        <button className="propertybtn">  <IoIosArrowDown className="arrow" /> Property Type </button>
                        <div className="propertydropdown">
                            <a href="/">Land</a>
                            <a href="/">Apartment</a>
                            <a href="/">House</a>
                        </div>
                        </div>
                    
                    </Col>

                    <Col xs={12} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline'  }}>
                        <button className="searchbtn"> SEARCH NOW </button>
                    
                    </Col>
                </Row>
   




            </Container>
        </div>
    )
}


