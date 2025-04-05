// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/swiper-bundle.css';
// import './Projects.css';
// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/Image3.png";
// import image4 from "../assets/image4.png";
// import image5 from "../assets/image5.png";
// import image6 from "../assets/image6.png";
// import image7 from "../assets/image7.png";
// import image8 from "../assets/image8.png";
// import image9 from "../assets/image9.png";
// import image10 from "../assets/image10.png";
// import { LuGithub } from "react-icons/lu";
// import { TbWorld } from "react-icons/tb";

// const projectsData = [
//     {
//         id: 1,
//         title: 'Tour & Travel Web App',
//         description: [
//             "A web application that helps users find and book holiday vacations effortlessly. It features a user-friendly interface to explore destinations, compare packages, and make bookings with ease.",
//             "Technologies Used: React.js, HTML, CSS, JavaScript"
//         ],
//         live_demo: 'https://tourstravell.netlify.app/',
//         github_link: 'https://github.com/karthikdokiparthi/Tour-Travells-Application',
//         image: image1,
//     },
//     {
//         id: 2,
//         title: 'E-commerce Website',
//         description: [
//             'A fully functional e-commerce website featuring product listings, a shopping cart, and a secure checkout process. Ensures responsiveness for multiple screen sizes.',
//             'Technologies Used: HTML, CSS, JavaScript',
//         ],
//         live_demo: 'https://karthikdokiparthi.github.io/ShopEaseEcommerce/',
//         github_link: 'https://github.com/karthikdokiparthi/ShopEaseEcommerce',
//         image: image2,
//     },
//     {
//         id: 3,
//         title: "Memory Matching Game",
//         description: [
//             "A fun and interactive memory card matching game where players flip cards to find matching pairs. The game tracks moves and time, providing an engaging user experience.",
//             "Technologies Used: HTML, CSS, JavaScript"
//         ],
//         live_demo: "https://karthikdokiparthi.github.io/MemoryMatchingGame/",
//         github_link: "https://github.com/karthikdokiparthi/MemoryMatchingGame",
//         image: image3
//     },
//     {
//         id: 4,
//         title: 'Book My Show Web App',
//         description: [
//             'A web application that replicates the Book My Show platform, allowing users to browse and select movie tickets. The project ensures responsiveness and a visually appealing UI.',
//             'Technologies Used: HTML, CSS',
//         ],
//         live_demo: 'N/A',
//         github_link: 'https://github.com/karthikdokiparthi/Book-My-Show-Web-App',
//         image: image4
//     },
//     {
//         id: 5,
//         title: 'Foodie CLI App',
//         description: [
//             'A command-line-based food ordering system where users can browse restaurant menus, add items to orders, and manage restaurant data. Uses PostgreSQL for data persistence.',
//             'Technologies Used: Java, PostgreSQL, Collections Framework',
//         ],
//         live_demo: 'N/A',
//         github_link: 'https://github.com/karthikdokiparthi/foodile-cli-app',
//         image: image5
//     },
//     {
//         id: 6,
//         title: 'Voting System',
//         description: [
//             'A JavaFX-based voting system that ensures secure and fair elections. Features include user authentication, role-based access, and real-time vote tallying.',
//             'Technologies Used: Java, JavaFX',
//         ],
//         live_demo: 'N/A',
//         github_link: 'https://github.com/karthikdokiparthi/TopperWorld-Task3',
//         image: image6
//     },
//     {
//         id: 7,
//         title: 'Innomatics Website Clone',
//         description: [
//             'A fully responsive clone of the Innomatics website, including sections like Home, Courses, IT Scholars Program, Internship, About Us, and Events. Follows best web development practices.',
//             'Technologies Used: HTML, CSS, JavaScript',
//         ],
//         live_demo: 'https://innomatics-clone-demo.netlify.app/',
//         github_link: 'https://github.com/karthikdokiparthi/Innomatics-clone',
//         image: image7
//     },
//     {
//         id: 8,
//         title: "Coffee Website",
//         description: [
//             "A visually appealing coffee shop website showcasing different coffee varieties, menu items, and store locations. The site ensures a responsive and modern design to attract coffee lovers.",
//             "Technologies Used: HTML, CSS"
//         ],
//         live_demo: "https://spiffy-salmiakki-01e9be.netlify.app/",
//         github_link: "https://github.com/karthikdokiparthi/Coffee-webSite",
//         image: image8
//     },
//     {
//         id: 9,
//         title: "To-Do List App",
//         description: [
//             "A React-based To-Do List application that allows users to add, edit, and delete tasks efficiently. Features a user-friendly interface and state management for seamless task organization.",
//             "Technologies Used: React.js, HTML, CSS, JavaScript"
//         ],
//         live_demo: "https://tasktodolistplanit.netlify.app/",
//         github_link: "https://github.com/karthikdokiparthi/ToDoList-Task",
//         image: image9
//     },
//     {
//         id: 10,
//         title: "Expense Tracker",
//         description: [
//             "A React-based expense tracker application that allows users to manage their income and expenses. It provides a real-time balance update, categorized transaction history, and an intuitive UI for adding new transactions.",
//             "Technologies Used: React.js, HTML, CSS, JavaScript"
//         ],
//         live_demo: "N/A",
//         github_link: "https://github.com/karthikdokiparthi/Expense-Tracker",
//         image: image10
//     }
// ];

