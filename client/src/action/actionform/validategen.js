let gen;
let setGen;

export default function validategen(state,value) {

    if(!state.includes(value)) {
        setGen([...gen, value])
        alert("Genre Added")
    }
        else{
            alert("Genre already added")
        }
    
}