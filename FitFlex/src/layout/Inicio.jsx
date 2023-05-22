import React, { } from 'react'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel';

export const Inicio = () => {
    return (
        <div className="d-flex align-items-center justify-content-center mt-5">
            <Carousel className="grande" variant="ligth">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/Carousel1.jpg"
                        alt="Curso de definición"
                    />
                    <Carousel.Caption className='bg-dark opacity-75'>
                        <h5>Curso de definición</h5>
                        <p>Con tus ganas de mejorar y nuestro equipo conseguirás tus metas.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/Carousel2.jpg"
                        alt="Curso de yoga"
                    />
                    <Carousel.Caption className='bg-dark opacity-75'>
                        <h5>Curso de yoga</h5>
                        <p>En Fitflex podrás encpntrar tu paz interior y alcanzar la desconexión.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/Carousel3.jpg"
                        alt="Curso de aumento de masa muscular"
                    />
                    <Carousel.Caption className='bg-dark opacity-75'>
                        <h5>Curso de aumento de masa muscular</h5>
                        <p>Logra tus objetivos y aumenta tu capacidad física.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="./public/Carousel4.png"
                        alt="Descuentos en Myprotein"
                    />
                    <Carousel.Caption className='bg-dark opacity-75'>
                        <h5>Descuentos en Myprotein</h5>
                        <p>
                            Aprovecha las rebajas en Myprotein con el código fitflex y ponte a tope.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='footerInicio fixed-bottom'><img width="100 vh" src="../public/Fitflex.png"/></div>
        </div>

    )
}