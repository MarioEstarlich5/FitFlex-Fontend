import React, { } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/"><img width="100 vh" src="../public/Fitflex.png"/></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Navbar.Collapse className='d-flex justify-content-evenly'>
            <Link className="Link" to="/contacto">Contacto</Link>
            <Link className="Link" to="/Cuotas">Cuotas</Link>
            <Link className="Link" to="/about">¿Qué es FitFlex?</Link>
            <Link className="Link" to="/Login">Login</Link>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}