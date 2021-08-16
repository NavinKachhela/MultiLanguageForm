import React from 'react';
import './App.css';
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import MultipleInputs from "./components/forms/MultipleInputs";
import i18next from 'i18next';


function App() {
  const handleClick=(lang) => {
    i18next.changeLanguage(lang);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={()=>handleClick('hi')}>Hindi</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>handleClick('ma')}>Marathi</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>handleClick('pu')}>Punjabi</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
<MultipleInputs/>

     
    </div>
  );
}


export default App;


  