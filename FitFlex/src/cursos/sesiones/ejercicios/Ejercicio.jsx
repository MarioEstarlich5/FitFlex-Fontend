import React from 'react';
import '../../../App.css'

export const Ejercicio = ({ ejercicio,index }) => {


    return (
        <>
            <div className='Reviewcontainer'>
                <p> Ejercicio {index}</p>
                <p> {ejercicio.titulo}</p>
                <p> {ejercicio.descripcion}</p>
                <p> {ejercicio.id_video}</p>
            </div>
        </>
    )
}