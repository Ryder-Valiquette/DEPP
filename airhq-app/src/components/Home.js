import React, { Component } from 'react';

import SearchBar from './Search';
import "./Home.css";
import Chart from "../assets/EPAchart.png";

export default class Home extends Component {
  render() {
    return (
      <div className='hp'>
        <h1>Welcome to AirHQ!</h1>

        <SearchBar />

        {/* Organizes Items into a Row*/}

        <div className="row align-items-start"> 

        {/* Column to group iteams, padding to visual appeal */}

          <div className="col" style={{ paddingTop: 35 }}>

            {/* EPA Chart */}

            <img src={Chart} alt="Air Quality Index" height="400" width="340" /> 
          </div>

          {/* Structure repeats for other items */}

          <div className="col" style={{ paddingTop: 0 }}>
            
            {/* This is the main API window*/}

            <div className='weather'><iframe src="https://iot.app.initialstate.com/embed/#/tiles/bkt_ui18lb6x50tb" height="900px" width= "500px" align= "right"></iframe></div>
          </div>
          <div className="col" style={{paddingTop: 35 }}>

            {/* Placeholders for other API windows to be inserted */}
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

