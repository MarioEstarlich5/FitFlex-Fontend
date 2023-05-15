import { startLoadingSesions,setSesions, setMissatge} from "./sesionSlice"

export const getSesions = ( id, authToken) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingSesions());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://127.0.0.1:8000/api/cursos/" + id + "/sesiones"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setSesions(resposta.data));
            console.log(resposta)
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };
}