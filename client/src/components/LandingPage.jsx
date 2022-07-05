import React from 'react'
import "./styles/landing.css"
import {Link} from "react-router-dom"
function LandingPage() {


  return (
<>

    <div className='Landing'>
        <h1 className='h1'>Welcome Player 1</h1>
        
   
    <Link to="/Home"><button className='button-49'>Start!</button></Link>
    <div>
        
    </div>
    </div>
    </>
  )
}

export default LandingPage