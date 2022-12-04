import "../components/NavbarComp.css";
import React, { Component } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { authentication } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import GoogleButton from 'react-google-button';


import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

{/* This is Sign in with Google code from site*/}

//Sign in with Google code
const signInWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
  .then((re)=>{
    console.log(re);
    console.log("Signed in");
    //Makes google button disappear when signed in
    document.getElementById("Google").style.display = "none";
    //Makes sign out button appear when signed in
    document.getElementById("signout").style.display = "inline";

  })
  //catches error if problem signing in
  .catch((err)=>{
    console.log(err);
  })
}

//Sign out code
const logOut = ()=>{
  signOut(authentication)
  .then((re)=>{
    console.log("Signed out");
    //Makes google button appear when signed out
    document.getElementById("Google").style.display = "inline";
    //Makes sign out button disappear when signed out
    document.getElementById("signout").style.display = "none";

  })
  //catches error if problem signing out
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

            {/*Adding the AirHQ logo to be the 'return home' button in navigation bar*/}

            <img src={"favicon.ico"} width="50" />
            AirHQ
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
                {' '}

                {/*Education Tab */}

                <Link href="#education" className="text-decoration-none text-black" to="/education">
                Educational Resources
                </Link>
            </Nav.Link>
            <Nav.Link>
                {' '}

                {/* About tab */}

                <Link href="#about" className="text-decoration-none text-black" to="/about">
                About Us
                </Link>
            </Nav.Link>
          </Nav>

          {/* Google login */}
          
          <GoogleButton id = "Google"  onClick={signInWithGoogle}/>
          
          {/* Sign out button */}
          <Button id="signout" onClick={logOut}>
            Sign Out
          </Button>
        </Container>
      </Navbar>
      <br />
      </div>
    )
  }
}
