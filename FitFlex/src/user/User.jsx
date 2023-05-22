import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../slices/users/thunks';
import { getusuarioSesions } from '../slices/usuarioSesiones/thunks';
import { getMisCursos } from '../slices/cursos/thunks';


export const User = () => {

    const dispatch = useDispatch();

    const { user, isLoading = true } = useSelector((state) => state.user);
    const { sesions=[] } = useSelector((state) => state.usuarioSesion);
    const { cursos=[] } = useSelector((state) => state.curso);

    let { authToken, roles } = useContext(UserContext)

    useEffect(() => {
        dispatch(getUser(authToken));
        dispatch(getusuarioSesions(authToken))
        dispatch(getMisCursos(authToken));

    }, [])

    return (
        <>
            {!isLoading ?
                <>
                    <div className='margen'>
                        <Card style={{ width: '35rem' }} className='p-3 m-4'>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    Tu correo electronico: <u>{user.email}</u>
                                </Card.Text>
                                <Card.Text>
                                    Tu rol es: <u>{roles}</u>
                                </Card.Text>
                                <Card.Text>
                                    Cursos en los que has participado:  {cursos.length}
                                </Card.Text>
                                <Card.Text>
                                    Sesiones Completadas:  {sesions.length}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </>
                : <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif" /></div>}
        </>
    )
}
