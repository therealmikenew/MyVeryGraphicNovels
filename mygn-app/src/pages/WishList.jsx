import axios from "axios"
import React, {useState, useEffect} from 'react'

export default function WishList(props) { 
    const [showWishList, setShowWishList] = useState([])

    const showBook = (id) => {
        props.history.push(`/details/${id}`)
    }

    const displayWishList = async () => {
        const resp = await axios.get(`http://localhost:3001/api/wishlist`)
        setShowWishList(resp.data.wishList)     
    }

    useEffect(() => {
        displayWishList()
    },[] )

    return (
        <div>
            <h1>Wish List</h1>
            {showWishList.map((book, idx)=> ( 
                <div key={idx} className="book-card">
                    <h3>{book.title}</h3>
                    <img onClick={()=> showBook(book._id)}src={book.image} alt={book.name} />
                </div>
            ))}   


        </div>
    )
}
