import { startLoadingEjercicios, setEjercicios, setMissatge } from "./ejercicioSesionSlice"

export const getEjercicios = (id, authToken) => {

    return async (dispatch) => {

        dispatch(startLoadingEjercicios());

        const url = "http://equip03.insjoaquimmir.cat/api/sesiones/" + id + "/ejercicios"

        try {
            const data = await fetch(url, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + authToken
                },
                method: "GET",
            })
            const resposta = await data.json();
            if (resposta.success === true) {

                dispatch(setEjercicios(resposta.data));

            } else {
                dispatch(setMissatge(resposta.message));
            }

        } catch (e) {
            console.log(e);
            alert("Estem tenint problemes amb la xarxa o amb l'informació a les rutes");
        }
    }
}