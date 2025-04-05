import React from 'react';
import { FiMail, FiPhone, FiHome, FiUser, FiCode, FiLayers, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import ToolTip from '../Buttons/ToolTip';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-title">Karthik Dokiparthi</h3>
                        <p className="footer-subtitle">Full Stack Developer | UI/UX Enthusiast</p>
                        <p className="footer-description">
                            Passionate about building scalable web applications and creating seamless user experiences.
                        </p>
                        <div className="footer-social">
                            <ToolTip />
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">
                            <FiHome className="footer-icon" />
                            Quick Links
                        </h4>
                        <ul className="footer-nav">
                            <li><a href="/"><FiHome /> Home</a></li>
                            <li><a href="#about"><FiUser /> About</a></li>
                            <li><a href="#skills"><FiCode /> Skills</a></li>
                            <li><a href="#projects"><FiLayers /> Projects</a></li>
                            <li><a href='#profile'><FiBriefcase /> Experience</a></li>
                            <li><a href="#contactpage"><FiMessageSquare /> Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">
                            <FiMail className="footer-icon" />
                            Contact Me
                        </h4>
                        <ul className="contact-info">
                            <li>
                                <FiMail />
                                <a href="mailto:dokiparthikarthik@gmail.com">dokiparthikarthik@gmail.com</a>
                            </li>
                            <li>
                                <FiPhone />
                                <a href="tel:+918464911426">+91 8464911426</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-divider">
                    <div className="divider-line"></div>
                </div>

                <div className="footer-copyright">
                    <p>
                        &copy; {new Date().getFullYear()} Karthik Dokiparthi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;