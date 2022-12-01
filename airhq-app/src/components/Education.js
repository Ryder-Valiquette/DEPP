import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';


import AQHeart from "../assets/AQHeart.png";
import AQRange from "../assets/AQRange.png";
var value = "";
var i = 0;
export default class Education extends Component {
  render() {
  function handleSelect(e){
    console.log(e);
    value = e;
    if (e === "option-1"){
      
      document.getElementById("Common Pollutant Information").innerHTML = "Pollutants Information<br>";
      document.getElementById("ozone").innerHTML = "Ozone Info<br>";
      document.getElementById("pm").innerHTML = "Particulate Matter Info<br>";
      document.getElementById("co").innerHTML = "Carbon Monoxide Info<br>";
      document.getElementById("no2").innerHTML = "Nitrogen Dioxide Info<br>";
      document.getElementById("so2").innerHTML = "Sulfur Dioxide Info<br>";
      document.getElementById("lead").innerHTML = "Lead Info<br>";
      document.getElementById("carbon").innerHTML = "Carbon Info<br>";
      document.getElementById("sulfur").innerHTML = "Sulfur Info<br>";
      document.getElementById("voc").innerHTML = "Volatile Organic Compound Info<br>";

      document.getElementById("Community").innerHTML = "";
      document.getElementById("schools").innerHTML = "";
      document.getElementById("communities").innerHTML = "";
      document.getElementById("disparities").innerHTML = "";
      document.getElementById("justice").innerHTML = "";
      document.getElementById("you").innerHTML = "";



      document.getElementById("Health").innerHTML = "";
      document.getElementById("Exposure").innerHTML = "";
      document.getElementById("Indoor").innerHTML = "";
      document.getElementById("Indoorold").innerHTML = "";
      document.getElementById("Indoorchild").innerHTML = "";
    }
    if (e === "option-2"){
      document.getElementById("Common Pollutant Information").innerHTML = "";
      document.getElementById("ozone").innerHTML = "";
      document.getElementById("pm").innerHTML = "";
      document.getElementById("co").innerHTML = "";
      document.getElementById("no2").innerHTML = "";
      document.getElementById("so2").innerHTML = "";
      document.getElementById("lead").innerHTML = "";
      document.getElementById("carbon").innerHTML = "";
      document.getElementById("sulfur").innerHTML = "";
      document.getElementById("voc").innerHTML = "";

      document.getElementById("Community").innerHTML = "Community<br>";
      document.getElementById("schools").innerHTML = "Take Action to Improve Indoor Air Quality in Schools<br>";
      document.getElementById("communities").innerHTML = "Poor Communities Exposed to Elevated Air Pollution Levels<br>";
      document.getElementById("disparities").innerHTML = "Disparities in the Impact of Air Pollution<br>";
      document.getElementById("justice").innerHTML = "Environmental Justice and Air Pollution<br>";
      document.getElementById("you").innerHTML = "What you can do about air pollution<br>";
      


      document.getElementById("Health").innerHTML = "";
      document.getElementById("Exposure").innerHTML = "";
      document.getElementById("Indoor").innerHTML = "";
      document.getElementById("Indoorold").innerHTML = "";
      document.getElementById("Indoorchild").innerHTML = "";
      document.getElementById("research").innerHTML = "";
      document.getElementById("10").innerHTML = "";
    }
    if (e === "option-3"){
      document.getElementById("Common Pollutant Information").innerHTML = "";
      document.getElementById("ozone").innerHTML = "";
      document.getElementById("pm").innerHTML = "";
      document.getElementById("co").innerHTML = "";
      document.getElementById("no2").innerHTML = "";
      document.getElementById("so2").innerHTML = "";
      document.getElementById("lead").innerHTML = "";
      document.getElementById("carbon").innerHTML = "";
      document.getElementById("sulfur").innerHTML = "";
      document.getElementById("voc").innerHTML = "";

      document.getElementById("Community").innerHTML = "";
      document.getElementById("schools").innerHTML = "";
      document.getElementById("communities").innerHTML = "";
      document.getElementById("disparities").innerHTML = "";
      document.getElementById("justice").innerHTML = "";
      document.getElementById("you").innerHTML = "";

      
      document.getElementById("Health").innerHTML = "Health<br>";
      document.getElementById("Exposure").innerHTML = "Air Pollution Exposure and Health Effects<br>";
      document.getElementById("Indoor").innerHTML = "Indoor Air Quality Info<br>";
      document.getElementById("Indoorold").innerHTML = "Indoor Air Quality for Older Adults Info<br>";
      document.getElementById("Indoorchild").innerHTML = "Indoor Air Quality for Children Info<br>";
      document.getElementById("research").innerHTML = "Research on Health Effects from Air Pollution<br>";
      document.getElementById("10").innerHTML = "Air Pollution's Top 10 Health Risks<br>";
      
    }
    
  }
    return (
      <div className="App container">
        <h1>Educational Resources</h1> <br></br>
        <h3>General Air Quality Information</h3> 
        <a href="https://www.airnow.gov/friday-resources/">EPA Air Quality Educational Resources</a> <br></br>
        <a href="https://www.who.int/health-topics/air-pollution#tab=tab_1">General Info on Air Pollution</a> <br></br> <br></br>

        <h4>Learn More!</h4>
        <DropdownButton
        alignRight
        title="Select a Topic"
        id="dropdown"
        onSelect={handleSelect}
          >
                <Dropdown.Item eventKey="option-1">Pollutants</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">Community</Dropdown.Item>
                <Dropdown.Item eventKey="option-3">Health</Dropdown.Item>
        </DropdownButton>
        <br></br>

        <h3 id="Common Pollutant Information"></h3>
        <a id="ozone" href="https://www.epa.gov/ozone-pollution"></a> 
        <a id="pm" href="https://www.epa.gov/pm-pollution"></a>
        <a id="co" href="https://www.epa.gov/co-pollution"></a>
        <a id="so2" href="https://www.epa.gov/so2-pollution"></a>
        <a id="no2" href="https://www.epa.gov/no2-pollution"></a>
        <a id="lead" href="https://www.epa.gov/lead-air-pollution"></a>
        <a id="carbon" href="https://www.epa.gov/co-pollution"></a>
        <a id="sulfur" href="https://www.epa.gov/so2-pollution"></a>
        <a id="voc" href="https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality"></a>

        <h3 id="Community"></h3>
        <a id="schools" href="https://www.epa.gov/iaq-schools/take-action-improve-indoor-air-quality-schools "></a>
        <a id="communities" href="https://www.niehs.nih.gov/research/programs/geh/geh_newsletter/2016/4/spotlight/poor_communities_exposed_to_elevated_air_pollution_levels.cfm"></a>
        <a id="disparities" href="https://www.lung.org/clean-air/outdoors/who-is-at-risk/disparities"></a>
        <a id="justice" href="https://www.epa.gov/ej-research/epa-research-environmental-justice-and-air-pollution"></a>
        <a id="you" href="https://www.pca.state.mn.us/news-and-stories/what-you-can-do-about-air-pollution"></a>

        
        <h3 id="Health"></h3>
        <a id="Exposure" href="https://www.who.int/teams/environment-climate-change-and-health/air-quality-and-health/health-impacts/exposure-air-pollution"></a>
        <a id="Indoor" href="https://www.epa.gov/indoor-air-quality-iaq"></a>
        <a id="Indoorold" href="https://www.epa.gov/indoor-air-quality-iaq/indoor-air-quality-older-adults"></a>
        <a id="Indoorchild" href="https://www.epa.gov/indoor-air-quality-iaq/indoor-air-quality-children"></a>
        <a id="research" href="https://www.epa.gov/air-research/research-health-effects-air-pollution"></a>
        <a id="10" href="https://www.lung.org/blog/air-pollutions-top-10-health-risks"></a>

        <img src={AQRange} alt="Air Quality Index" height="500" width="800" />
        <img src={AQHeart} alt="Air Quality Index" height="800" width="500" />

        
      </div>
    );
  }
}
