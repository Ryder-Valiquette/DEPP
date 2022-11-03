import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Education from './components/Education';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavbarComp>
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
        </NavbarComp>
    </div>
  );
}

export default App;
