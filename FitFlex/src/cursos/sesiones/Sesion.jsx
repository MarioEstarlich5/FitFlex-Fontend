import React, { useContext } from 'react';
import '../../App.css'
import { EjerciciosList } from './ejercicios/EjerciciosList';
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch } from 'react-redux';
import { UserContext } from '../../userContext';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

export const Sesion = ({ sesion, index }) => {
    const dispatch = useDispatch();
    let { authToken } = useContext(UserContext)


    return (
        <>
            <ListGroup.Item>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-start">
                        Sesion {index} {sesion.duracion}h
                    </div>
                    <div className="text-end">
                        <Link to={"/Sesion/" + sesion.id} className="Link">Realizar sesion</Link>
                    </div>
                </div>
            </ListGroup.Item>

        </>
    )
}