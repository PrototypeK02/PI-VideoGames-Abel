import React from 'react'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"
import getDetails from '../action/getDetails'
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { RESET_DETAILS } from '../actiontypes/actiontypes'
import Loading from './Loading'
import "./styles/formInput.css"
import deletefromDB from '../action/destroy'
export default function GameDetail() {

    let dispatch= useDispatch()

    let details = useSelector(state => state.videoGameId)
   let {id} = useParams()

   useEffect(() => {
    getDetails(id,dispatch)

    return () => dispatch({type: RESET_DETAILS})
   },[])

   

  return (
    <div>
      {!details.name ? <Loading/>:
    <div className="Loadingif" style={{
      backgroundImage: `url(${details.image})`
      
  }}>
      
      <Link to="/Home"> <button className='backbtn'>Go Back</button> </Link> 
    
      <div className='gameDetails'>
        <h3 className='infoDetails'>{details.name}</h3>
        <h3 className='infoDetails'>Description</h3>
        <span className='infoDetails'>{details.description}</span>
        <h3 className='infoDetails'>Rating:{details.rating}</h3>
        <h3 className='infoDetails'>Genres: {details.genres?.map(el => <li key={el.name}>{el.name}  </li>)}</h3>
        <h3 className='infoDetails'>Platforms: {details.platform?details.platform.map(el => <ul key={el}>{el}</ul>) : details.plataform?.map(el => <li key={el}>{el}</li>)}</h3>
        <h4 className='infoDetails'>Release Date: {details.releaseDate}</h4>
        
        </div>
    </div>
      }
    </div>
  )
}
