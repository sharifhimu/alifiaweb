import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import { base_url } from "../../../config";

import './Pagination.css';

export default function Pagination() {
    return (
        <div>
            <Container className="pagination-container" >
                <Row>

                    <Col>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    
                    <li className="page-item "><NavLink exact className="page-link" activeClassName="pageactive" to={`${base_url}/property`}>1</NavLink></li> 
                    <li className="page-item "><NavLink  className="page-link" activeClassName="pageactive" to={`${base_url}/property2`}>2</NavLink></li>
                    <li className="page-item "><NavLink  className="page-link" activeClassName="pageactive" to={`${base_url}/property3`}>3</NavLink></li>
                    <li className="page-item "><NavLink  className="page-link" activeClassName="pageactive" to={`${base_url}/property4`}>4</NavLink></li>

                    {/* <li className="page-item"><a className="page-link" href="/property">4</a></li> */}
                   
                </ul>
                </nav>

                </Col>
                </Row>
                </Container>
        </div>
    )
}
