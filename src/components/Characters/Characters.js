import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Characters.css'

const Characters = () => {
    
    const params = useParams();
    
    const [character, setCharacter] = useState(null)
    
    useEffect(()=>{
        const getCharacter = async ()=>{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
            const data = await response.json()
            setCharacter(data)
            console.log(data)
        }

        getCharacter()
    },[])

    return (
        <>
            {character !== null ?
            <div className='individual-card'>
                <div className='img-containerr'>
                    <img className='imgg' src={character.image} alt = {character.name} />
                </div>
                <div className='character-infoo'>
                    <h2 className='enlacee' to={`/characters/${character.id}`}>{character.name}</h2>
                    <h4 className='statuss'>Genero: {character.gender}</h4>
                    <h4 className='statuss'>Status: {character.status}</h4>
                    <h4 className='origenn'>Origen: {character.origin.name}</h4>
                    <h4 className='statuss'>Especie: {character.species}</h4>
                </div>
            </div> : null}
        </>
    )
}

export default Characters