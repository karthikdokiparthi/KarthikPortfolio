import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container" id='about'>
            <div className="about-details">
                <h1>About Me</h1>
                <p>
                    Hi, I'm <strong>Karthik Dokiparthi</strong>, a passionate <strong>Full Stack Java Developer</strong> with hands-on experience in building dynamic web applications using React, Java, and Spring Boot. I have a strong grasp of Core and Advanced Java, along with expertise in database management using PostgreSQL and MySQL. My skill set spans both frontend and backend development, with a focus on creating efficient and scalable software solutions.
                </p>
                <p>
                    I hold a Bachelor's degree in Electronics and Communaction Engineering and have worked on various projects that involve designing and implementing RESTful APIs, and optimizing database performance. My experience also includes working with cloud platforms like AWS.
                </p>
                <p>
                    In addition to my technical skills, I am a strong advocate for clean code practices and continuous learning. I regularly participate in coding challenges and contribute to open-source projects to stay updated with the latest industry trends.
                </p>
                <p>
                    When I'm not coding, I enjoy exploring new technologies, working on personal projects, and enhancing my skills through certifications. I'm always open to collaborations, so feel free to reach out and contact!
                </p>
                <a href="#contactpage"><button className="contact-button">Contact Me</button></a>
            </div>
        </div>
    );
};

export default About;