import React from "react";
import "./About.css";
import girl from "./hi-girl.svg"
function About() {
    return (
        <div className="About">
            <div className="photo">
                <img src={girl} />
            </div>
            <div className="aboutContent">
                <div className="aboutHeader">
                    About
                </div>
                <div className="aboutText">
                    {aboutText}
                </div>
            </div>
        </div>
    )
}
export default About;

const aboutText = <p>
    <h3>Hello, I'm Vallari! </h3>

    I like to do digital art. \n
    I've some pretty rad playlists.
    The books I like to read.
</p>;
