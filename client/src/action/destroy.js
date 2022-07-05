import axios from "axios"

export default async function deletefromDB(id) {

    axios.delete(`http://localhost:3001/delete/${id}`)
    .then(r => {return console.log("hola")})
    .catch(e => alert("Game Deleted"))
}