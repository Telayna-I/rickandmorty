import { Link } from 'react-router-dom'

const Character = ({character}) => {
    return (
        <>
        <div className='card'>
            <div className='img-container'>
                <img className='img' src={character.image} alt = {character.name} />
            </div>
            <div className='character-info'>
                <Link className='enlace' to={`/characters/${character.id}`}>{character.name}</Link>
            </div>
        </div>
    </>
    )
}

export default Character