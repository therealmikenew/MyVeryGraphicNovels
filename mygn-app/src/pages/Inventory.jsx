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
        <div>
            <h1>Inventory</h1>
            {showInventory.map((book, idx)=> ( 
                <div key={idx} className="book-card">
                    <h3>{book.title}</h3>
                    <img onClick={()=> showBook(book._id)}src={book.image} alt={book.name} />
                    
                </div>
            ))}   
        </div>
    )
}
