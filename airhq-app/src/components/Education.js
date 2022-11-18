import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

export default class Education extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Topic
        </Dropdown.Toggle>
         <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Pollutants</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Community</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Health</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        <h3>General Information</h3>
        <a href="https://www.airnow.gov/friday-resources/">EPA Air Quality Educational Resources</a> <br></br>
        <a href="https://www.who.int/health-topics/air-pollution#tab=tab_1">General Info on Air Pollution</a>
        <h3>Common Pollutant Information</h3>
        <a href="https://www.epa.gov/co-pollution">Carbon Monoxide Info</a> <br></br>
        <a href="https://www.epa.gov/ground-level-ozone-pollution">Ozone Info</a><br></br>
        <a href="https://www.epa.gov/lead-air-pollution">Lead Info</a><br></br>
        <a href="https://www.epa.gov/pm-pollution">Particulate Matter Info</a><br></br>
        <a href="https://www.epa.gov/so2-pollution">Sulfur Dioxide Info</a><br></br>
        <a href="https://www.epa.gov/no2-pollution">Nitrogen Dioxide Info</a><br></br>
        <a href="https://www.epa.gov/volatile-organic-compounds">Volatile Organic Compounds Info</a><br></br>
        <a href="https://www.epa.gov/indoor-air-quality-iaq">Indoor Air Quality Info</a><br></br>
        <a href="https://www.epa.gov/indoor-air-quality-iaq/indoor-air-quality-children">Indoor Air Quality for Children Info</a><br></br>
        <a href="https://www.epa.gov/indoor-air-quality-iaq/indoor-air-quality-older-adults">Indoor Air Quality for Older Adults Info</a><br></br>
        <img src="https://lh5.googleusercontent.com/r3iIj-CtFNKXMSpAnjzOWym2Ou3rfqZbfJDQeYEJc-O_jCOfZ7Qx4kcAzQc5cxUkkd7RbKKQsCv99VsyaPoZ2jRHlqR4sWUEOYcglWIRH1XCzvvefbng7L01MRq8sGFNq9xtSSSZ" alt="Air Quality Index" height="800" width="500" />
        <img src="https://lh4.googleusercontent.com/6LWzb4k7bzeUTVEXHdx1nOFNAZSIhwCTiLRtvMwyjBbkR77ivRvq5_gyAry9DXLaLpYzZes4hbzdxyYbXisTpDGFh1hQ3BcI1qQYdU803pMJxydMGp999nl9v3aK59BET5eFlSeY" alt="Air Quality Index" height="500" width="800" />

    </div>
    )
  }
}
