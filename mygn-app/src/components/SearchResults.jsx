import axios from 'axios'
import React from 'react'

export default function SearchResults(props) {
  
    const showBook = (id) => {
        props.props.history.push(`/details/${id}`)
    }

    const toggleWishList = async (id) => {
        await axios.put(`http://localhost:3001/api/wishlist/${id}`)
        


    }

    return (
        <div className="search-container">
            {props.displayGenre.map((book, idx)=> ( 
                <div key={idx} className="book-card" >
                    <h3>{book.title}</h3>
                    <img onClick={() => showBook(book._id)} src={book.image} alt={book.name} />
                    <p onClick={()=> toggleWishList(book._id)}>{book.onWishList ? "Remove from Wish List" : "Add to Wish List"}</p>
                    <p>Add to Inventory</p>
                </div>
                
            ))}    
  
        </div>
    )
}
