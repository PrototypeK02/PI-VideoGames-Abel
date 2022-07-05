import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles/home.css"


export default function SearchBar() {
  const [gameName, setGame] = useState("");
    const history = useHistory()

  return (
    
    <form onSubmit={(e) => {e.preventDefault();history.push(`/searchgame?name=${gameName}`)}}>
        
      <input
        type="text" className="search"
        placeholder="Search..."
        value={gameName}
        onChange={e => setGame(e.target.value)}
      />
      <input className="go"type="submit" value="Go!" />
      
    </form>
  );
}
