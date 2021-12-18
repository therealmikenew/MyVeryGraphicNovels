import axios from 'axios'
import React, {useState} from 'react'
import SearchResults from './SearchResults'

export default function Search(props) {
    
    const [selectedGenre, setSelectedGenre] = useState({value: "superhero"})
    const [displayGenre, setDisplayGenre] = useState([])

    const handleChange = (e) => {
        setSelectedGenre({value: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      let val = Object.values(selectedGenre)
      const resp = await axios.get(`http://localhost:3001/api/books/genre/${val}`)
      setDisplayGenre(resp.data.genre)    
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
            <div>
                <SearchResults displayGenre={displayGenre} props={props} />
            </div> 
        </div>
    )
}
