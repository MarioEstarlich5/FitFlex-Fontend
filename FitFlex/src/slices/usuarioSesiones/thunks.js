import { startLoadingUsuarioSesions,setUsuarioSesions, setMissatge, setComplet} from "./usuarioSesionSlice"

export const getusuarioSesions = (authToken) => {

    return async (dispatch) => {

        dispatch(startLoadingUsuarioSesions());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/usuarioSesiones"

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setUsuarioSesions(resposta.data));
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };   
}

export const test_UsuarioSesiones = (id, authToken) => {

    return async (dispatch, getState) => {

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/usuarioSesiones/" + id;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success === true) {
            const data = await fetch("http://equip03.insjoaquimmir.cat/api/usuarioSesiones/" + id, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + authToken
                },
                method: "DELETE",
            })
            dispatch(setComplet(false))
        }

        else {
            dispatch(setComplet(true))
        }
    }
}

export const addUsuarioSesiones = ( id, authToken) => {

    return async (dispatch) => {

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/usuarioSesiones/" + id

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setComplet(true))
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };   
}