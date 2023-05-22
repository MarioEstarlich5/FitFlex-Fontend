import { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContext";
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    let navigate = useNavigate();
    let { usuari, setUsuari,setAuthToken,setIdUser,setNameOfUser,setRoles } = useContext(UserContext)
    let [missatge, setMissatge] = useState("");

    const checkAuthToken = async () => {

        let miStorage = localStorage.getItem("authToken") || "" ;
        if ( miStorage.length > 0 ){

            try {
                const data = await fetch("http://equip03.insjoaquimmir.cat/api/user", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + miStorage,
                },
                method: "GET"
                })
                const resposta = await data.json();
                if (resposta.success === true) {
                    setAuthToken(miStorage)
                    setUsuari(resposta.user.email);
                    setIdUser(resposta.user.id);
                    setNameOfUser(resposta.user.name);
                    setRoles(resposta.roles);
                    navigate("/inicio");
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
        const {email,password} = data;
        // Enviam dades a l'aPI i recollim resultat
        try{
            const data = await fetch("http://equip03.insjoaquimmir.cat/api/login", {
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            })
            const resposta = await data.json();
            if (resposta.success === true) {
                setAuthToken(resposta.authToken)
                localStorage.setItem("authToken",resposta.authToken);
                setUsuari(email)
                checkAuthToken();
                navigate("/inicio");
            }else{

                setMissatge(resposta.message);
            }

        }catch {
            console.log(data);
            setMissatge(data);
        }
    };

    // useEffect(() => {
    //     checkAuthToken();

    // }, []);

    return { sendLogin, checkAuthToken,missatge };
}
export default useLogin;