import { useEffect, useState } from "react";
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
    let [filters, setFilters] = useState([])

    useEffect(() => {
        getPagination(pageData,referenceState,dispatch)
        if(backUp.length < 1) {
        dispatch({type:NEED_BACKUP, payload: referenceState})
        }
    },[pageData])


    return (
        <div>
            <label>Sort By Name</label>
            <button className="buttonfilter1"onClick={() => {return sortByNameAZ(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>A-Z</button>
            <button className="buttonfilter1"onClick={() => {return sortByNameZA(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>Z-A</button>
            <label>Sort by Rating</label>
            <button className="buttonfilter1"onClick={() => {return sortByRating15(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>1-5</button>
            <button className="buttonfilter1"onClick={() => {return sortByRating51(referenceState,dispatch),getPagination(pageData,referenceState,dispatch)}}>5-1</button>
           
           <Filter></Filter>
          
          <label>Search by Pages</label>
          <button className="buttonfilter1"onClick={() => {return changeBack(dispatch,pageData,referenceState)}}>Prev</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>1</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>2</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>3</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>4</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>5</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>6</button>
           <button className="buttonfilter1"onClick={(event)=> {return changePage(event,referenceState,dispatch)}}>7</button>
           <button className="buttonfilter1"onClick={() => {return changeNext(dispatch,pageData,referenceState)}}>Next</button>  


        </div>
    )
   



}
