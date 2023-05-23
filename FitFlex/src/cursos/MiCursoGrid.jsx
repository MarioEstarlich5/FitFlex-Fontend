import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../App.css'
import { UserContext } from '../userContext'
export const MiCursoGrid = ({ curso }) => {
  let { usuari, authToken } = useContext(UserContext)
  const dispatch = useDispatch();
  const filePath = curso.filepath
  const trimmedPath = filePath.substring(filePath.indexOf('/'));

  return (
    <>
      <Card className="p-3 m-4 container-card-cuso">
        <Link to={"/cursos/" + curso.id}>
          <Card.Body className='p-5 card-b' style={{ backgroundImage: `url(http://equip03.insjoaquimmir.cat/storage/${trimmedPath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Card.Title>{curso.titulo}</Card.Title>
            <Card.Text>
              {"Modalidad: " + curso.modalidad}<br></br>
              {"Duracion: " + curso.duracion + " Semanas"}
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  )
}
