import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  // Get the current location using useLocation from react-router-dom
  const location = useLocation();

  // Custom function to determine if a NavLink should be considered active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className='navbar'>
      <div>
        <NavLink className='home-page' to='/about'>
          Danyon Talbot
        </NavLink>
      </div>
      <ul className='nav-list'>
        <li className='nav-item-right'>
          <NavLink className={isActive('/about') ? 'active-link' : ''} to='/about'>
            About
          </NavLink>
        </li>
        <li className='nav-item-right'>
          <NavLink className={isActive('/portfolio') ? 'active-link' : ''} to='/portfolio'>
            Portfolio
          </NavLink>
        </li>
        <li className='nav-item-right'>
          <NavLink className={isActive('/contact') ? 'active-link' : ''} to='/contact'>
            Contact
          </NavLink>
        </li>
        <li className='nav-item-right'>
          <NavLink className={isActive('/resume') ? 'active-link' : ''} to='/resume'>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};




