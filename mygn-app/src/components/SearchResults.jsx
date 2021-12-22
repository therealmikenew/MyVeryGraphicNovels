
import React from 'react'
import BookCard from './BookCard'

export default function SearchResults(props) {
    return (
        <div className="search-container">
            <BookCard displayGenre={props.displayGenre} props={props}/>
            
  
        </div>
    )
}
