/* Homepage 
    Search + Search bar
    Major City AQI
    Pollutant Chart
    Link to EDU tab
    EPA color chart
*/

import React, { Component } from 'react'
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card, Nav, Navbar, Container } from "react-bootstrap"
import SearchBar from './Search'




export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <SearchBar/>
        

        <h2>Major City AQI</h2>


        <h2>Pollutant Chart</h2>


        <h2>EPA color chart</h2>
          <img src="https://cms.iqair.com/sites/default/files/inline-images/10-1.jpeg" alt="Air Quality Index" height="500" width="700" />
      </div>
    )
  }
}
