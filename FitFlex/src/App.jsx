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
const App = () => {
  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  let [idUser, setIdUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ usuari, setUsuari, authToken, setAuthToken, idUser,setIdUser}}  >

      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacto' element={<Contacto />} />
        {authToken ? (
          <Route path='/inicioAuth' element={<InicioAuth />} />
        ) : (
          <Route path='/LoginRegister' element={<LoginRegister />} />
        )}
      </Routes>
      </UserContext.Provider>
    </>
  );

}

export default App