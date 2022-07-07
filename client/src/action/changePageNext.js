

import {CHANGE_NEXT_PAGE, CHANGE_PAGE} from "../actiontypes/actiontypes"


export default function changeNext(dispatch,pageData,referenceState) {
    
    if(15*(pageData+(pageData == 7? 0 : 1)) - referenceState.length < 15) {
    
    if(pageData === 7) {
        return dispatch({type: CHANGE_PAGE, payload: 1})
    }
    else{
    return  dispatch({type: CHANGE_NEXT_PAGE})
    }
}
}