import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../../image/Union.png";
import { NavLink } from "react-router-dom";

import "./PropertyNavbar.css";
import { base_url } from "../../../config";

// import img1 from '../../image/bg.png';

export default class PropertyNavBar extends React.Component {
  state = {
    navBackground: "#7b7b7b",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor =
        window.scrollY < 70 ? "#7b7b7b" : "rgba(48,48,48,.5)";

      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
    return (
      <div id="navbar" className="fixed-top">
        <nav style={{ backgroundColor: `${this.state.navBackground}` }}>
          <Navbar collapseOnSelect expand="md">
            <Navbar.Brand className="brandsmall" href={`${base_url}/`}>
              <img
                src={logo}
                width="80"
                height="80"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-center"
            >
              <Nav>
                {/* <Nav.Link  href="/">LAND</Nav.Link>
             <Nav.Link className={className} href="/property">APARTMENTS</Nav.Link> 
                */}
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={`${base_url}/`}
                >
                  <p> Land </p>{" "}
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={`${base_url}/property`}
                >
                  <p> PROPERTY </p>
                </NavLink>
              </Nav>

              <Navbar.Brand className="brandlarge" href={`${base_url}/`}>
                <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>

              <Nav>
                {/* <Nav.Link href="/mission&vision">BUSINESS</Nav.Link>
                <Nav.Link href="/contactpage">CONTACT</Nav.Link>
                */}

                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={`${base_url}/mission-vision`}
                >
                  <p> business </p>
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to={`${base_url}/contactpage`}
                >
                  <p> contact </p>{" "}
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    );
  }
}
