import { SORT_BY_RATING15 } from "../actiontypes/actiontypes";

export function sortByRating15(referenceState,dispatch) {

    referenceState = referenceState.sort((a,b) => { if(a.rating < b.rating) { return -1; }
    if(a.rating > b.rating) { return 1; }
    return 0})

   return dispatch({type:SORT_BY_RATING15, payload: referenceState})


}