import axios from 'axios'
import { BASE_URL } from "../globals"
import React, {useState, useEffect } from 'react'
import Comment from '../components/Comment'

export default function BookDetails(props) {
    const [bookData, setBookData] = useState("")
    const [wishListStatus, setWishListStatus] = useState([])
    const [inventoryStatus, setInventoryStatus] = useState([])
    const [show, setShow] = useState(false)
 
    const displayDetails = async () => {
        const resp = await axios.get(`${BASE_URL}/books/${props.match.params.id}`)
        setBookData(resp.data.bookID)
    }

    useEffect(() => {
            
       const timeout = setTimeout (()=> {
             setShow(true)
         }, 400)
         //Because of a lag time in getting data from displayDetails, the timeout fucntion gives a slight delay to allow bookData to get data
         displayDetails()
         setWishListStatus(bookData.onWishList)
         setInventoryStatus(bookData.onInventory)

         return () => clearTimeout(timeout)
        
     }, [show])

     if(!show) return null

    const toggleWishList = async (id, onWishList) => {  
        let changeBook = await axios.put(`${BASE_URL}/wishlist/${id}/${!onWishList}`)  
        setWishListStatus(changeBook.data.wish.onWishList)
        props.handleUpdate()
    }

    const toggleInventory = async (id, onInventory) => {
        let changeBook = await axios.put(`${BASE_URL}/inventory/${id}/${!onInventory}`)
        setInventoryStatus(changeBook.data.update.onInventory)
        props.handleUpdate()   
    }

    return (
        <div>
            <div className='book-card-detail'>
                <div className='book-card-detail-a'><h3>{bookData.title}</h3>
                    <img className="book-card-detail-image" src={bookData.image} alt={bookData.title} />
                </div>
                <div className='book-card-detail-b'>
                    <p>{bookData.description}</p>
                    <Comment bookData={bookData} handleUpdate={props.handleUpdate}/>  
                    <button className="add-btn" onClick={()=> toggleWishList(bookData._id, bookData.onWishList)}>{wishListStatus ? "Remove from WishList" : "Add to WishList"}</button>
                    <button className="add-btn" onClick={()=> toggleInventory(bookData._id, bookData.onInventory)}>{inventoryStatus ? "Remove from Inventory" : "Add to Inventory"}</button>
                </div>
            </div>
    </div>
    )
}
