import { Route, Routes } from "react-router-dom";
// import { Navbar } from "./components/header/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/about/About";
import { Work } from "./components/work/Work";
import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div>
      <Navbar expand="lg" className="bg-white shadow" sticky="top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes> */}
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="work" className="section">
        <Work />
      </div>
    </div>
  );
}

export default App;
