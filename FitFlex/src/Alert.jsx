import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from './userContext';


const Alert = () => {
  const { roles } = useContext(UserContext);

  useEffect(() => {
    const alerts = [
      {
        title: '¡Hazte premium!',
        text: 'Suscríbete a nuestro plan premium para disfrutar de todas las funciones sin límites ni anuncios. ¡Accede a la página de suscripción haciendo clic en tu perfil!',
        imageUrl: 'Fitflex.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      },
      {
        title: '¡Descuento especial!',
        text: 'Aprovecha nuestro descuento especial por tiempo limitado en la tienda de MyProtein. ¡No te lo pierdas!',
        imageUrl: 'Carousel4.png',
        imageWidth: 500,
        imageHeight: 300,
      },
      // Agrega más objetos de alerta aquí
    ];

    const interval = setInterval(() => {
      if (roles == 'usuario') {
        const randomIndex = Math.floor(Math.random() * alerts.length);
        Swal.fire(alerts[randomIndex]);
      }
    }, 120000);

    return () => {
      clearInterval(interval);
    };
  }, [roles]);

  return <div className="alert-overlay"></div>;
};

export default Alert;