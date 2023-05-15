import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../../userContext";
import '../../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getEjercicio } from '../../../slices/ejercicios/thunks';
import { Ejercicio } from './Ejercicio';

export const EjerciciosList = ({ id }) => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext)
  const dispatch = useDispatch();
  const { ejercicios = [], missatge = "" } = useSelector((state) => state.ejercicio);

  useEffect(() => {
    dispatch(getEjercicio(id,authToken));
  }, []);
  
  return (
    <>
      {ejercicios.map((ejercicio,index) => (
     
        <div key={ejercicio.id} >
          <Ejercicio ejercicio={ejercicio} index={index+1}/>
        </div>
      ))}
    </>
  )
}