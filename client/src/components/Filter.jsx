import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_PAGE, GET_ALL_GAMES, PRE_FILTER, SET_PAGE_STATE} from '../actiontypes/actiontypes'
import "./styles/filterButtons.css"

function Filter() {
  let [controlFilter, setReference] = useState([])
  let [stylesF, setStyles] = useState({

  })
    let genres = ["Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card"]

    const pageData= useSelector(state => state.paginationPages)
    const dispatch = useDispatch()
    const videoGames = useSelector(state => state.paginationToShow)
    const allGamesBD = useSelector(state => state.allVideoGames)
    const backUp = useSelector(state => state.backUpState)
    function filterItems(el) {
     
      if(!controlFilter.includes(el)) {
        setReference(controlFilter = [...controlFilter,el])
      
    
      
        let notFiltered =[]
        let filtered = allGamesBD.filter(e => {
            let founded = e.genres.find(g => g.name === el)
            if(founded) {
            return e
            }
            else{
              notFiltered.push(e)
            }
        })
      
        dispatch({type: PRE_FILTER, payload: notFiltered })
        if(filtered.length > 0) {
        dispatch({type: GET_ALL_GAMES, payload: filtered})
        dispatch({type: CHANGE_PAGE, payload: 1})
        return dispatch({type: SET_PAGE_STATE, payload: filtered.slice(0,15)})
        }
        else if(filtered.length<1 &&allGamesBD.length < 2){
          setReference(controlFilter = controlFilter.filter(e => e !== el))
            return alert("There are no more applicable filters to show :(")
        }
        else if(filtered.length < 1) {
          setReference(controlFilter = controlFilter.filter(e => e !== el))
            return alert("No match for this Genre")
        }
      }
      else{
        setReference(controlFilter = controlFilter.filter(e => e !== el))
        if(backUp.length > 0) {
        let matchers = 0
        let finalMatch = []
        for(let i = 0; i<backUp.length; i++ ) {
          controlFilter.forEach(g => {
            if(backUp[i].genres.find(e => e.name === g)) {
              matchers ++
            }
          })
          if(matchers === controlFilter.length) {
            finalMatch = finalMatch.concat(backUp[i])
            matchers = 0
          }
          else{
            matchers = 0
          }
        }
       
        dispatch({type: GET_ALL_GAMES, payload: Array.from(new Set(allGamesBD.concat(finalMatch)))})
        dispatch({type: SET_PAGE_STATE, payload: finalMatch.slice(0,15)})
        }
      }
    }

    function filterCreated() {
      let notFiltered =[]
      let filtered = allGamesBD.filter(e => {
          let founded = e.id == 10
          if(founded) {
          return e
          }
          else{
            notFiltered.push(e)
          }
      })
      
      dispatch({type: PRE_FILTER, payload: notFiltered })
        if(filtered.length > 0) {
        dispatch({type: GET_ALL_GAMES, payload: filtered})
        return dispatch({type: SET_PAGE_STATE, payload: filtered})
        }
        else {

        }
       
    }





  return (
    <div className="filtercontainer">
    <label>Filter By Genres</label>
    {genres.map((el,i) => <button key={i} className={!controlFilter.includes(el) ? "buttonfilter1" :"buttonfilter2" } onClick={() => filterItems(el)}>{el}</button>)}
    <button className="buttonfilter1"onClick={()=> filterCreated()}>Created by User</button>
    <button className="buttonfilter1"onClick={()=> {return setReference(controlFilter = []), dispatch({type: GET_ALL_GAMES, payload: backUp }), dispatch({type: SET_PAGE_STATE, payload: backUp.slice(0,15)})}}>Show All</button>
</div>
  )
}

export default Filter