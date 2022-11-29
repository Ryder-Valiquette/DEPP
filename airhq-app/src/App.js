import "bootstrap/dist/css/bootstrap.min.css";

import {
  Routes,
  Route
} from "react-router-dom";

import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Education from './components/Education';
import Home from './components/Home';
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavbarComp/>
        <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        </Container>
      </>
  );
}

export default App;
