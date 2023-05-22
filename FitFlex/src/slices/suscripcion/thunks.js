import { setMissatge } from "../cursos/cursoSlice";

export const setSuscripcion = ( authToken ) => {
    console.log("Entro en peticion")
    return async (dispatch, getState) => {

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/suscribete"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            localStorage.clear();
            console.log(resposta)
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };
}