import './App.css'
import React, { useState } from 'react';
import { Header } from './layout/Header';
import { About } from './layout/About'
import { Inicio } from './layout/Inicio'
import { Contacto } from './layout/Contacto'
import { LoginRegister } from './auth/LogingRegister'
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./userContext";
import { InicioAuth } from './InicioAuth'
import { AuthHeader } from './layout/AuthHeader';
const App = () => {
  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  let [idUser, setIdUser] = useState("");
  let [nameOfUser, setNameOfUser] = useState("")
  let [roles, setRoles] = useState([]);


  return (
    <>
      <UserContext.Provider value={{ usuari, setUsuari, authToken, setAuthToken, idUser,setIdUser,nameOfUser,setNameOfUser,roles,setRoles}}  >
      {authToken ? (
        <>
          <AuthHeader/>
          <Routes>
              <Route path='/inicio' element={<InicioAuth />} />
          </Routes>
        </>
       ) : ( 
         <>
          <Header/>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/Login' element={<LoginRegister />} />
          </Routes>
        </>
       ) }
     
      </UserContext.Provider>
    </>
  );

}

export default App