// function Projects() {
//     const [selectedProject, setSelectedProject] = useState(null);

//     const openModal = (project) => {
//         setSelectedProject(project);
//     };

//     const closeModal = () => {
//         setSelectedProject(null);
//     };

//     return (
//         <section id="projects" className="projects-section">
//             <h2 className="projects-heading">Projects</h2>
//             <div className="swiper-container">
//                 <Swiper
//                     modules={[Navigation, Pagination, Scrollbar, A11y]}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                     }}
//                     pagination={{ clickable: true }}
//                     scrollbar={{ draggable: true }}
//                     breakpoints={{
//                         640: {
//                             slidesPerView: 1.5,
//                         },
//                         768: {
//                             slidesPerView: 2,
//                         },
//                         1024: {
//                             slidesPerView: 3,
//                         },
//                     }}
//                 >
//                     {projectsData.map((project) => (
//                         <SwiperSlide key={project.id}>
//                             <div className="project-card" onClick={() => openModal(project)}>
//                                 <div className="image-container">
//                                     <img src={project.image} alt={project.title} className="project-image" />
//                                     <div className="image-overlay">
//                                         <span>Click Me</span>
//                                     </div>
//                                 </div>
//                                 <h3 className="project-title">{project.title}</h3>
//                                 <div className="project-links">
//                                     <a
//                                         href={project.github_link}
//                                         className="project-link"
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         <span className='live-icons'><LuGithub /></span> GitHub
//                                     </a>
//                                     {project.live_demo !== 'N/A' && (
//                                         <a
//                                             href={project.live_demo}
//                                             className="project-link"
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             <span className='live-icons'><TbWorld /></span> Live Demo
//                                         </a>
//                                     )}
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 <div className="swiper-button-prev"></div>
//                 <div className="swiper-button-next"></div>
//             </div>

//             {selectedProject && (
//                 <div className="modal-overlay" onClick={closeModal}>
//                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                         <button className="close-modal" onClick={closeModal}>
//                             &times;
//                         </button>
//                         <h2>{selectedProject.title}</h2>
//                         <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
//                         <div className="modal-description">
//                             {selectedProject.description.map((line, index) => (
//                                 <p key={index}>{line}</p>
//                             ))}
//                         </div>
//                         <div className="modal-links">
//                             <a
//                                 href={selectedProject.github_link}
//                                 className="modal-link"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 GitHub
//                             </a>
//                             {selectedProject.live_demo !== 'N/A' && (
//                                 <a
//                                     href={selectedProject.live_demo}
//                                     className="modal-link"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     Live Demo
//                                 </a>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// }

// export default Projects;
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './Projects.css';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import { LuGithub } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";

