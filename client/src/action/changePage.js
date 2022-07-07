
import {CHANGE_PAGE} from "../actiontypes/actiontypes"


export default async function changePage(event,referenceState,dispatch) {
    let eventNum= parseInt(event.target.innerText)
        if(15*eventNum - referenceState.length <= 14) {
    
            //console.log(referenceState.length)
        return await dispatch({type: CHANGE_PAGE, payload: eventNum})
        }
}