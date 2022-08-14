import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='Nav-bar'>
            <img src={require('./../../assets/CornNutsLogo.png')} className="Nav-logo" alt ='Logo' />
        <ul className='Nav-links'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/articles'}>Articles</Link>
            </li>
            <li>
            <Link to={'/about'}>About</Link>
            </li>
            <li>
            <Link to={'/login'}>Login</Link>
            </li>
        </ul>
        </nav>
    )
}
