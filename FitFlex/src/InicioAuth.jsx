import React, { useContext } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export const InicioAuth = () => {

    return (
        <>
            <Row xs={1} md={3} className="g-4">
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '25rem', height: '35rem' }} className='mt-5'>
                        <Link to = "/inicio">
                            <Card.Img variant="top" src="../public/mis_cursos.png"style={{ width: '100%', height: '30rem' }} />
                            <Card.Body>
                                <Card.Title>Mis cursos</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '25rem', height: '35rem' }} className='mt-5'>
                        <Link to = "/dietas">
                            <Card.Img variant="top" src="../public/dietas.png" height='20%' style={{ width: '100%', height: '30rem' }}/>
                            <Card.Body>
                                <Card.Title>Dietas</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: '25rem', height: '35rem' }} className='mt-5'>
                        <Link to = "/cursos">
                            <Card.Img variant="top" src="../public/cursos.png"style={{ width: '100%', height: '30rem' }} />
                            <Card.Body>
                                <Card.Title>Cursos deportivos</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </>
    )

}