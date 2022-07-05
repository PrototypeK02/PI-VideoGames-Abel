import axios from "axios"
import { GET_ALL_GAMES} from "../actiontypes/actiontypes"


export default function getAllNames() {
    
    

    return (dispatch) => {
        return axios("http://localhost:3001/api/videogames")
            .then(response => {return dispatch({type: GET_ALL_GAMES, payload: response.data})})
            .catch(error => {return alert("No Games")})
            

        
    }

    

}