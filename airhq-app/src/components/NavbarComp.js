import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="transparent">
        <Container>
          <Navbar.Brand href="/">
            AirHQ
          </Navbar.Brand>
          <Nav className="ms-auto">
            {/* <Nav.Link>
                {' '}
                <Link href="/" className="text-decoration-none text-black">
                Home
                </Link>
            </Nav.Link> */}
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
        </Container>
      </Navbar>
      <br />
      </div>
    )
  }
}
