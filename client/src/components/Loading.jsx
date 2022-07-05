import React from 'react'
import myGif from "../../src/loading.gif"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NOT_FOUND } from '../actiontypes/actiontypes'
import "./styles/notfound.css"
function Loading() {
let dispatch = useDispatch()
let notFoundErr= useSelector(state => state.notfoundErr)
  return (
 <>
{!notFoundErr? 
  <div style={{
        backgroundColor: 'black',
        
    }}>
<img className="Loadingif" src={myGif} alt="" srcSet="" />

    </div>
:  <div className='errorbg' style={{
  backgroundColor: 'black',
  

}}>
 <Link to="/Home"> <button className='backbtn' onClick={() => dispatch({type:NOT_FOUND, payload: ""})}>Go Back</button> </Link>
 <h1 className='errorh1'>Sorry, Game Not Found!</h1>

 <h2 className=' errorh1'>T_T</h2>

  </div>}
</>
  )
} 

export default Loading