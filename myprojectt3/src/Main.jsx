import { useRef, useState, useEffect } from "react"
import "./App.scss"

function Main() {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => setCharacters(data.results))

    }, [])
    
    return(
<div className="Main">
    <div className="characters">
        {
            characters?
            characters.map(c => (
                <div className="character" key={c.id}>
                    <img src={c.image} alt={c.name} />
                    <div>
                        <h1>{c.name}</h1>
                        <p>{c.species}</p>
                        <p>{c.gender}</p>
                    </div>
                </div>
            ))
            :
            <p>Data is loading</p>
        }

    </div>
    </div>
)
}


export default Main