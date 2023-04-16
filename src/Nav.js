import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
function Nav() {
    return  <nav>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservation</a></li>
            <li><a href=''>Order online</a></li>
            <li><a href=''>Login</a></li>
        </ul>
        </nav>
}


export default Nav;