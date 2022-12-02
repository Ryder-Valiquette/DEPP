/* Homepage 
    Search + Search bar
    Major City AQI
    Pollutant Chart
    Link to EDU tab
    EPA color chart
*/


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

        <div className='weather'><iframe src="https://iot.app.initialstate.com/embed/#/tiles/bkt_ui18lb6x50tb" height="500px" width= "800px" align= "right"></iframe></div>


        <h2>[Major City AQI left-hand side]</h2>


        <h2>Pollutant Chart</h2>


        <h2>EPA color chart</h2>
          <img src={Chart} alt="Air Quality Index" height="400" width="330" />
      </div>
    )
  }
}
