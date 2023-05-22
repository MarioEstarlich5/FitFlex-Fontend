import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMisCursos } from '../slices/cursos/thunks';
import { UserContext } from "../userContext";
import Paginate from './Paginate';
import { CursoGrid } from './CursoGrid'
import '../App.css'
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

export const MisCursosGrid = () => {
  let { usuari, authToken } = useContext(UserContext)
  const { cursos, curso, isLoading = true } = useSelector((state) => state.curso);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMisCursos(authToken));
  }, []);
  return (
    <>

      {!isLoading ?
        <>
          <Row xs={1} md={3} className="g-4 d-flex justify-content-center mt-5">
            <h2 className='w-100'>Mis Cursos</h2>
            {cursos.map((curso) => (
              <CursoGrid key={curso} curso={curso} />
            ))}
          </Row>
        </>
        :
        <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif" /></div>
      }


    </>
  )
}
