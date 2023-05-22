import React, { useContext, useState } from 'react'
import { UserContext } from "../userContext";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export const Register = ({ setCanvi }) => {
  let navigate = useNavigate();
  let [missatge, setMissatge] = useState("");
  let { authToken,setAuthToken } = useContext(UserContext)
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => handleRegister(data);
  const handleRegister = async (data) => {
      const{Rname,Remail,Rpassword,Rpassword2}=data;
      try{

            const data = await fetch("http://127.0.0.1:8000/api/register", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST",
                // Si els noms i les variables coincideix, podem simplificar
                body: JSON.stringify({ name:Rname, email: Remail, password: Rpassword })
            })
            const resposta = await data.json();
                console.log(resposta);
                if (resposta.success === true) {
                    console.log(resposta.authToken);
                    setAuthToken(resposta.authToken)
                    navigate("/inicio");
                }else{
                    setMissatge=(resposta.message);
                }
        }catch{
            console.log(data);
            alert("ERROR:Pot ser que no estiguis connectat a la xarxa");
        }
  };
  
  return(
    <>
            <h1 id='h1Login'>Bienvenidos a FitFlex</h1>
            <p id="eslogan">Entrena en cualquier lugar, en cualquier momento, con FitFlex ¡Donde sea, siempre en forma!</p>
            <div className='wrapper fadeInDown'>
                <div id="formContent">
                    <form className='allForms'>
                        <h3 id="h3Login">Register</h3>
        
                        <input type="text" className="fadeIn second" placeholder="Name" {...register("Rname",{
                            required:"Aquest camp és obligatori",
                            minLength:{
                                value: 8,
                                message: "El nom ha de tenir al menys 8 caràcters"
                            },pattern: {

                                value: /^([a-zA-Z@_-]+)\s+([a-zA-Z@_-]+)$/,
                                
                                message:"El nom ha de estar format per dues paraules que poden contenir (@,-,_)"}
                            
                        })}></input>

                        
                        <input type="text" className="fadeIn second" placeholder="Email addres" {...register("Remail",{
                            required:"Aquest camp és obligatori",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@(insjoaquimmir\.cat|fp\.insjoaquimmir\.cat|gmail\.com)$/i, // Expresión regular para validar el formato del email y el dominio permitido
                                message:"El correu ha de ser dels dominis @insjoaquimmir.cat, @fp.insjoaquimmir.cat o @gmail.com"
                            }
                        })}></input>
        

                        <input type="password" className="fadeIn third" placeholder="Password" {...register("Rpassword",{
                            required:"Aquest camp és obligatori",
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, // Expresión regular para validar la contraseña
                                message:"La contrasenya ha de tenir com a mínim 8 caràcters, una lletra majúscula, una minúscula, un número i un caracter especial"
                            }
                        })}></input>
                        
                        <input type="password" className="fadeIn third" placeholder="Verify Password" {...register("Rpassword2")}></input>

                        {missatge? <div className='AlertError'>{missatge}</div>:<></>}
                        {errors.Rname && <div className='AlertError' >{errors.Rname.message}</div>}
                        {errors.Remail && <div className='AlertError'>{errors.Remail.message}</div>}
                        {errors.Rpassword && <div className='AlertError'>{errors.Rpassword.message}</div>}
                        <button  className="fadeIn fourth button" onClick={handleSubmit(onSubmit)}>
                            Registrate
                        </button>
                        <button className="fadeIn fourth button"
                        onClick={() => {
                        setCanvi(true);
                        }}
                        >
                        Ir al Login
                        </button>
                    </form>
                </div>
            </div>
    </>
  )

}