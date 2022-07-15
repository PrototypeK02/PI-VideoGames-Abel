import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux"
import getAllNames from "../action/getAllNames";
import "./styles/gamesStyles.css"
import {Link, useHistory} from "react-router-dom"
import {Pagination} from "./Pagination"
import {SET_PAGE_STATE } from "../actiontypes/actiontypes";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import getPagination from "../action/getPagination";
import "./styles/home.css"



export function Home() {
    const pageData= useSelector(state => state.paginationPages)
    const dispatch = useDispatch()
    const videoGames = useSelector(state => state.paginationToShow)
    const allGamesBD = useSelector(state => state.allVideoGames)
    let history = useHistory()
    useEffect(()=> {
        
        if(allGamesBD.length < 1) {
        dispatch(getAllNames())
        }
       
        getPagination(pageData,allGamesBD,dispatch)
        

        return () => dispatch({type: SET_PAGE_STATE, payload: []});
    },[])


    return (
        <div>
        {!allGamesBD[0]? <div><Loading/></div> :
        <div className="HomeBackground">
            <button className="CreateBtn" onClick={(e) => {e.preventDefault();history.push("/createnewgame")}}>Create Your Own Game!</button>
            <div><SearchBar/></div>
            
            <div> <Pagination/></div>
            
           
            {allGamesBD[0] && videoGames.map((el,i) => {
                return (
                    <div className="post1">
                    <Link key={i}className="link" to={`/gamedetail/${el.id}`}>
                    <div className="post">
                        <h3 key={el.id} className="buttonH3">{el.name}</h3>
                        <img key={el.name}src={el.image} alt="" srcSet="" />
                       { el.genres.map((e,i) => <span key={i} className="buttonH3">{e.name}</span>)}
                    </div>
                    </Link>
                    </div>
                )
            }) }

        </div>
        }
        </div>
    )

}