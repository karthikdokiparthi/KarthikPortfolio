import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImage from '../assets/portfolioImage.jpg';
import hoverVideo from '../assets/hoverVideo.mp4';

const Home = () => {
    const [showVideo, setShowVideo] = useState(false);
    const titles = ['Frontend Developer', 'Backend Developer', 'Full Stack Java Developer'];
    const [displayText, setDisplayText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentTitle = titles[titleIndex];

        if (charIndex < currentTitle.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + currentTitle[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayText('');
                setCharIndex(0);
                setTitleIndex(prev => (prev + 1) % titles.length);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, titleIndex, titles]);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowVideo(prev => !prev);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home" id='homepage'>
            <div className="home-details">
                <p className='home-intro'>
                    <span className="wave-emoji">👋</span> Hello, I'm
                </p>
                <h1>
                    <span className="name-gradient">Karthik</span> <span className="name-outline">Dokiparthi</span>
                </h1>
                <h2 className="animated-title">
                    <span className="typing-text">{displayText}</span>
                    <span className="cursor">|</span>
                </h2>
                <p className="home-description">
                    I specialize in designing and developing high-performance, scalable web applications using
                    <span className="tech-highlight"> Java</span>,
                    <span className="tech-highlight"> Spring Boot</span>,
                    <span className="tech-highlight"> React.js</span>, and
                    <span className="tech-highlight"> MySQL</span>. With a strong focus on creating intuitive user experiences.
                </p>
                <div className="cta-buttons">
                    <a href="#projects" className="cta-button primary">
                        <span>View My Work</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#contactpage" className="cta-button secondary">
                        <span>Contact Me</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 11.5V16.5C21 17.6046 20.1046 18.5 19 18.5H5C3.89543 18.5 3 17.6046 3 16.5V7.5C3 6.39543 3.89543 5.5 5 5.5H12M21 11.5L17.5 8M21 11.5L17.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="home-image">
                {showVideo ? (
                    <video
                        autoPlay
                        loop
                        muted
                        key="video"
                    >
                        <source src={hoverVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={profileImage}
                        alt="Karthik Dokiparthi"
                        key="image"
                    />
                )}
            </div>
        </div>
    );
};

export default Home;