import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../userContext";
import '../../App.css'
import { Sesion } from './Sesion';
import { useDispatch, useSelector } from 'react-redux';
import { getSesions } from '../../slices/sesiones/thunks';
import { useState } from 'react';

export const SesionsList = ({ id }) => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext)
  const dispatch = useDispatch();
  const { sesions = [], missatge = "" } = useSelector((state) => state.sesion);

  useEffect(() => {
    // dispatch(setReviewsCount(reviews_count))
    dispatch(getSesions( id, authToken));
  }, []);
  
  return (
    <>
      {sesions.map((sesion,index) => (
     
        <div key={sesions.id} >
          <Sesion sesion={sesion} index={index+1}/>
        </div>
      ))}
    </>
  )
}