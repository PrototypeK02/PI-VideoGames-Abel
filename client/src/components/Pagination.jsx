import { useEffect} from "react";
import { useDispatch,useSelector} from "react-redux"
import changePage from "../action/changePage";
import getPagination from "../action/getPagination";
import changeBack from "../action/changePageBack";
import changeNext from "../action/changePageNext";
import {sortByNameAZ,sortByNameZA} from "../action/sortByAZ"
import { sortByRating15 } from "../action/sortByRating1-5";
import { sortByRating51 } from "../action/sortByRating5-1";
import Filter from "./Filter";
import { NEED_BACKUP } from "../actiontypes/actiontypes";
import "./styles/filterButtons.css"




export function Pagination() {
    let dispatch = useDispatch()
    const pageData= useSelector(state => state.paginationPages)
    const referenceState = useSelector(state => state.allVideoGames)
    const backUp = useSelector(state => state.backUpState)

    let handleSelect = (e) => {
        // eslint-disable-next-line default-case
        switch(e.target.value) {
            case "A-Z":
                return sortByNameAZ(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)
            
            case "Z-A":
                return sortByNameZA(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)

            case "1-5":
                return sortByRating15(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)

            case "5-1":
                return sortByRating51(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)


        }
    }

    useEffect(() => {
        getPagination(pageData,referenceState,dispatch)
        if(backUp.length < 1) {
        dispatch({type:NEED_BACKUP, payload: referenceState})
        }
    },[pageData])


    return (
        <div>
            <div className="selectname">
            <label>Sort By Name</label>
            <select className="select"onChange={(e) => handleSelect(e)}>
            <option>Select One</option> 
            <option className="select"onClick={() => {return sortByNameAZ(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>A-Z</option>
            <option className="select"onClick={() => {return sortByNameZA(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>Z-A</option>
            </select>


            
            <label>Sort by Rating</label>
            <select className="select" onChange={(e) => handleSelect(e)}>
            <option>Select One</option>
            <option className="select"onClick={() => {return sortByRating15(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>1-5</option>
            <option className="select"onClick={() => {return sortByRating51(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>5-1</option>
            </select>
            </div>
            <Filter></Filter>
          <div className="pagination">
          <button className="buttonfilter1"onClick={() => {return changeBack(dispatch,pageData,referenceState)}}>Prev</button>
           <button className={pageData !== 1 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>1</button>
           <button className={pageData !== 2 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>2</button>
           <button className={pageData !== 3 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>3</button>
           <button className={pageData !== 4 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>4</button>
           <button className={pageData !== 5 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>5</button>
           <button className={pageData !== 6 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>6</button>
           <button className={pageData !== 7 ?"buttonfilter1": "buttonfilter2"}onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>7</button>
           <button className="buttonfilter1"onClick={() => {return changeNext(dispatch,pageData,referenceState)}}>Next</button>  
           </div>
           
        </div>
    )
   



}
