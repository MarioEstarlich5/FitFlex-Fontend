import './App.css'
import React, { useState } from 'react';
import { Header } from './layout/Header';
import { About } from './layout/About'
import { Inicio } from './layout/Inicio'
import { Contacto } from './layout/Contacto'
import { LoginRegister } from './auth/LogingRegister'
import { Cuotas } from './layout/Cuotas'
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./userContext";
import { InicioAuth } from './InicioAuth';
import { DietasGrid } from './dietas/DietasGrid';
import { AuthHeader } from './layout/AuthHeader';
import { CursosMenu } from './cursos/CursosMenu';
import { CursosGrid } from './cursos/CursosGrid';
import { MisCursosGrid } from './cursos/MisCursosGrid';
import { Curso } from './cursos/Curso';
import { User } from './user/User';
import { EjerciciosList } from './cursos/sesiones/ejercicios/EjerciciosList';

const App = () => {
  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  let [idUser, setIdUser] = useState("");
  let [nameOfUser, setNameOfUser] = useState("")
  let [roles, setRoles] = useState([]);


  return (
    <>


      <UserContext.Provider value={{ usuari, setUsuari, authToken, setAuthToken, idUser, setIdUser, nameOfUser, setNameOfUser, roles, setRoles }}  >
        <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/Login' element={<LoginRegister />} />
              <Route path='/Cuotas' element={<Cuotas />} />
            </Routes>
        {authToken ? (
          <>
            <AuthHeader />
            <Routes>
              <Route path='/inicio' element={<InicioAuth />} />
              <Route path='/dietas' element={<DietasGrid />} />
              <Route path='/cursos' element={<> <CursosMenu/><CursosGrid /> </>} />
              <Route path='/cursos/:id' element={<><Curso /></>} />
              <Route path='/TuPerfil' element={<><User /></>} />
              <Route path='/MisCursos' element={<><MisCursosGrid /> </>} />
              <Route path='/Sesion/:id' element={<><EjerciciosList /> </>} />
            </Routes>
          </>
        ) : (
          <>
            <Header />
            
          </>
        )}

      </UserContext.Provider>
    </>
  );

}

export default App