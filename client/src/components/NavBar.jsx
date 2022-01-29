import "../styles/styles.css"
import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {

    


    return (
        <nav className="nav-bar">
            <h3 className="nav-bar-title">My Very Graphic Novels</h3>
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li className="link"><Link to="/" style={{color: "whitesmoke", textDecoration: 'none'}} >Home</Link></li>
                    <li className="link"><Link to="/about" style={{color: "whitesmoke", textDecoration: 'none'}}>About</Link></li>
                    <li className="link"><Link to="/search" style={{color: "whitesmoke", textDecoration: 'none'}}>Search</Link></li>
                    <li className="link"><Link to="/wishlist" style={{color: "whitesmoke", textDecoration: 'none'}}>Wish List</Link></li>
                    <li className="link"> <Link to="/inventory" style={{color: "whitesmoke", textDecoration: 'none'}}>Inventory</Link></li>
                </ul>
               
            </div>
        </nav>
    )
}
