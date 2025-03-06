import React from 'react';
import './Footer.css';
import ToolTip from '../Buttons/ToolTip';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h3>Karthik Dokiparthi</h3>
                    <p>Full Stack Developer | UI/UX Enthusiast</p>
                    <p>Passionate about building scalable web applications and creating seamless user experiences.</p>
                </div>

                <div className="footer-middle">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href='#profile'>Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Contact Me</h3>
                    <ul>
                        <li>Email: dokiparthikarthik@gmail.com</li>
                        <li>Phone: +91 8464911426</li>
                    </ul>
                    <span className='icons-component'><ToolTip /></span>
                </div>
            </div>

            <div className="footer-bottom">
                <hr className="footer-line" />
                <p>&copy; {new Date().getFullYear()} Karthik Dokiparthi. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;