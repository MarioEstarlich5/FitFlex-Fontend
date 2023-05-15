import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import '../App.css'
import { useForm } from '../hooks/useForm';
import { setFiltre } from '../slices/cursos/cursoSlice';
import { UserContext } from '../userContext';

export const CursosMenu = () => {
  const dispatch = useDispatch();
  const { formState, handleChange,OnResetForm } = useForm({
    searchValue: "",
  }); 

  let { idUser } = useContext(UserContext);
  const { filter,  isLoading = true } = useSelector((state) => state.curso);
  const {searchValue} = formState
  return (
    <>
    {!isLoading ?
    <div className="d-flex justify-content-center mt-5 ">
        <div className='PlacesPostMenu navbar'>
            <form className="form-inline form-serch">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="searchValue" value = { searchValue } onChange={handleChange}/>
              <button className="btn btn-outline-primary btn-p" type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setFiltre({...filter,titulo:formState.searchValue}));
              }}>Búscar</button>
              <button className="btn btn-outline-primary btn-p" type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(setFiltre({...filter,titulo:"",modalidad:""}));
              }}>Vacia filtros</button>
            </form>
        </div>
      </div>:<></>}
    </>
  )
}