import React from 'react';
import { BsBriefcase, BsCalendarDate, BsArrowRightShort } from 'react-icons/bs';
import { FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { PiCertificateBold, PiStudentBold } from 'react-icons/pi';
import { MdWorkOutline, MdSchool } from 'react-icons/md';
import './ProfileDetails.css';

const ProfileDetails = () => {
    const experiences = [
        {
            company: "Innomatics Research Lab",
            duration: "Jan 2025 - Feb 2025",
            role: "Web Developer Intern",
            details: [
                "Assisted in developing and maintaining company websites",
                "Learned modern JavaScript frameworks and best practices",
                "Participated in UI/UX design discussions",
                "Gained experience with version control and collaborative development"
            ],
            skills: ["React", "JavaScript", "Git", "UI/UX"]
        },
        {
            company: "CentraLogic Consultancy Pvt. Ltd",
            duration: "May 2024 - June 2024",
            role: "React Training (Internship)",
            details: [
                "Completed 2-month intensive React.js training",
                "Developed proficiency in React hooks and Context API",
                "Strengthened problem-solving and teamwork skills"
            ],
            skills: ["React Hooks", "Context API", "React Router"]
        },
        {
            company: "Topper World",
            duration: "Feb 2024 – March 2024",
            role: "Java Programming Intern",
            details: [
                "Developed interactive Voting System using JavaFX",
                "Focused on user-friendly interface design",
                "Conducted thorough testing and debugging"
            ],
            skills: ["Java", "JavaFX", "OOP"]
        }
    ];

    const educations = [
        {
            institution: "Sri Sarathi Institute of Engineering & Technology",
            duration: "Aug 2020 – May 2023",
            degree: "Bachelor of Technology in Electronics and Communication Engineering",
            achievements: [
                "Specialized in embedded systems",
                "Completed projects on IoT applications"
            ]
        },
        {
            institution: "DJR College of Engineering & Technology",
            duration: "July 2017 – May 2020",
            degree: "Diploma in Electronics and Communication Engineering",
            achievements: [
                "Focus on circuit design and analysis",
                "Hands-on experience with electronic components"
            ]
        }
    ];

    const certifications = [
        {
            title: "Java Spring Framework 6 with Spring Boot 3",
            platform: "Udemy",
            date: "Completed: October 13, 2024",
            instructor: "Navin Reddy",
            skills: ["Spring Boot", "Hibernate", "REST APIs"]
        },
        {
            title: "Java Full Stack Course",
            platform: "Skillbuz",
            date: "Completed: November 10, 2023",
            duration: "Duration: June 1, 2023 – November 10, 2023",
            skills: ["Java", "Spring", "MySQL"]
        }
    ];

    return (
        <section id="profile" className="profile-section">
            <div className="profile-container">
                <div className="section-header">
                    <h2 className="section-title">
                        Professional Journey
                    </h2>
                    <br />
                    <p className="section-subtitle">
                        My career path, education, and certifications
                        <span className="subtitle-line"></span>
                    </p>
                </div>

                <div className="profile-grid">
                    <div className="experience-column">
                        <div className="section-card experience-card">
                            <div className="section-header-card">
                                <div className="icon-wrapper">
                                    <BsBriefcase className="section-icon" />
                                </div>
                                <h3>Work Experience</h3>
                            </div>

                            <div className="timeline">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-marker">
                                            <div className="timeline-dot"></div>
                                            {index !== experiences.length - 1 && <div className="timeline-line"></div>}
                                        </div>

                                        <div className="timeline-content">
                                            <div className="company-header">
                                                <h4>{exp.company}</h4>
                                                <div className="duration-badge">
                                                    <BsCalendarDate /> {exp.duration}
                                                </div>
                                            </div>

                                            <div className="role-tag">
                                                <MdWorkOutline /> {exp.role}
                                            </div>

                                            <ul className="timeline-details">
                                                {exp.details.map((detail, i) => (
                                                    <li key={i}>
                                                        <BsArrowRightShort className="detail-arrow" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {exp.skills && (
                                                <div className="skills-container">
                                                    <div className="skills-label">Skills Gained:</div>
                                                    <div className="skills-tags">
                                                        {exp.skills.map((skill, i) => (
                                                            <span key={i} className="skill-tag">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="education-column">
                        <div className="section-card education-card">
                            <div className="section-header-card">
                                <div className="icon-wrapper">
                                    <FaUserGraduate className="section-icon" />
                                </div>
                                <h3>Education</h3>
                            </div>

                            <div className="education-list">
                                {educations.map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <div className="education-icon">
                                            <FaUniversity />
                                        </div>

                                        <div className="education-content">
                                            <div className="education-header">
                                                <h4>{edu.institution}</h4>
                                                <div className="education-duration">
                                                    <BsCalendarDate /> {edu.duration}
                                                </div>
                                            </div>

                                            <p className="degree">
                                                <PiStudentBold /> {edu.degree}
                                            </p>

                                            {edu.achievements && (
                                                <div className="achievements">
                                                    <div className="achievements-label">Key Achievements:</div>
                                                    <ul>
                                                        {edu.achievements.map((achievement, i) => (
                                                            <li key={i}>
                                                                <span className="achievement-marker">▹</span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section-card certification-card">
                            <div className="section-header-card">
                                <div className="icon-wrapper">
                                    <PiCertificateBold className="section-icon" />
                                </div>
                                <h3>Certifications</h3>
                            </div>

                            <div className="certification-list">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="certification-item">
                                        <div className="certification-icon">
                                            <PiStudentBold />
                                        </div>

                                        <div className="certification-content">
                                            <h4>{cert.title}</h4>

                                            <div className="certification-meta">
                                                <span className="meta-item">
                                                    <MdSchool /> {cert.platform}
                                                </span>
                                                <span className="meta-item">
                                                    <BsCalendarDate /> {cert.date}
                                                </span>
                                            </div>

                                            {cert.instructor && (
                                                <p className="instructor">
                                                    <span className="instructor-label">Instructor:</span> {cert.instructor}
                                                </p>
                                            )}

                                            {cert.duration && (
                                                <p className="duration">
                                                    <span className="duration-label">Duration:</span> {cert.duration}
                                                </p>
                                            )}

                                            {cert.skills && (
                                                <div className="skills-container">
                                                    <div className="skills-label">Technologies:</div>
                                                    <div className="skills-tags">
                                                        {cert.skills.map((skill, i) => (
                                                            <span key={i} className="skill-tag">{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileDetails;