import axios from 'axios'
import React, {useState, useEffect } from 'react'
import Comment from './Comment'

export default function BookDetails(props) {
    const [bookData, setBookData] = useState("")
   
    useEffect(() => {
        displayDetails()
    }, [])

    const displayDetails = async () => {
        const resp = await axios.get(`http://localhost:3001/api/books/${props.match.params.id}`)
        setBookData(resp.data.bookID)
        
    }

    return (
        <div>
            <div className='book-card-detail'>
                <h3>{bookData.title}</h3>
                <img src={bookData.image} alt={bookData.title} />
                <p>{bookData.description}</p>
                <Comment bookData={bookData}/>  
                <p>{bookData.onWishList ? "Remove from Wish List" : "Add to Wish List"}</p>
                <p>Add to Inventory</p>
            </div>
    </div>)
}
