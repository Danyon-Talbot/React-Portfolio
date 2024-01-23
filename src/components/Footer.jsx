import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
    return (
       <nav className='footer'>
        <ul className='footer-list'>
            <li>
                <Link to='/'>GitHub</Link>
            </li>
            <li>
                <Link to='/'>LinkedIn</Link>
            </li>
            <li>
                <Link to='/'>Socials</Link>
            </li>
        </ul>
       </nav>
    )
}