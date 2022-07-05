

import {CHANGE_NEXT_PAGE, CHANGE_PAGE} from "../actiontypes/actiontypes"


export default function changeNext(dispatch,pageData,referenceState) {
    
    if(15*pageData - referenceState.length <= 14) {
    
    if(pageData === 7) {
        return dispatch({type: CHANGE_PAGE, payload: 1})
    }
    else{
    return  dispatch({type: CHANGE_NEXT_PAGE})
    }
}
}