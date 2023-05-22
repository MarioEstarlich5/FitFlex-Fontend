import React from 'react';
import '../../../App.css';

export const Ejercicio = ({ ejercicio, index }) => {

    const filePath = ejercicio.id_video
    const trimmedPath = filePath.substring(filePath.indexOf('/'))
    const urlTrimmed = "http://equip03.insjoaquimmir.cat/storage" + trimmedPath


    return (
        <>
            <div className='d-flex justify-content-center'>
                <div className='mt-5 pt-5 pb-5 bg-light w-50 rounded-3'>
                    <h3>Ejercicio {index}</h3>
                    <h4>{ejercicio.titulo}</h4>
                    <p>{ejercicio.descripcion}</p>
                    <video controls className='w-75'>
                        <source src={urlTrimmed} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    )
}