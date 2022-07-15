import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {onSearch} from '../action/searchName'
import SearchBar from './SearchBar'
import background from "../../src/4265798.jpg"
import { CLEAR_NAME_DETAIL } from '../actiontypes/actiontypes'
import Loading from './Loading'
import "./styles/formInput.css"
import "./styles/home.css"

export default function GameNameDetails() {
    let dispatch= useDispatch()
    let search = window.location.search
    let params = new URLSearchParams(search)
    let gameNameDe = params.get('name')
    let details = useSelector(state => state.videoGameName)


    useEffect(() => {
        onSearch(gameNameDe,dispatch)
    
    return () => dispatch({type: CLEAR_NAME_DETAIL})
    
    }, [gameNameDe])
    

    

  return (
    <div>
        {!details[0]? <Loading/> :
    <div className="HomeBackground">
        <Link to="/Home"> <button className="backbtn">Go Back</button> </Link> 
        <div><SearchBar/></div>
        
        {details&& details.map(el => {
            return (
                <div className='post1'>
                <div key={el.id} className="post">
                <Link className='link' to={`/gamedetail/${el.id}`}>
                
                    <h3>{el.name}</h3>
                    <img src={el.image? el.image: "https://s3.envato.com/files/10065422/Extra%20Previews/06_Preview6.png"} alt="" />
               
                </Link>
                </div>
                </div>
            )
        })}
        
    </div>
}
    </div>
  )
}
