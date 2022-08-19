//2 - links com react router

import React from 'react'
import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/About">About</Link> */}

        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>Sobre</NavLink>
    </nav>
  )
}

export default Navbar