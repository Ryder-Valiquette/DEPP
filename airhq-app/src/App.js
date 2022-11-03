import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Education from './components/Education';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
