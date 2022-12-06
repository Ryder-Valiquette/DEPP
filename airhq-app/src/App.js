import "bootstrap/dist/css/bootstrap.min.css";

import {
  Routes,
  Route
} from "react-router-dom"; // Used to make tabs route to a new page when clicked

import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Education from './components/Education';
import Home from './components/Home';
import { Container } from "react-bootstrap";

function App() {
  return (
    <>

      {/* NavbarComp holds all the functionality for the navigation bar,
          Called here to include on main page as first element */}

      <NavbarComp/>
        <Container>
        <Routes>

          {/* Routing to one of the 3 tabs featured on AirHQ */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        </Container>
      </>
  );
}

export default App;
