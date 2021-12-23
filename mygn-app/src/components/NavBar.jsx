import "../styles/styles.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <h3 className="nav-bar-title">My Very Graphic Novels</h3>
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/wishlist">Wish List</Link></li>
                    <li> <Link to="/inventory">Inventory</Link></li>
                </ul>
                
                
                
                
               
            </div>
        </nav>
    )
}
