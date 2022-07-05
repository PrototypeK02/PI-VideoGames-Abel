
import { SET_PAGE_STATE } from "../actiontypes/actiontypes"




export default function getPagination(pageData,referenceState,dispatch) {

    
  


    


    // eslint-disable-next-line default-case
    switch(pageData) {
        case 1: 
            let page1 = referenceState.slice(0,15)
            if(referenceState.length >= 1) {
            return dispatch({type: SET_PAGE_STATE, payload: page1})
            }
            else{
                break;
            }
        
            case 2:
            let page2 = referenceState.slice(15,30)
            if(referenceState.length >=15) {
            return dispatch({type: SET_PAGE_STATE, payload: page2})
            }
            break;

            case 3:
            let page3 = referenceState.slice(30,45)
            if(referenceState.length >=30) {
            return dispatch({type: SET_PAGE_STATE, payload: page3})
            }
            break;

            case 4:
            let page4 = referenceState.slice(45,60)
            if(referenceState.length >=45) {
            return dispatch({type: SET_PAGE_STATE, payload: page4})
            }
            break;

            case 5:
            let page5 = referenceState.slice(60,75)
            if(referenceState.length >=60) {
            return dispatch({type: SET_PAGE_STATE, payload: page5})
            }
            break;


            case 6:
            let page6 = referenceState.slice(75,90)
            if(referenceState.length >=75) {
            return dispatch({type: SET_PAGE_STATE, payload: page6})
            }
            break;


            case 7:
            let page7 = referenceState.slice(90,-1)
            if(referenceState.length >=90) {
            return dispatch({type: SET_PAGE_STATE, payload: page7})
            }
            break;

            default:
                return pageData 
        

    }
  
    

}

