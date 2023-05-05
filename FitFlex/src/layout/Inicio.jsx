import React, { } from 'react'
import '../App.css'
import Carousel from 'react-bootstrap/Carousel';

export const Inicio = () => {
    return (
        <div className="w-100 d-flex justify-content-center mt-5">
            <Carousel className="w-75 d-flex justify-content-center" variant="ligth">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/Carousel1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/Carousel2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./public/Carousel3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}