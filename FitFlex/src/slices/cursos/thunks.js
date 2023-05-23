import { startLoadingCursos, setCurso, setCursos, setMissatge, setInscribe, setPage, setPages, setFiltre, setUsuarioYaInscrito,setCursoGratis } from "./cursoSlice"

export const getCursos = (page, authToken) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingCursos());
        const filtre = getState().curso.filter

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = page > 0 ?
            "http://equip03.insjoaquimmir.cat/api/cursos?paginate=1&page=" + page
            :
            "http://equip03.insjoaquimmir.cat/api/cursos";


        let interAnd = page > 0 ? "&" : "?";

        let filterDescr = filtre.titulo == "" ? "" : "titulo=" + filtre.titulo;

        //let filterAuth = filtre == "" ? "" : "author="+filtre.author;

        url = url + interAnd + filterDescr;//+interAnd+filterAuth;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            if (page > 0) {

                dispatch(setCursos(resposta.data.collection));

                dispatch(setPages(resposta.data.links));


            } else {

                dispatch(setCursos(resposta.data));

            }
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    }
}
export const getCurso = (id, authToken) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingCursos());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/cursos/" + id;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setCurso(resposta.data));
            dispatch(test_inscribe(id, authToken));
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };

}

export const test_inscribe = (id, authToken) => {

    return async (dispatch, getState) => {

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "http://equip03.insjoaquimmir.cat/api/cursos/" + id + "/inscribe";

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success === true) {
            const data = await fetch("http://equip03.insjoaquimmir.cat/api/cursos/" + id + "/inscribe", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + authToken
                },
                method: "DELETE",
            })
            dispatch(setInscribe(false))

        }

        else {
            dispatch(setInscribe(true));
            dispatch(setUsuarioYaInscrito(true));
        }
    }
}
export const inscribeCurso = (id, authToken) => {

    return async (dispatch, getState) => {
        //dispatch(startLoadingPlaces());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };

        const url = "http://equip03.insjoaquimmir.cat/api/cursos/" + id + "/inscribe";


        const data = await fetch(url, headers);
        const resposta = await data.json();
        if (resposta.success === true) {
            dispatch(setInscribe(true));
            dispatch(setUsuarioYaInscrito(true));
            dispatch(setCursoGratis(id))

        } else if (resposta.success === false) {
            dispatch(setMissatge(resposta.message));
            dispatch(setUsuarioYaInscrito(true));

        } else {
            console.log("Error al inscribirse");
            alert(resposta.message)
        }
    }
}

export const getMisCursos = (authToken) => {
    return async (dispatch) => {
        dispatch(startLoadingCursos());

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url = "http://equip03.insjoaquimmir.cat/api/misCursos";

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            dispatch(setCursos(resposta.data));
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    }
}