import React, { } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const About = () => {
  return (
    <div className='d-flex justify-content-center w-100'>
      <Card style={{ width: '30rem' }} className='mt-5 p-5'>
        <img className='img' src="../public/Fitflex.png" />
        <Card.Body>
          <Card.Title>¿Qué es Fitflex?</Card.Title>
          <Card.Text>
            FitFlex es un innovador gimnasio virtual diseñado para llevar la experiencia fitness a un nuevo nivel. Nuestro objetivo principal es brindarte un espacio virtual dinámico y accesible donde puedas alcanzar tus metas de salud y bienestar sin salir de casa. Con FitFlex, la comodidad y la efectividad van de la mano.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Text>
              En FitFlex, creemos en la importancia de la actividad física y su impacto positivo en la vida de las personas. Nuestra plataforma cuenta con una amplia variedad de clases virtuales y bajo demanda, diseñadas por expertos en fitness y adaptadas a todos los niveles de condición física. Ya sea que estés buscando quemar calorías, tonificar tus músculos, mejorar tu flexibilidad o simplemente mantenerte activo, tenemos la clase perfecta para ti.
            </Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>
              Valoramos tu bienestar en general. Por ello, no solo nos enfocamos en el aspecto físico, sino también en tu salud mental y emocional. Nuestra plataforma ofrece contenido adicional, como meditaciones guiadas y consejos de nutrición, para ayudarte a mantener un equilibrio integral en tu estilo de vida.
            </Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card.Text>
              En FitFlex, tu éxito es nuestro éxito. Nos enorgullece ser tu compañero en el viaje hacia una vida más saludable y activa. Únete a nosotros hoy mismo y descubre cómo el gimnasio virtual puede transformar tu forma de hacer ejercicio y cuidar de ti mismo. ¡Juntos, alcanzaremos tus metas fitness!
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  )
}