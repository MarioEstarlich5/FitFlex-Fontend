import React, { useContext } from 'react';
import '../../App.css'
import { UserContext } from '../../userContext';
//import { setUsuarioSesion } from '../../slices/sesiones/thunks';
import { useDispatch, useSelector } from 'react-redux';

export const Sesion = ({ sesion,index }) => {

    const { usuari, setUsuari, authToken, setAuthToken,idUser } = useContext(UserContext);

    const { sesions = [], missatge = "" } = useSelector((state) => state.sesion);

    const dispatch = useDispatch();

    return (
        <>
            <div className='Reviewcontainer'>
                <p> Sesion {index}</p>
                <p> {sesion.duracion}</p>
                <p>{sesion.fecha}</p>

                <button className='deleteButton'
                    onClick={() => {
                        //dispatch(setUsuarioSesion(sesion.id,authToken));
                    }}>
                </button>
            </div>
        </>
    )
}