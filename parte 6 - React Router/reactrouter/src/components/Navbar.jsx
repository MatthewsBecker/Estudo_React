//2 - links com react router

import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
    </nav>
  )
}

export default Navbar