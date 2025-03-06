import React, { useState } from 'react';
import './Home.css';
import profileImage from '../assets/portfolioImage.jpg';
import hoverVideo from '../assets/hoverVideo.mp4';

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    const titles = ['Frontend Developer', 'Backend Developer', 'Full Stack Java Developer'];
    const [displayText, setDisplayText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    React.useEffect(() => {
        const currentTitle = titles[titleIndex];

        if (charIndex < currentTitle.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentTitle[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setTitleIndex((prev) => (prev + 1) % titles.length);
            }, 1000);
        }
    }, [charIndex, titleIndex, titles]);

    return (
        <div className="home">
            <div className="home-details">
                <p className='home-intro'>Hello, I'm</p>
                <h1>Karthik Dokiparthi</h1>
                <h2 className="animated-title">{displayText}</h2>
                <p>
                    I specialize in designing and developing high-performance, scalable web applications using Java, Spring Boot, React.js, and MySQL. With a strong focus on creating intuitive user experiences, I ensure backend efficiency and system optimization to deliver robust and seamless solutions.
                </p>
                <div className="cta-buttons">
                    <a href="#projects"><button className="cta-button">View My Work</button></a>
                    <a href="#contactpage"><button className="cta-button">Contact Me</button></a>
                </div>
            </div>
            <div className="home-image">
                {isHovered ? (
                    <video
                        autoPlay
                        loop
                        muted
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <source src={hoverVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={profileImage}
                        alt="Karthik Dokiparthi"
                        onMouseEnter={() => setIsHovered(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;    