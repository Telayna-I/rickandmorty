import './Home.css'
import CharactersList from '../CharactersList/CharactersList'


const Home = () => {    
    return (
        <>
            <h1 className='title'>Rick and Morty API</h1>
            <CharactersList/>
        </>
    )
}

export default Home