const projectsData = [
    {
        id: 1,
        title: 'Tour & Travel Web App',
        description: [
            "A web application that helps users find and book holiday vacations effortlessly. It features a user-friendly interface to explore destinations, compare packages, and make bookings with ease.",
            "Technologies Used: React.js, HTML, CSS, JavaScript"
        ],
        live_demo: 'https://tourstravell.netlify.app/',
        github_link: 'https://github.com/karthikdokiparthi/Tour-Travells-Application',
        image: image1,
    },
    {
        id: 2,
        title: 'E-commerce Website',
        description: [
            'A fully functional e-commerce website featuring product listings, a shopping cart, and a secure checkout process. Ensures responsiveness for multiple screen sizes.',
            'Technologies Used: HTML, CSS, JavaScript',
        ],
        live_demo: 'https://karthikdokiparthi.github.io/ShopEaseEcommerce/',
        github_link: 'https://github.com/karthikdokiparthi/ShopEaseEcommerce',
        image: image2,
    },
    {
        id: 3,
        title: "Memory Matching Game",
        description: [
            "A fun and interactive memory card matching game where players flip cards to find matching pairs. The game tracks moves and time, providing an engaging user experience.",
            "Technologies Used: HTML, CSS, JavaScript"
        ],
        live_demo: "https://karthikdokiparthi.github.io/MemoryMatchingGame/",
        github_link: "https://github.com/karthikdokiparthi/MemoryMatchingGame",
        image: image3
    },
    {
        id: 4,
        title: 'Book My Show Web App',
        description: [
            'A web application that replicates the Book My Show platform, allowing users to browse and select movie tickets. The project ensures responsiveness and a visually appealing UI.',
            'Technologies Used: HTML, CSS',
        ],
        live_demo: 'N/A',
        github_link: 'https://github.com/karthikdokiparthi/Book-My-Show-Web-App',
        image: image4
    },
    {
        id: 5,
        title: 'Foodie CLI App',
        description: [
            'A command-line-based food ordering system where users can browse restaurant menus, add items to orders, and manage restaurant data. Uses PostgreSQL for data persistence.',
            'Technologies Used: Java, PostgreSQL, Collections Framework',
        ],
        live_demo: 'N/A',
        github_link: 'https://github.com/karthikdokiparthi/foodile-cli-app',
        image: image5
    },
    {
        id: 6,
        title: 'Voting System',
        description: [
            'A JavaFX-based voting system that ensures secure and fair elections. Features include user authentication, role-based access, and real-time vote tallying.',
            'Technologies Used: Java, JavaFX',
        ],
        live_demo: 'N/A',
        github_link: 'https://github.com/karthikdokiparthi/TopperWorld-Task3',
        image: image6
    },
    {
        id: 7,
        title: 'Innomatics Website Clone',
        description: [
            'A fully responsive clone of the Innomatics website, including sections like Home, Courses, IT Scholars Program, Internship, About Us, and Events. Follows best web development practices.',
            'Technologies Used: HTML, CSS, JavaScript',
        ],
        live_demo: 'https://innomatics-clone-demo.netlify.app/',
        github_link: 'https://github.com/karthikdokiparthi/Innomatics-clone',
        image: image7
    },
    {
        id: 8,
        title: "Coffee Website",
        description: [
            "A visually appealing coffee shop website showcasing different coffee varieties, menu items, and store locations. The site ensures a responsive and modern design to attract coffee lovers.",
            "Technologies Used: HTML, CSS"
        ],
        live_demo: "https://spiffy-salmiakki-01e9be.netlify.app/",
        github_link: "https://github.com/karthikdokiparthi/Coffee-webSite",
        image: image8
    },
    {
        id: 9,
        title: "To-Do List App",
        description: [
            "A React-based To-Do List application that allows users to add, edit, and delete tasks efficiently. Features a user-friendly interface and state management for seamless task organization.",
            "Technologies Used: React.js, HTML, CSS, JavaScript"
        ],
        live_demo: "https://tasktodolistplanit.netlify.app/",
        github_link: "https://github.com/karthikdokiparthi/ToDoList-Task",
        image: image9
    },
    {
        id: 10,
        title: "Expense Tracker",
        description: [
            "A React-based expense tracker application that allows users to manage their income and expenses. It provides a real-time balance update, categorized transaction history, and an intuitive UI for adding new transactions.",
            "Technologies Used: React.js, HTML, CSS, JavaScript"
        ],
        live_demo: "N/A",
        github_link: "https://github.com/karthikdokiparthi/Expense-Tracker",
        image: image10
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2 className="section-title">My Projects</h2>
                <br />
                <p className="section-subtitle">A showcase of my best work and development skills</p>
            </div>

            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {projectsData.map((project) => (
                        <SwiperSlide key={project.id}>
                            <div className="project-card" onClick={() => openModal(project)}>
                                <div className="card-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="card-overlay">
                                        <div className="overlay-content">
                                            <h3>{project.title}</h3>
                                            <div className="tech-tags">
                                                {project.description[1].replace('Technologies Used: ', '').split(', ').map((tech, i) => (
                                                    <span key={i}>{tech.trim()}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="project-links">
                                        <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                            <LuGithub /> Code
                                        </a>
                                        {project.live_demo !== 'N/A' && (
                                            <a href={project.live_demo} target="_blank" rel="noopener noreferrer">
                                                <TbWorld /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {selectedProject && (
                <div className="project-modal">
                    <div className="modal-backdrop" onClick={closeModal}></div>
                    <div className="modal-container">
                        <div className="modal-header">
                            <h3>{selectedProject.title}</h3>
                            <button className="close-btn" onClick={closeModal}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="modal-content">
                                {selectedProject.description.map((para, index) => (
                                    <p key={index}>{para}</p>
                                ))}
                                <div className="modal-tech">
                                    <h4>Technologies:</h4>
                                    <div className="tech-badges">
                                        {selectedProject.description[1].replace('Technologies Used: ', '').split(', ').map((tech, i) => (
                                            <span key={i}>{tech.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer" className="modal-link">
                                <LuGithub /> View Code
                            </a>
                            {selectedProject.live_demo !== 'N/A' && (
                                <a href={selectedProject.live_demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                                    <TbWorld /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;