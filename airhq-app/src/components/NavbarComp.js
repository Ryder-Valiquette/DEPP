import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import About from './About';
import Education from './Education';
import Home from './Home';

export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
      <div>
        <Navbar bg="transparent">
        <Container>
          <Navbar.Brand href="#home">AirHQ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/education"}>Educational Resources</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </div>
      </Router>
    )
  }
}
