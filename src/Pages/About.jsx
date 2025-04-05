import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container" id='about'>
            <div className="about-content">
                <div className="about-header">
                    <h1 className="about-title">
                        <span className="title-decorator">//</span> About Me
                    </h1>
                    <div className="title-underline"></div>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <p className="about-paragraph" style={{ "--paragraph-index": 0 }}>
                            Hi, I'm <span className="highlight-name">Karthik Dokiparthi</span>, a passionate <span className="highlight-tech">Full Stack Java Developer</span> with hands-on experience in building dynamic web applications using React, Java, and Spring Boot.
                        </p>
                        <p className="about-paragraph" style={{ "--paragraph-index": 1 }}>
                            I have a strong grasp of <span className="highlight-tech">Core and Advanced Java</span>, along with expertise in database management using <span className="highlight-tech">PostgreSQL</span> and <span className="highlight-tech">MySQL</span>. My skill set spans both frontend and backend development, with a focus on creating efficient and scalable software solutions.
                        </p>
                        <p className="about-paragraph" style={{ "--paragraph-index": 2 }}>
                            I hold a <span className="highlight-tech">Bachelor's degree in Electronics and Communication Engineering</span> and have worked on various projects that involve designing and implementing <span className="highlight-tech">RESTful APIs</span>, and optimizing database performance. My experience also includes working with cloud platforms like <span className="highlight-tech">AWS</span>.
                        </p>
                        <p className="about-paragraph" style={{ "--paragraph-index": 3 }}>
                            When I'm not coding, I enjoy exploring new technologies, working on personal projects, and enhancing my skills through certifications. I'm always open to collaborations and exciting opportunities!
                        </p>
                    </div>
                </div>

                <div className="about-footer">
                    <a href="#contactpage" className="contact-button">
                        <span>Get In Touch</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Floating background circles */}
            <div className="floating-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-5"></div>
            </div>
        </div>
    );
};

export default About;