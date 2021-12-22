import axios from 'axios'
import React, {useState, useEffect } from 'react'
import Comment from './Comment'

export default function BookDetails(props) {
   
    const [bookData, setBookData] = useState("")
    const [wishListStatus, setWishListStatus] = useState([])
    const [inventoryStatus, setInventoryStatus] = useState([])
    const [show, setShow] = useState(false)

    const displayDetails = async () => {
        const resp = await axios.get(`http://localhost:3001/api/books/${props.match.params.id}`)
        setBookData(resp.data.bookID)
    }

    useEffect(() => {
            
       const timeout = setTimeout (()=> {
             setShow(true)
         }, 400)
         displayDetails()
         setWishListStatus(bookData.onWishList)
         setInventoryStatus(bookData.onInventory)

         return () => clearTimeout(timeout)
        
     }, [show])

     if(!show) return null

    const toggleWishList = async (id, onWishList) => {  
      

        let changeBook = await axios.put(`http://localhost:3001/api/wishlist/${id}/${!onWishList}`)  

        setWishListStatus(changeBook.data.wish.onWishList)
        console.log(changeBook.data.wish.onWishList)
    }

    const toggleInventory = async (id, onInventory) => {
        let changeBook = await axios.put(`http://localhost:3001/api/inventory/${id}/${!onInventory}`)
        //console.log(onInventory)

        setInventoryStatus(changeBook.data.update.onInventory)
        console.log(changeBook.data.update.onInventory)
        }

    return (
        <div>
            <div className='book-card-detail'>
                <h3>{bookData.title}</h3>
                <img src={bookData.image} alt={bookData.title} />
                <p>{bookData.description}</p>
                <Comment bookData={bookData}/>  
                <button onClick={()=> toggleWishList(bookData._id, bookData.onWishList)}>{wishListStatus ? "Remove from WishList" : "Add to WishList"}</button>
                <button onClick={()=> toggleInventory(bookData._id, bookData.onInventory)}>{inventoryStatus ? "Remove from Inventory" : "Add to Inventory"}</button>
            </div>
    </div>)
}
