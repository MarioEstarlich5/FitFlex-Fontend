import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCursos } from '../slices/cursos/thunks';
import { UserContext } from "../userContext";
import Paginate from './Paginate';
import { CursoGrid } from './CursoGrid'
import '../App.css'
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

export const CursosGrid = () => {
  let { usuari, authToken } = useContext(UserContext)
  const { cursos, curso, isLoading = true, filter, page } = useSelector((state) => state.curso);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCursos(page, authToken));
  }, [page, filter]);
  return (
    <>

      {!isLoading ?
        <>
          <div className="position-absolute top-1 start-50 translate-middle-x"><Paginate /></div>
          <Row xs={1} md={3} className="g-4 d-flex justify-content-center mt-5">
            {cursos.map((curso) => (
              <CursoGrid key={curso.id} curso={curso} />
            ))}
          </Row>
          <h2>Casos de éxito</h2>
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Carousel className="w-50" variant="ligth">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./public/cambio1.jpg"
                  alt="David Costa"
                />
                <Carousel.Caption className='bg-dark opacity-75'>
                  <h5>David Costa</h5>
                  <p>Logró su cambio físico con nuestro curso de definición.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./public/cambio2.jpg"
                  alt="Laura Robles"
                />
                <Carousel.Caption className='bg-dark opacity-75'>
                  <h5>Laura Robles</h5>
                  <p>Participó en nuestros cursos de reducción de grasa.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./public/cambio3.jpg"
                  alt="Alex Hoyos"
                />
                <Carousel.Caption className='bg-dark opacity-75'>
                  <h5>Alex Hoyos</h5>
                  <p>Cumplió su objetivo en Fitflex gracias a nuestros cursos y dietas.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </>
        :
        <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif" /></div>
      }


    </>
  )
}
