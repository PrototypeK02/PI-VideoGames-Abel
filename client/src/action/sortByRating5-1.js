import { SORT_BY_RATING51 } from "../actiontypes/actiontypes";

export function sortByRating51(referenceState,dispatch) {

    referenceState = referenceState.sort((a,b) => { if(b.rating < a.rating) { return -1; }
    if(b.rating > a.rating) { return 1; }
    return 0})

   return dispatch({type:SORT_BY_RATING51, payload: referenceState})


}