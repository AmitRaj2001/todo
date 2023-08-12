import React from "react";
import "./AboutContactLogin.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to get in touch with us!</p>
            <div className="contact-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input className="contact-input" type="text" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="contact-input" type="email" />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea className="contact-input" rows="4"></textarea>
                </div>
                <button className="contact-button">Send</button>
            </div>
        </div>
    );
};

export default Contact;
