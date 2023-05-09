import { startLoading,setDietas,setError } from "./dietaSilice"

export const getDietas =  (authToken) =>{
    return async (dispatch) => {
        dispatch(startLoading());

        let url = "http://127.0.0.1:8000/api/dietas" 

        try{
        const data = await fetch(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + authToken
                },
                method: "GET",
        })

        const resposta = await data.json();
            console.log(resposta);
            if (resposta.success === true) {
                
                dispatch(setDietas(resposta.data));
                   
            }else{
                dispatch(setError(resposta.message));
                console.log("no va");
            }

        }catch (e) {
            console.log(e);
            alert("Estem tenint problemes amb la xarxa o amb l'informació a les rutes");
        }
  }
  
}