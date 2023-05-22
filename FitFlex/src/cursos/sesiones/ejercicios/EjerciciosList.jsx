import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../../userContext";
import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getEjercicios } from '../../../slices/ejercicios/thunks';
import { Ejercicio } from './Ejercicio';
import { Link, useParams } from 'react-router-dom';
import { addUsuarioSesiones, test_UsuarioSesiones } from '../../../slices/usuarioSesiones/thunks';

export const EjerciciosList = () => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext)
  const dispatch = useDispatch();
  const { ejercicios = [], isLoading } = useSelector((state) => state.ejercicio);
  const { complet=false } = useSelector((state) => state.usuarioSesion);
  const { id } = useParams();
  let idSesion = id;

  useEffect(() => {
    dispatch(getEjercicios(idSesion, authToken));
    dispatch(test_UsuarioSesiones(idSesion, authToken))
  }, []);

  return (
    <>
      {!isLoading ?
        <>
          {ejercicios.map((ejercicio_ind, index) => (
            (<Ejercicio key={ejercicios.id} ejercicio={ejercicio_ind} index={index + 1} />)
          ))}
          <Link className='Link' to="/MisCursos">Volver a mis Cursos</Link>
          {!complet ? <button className='mt-5 mx-5'
            onClick={() => {
              dispatch(addUsuarioSesiones(idSesion, authToken));
            }}>
            ¿Completada?
          </button>
          :
          <button className='mt-5 mx-5'>
            Sesion completada
          </button>}  
          
        </>
        : <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif" /></div>
      }
    </>
  )
}