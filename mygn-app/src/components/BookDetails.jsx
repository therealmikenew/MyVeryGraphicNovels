import axios from 'axios'
import React, {useState, useEffect } from 'react'

export default function BookDetails(props) {
    const [bookData, setBookData] = useState("")
    const [getComment, setGetComment] = useState("")


    

    const displayDetails = async () => {
        const resp = await axios.get(`http://localhost:3001/api/books/${props.match.params.id}`)
        let bookDetails = resp.data.bookID
        setBookData(bookDetails)
    }


    useEffect(() => {
        displayDetails()
    }, [])

    const handleChange = (e) => {
        setGetComment(e.target.value)
    }

    const submitComment = async (e) => {
       
        await axios.post("http://localhost:3001/api/wishlist/comment", {
            body: `${getComment}`,
            book_id: `${bookData._id}`,
        })
    }

    
    return (<div  >

            <div className='book-card-detail'>
                <h3>{bookData.title}</h3>
                <img src={bookData.image} alt={bookData.title} />
                <p>{bookData.description}</p>
                <form onSubmit={submitComment}>
                    <label>Comments</label>
                    <input type="text" onChange={handleChange}></input>
                    <input type="submit"></input>
                </form>
                <p>{bookData.onWishList ? "Remove from Wish List" : "Add to Wish List"}</p>
                <p>Add to Inventory</p>
            </div>




    </div>)
}
