import React, { useContext, useEffect } from 'react';
import { UserContext } from "../../userContext";
import '../../App.css'
import { Sesion } from './Sesion';
import { useDispatch, useSelector } from 'react-redux';
import { getSesions } from '../../slices/sesiones/thunks';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const SesionsList = ({ id }) => {
  let { usuari, setUsuari, authToken, setAuthToken } = useContext(UserContext)
  const dispatch = useDispatch();
  const { sesions = [], missatge = "", isLoading = true } = useSelector((state) => state.sesion);

  useEffect(() => {
    dispatch(getSesions(id, authToken));
  }, []);

  return (
    <>
      {!isLoading ?
        <ListGroup>
          {sesions.map((sesion_ind, index) => (
            <Sesion key={sesions.id} sesion={sesion_ind} index={index + 1} />
          ))
          }
        </ListGroup>
        :
        <div><img width="100 vh" src="../public/loading-buffering.gif" /></div>
      }

    </>
  )

}