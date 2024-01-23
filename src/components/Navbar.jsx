import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
       <nav className='navbar'>
            <Link className='home-page' to='/about'>Danyon Talbot</Link>
        <ul className='nav-list'>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>
        </ul>
       </nav>
    )
}