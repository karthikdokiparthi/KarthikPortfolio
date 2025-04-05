import React from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.append("access_key", "a94843b5-0379-4239-97a3-a5b08277ede3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const data = await response.json();

            if (data.success) {
                form.reset();
                alert("Message sent successfully! I'll get back to you soon.");
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            alert("Network error. Please check your connection and try again.");
        }
    };

    return (
        <section id="contactpage" className="contact-section">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="section-title">
                        <span className="title-decoration">//</span>
                        Get In Touch
                    </h2>
                    <br />
                    <p className="section-subtitle">
                        Have a project in mind or want to connect? Drop me a message!
                        <span className="underline"></span>
                    </p>
                </div>

                <div className="contact-card">
                    <form onSubmit={onSubmit} className="contact-form">
                        <div className="form-group floating">
                            <FiUser className="input-icon" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name">Your Name</label>
                            <div className="underline-animation"></div>
                        </div>

                        <div className="form-group floating">
                            <FiMail className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email">Your Email</label>
                            <div className="underline-animation"></div>
                        </div>

                        <div className="form-group floating">
                            <FiMessageSquare className="input-icon" />
                            <textarea
                                id="message"
                                name="message"
                                placeholder=" "
                                rows="5"
                                required
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                            <div className="underline-animation"></div>
                        </div>

                        <button type="submit" className="submit-button">
                            <span>Send Message</span>
                            <FiSend className="send-icon" />
                        </button>
                    </form>

                    <div className="contact-decoration">
                        <div className="decoration-circle circle-1"></div>
                        <div className="decoration-circle circle-2"></div>
                        <div className="decoration-circle circle-3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;