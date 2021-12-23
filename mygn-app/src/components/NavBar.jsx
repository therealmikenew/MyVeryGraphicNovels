import "../styles/styles.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <h3 className="nav-bar-title">My Very Graphic Novels</h3>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/search">Search</Link>
                <Link to="/wishlist">Wish List</Link>
                <Link to="/inventory">Inventory</Link>
            </div>
        </nav>
    )
}
