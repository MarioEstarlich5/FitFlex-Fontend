import { startLoading,setError, setUser } from "./UserSlice"

export const getUser =  (authToken) =>{
    return async (dispatch) => {
        dispatch(startLoading());

        let url = "http://127.0.0.1:8000/api/user" 

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
                dispatch(setUser(resposta.user));                   
            }else{
                dispatch(setError(resposta.message));
            }

        }catch (e) {
            console.log(e);
            alert("Estem tenint problemes amb la xarxa o amb l'informació a les rutes");
        }
  }
  
}