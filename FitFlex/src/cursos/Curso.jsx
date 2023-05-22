import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCurso, inscribeCurso } from '../slices/cursos/thunks';
import { setInscribe } from '../slices/cursos/cursoSlice';
import { SesionsList } from './sesiones/SesionsList';
import Card from 'react-bootstrap/Card';

export const Curso = () => {

  ;

  const dispatch = useDispatch();

  const { curso, missatge = "", isLoading = true, inscribe = false, usuarioYaInscrito = false } = useSelector((state) => state.curso);

  const filePath = curso.filepath
  const trimmedPath = filePath.substring(filePath.indexOf('/'))
  const urlTrimmed = "http://equip03.insjoaquimmir.cat/storage" + trimmedPath


  const { pathname } = useLocation();

  let navigate = useNavigate();

  const { id } = useParams();

  let { usuari, authToken, roles } = useContext(UserContext)
  useEffect(() => {
    dispatch(getCurso(id, authToken));

  }, [])

  return (
    <>
      {!isLoading ?
          <div >
            <Card style={{ width: '75%' }} className='p-3 m-4 mx-auto'>
              <Card.Img variant="top" src={urlTrimmed} />
              <Card.Body>
                <Card.Title>{curso.titulo}</Card.Title>
                <Card.Text>
                  {curso.descripcion}
                </Card.Text>
                <Card.Text>
                  {curso.modalidad}
                </Card.Text>
                <Card.Text>
                  {curso.duracion} Semanas
                </Card.Text>
              </Card.Body>
            </Card>


            {!inscribe ?
              <button className="btn btn-outline-primary btn-p" type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(inscribeCurso(id, authToken))
                }}>Inscribete</button>
              :
              (usuarioYaInscrito == true && roles != 'usuario') ?
                (<button className="btn btn-outline-primary btn-p">Inscrito</button>)
                :
                (<div>Si quieres inscribirte a más cursos hazte premium haciendo clic en tu nombre</div>)
            }
            {inscribe ?
              <div className='w-75 mx-auto'><SesionsList id={curso.id} /></div>
              : <></>}
          </div>
        : <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif" /></div>}

    </>
  )
}
