import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
//import { startLoadingCursos,setCurso, setCursos, setMissatge,setInscribe,setPage ,setPages,setFiltre } from '../slices/cursos/thunks';
import { getCurso } from '../slices/cursos/thunks';


export const Curso = () => {

  const dispatch = useDispatch();

  const { curso , missatge = "", isLoading=true,inscribe } = useSelector((state) => state.curso);

  
  const { pathname } = useLocation();

  let navigate = useNavigate();

  const { id } = useParams();

  let {usuari,authToken } = useContext(UserContext)


  useEffect ( ()=>{
    dispatch(getCurso( id, authToken)); 
   
  },[])
  
  return (
    <>
    { !isLoading?
    <div>
      {curso.titulo}
      {curso.descripcion}
      {curso.modalidad}
      {curso.duracion}
    </div>
    : <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif"/></div>}
    </>
  )
}
