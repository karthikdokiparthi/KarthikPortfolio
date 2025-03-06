import React from 'react';
import './Contact.css';
import Button from '../Buttons/Button';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target; // Get the form element
        const formData = new FormData(form);
        formData.append("access_key", "a94843b5-0379-4239-97a3-a5b08277ede3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            form.reset();
            alert("Form submitted successfully!");
        } else {
            alert("Form submission failed. Please try again.");
        }
    };

    return (
        <div className='contact-container'>
            <div className="contact" id='contactpage'>
                <div className="contact-top">
                    <h1>Contact Me</h1>
                </div>
                <div className="contact-section">
                    <form onSubmit={onSubmit} className="contact-bottom">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" placeholder="Enter your name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder="Enter your email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Write your message</label>
                            <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>
                        </div>
                        <Button type="submit" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;