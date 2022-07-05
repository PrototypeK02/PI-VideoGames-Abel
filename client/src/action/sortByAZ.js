import {SORT_BY_NAMEAZ, SET_PAGE_STATE} from "../actiontypes/actiontypes"



export function sortByNameZA(referenceState,dispatch) {
    console.log(referenceState)
    referenceState = referenceState.sort((a,b) => { if(b.name.toLowerCase() < a.name.toLowerCase()) { return -1; }
    if(b.name.toLowerCase() > a.name.toLowerCase) { return 1; }
    return 0})
    dispatch({type:SORT_BY_NAMEAZ, payload: referenceState})
    return dispatch({type: SET_PAGE_STATE, payload: referenceState})
    
    


}


export function sortByNameAZ(referenceState,dispatch) {
    console.log(referenceState)
    referenceState = referenceState.sort((a,b) => { if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
    if(a.name.toLowerCase() > b.name.toLowerCase) { return 1; }
    return 0})

    dispatch({type:SORT_BY_NAMEAZ, payload: referenceState})
    return dispatch({type: SET_PAGE_STATE, payload: referenceState})

}