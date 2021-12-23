import React from 'react'

export default function BookCard(props) {
 
    const showBook = (id) => {
        props.props.props.history.push(`/details/${id}`)
    }
    
    return (
        <div className='book-card-container'>
            {props.displayGenre.map((book, idx)=> ( 
                <div key={idx} className="book-card" >
                    <h3>{book.title}</h3>
                    <img className="book-card-image" onClick={() => showBook(book._id)} src={book.image} alt={book.name} />
                  
                </div>
                
            ))}    
            
        </div>
    )
}
