import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../userContext';
import { useNavigate } from 'react-router-dom';

export const AuthHeader = () => {
    let navigate = useNavigate();
    let { usuari,authToken,setAuthToken } = useContext(UserContext)
    let [nameOfUser, setNameOfUser] = useState("")
    let [roles, setRoles] = useState([]);

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
            console.log("Logaout");
          } else {
            setMissatge(resposta.message);
          }
        } catch {
          console.log("Xarxa desconectada");
        }
        console.log("Logout okay");
      }
      const sendUser = async () => {
        // Enviam dades a l'aPI i recollim resultat
        try {
    
          const data = await fetch("http://127.0.0.1:8000/api/user", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + authToken,
            },
            method: "GET"
          })
          const resposta = await data.json();
          if (resposta.success === true) {
            setNameOfUser(resposta.user.name);
            setRoles(resposta.roles);
          } else {
            setMissatge(resposta.message);
          }
        } catch {
          console.log("Xarxa desconectada");
        }
        console.log("Name okay");
      }
    
    
    useEffect(() => {
    
      sendUser();
    }, [])

    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/inicioAuth"><img width="100 vh" src="../public/Fitflex.png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        {roles.map((v) => (
                            <>
                                {(v == 'premium' ) ?
                                <NavDropdown title= {[<i className="bi bi-person-circle"></i>,nameOfUser]} id="collasible-nav-dropdown">
                                  <NavDropdown.Item href="#action/3.1">Tus datos</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">Datos deportivos</NavDropdown.Item>
                                </NavDropdown>
                                    
                                : 
                                <Navbar.Collapse className='d-flex justify-content-end'>
                                    <p>User : {nameOfUser}</p>
                                
                                    <p key={v}> Rol: {v} </p>
                                
                                </Navbar.Collapse>}
                            </>
                        ))}
                        <Navbar.Collapse className='d-flex justify-content-end'>
                            <Nav.Link 
                                onClick={() => {
                                    sendLogout(authToken);
                                }}>
                                <i className="bi bi-box-arrow-left"></i> Logout
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}