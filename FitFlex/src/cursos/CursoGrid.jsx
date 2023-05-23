import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../App.css'
import { UserContext } from '../userContext'
export const CursoGrid = ({ curso }) => {
    let { usuari, authToken } = useContext(UserContext)
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state.curso);

    const filePath = curso.filepath
    const trimmedPath = filePath.substring(filePath.indexOf('/'));

    return (
        <>

            <Card style={{ width: '25rem', height:'15rem', backgroundImage: `url(http://equip03.insjoaquimmir.cat/storage/${trimmedPath})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="p-3 m-4 container-card-cuso">
            
            <Link to={"/cursos/" +curso.id}>
                <Card.Body className='p-5 card-b'>
                <Card.Title>{curso.titulo}</Card.Title>
                <Card.Text>
                    {"Modalidad: "+curso.modalidad}<br></br>
                    {"Duracion: "+curso.duracion+" Semanas"}
                </Card.Text>
               
            </Card.Body>
            </Link>
        </Card>

        </>
    )
}
