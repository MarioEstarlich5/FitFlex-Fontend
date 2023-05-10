import React, { useContext } from 'react'
import '../App.css'
import { UserContext } from '../userContext'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const DietaGrid = ({ dieta }) => {
    
    const filePath = dieta.filepath
    const trimmedPath = filePath.substring(filePath.indexOf('/'));

    let ruta="http://127.0.0.1:8000/storage"+trimmedPath


    return (
        <>
            <Card style={{ width: '20rem' }} className='p-3 m-4'>
                <Card.Body>
                    <Card.Title>{dieta.name}</Card.Title>
                    <Card.Text>
                    {dieta.descripcion}
                    </Card.Text>
                    <Link to={ruta} target="_blank">Descargar PDF</Link>
                </Card.Body>
            </Card>
        </>
    )
}