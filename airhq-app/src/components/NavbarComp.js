import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
      <div>
        <Navbar bg="transparent">
        <Container>
          <Navbar.Brand href="#home">AirHQ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
                {' '}
                <Link className="text-decoration-none text-black" to="/home">
                Home
                </Link>
            </Nav.Link>
            <Nav.Link>
                {' '}
                <Link className="text-decoration-none text-black" to="/education">
                Educational Resources
                </Link>
            </Nav.Link>
            <Nav.Link>
                {' '}
                <Link className="text-decoration-none text-black" to="/about">
                About Us
                </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </div>
      </Router>
    )
  }
}
