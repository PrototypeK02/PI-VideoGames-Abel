import React, { useState } from 'react'
import "./styles/formInput.css"
import axios from "axios"
import valNameID from '../action/actionform/valNameId.'
import { CHANGE_PAGE} from '../actiontypes/actiontypes'
import { useDispatch } from 'react-redux'
import getAllNames from '../action/getAllNames'
import { Link, useHistory } from 'react-router-dom'
export default function Form() {

    

    const [error, setError] = useState({
        name: "This field cannot be empty",
        description: "Description must have at least 30 characters.",
        rating: "Please rate your game",
        releaseDate: "Please select a valid date",
        nameSpecial: ""
    })
    let [inputs, setInput] = useState({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        platform: [],
        genre: []

    })



    let history = useHistory()
    let dispatch= useDispatch()
    let genres = ["Action","Indie","Adventure","RPG","Strategy","Shooter","Casual","Simulation","Puzzle","Arcade","Platformer","Racing","Massively Multiplayer","Sports","Fighting","Family","Board Games","Educational","Card"]

    let plataform= ["PC","Xbox", "iOS","Android","Apple Macintosh","Playstation","Linux","Nintendo"]
    let regex_symbols= /[-!$%^&*"()_+|~¡=`{}\[\]:\/;·<>´?¿€¬,.@#\\]/
    function validateChange(name,value) {
        switch (name) {
            case "name":

                if(regex_symbols.test(value)) { 
                    return setError({...error, nameSpecial: "Special Characters are not allowed", name: ""})
                }
                else if(value.length > 0) {
    
                    return setError({...error, name: "", nameSpecial: ""})
                }
                

                else{
                  return  setError({...error, name: "This field cannot be empty", nameSpecial: ""})
                }
                
                
                case "description":
    
                    if(value.length > 30) {
                     return   setError({...error, description: ""})
                        
                    }
                    else{
                        return setError({...error, description: "Description must have at least 30 characters."})
                    }
                    
                    

                    case "rating": 
                    
                        if(value > 5) {
                       return setError({...error, rating: "Rating cannot be higher than 5"})
                        }
                        else if(!value || value < 1 || value === ""  ) {
                            return setError({...error, rating: "Please Rate your Game"})
                        }

                        else if(value.length > 3 || value.includes(",") ) {
                            return setError({...error, rating: "Incorrect Rating"})

                        }
                        else{
                            return setError({...error, rating: ""})
                        }

                           case "releaseDate":
                            let release = value.split("-")
                            if(release[0].length > 4 || release[0].length<4 || release[0] > 2022 || release[0] < 1958 ) {
                                return setError({...error, releaseDate: "Invalid Year"})
                            }
                            else{
                                return setError({...error, releaseDate: ""})
                            }
                    
            default:
                return error
        }




    }

function handleChange(e) {
    const {name,value} = e.target
 
    setInput({...inputs, [e.target.name]: e.target.value})

    validateChange(name,value)
    //console.log(value)
}

    function validategen(inputs,el,e) {

        if(!inputs.genre.find(e => e.name === el)) {
            e.preventDefault()
            setInput({...inputs, genre: [...inputs.genre, {name:el, id: valNameID(el)}]})
           
           // return console.log(inputs.genre)
    }
    else{
        e.preventDefault()
        setInput({...inputs, genre: inputs.genre.filter(e => e.name !== el)})
    }
}


function validateplat(inputs,el,e) {

    if(!inputs.platform.includes(el)) {
        e.preventDefault()
        setInput({...inputs, platform: [...inputs.platform, el]})
       
     //   return console.log(inputs.platform)
}
else{
    e.preventDefault()
    setInput({...inputs, platform: inputs.platform.filter(e => e !== el)})
}
}



async function validateSubmit(e) {


    if(error.name || error.description || error.rating || error.releaseDate || error.nameSpecial ) {
        e.preventDefault()
        console.log("Nice Try! ;)")
        alert("Nice Try!! ;)")
       
    }

    else{
        
            e.preventDefault()
         axios.post("http://localhost:3001/videogames", inputs)
         .then(() => dispatch(getAllNames()))
         .then(() =>dispatch({type: CHANGE_PAGE, payload: 1}))
         .then(() => alert("VideoGame Created!!. You'll be redirected to home in 5 seconds"))
         .then(() => setTimeout(() => history.push("/home"), 5000))
         .catch(error => {alert(error.response.data)})
        

     
      
    
    }
}





  return (
    <>
    <div className="formBackg">
     <Link to="/Home"> <button className='backbtn'>Go Back</button> </Link>
    <div className='formInputs'>
        
        <form className='formC'>
            
            <h1 className='h1Form'>Create Game</h1>
    <div >
        
     
      {error.name && <span className='error'>{error.name}</span>}`
      {error.nameSpecial && <span className='error'>{error.nameSpecial}</span>}`
        <input  className="formInputs2" name="name" placeholder='Name...' value={inputs.name} onChange={handleChange} ></input>
            
        </div>

       

        <div >
        
        
        {error.rating && <span className='error'>{error.rating}</span>}
        <input name="rating" className="formInputs2" type="number" placeholder='Rating...' value={inputs.rating} onChange={handleChange}></input>
        
        </div>

        <div >
         
       
        {error.releaseDate && <span className='error'>{error.releaseDate}</span>}
        <input name="releaseDate" className="formInputs2" type="date" placeholder='Release Date' value={inputs.releaseDate} onChange={handleChange}></input>
        
        </div>

        <div >
        
        {/*<label >Description:</label>*/}
        {error.description && <span className='error'>{error.description}</span>}
        <textarea className='formTextfield' name="description" placeholder='Description...' value={inputs.description} onChange={handleChange}></textarea>
        
        </div>


        <label> Select Platform</label>

        <div className="genre">
            
                {plataform.map(el => <ol key={el}><button  className={inputs.platform.includes(el) ? "btnFormG" : "btnFormGACT"} onClick={(e) => {return validateplat(inputs,el,e)}}>{el}</button></ol>)}
            
          </div>

        <label>Select Genres</label>
        <div className="genre">
            
                {genres.map(el => <ol key={el}><button onClick={(e) => validategen(inputs,el,e)} className={inputs.genre.find(e => e.name === el) ? "btnFormG" : "btnFormGACT" }>{el}</button></ol>)}
            
          </div>

        <button hidden={!error.name && !error.nameSpecial && !error.description && !error.rating ? null: "hidden"}className='btnForm' onClick={(e) => {return validateSubmit(e)}}>Create</button>


        </form>
        </div>
        </div>
        </>
  )
}
