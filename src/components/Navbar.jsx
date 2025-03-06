import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../assets/logoDesign.png';
import GitButton from '../Buttons/GitButton';
import LinkedInButton from '../Buttons/LinkedInButton';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                </div>

                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about" className="navbar-link">About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#skills" className="navbar-link">Skills</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#projects" className="navbar-link">Projects</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#profile" className="navbar-link">Experiences</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#contactpage" className="navbar-link">Contact</a>
                    </li>
                </ul>

                <div className="navbar-social">
                    <GitButton />
                    <LinkedInButton />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;