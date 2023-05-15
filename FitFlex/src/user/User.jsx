import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../userContext';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../slices/users/thunks';


export const User = () => {

    const dispatch = useDispatch();

    const { user, isLoading = true } = useSelector((state) => state.user);

    let { authToken, roles } = useContext(UserContext)


    useEffect(() => {
        dispatch(getUser(authToken));

    }, [])

    return (
        <>
            {!isLoading ?
                <>
                <div className='margen'>
                    <Card style={{ width: '20rem' }} className='p-3 m-4'>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                            <Card.Text>
                                {roles}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </>
                : <div className='margen'><img width="100 vh" src="../public/loading-buffering.gif" /></div>}
        </>
    )
}
