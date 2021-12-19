import axios from 'axios'
import React, {useState, useEffect } from 'react'

export default function BookDetails(props) {
    const [bookData, setBookData] = useState("")
    

    const displayDetails = async () => {
        const resp = await axios.get(`http://localhost:3001/api/books/${props.match.params.id}`)
        let bookDetails = resp.data.bookID
        setBookData(bookDetails)
    }

    useEffect(() => {
        displayDetails()
    }, [])

    
    return (<div  >

            <div className='book-card-detail'>
                <h3>{bookData.title}</h3>
                <img src={bookData.image} alt={bookData.title} />
                <p>{bookData.description}</p>
                <p>{bookData.onWishList ? "Remove from Wish List" : "Add to Wish List"}</p>
                <p>Add to Inventory</p>
            </div>




    </div>)
}
