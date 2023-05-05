import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    let navigate = useNavigate();
    let { usuari, setUsuari,authToken,setAuthToken,idUser,setIdUser } = useContext(UserContext)
    let [missatge, setMissatge] = useState("");

    const checkAuthToken = async () => {

        let miStorage = localStorage.getItem("authToken") || "" ;

        if ( miStorage.length > 0 ){

            try {
                const data = await fetch("http://127.0.0.1:8000/api/user", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + miStorage,
                },
                method: "GET"
                })
                const resposta = await data.json();
                if (resposta.success === true) {
                    console.log(resposta);
                    setAuthToken(miStorage)
                    setUsuari(resposta.user.email);
                    setIdUser(resposta.user.id);
                    console.log(resposta.user);
                } else {
                    setAuthToken("")
                }
            } catch (err) {
                setAuthToken("")
                console.log(err);
            }
        }else{
            setAuthToken("")
        }

    }

    const sendLogin = async (data) => {
        console.log("Comprovant credencials....");
        const {email,password} = data;
        // Enviam dades a l'aPI i recollim resultat
        try{
            const data = await fetch("http://127.0.0.1:8000/api/login", {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            })
            console.log("despues del try");
            const resposta = await data.json();
            console.log(resposta);
            if (resposta.success === true) {
                setAuthToken(resposta.authToken)
                localStorage.setItem("authToken",resposta.authToken);
                setUsuari(email)
                console.log(resposta.authToken,usuari);
                navigate("/inicioAuth");
            }else{

                setMissatge(resposta.message);
            }

        }catch {
            console.log(data);
            setMissatge(data);
        }
    };

    useEffect(() => {
        checkAuthToken();

    }, []);

    return { sendLogin, checkAuthToken,missatge };
}
export default useLogin;