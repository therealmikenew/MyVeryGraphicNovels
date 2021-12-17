import React from 'react'

export default function SearchResults(props) {
    return (
        <div>
            {props.books.map((book)=> (
                <div>
                    <h3>{book.title}</h3>
                    <img src={book.image} alt={book.name} />
                    

                </div>

            ))}
            
        </div>
    )
}
