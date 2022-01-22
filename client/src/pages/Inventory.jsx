import axios from "axios"
import globals, { BASE_URL } from "../globals"
import React, {useState, useEffect} from 'react'

export default function Inventory(props) {
    const [showInventory, setShowInventory] = useState([])

    const showBook = (id) => {
        props.history.push(`/details/${id}`)
    }

    const displayInventory = async () => {
        const resp = await axios.get(`${BASE_URL}/inventory`)
        setShowInventory(resp.data.inventory)     
    }

    useEffect(()=> {
        displayInventory()
    }, [])

    return (
        <div className="inventory-container-main">
            <h1>Inventory</h1>
            <div className="inventory-container">{showInventory.map((book, idx)=> ( 
                <div key={idx} className="inventory-book-card">
                    <h3>{book.title}</h3>
                    <img className="inventory-image" onClick={()=> showBook(book._id)}src={book.image} alt={book.name} />
                    
                </div>
            ))} </div>
              
        </div>
    )
}
