import React from 'react';
import "./ProfileDetails.css";
import { BsBriefcase } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const ProfileDetails = () => {
    const experiences = [
        {
            company: "Innomatics Research Lab",
            duration: "Jan 2025 - Present",
            role: "Web Developer Intern",
            details: ["Assisted in developing and maintaining company websites.", "Learned modern JavaScript frameworks and best practices.", "Participated in UI/UX design discussions.",
                "Gained experience with version control and collaborative development."],

        },
        {
            company: "CentraLogic Consultancy Pvt. Ltd",
            duration: "May 2024 - June 2024",
            role: "React Training (Internship)",
            details: [
                "Completed a 2-month intensive React.js training, gaining expertise in building dynamic, responsive web applications.",
                " Developed proficiency in React hooks, Context API, state management, and React Router for efficient navigation.",
                "Strengthened problem-solving, teamwork, and communication skills through collaborative projects and code reviews."
            ]
        },
        {
            company: "Topper World",
            duration: "Feb 2024 – March 2024",
            role: "Java Programming Intern",
            details: [
                "Developed an interactive Voting System using JavaFX, focusing on a user-friendly interface and secure application architecture.",
                "Conducted thorough testing and debugging to enhance performance and resolve issues."
            ]
        }
    ];

    const educations = [
        {
            institution: "Sri Sarathi Institute of Engineering & Technology",
            duration: "Aug 2020 – May 2023",
            degree: "Bachelor of Technology in Electronics and Communication Engineering"
        },
        {
            institution: "DJR College of Engineering & Technology",
            duration: "July 2017 – May 2020",
            degree: "Diploma in Electronics and Communication Engineering"
        }
    ];

    const certifications = [
        {
            title: "Java Spring Framework 6 with Spring Boot 3",
            platform: "Udemy",
            date: "Completed: October 13, 2024",
            instructor: "Instructor: Navin Reddy"
        },
        {
            title: "Java Full Stack Course",
            platform: "Skillbuz",
            date: "Completed: November 10, 2023",
            duration: "Duration: June 1, 2023 – November 10, 2023"
        }
    ];

    return (
        <div id='profile'>
            <div>
                <h1 className="profile-header">Experience & Education</h1>

                <div className="profile-details">
                    <div>
                        <h2>
                            <span className='icons'><BsBriefcase /></span>
                            Experience
                        </h2>
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-item">
                                <h3>{exp.company}</h3>
                                <p className="duration">{exp.duration}</p>
                                <p className="role">{exp.role}</p>
                                <ul>
                                    {exp.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2><span className='icons'><FaUserGraduate /></span>Education</h2>
                        {educations.map((edu, index) => (
                            <div key={index} className="education-item">
                                <h3>{edu.institution}</h3>
                                <div className="institution-duration">
                                    <p className="institution">{edu.degree}</p>
                                    <p className="duration">{edu.duration}</p>
                                </div>
                            </div>
                        ))}

                        <h2><span className='icons'><PiCertificateBold /></span>Certifications</h2>
                        {certifications.map((cert, index) => (
                            <div key={index} className="certification-item">
                                <div className="title-platform">
                                    <h3>{cert.title}</h3>
                                    <p className="platform">{cert.platform}</p>
                                </div>
                                <p className="date">{cert.date}</p>
                                {cert.instructor && <p className="instructor">{cert.instructor}</p>}
                                {cert.duration && <p className="duration">{cert.duration}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;