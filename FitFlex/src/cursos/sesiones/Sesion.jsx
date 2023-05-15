import React from 'react';
import '../../App.css'
import { EjerciciosList } from './ejercicios/EjerciciosList';

export const Sesion = ({ sesion,index }) => {

    return (
        <>
            <div className='Reviewcontainer'>
                <p> Sesion {index}</p>
                <p> {sesion.duracion}h</p>

                <button className='deleteButton'
                    onClick={() => {
                        //dispatch(setUsuarioSesion(sesion.id,authToken));
                    }}>
                </button>
                <div><EjerciciosList id={sesion.id}/></div>
            </div>
        </>
    )
}