import React from "react";
import "./components.css"
import linkedIn from "./../media/linkedin.svg"
import mail from "./../media/mail.svg"
import location from "./../media/location.svg"

function DisplayAContact({ icon, link, txt }) {
    return (
        <a className="contact-info" href={link} target="_blank">
            <div className="contact-icon"><img src={icon} style={{ height: "90%" }} /></div>
            <div className="link">{txt}</div>
        </a>)
}

function Contact() {
    return (
        <div style={{ marginBottom: 1 }} className="contact-section">
            <p style={{ textAlign: "right", marginTop: 0 }}>Contact me:</p>
            <div>
                <DisplayAContact icon={mail} txt="vallariag@gmail.com" />
                <DisplayAContact icon={linkedIn} txt="linkedin.com/in/vallariag" link="https://www.linkedin.com/in/vallariag" />
                <DisplayAContact icon={location} txt="Delhi, India" />
            </div>
        </div>)
}

export default Contact;
