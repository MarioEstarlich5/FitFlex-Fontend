import { startLoadingSesions,setSesions, setMissatge} from "./sesionSlice"

export const getSesions = ( id, authToken) => {

    return async (dispatch) => {

        dispatch(startLoadingSesions());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/cursos/" + id + "/sesiones"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setSesions(resposta.data));
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };   
}