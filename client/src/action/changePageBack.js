
import { useDispatch,useSelector} from "react-redux"
import {CHANGE_BACK_PAGE, CHANGE_PAGE} from "../actiontypes/actiontypes"


export default function changeBack(dispatch,pageData,referenceState) {

    if(15*(pageData-1) - referenceState.length <= 14) {
    
    if(pageData === 1) {
        if(15*7 - referenceState.length <= 14) {
        return dispatch({type: CHANGE_PAGE, payload: 7})
        }
    }
    else{
        if(pageData > 1) {
    return  dispatch({type: CHANGE_BACK_PAGE})
        }
    }
}
}
