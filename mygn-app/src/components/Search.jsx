import axios from 'axios'
import React, {useState} from 'react'
import SearchResults from './SearchResults'
import RandomResult from "./RandomResult"

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
      const resp = await axios.get(`http://localhost:3001/api/books/genre/${val}`)
      setDisplayGenre(resp.data.genre)    
    }

    const randomFind = async (e) => {
        e.preventDefault()
        let random = await axios.get("http://localhost:3001/api/books")
        let randomArr = random.data.books
        let newArr = randomArr.map((book)=> ((book._id)))
        let test = newArr[Math.floor(Math.random() * newArr.length)]
        let testone = await axios.get(`http://localhost:3001/api/books/${test}`)
        setDisplayRandom(testone.data.bookID)
        console.log(displayRandom)
    }

    return (
        <div>
            <h1>Search</h1>

            <form onSubmit={handleSubmit}>
            <select id="search" onChange={handleChange}>
                <option value="superhero">superhero</option>
                <option value="fantasy">fantasy</option>
                <option value="horror">horror</option>
                <option value="indie">indie</option>
                <option value="documentary">documentary</option>
                <option value="suspense">suspense</option>
            </select >
                <button type='submit'>Search</button>
            </form>

            <form onSubmit={randomFind}>
                <button type="submit">Find Something Random</button>
            </form>



            <div>
                <SearchResults displayGenre={displayGenre} props={props} selectedGenre={selectedGenre} handleSubmit={handleSubmit} toggleUpdate={toggleUpdate}/>
                <RandomResult displayRandom={displayRandom} props={props} />
            </div> 
        </div>
    )
}
