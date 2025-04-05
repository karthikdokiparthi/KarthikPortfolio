import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from '../assets/logoDesign.png';
import GitButton from '../Buttons/GitButton';
import LinkedInButton from '../Buttons/LinkedInButton';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#homepage"><img src={logo} alt="Logo" className="logo" /></a>
                </div>

                <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <a href="#homepage" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#skills" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#profile" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Experiences</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#contactpage" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
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