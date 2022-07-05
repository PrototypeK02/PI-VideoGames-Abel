import axios from "axios"
import { GET_VIDEOGAME_DETAIL } from "../actiontypes/actiontypes"

export default function getDetails(id,dispatch) {

    axios(`http://localhost:3001/api/videogames/${id}`)
    .then(response => {return dispatch({type: GET_VIDEOGAME_DETAIL, payload: response.data})})
    .catch(e => console.log(e))


}