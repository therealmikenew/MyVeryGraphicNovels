import axios from 'axios'
import React, {useState} from 'react'

export default function BookCard(props) {
    const [update, setUpdate] = useState('')
    
    const showBook = (id) => {
        props.props.props.history.push(`/details/${id}`)
    }

 
    const toggleWishList = async (id, onWishList) => {
       
        let changeBook = await axios.put(`http://localhost:3001/api/wishlist/${id}/${!onWishList}`)  
    
    }

    const toggleInventory = async (id, onInventory) => {
        await axios.put(`http://localhost:3001/api/inventory/${id}/${!onInventory}`)
        }


    return (
        <div >
            {props.displayGenre.map((book, idx)=> ( 
                <div key={idx} className="book-card" >
                    <h3>{book.title}</h3>
                    <img onClick={() => showBook(book._id)} src={book.image} alt={book.name} />
                    {/* <button onClick={()=> toggleWishList(book._id, book.onWishList)}>{book.onWishList ? "Remove from Wish List" : "Add to Wish List"}</button>
                    <button onClick={()=> toggleInventory(book._id, book.onInventory)}>{book.onInventory ? "Remove from Inventory" : "Add to Inventory"}</button> */}
                </div>
                
            ))}    
            
        </div>
    )
}
