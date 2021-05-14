import React, { useEffect } from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './navbar.css';
import { useAuth } from '../../Config/AuthContext'

const Navbar = () => {

    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await logout()
            history.push('/login')
        } catch {
            alert("Logout failed")
        }
    }

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector(".nav-menu");
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
        const navLink = document.querySelectorAll(".nav-link");
        navLink.forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }, [])

    return (
        <div className='header'>
            <nav className='navbar'>
                <NavLink to="/" className="nav-logo" style={{textShadow: "9px 8px 12px black"}}>EDULICIOUS</NavLink>
                <ul className="nav-menu">
                    <li className='nav-item nav-left'><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className='nav-item nav-left'><NavLink className='nav-link' to="/about">About</NavLink></li>
                    <li className='nav-item nav-left'><NavLink className='nav-link' to="/notes">Notes</NavLink></li>
                    <li className='nav-item nav-left'><NavLink className='nav-link' to="/assignments">Assignments</NavLink></li>
                    <li className='nav-item nav-left'><NavLink className='nav-link' to="/contact">Contact</NavLink></li>
                    {
                        currentUser
                        ?
                            <>
                                <li className='nav-item nav-right' style={{color: "white", fontWeight:"bold", textShadow: "1px 1px black"}}><span>{ currentUser.email }</span></li>
                                <li className='nav-item nav-right' onClick={handleLogout}><span style={{cursor: "pointer"}} className='nav-link'>Logout</span></li>
                            </>
                        :   
                            <>
                                <li className='nav-item nav-right'><NavLink className='nav-link' to="/login">Login</NavLink></li>
                                <li className='nav-item nav-right'><NavLink className='nav-link' to="/register">Register</NavLink></li>
                            </>
                    }
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    )
}





export default Navbar;