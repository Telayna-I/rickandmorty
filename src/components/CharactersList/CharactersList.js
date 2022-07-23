import { useEffect, useState } from 'react'
import './CharactersList.css'
import Character from '../Character/Character'

const CharactersList = () => {

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    const decrement = ()=>{
        if(page > 1){
            setPage(page - 1)
        }
    }
    const increment = ()=>{
        setPage(page + 1)
    }

    

    useEffect(()=>{
        const getCharacters = async ()=>{
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const data = await response.json()
            setCharacters(data.results)
        };
        getCharacters();
    },[page])
    
    return (
        <>
            <header>
                <p>Page: {page}</p>
                <div className='buttons'>
                    <button onClick={decrement}>Previous</button>
                    <button onClick={increment}>Next</button>
                </div>
            </header>
            <div className='container-pj'>

                {characters !== null ? characters.map(character =>(
                <Character character = {character} key={character.id}   />
                )) : 'empty'}
            </div>
        </>
    )
}

export default CharactersList