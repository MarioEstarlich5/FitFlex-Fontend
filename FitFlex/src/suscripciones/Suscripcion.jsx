import {loadStripe} from '@stripe/stripe-js';
import {Elements,CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import { UserContext } from '../userContext';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setSuscripcion } from '../slices/suscripcion/thunks';
import { useDispatch } from 'react-redux';

const stripePromise = loadStripe("pk_test_51N8Nm9ATYzOWExdxyTUmjGGEBctXDtKs0ZqvYxz1m3pAfGJByCDeX5Aj1eDyyjRzGYCKYjvlf92nocAUuMcpk6v500sUU4Yo9h");



const CheckoutForm = () => {
    let navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    let { authToken, setAuthToken} = useContext(UserContext)

    const handelSubmit = async (e) => {
        e.preventDefault();
        
        const stripe2 = await stripePromise;
        
        const { error,paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        console.log(paymentMethod.card)

        const payload = stripe.createToken(elements.getElement(CardElement));
        
        if(!error){
            console.log(paymentMethod)

            const {id} = paymentMethod;

            try {
                const response = await axios.post("http://127.0.0.1:8000/api/suscripcion", {
                    payment_intent:id,
                    amount: 10000,
                    token: (await payload).token.id
                },{
                    headers: {
                        'Authorization': 'Bearer ' + authToken // Reemplaza 'valor_del_authToken' con el valor real del authToken
                }});
                

                console.log(response.data);
                elements.getElement(CardElement).clear();
            } catch (error) {
                console.error(error);
            }
        }
    }

    
    console.log(authToken)
    return (
        <div className='d-flex justify-content-center mt-5'>
            <form onSubmit={handelSubmit} className="card card-body">
                <img src = '../../public/Fitflex.png' className='img-fluid' alt='Logo Fitflex'></img>
                <p>Págo a suscripción premium anual</p>
                <p>Cantidad a pagar: <b>100€</b></p>
                <div className='d-flex justify-content-center'>
                    <img src = '../../public/visaMatercard.png' className='img-fluid w-25 mb-2' alt='metodos de pago'></img>
                </div>
                
                <div className='form-group'>
                    <CardElement className='form-control'/>
                </div>
                <button className='btn btn-success'
                    onClick={() => {
                        dispatch(setSuscripcion(authToken));
                        navigate("/Login");
                        setAuthToken("");
                        }}>
                    Pay <i class="bi bi-bag-check-fill"></i>
                    
                </button>
                
            </form>
        </div>
    );
}

export const Suscripcion = () => {    
    return(
        <Elements stripe={stripePromise}>
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <CheckoutForm/>
                    </div>
                </div>
            </div>
        </Elements>
    );
}

