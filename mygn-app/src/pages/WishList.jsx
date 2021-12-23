import axios from "axios"
import globals, { BASE_URL } from "../globals"
import React, {useState, useEffect} from 'react'

export default function WishList(props) { 
    const [showWishList, setShowWishList] = useState([])

    const showBook = (id) => {
        props.history.push(`/details/${id}`)
    }

    const displayWishList = async () => {
        const resp = await axios.get(`${BASE_URL}/wishlist`)
        setShowWishList(resp.data.wishList)     
    }

    useEffect(() => {
        displayWishList()
    },[] )

    return (
        <div>
            <h1>Wish List</h1>
            <div className="wishlist-container">{showWishList.map((book, idx)=> ( 
                <div key={idx} className="wishlist-book-card">
                    <h3>{book.title}</h3>
                    <img className="wishlist-image" onClick={()=> showBook(book._id)}src={book.image} alt={book.name} />
                </div>
            ))} </div>
              


        </div>
    )
}
