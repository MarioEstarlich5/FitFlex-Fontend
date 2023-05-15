import { startLoadingCursos,setCurso, setCursos, setMissatge,setInscribe,setPage ,setPages,setFiltre,setUsuarioYaInscrito } from "./cursoSlice"

export const getCursos = (page, authToken) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingCursos());
        const filtre = getState().curso.filter
        
        console.log(filtre);
        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "GET",
        };
        let url =  page > 0 ? 
        "http://127.0.0.1:8000/api/cursos?paginate=1&page=" + page 
        : 
        "http://127.0.0.1:8000/api/cursos" ;


        let interAnd = page > 0 ? "&" : "?" ;

        let filterDescr = filtre.titulo == "" ? "" : "titulo="+filtre.titulo;

        //let filterAuth = filtre == "" ? "" : "author="+filtre.author;

        url = url+interAnd+filterDescr;//+interAnd+filterAuth;
        
        console.log(url);
        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            if (page > 0) {

                dispatch(setCursos(resposta.data.collection));
                
                dispatch(setPages(resposta.data.links));
                
                console.log(resposta.data);
                
            } else {
                
                dispatch(setCursos(resposta.data));
                
            }
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    }
}
export const getCurso = ( id, authToken) => {

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
        const url = "http://127.0.0.1:8000/api/cursos/" + id;

        const data = await fetch(url, headers);
        const resposta = await data.json();

        if (resposta.success == true) {
            console.log(resposta.data);
            dispatch(setCurso(resposta.data));
            dispatch(test_inscribe(id,authToken));
        }
        else {
            dispatch(setMissatge(resposta.message));
        }
    };

}

  export const test_inscribe = (id,authToken) => {

    return async (dispatch, getState) => {

        const headers = {

            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + authToken,
            },
            method: "POST",
        };
        const url = "http://127.0.0.1:8000/api/cursos/" + id +"/inscribe";

        const data = await fetch(url, headers);
        console.log(data);
        const resposta = await data.json();
        
      if (resposta.success === true){
        console.log("Inscripcion de prueva por que no hay ninguna");
        const data = await fetch("http://127.0.0.1:8000/api/cursos/" + id +"/inscribe", {
              headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + authToken
              },
              method: "DELETE",
          })
          dispatch(setInscribe(false))
          console.log("Borro inscripcion de prueba");

      } 

      else{
            dispatch(setInscribe(true));
      }
    }
  }
  export const inscribeCurso = (id,authToken) => {

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

        const url = "http://127.0.0.1:8000/api/cursos/" + id +"/inscribe";
   

        const data = await fetch(url, headers);
        console.log(data);
        const resposta = await data.json();
      if (resposta.success === true){
            console.log("me inscribo");
            dispatch(setInscribe(true));

      }else if(resposta.success == false){
            console.log('entro en ya inscrito');
            dispatch(setMissatge(resposta.message));
            dispatch(setUsuarioYaInscrito(true));

      }else{
        console.log("Error al inscribirse");
        alert(resposta.message)
      }
    }
  }