import axios from 'axios'
import globals, { BASE_URL } from "../globals"
import React, {useState} from 'react'
import SearchResults from "../components/SearchResults"
import RandomResult from "../components/RandomResult"

export default function Search(props) {
    
    const [selectedGenre, setSelectedGenre] = useState({value: "superhero"})
    const [displayGenre, setDisplayGenre] = useState([])
    const [displayRandom, setDisplayRandom] = useState([])

    const [update, setUpdate] = useState(true);

    const toggleUpdate = () => {
      setUpdate(!update);
    };

    const handleChange = (e) => {
        setSelectedGenre({value: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      let val = Object.values(selectedGenre)
      const resp = await axios.get(`${BASE_URL}/books/genre/${val}`)
      setDisplayGenre(resp.data.genre)    
    }

    const randomFind = async (e) => {
        e.preventDefault()
        let random = await axios.get(`${BASE_URL}/books`)
        let randomArr = random.data.books
        let newArr = randomArr.map((book)=> ((book._id)))
        let test = newArr[Math.floor(Math.random() * newArr.length)]
        let testone = await axios.get(`${BASE_URL}/books/${test}`)
        setDisplayRandom(testone.data.bookID)
    }

    return (
        <div className='search-container'>
            <div className='search-title'><h1 >Search</h1>
            <p>Discover a new graphic novel by selecting genre. Or find a random selection!</p></div>
            

            <div className='search-genre'> <form onSubmit={handleSubmit}>
            <select id="search" onChange={handleChange}>
                <option value="superhero">superhero</option>
                <option value="fantasy">fantasy</option>
                <option value="horror">horror</option>
                <option value="indie">indie</option>
                <option value="documentary">documentary</option>
                <option value="suspense">suspense</option>
            </select >
                <button type='submit'>Search</button>
            </form></div>

           <div className='search-random'><form onSubmit={randomFind}>
                <button className="random-btn" type="submit">Find me a random graphic novel!</button>
            </form></div>

            <div className='results-container'>
                <SearchResults displayGenre={displayGenre} props={props} selectedGenre={selectedGenre} handleSubmit={handleSubmit} toggleUpdate={toggleUpdate}/>
                <RandomResult displayRandom={displayRandom} props={props} />
            </div> 
        </div>
    )
}
