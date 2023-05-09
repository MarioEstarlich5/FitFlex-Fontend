import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import { UserContext } from '../userContext'
import Card from 'react-bootstrap/Card';

export const DietaGrid = ({ dieta }) => {
    const dispatch = useDispatch();
    let ruta="http://127.0.0.1:8000/public/dietas/"+dieta.file.filepath


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{dieta.nombre}</Card.Title>
                    <Card.Text>
                    {dieta.descripcion}
                    </Card.Text>
                    <Link href={ruta} target="_blank">Descargar PDF</Link>
                </Card.Body>
            </Card>
        </>
    )
}