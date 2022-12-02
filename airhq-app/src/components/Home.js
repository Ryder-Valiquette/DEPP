import React, { Component } from 'react';

// import { Button, Alert, Breadcrumb, BreadcrumbItem, Card, Nav, Navbar, Container } from "react-bootstrap"
import SearchBar from './Search';
import "./Home.css";
import Chart from "../assets/EPAchart.png";

export default class Home extends Component {
  render() {
    return (
      <div className='hp'>
        <h1>Welcome to AirHQ!</h1>

        <SearchBar />
        
        <div className="row align-items-start">
          <div className="col" style={{ paddingTop: 35 }}>
            <img src={Chart} alt="Air Quality Index" height="400" width="340" />
          </div>
          <div className="col" style={{ paddingTop: 0 }}>
            <div className='weather'><iframe src="https://iot.app.initialstate.com/embed/#/tiles/bkt_ui18lb6x50tb" height="400px" width= "500px" align= "right"></iframe></div>
          </div>
          <div className="col" style={{paddingTop: 35 }}>
              <img src="https://via.placeholder.com/350x150" alt="img"></img>
              <h4>Seattle, WA</h4>
              <img src="https://via.placeholder.com/350x150" alt="img" style={{ paddingTop: 50 }}></img>
              <h4 className="label">Los Angeles, CA</h4>
              <img src="https://via.placeholder.com/350x150" alt="img" style={{ paddingTop: 50 }}></img>
              <h4>New York City, NY</h4>
          </div>
        </div>
        </div>
    )
  }
}

