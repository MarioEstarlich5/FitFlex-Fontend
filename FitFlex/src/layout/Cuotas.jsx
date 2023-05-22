import React, { } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Cuotas = () => {
  return (
    <>
      <div className='cuota'>
        <Card className='margenCard mt-5 p-5'>
          <img className='img' src="../public/Free.png" />
          <Card.Body>
            <Card.Title>Fitflex Free</Card.Title>
            <Card.Text>
              Con Fitflex podrás disfrutar de nuestra versión gratuita par realizar una pequeña prueba de nuestra aplicación, esta versión incluye:
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>
                Contenido limitado y con anuncios.
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                Solo un plan deportivo a la vez y sin posiblidad de hacer ninguno más.
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                Perfil sin datos de tu progreso.
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                Sin acceso a nuestras dietas.
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card className='margenCard mt-5 p-5'>
          <img className='w-100' src="../public/Premium.png" />
          <Card.Body>
            <Card.Title>Fitflex premium</Card.Title>
            <Card.Text>
              Con Fitflex podrás disfrutar de nuestra versión premium y conseguir todas tus metas y objetivos deportivos por tan solo 100€ anuales, esta versión incluye:
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>
                Contenido ilimitado y sin anuncios.
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                Tantos planes deportivos como quieras.
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                Perfil con datos de tu progreso.
              </Card.Text>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Text>
                Acceso a todas nuestras dietas.
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  )
}