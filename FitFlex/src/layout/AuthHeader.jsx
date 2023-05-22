import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../userContext';
import { Link, useNavigate } from 'react-router-dom';

export const AuthHeader = () => {
  let navigate = useNavigate();
  let { usuari, authToken, setAuthToken, nameOfUser, roles, setRoles, setNameOfUser } = useContext(UserContext)

  const sendLogout = async (authToken) => {
    // Enviam dades a l'aPI i recollim resultat
    try {
      const data = await fetch("http://127.0.0.1:8000/api/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + authToken,

        },
        method: "POST"
      })
      const resposta = await data.json();
      console.log(resposta);
      if (resposta.success === true) {
        setAuthToken("");
        localStorage.clear();
        navigate("/");
        setRoles("");
        setNameOfUser("");
        console.log("Logaout");
      } else {
        setMissatge(resposta.message);
      }
    } catch {
      console.log("Xarxa desconectada");
    }
    console.log("Logout okay");
  }
  console.log(roles);
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to="/inicio"><img width="100 vh" src="../public/Fitflex.png" /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='d-flex justify-content-end'>
            {(roles == 'premium') ?
              <Link to='/TuPerfil' className="Link link-user" ><i className="bi bi-person-circle"></i> {nameOfUser}<i className="bi bi-patch-check-fill"></i></Link>
              :
              <Link to='/suscripcion' className="Link link-user" ><p className="Link link-user" ><i className="bi bi-person-circle"></i> {nameOfUser}</p></Link>}
            <Link className="Link"
              onClick={() => {
                sendLogout(authToken);
              }}>
              <i className="bi bi-box-arrow-left"></i> Logout
            </Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}