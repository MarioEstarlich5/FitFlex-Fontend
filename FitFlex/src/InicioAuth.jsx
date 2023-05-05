import React, { useContext } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AuthHeader } from './layout/AuthHeader';

export const InicioAuth = () => {

    return (
        <>
            <AuthHeader/>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card style={{ width: '25rem', height: '35rem' }} className='mt-5'>
                        <Card.Link href = "/inicioAuth">
                            <Card.Img variant="top" src="../public/mis_cursos.png"style={{ width: '25rem', height: '30rem' }} />
                            <Card.Body>
                                <Card.Title>Mis cursos</Card.Title>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem', height: '35rem' }} className='mt-5'>
                        <Card.Link href = "/inicioAuth">
                            <Card.Img variant="top" src="../public/dietas.png" height='20%' style={{ width: '25rem', height: '30rem' }}/>
                            <Card.Body>
                                <Card.Title>Dietas</Card.Title>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem', height: '35rem' }} className='mt-5'>
                        <Card.Link href = "/inicioAuth">
                            <Card.Img variant="top" src="../public/cursos.png"style={{ width: '25rem', height: '30rem' }} />
                            <Card.Body>
                                <Card.Title>Cursos deportivos</Card.Title>
                            </Card.Body>
                        </Card.Link>
                    </Card>
                </Col>
            </Row>
        </>
    )

}