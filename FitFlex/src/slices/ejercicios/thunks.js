import { startLoadingEjercicios,setEjercicios, setMissatge} from "./ejercicioSesionSlice"

export const getEjercicio = ( id,authToken ) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingEjercicios());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://127.0.0.1:8000/api/sesiones/" + id + "/ejercicios"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setEjercicios(resposta.data));
            console.log(resposta)
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };
}