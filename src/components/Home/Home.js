import { useEffect, useState } from 'react'
import { allCharacters } from '../../functions/functions'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {

    const [characters, setCharacters] = useState(null)


    useEffect(()=>{
        allCharacters(setCharacters)
        
    },[])
    
    
    return (
        <>
            {characters !== null ? characters.map(character =>(
                <div className='card' key={character.id}>
                    <div className='img-container'>
                        <img className='img' src={character.image} alt = {character.name} />
                    </div>
                    <div className='character-info'>
                        <Link className='enlace' to={`/characters/${character.id}`}>{character.name}</Link>
                        <h4 className='status'>Status: {character.status}</h4>
                        <h4 className='origen'>Origen: {character.origin.name}</h4>
                        <h4 className='status'>Especie: {character.species}</h4>
                    </div>
                </div>
            )) : 'empty'}
        </>
    )
}

export default Home