import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import useLogin  from '../hooks/useLogin';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';
export const Login = ({ setCanvi }) => {
    /* const { formState, handleChange } = useForm({
        email: "",
        password: "",
    });  */
    //const {email,password} = formState
    const { register, handleSubmit,formState: { errors }} = useForm();
    const {sendLogin,checkAuthToken,missatge} = useLogin();
    const onSubmit = data => sendLogin(data);

    checkAuthToken()

    return (
        <>
            <h1 id='h1Login'>Bienvenidos a FitFlex</h1>
            <p id="eslogan">Entrena en cualquier lugar, en cualquier momento, con FitFlex ¡Donde sea, siempre en forma!</p>
            <div className='wrapper fadeInDown'>
            <div id="formContent">
                <form className='allForms'>
                    <h3 id="h3Login">Login Here</h3>
                    
                    <input type="text" className="fadeIn second" placeholder="Email addres"{...register("email",{
                        required:"Aquest camp és obligatori",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@(insjoaquimmir\.cat|fp\.insjoaquimmir\.cat|gmail\.com)$/i, // Expresión regular para validar el formato del email y el dominio permitido
                            message:"El correu ha de ser dels dominis @insjoaquimmir.cat, @fp.insjoaquimmir.cat o @gmail.com"
                        }
                    })}></input>
                    
                    <input type="password" className="fadeIn third" placeholder="Password"{...register("password",{
                        required:"Aquest camp és obligatori",
                        pattern: {
                           // value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, // Expresión regular para validar la contraseña
                            message:"La contrasenya ha de tenir com a mínim 8 caràcters, una lletra majúscula, una minúscula, un número i un caracter especial"
                        }
                    })}></input>
                    {missatge? <div className='AlertError'>{missatge}</div>:<></>}
                    {errors.email && <div className='AlertError'>{errors.email.message}</div>}
                    {errors.password && <div className='AlertError'>{errors.password.message}</div>}
                    
                    <button className="fadeIn fourth button" onClick={handleSubmit(onSubmit)}>
                        Login
                    </button>
                    <div className="social">
                        <button className="fadeIn fourth button"
                            onClick={() => {
                                setCanvi(false);
                            }}
                            >
                            Registrat
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}