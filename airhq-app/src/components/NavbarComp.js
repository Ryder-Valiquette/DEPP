import "../components/NavbarComp.css";
import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { authentication } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const signInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
  .then((re)=>{
    console.log(re);
  })
  .catch((err)=>{
    console.log(err);
  })
}
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
          <Button onClick={signInWithGoogle}>
              Sign in with Google
          </Button>
        </Container>
      </Navbar>
      <br />
      </div>
    )
  }
}
