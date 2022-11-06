import "../components/NavbarComp.css";
import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import GoogleLoginComp from "./GoogleLoginComp.js";

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="myColor">
        <Container>
          <Navbar.Brand href="/">
            <img src={"favicon.ico"} width="50" />
            AirHQ
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
                {' '}
                <Link href="#education" className="text-decoration-none text-black" to="/education">
                Educational Resources
                </Link>
            </Nav.Link>
            <Nav.Link>
                {' '}
                <Link href="#about" className="text-decoration-none text-black" to="/about">
                About Us
                </Link>
            </Nav.Link>
          </Nav>
          <GoogleLoginComp />
        </Container>
      </Navbar>
      <br />
      </div>
    )
  }
}
