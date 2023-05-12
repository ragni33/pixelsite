import React from 'react';
 import Container from 'react-bootstrap/Container';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../App.css'

function Header() {
    return (
       
       <>
       
       <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"><h3>PixelLeap</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto" style={{fontSize: "18px"}}>
              <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Graphic Design</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Website Design
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Search Engine Optimisation</NavDropdown.Item>
                
                  <NavDropdown.Item href="#action/3.4">
                    Social Media Marketing
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
       

        </Navbar>
       
        </>
  );

}


export default Header;
