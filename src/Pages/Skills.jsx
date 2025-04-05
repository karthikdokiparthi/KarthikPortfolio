import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

function Skills() {
    const skillsData = [
        { image: "https://emaillistvalidation.com/blog/content/images/2023/09/HTML5_logo_and_wordmark.svg.png", name: 'HTML', percentage: 95 },
        { image: "https://delta-dev-software.fr/wp-content/uploads/2024/05/CSS-Logo.png", name: 'CSS', percentage: 90 },
        { image: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png", name: 'JavaScript', percentage: 90 },
        { image: "https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png", name: 'React', percentage: 85 },
        { image: "https://dac.digital/wp-content/uploads/2023/04/backend-java-1920x1200-optimized.png", name: 'Java', percentage: 90 },
        { image: "https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png", name: 'Spring Boot', percentage: 75 },
        { image: "https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png", name: 'MySQL', percentage: 80 },
        { image: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3209316/git-icon-md.png", name: "Git", percentage: 80 },
    ];

    const [animate, setAnimate] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.5 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section className="skills-section" id="skills" ref={skillsRef}>
            <div className="skills-header">
                <h2 className="skills-title">Technical Expertise</h2>
                <p className="skills-subtitle">Technologies I've mastered through projects and experience</p>
            </div>

            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon-container">
                            <img src={skill.image} alt={skill.name} className="skill-icon" />
                        </div>
                        <div className="skill-content">
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-progress-container">
                                <div className="skill-progress">
                                    <div
                                        className="skill-progress-bar"
                                        style={{ width: animate ? `${skill.percentage}%` : '0%' }}
                                    ></div>
                                </div>
                                <span className="skill-percentage">{skill.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;