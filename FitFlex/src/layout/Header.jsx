import React, { } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"><img width="100 vh" src="../public/Fitflex.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Navbar.Collapse className='d-flex justify-content-evenly'>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Cuotas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gratis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Premium</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="/about">Que es FitFlex</Nav.Link>
            <Nav.Link href="/LoginRegister">Log in</Nav.Link>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}