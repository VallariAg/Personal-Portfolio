import React from "react";
import "./components.css"
// icons
import react from "./../media/react.svg"
import nodejs from "./../media/nodejs.svg"
import python from "./../media/python.png"
import scikit from "./../media/scikit-learn.png"
import typescript from "./../media/typescript.svg"
import javascript from "./../media/javascript.svg"
import graphql from "./../media/graphql.svg"
import apollo from "./../media/apollo-graphql.svg"
import angular from "./../media/angular.svg"
import socketio from "./../media/socket-io.svg"

// function Icons() {}
function Skills() {
    return (
        <div className="skills-section">
            <h2 className="sectionHeader">Technologies I've worked with</h2>
            <div className="skills-list">
                {/* <h2>Technologies</h2> */}
                {/* <p>Technologies I LOVE and work with:</p> */}
                <img className="skill-icon" src={javascript} />
                <img className="skill-icon" src={typescript} />
                <img className="skill-icon" src={graphql} />
                <img className="skill-icon" src={apollo} />
                <img className="skill-icon" src={nodejs} />
                <img className="skill-icon" src={react} />
                <img className="skill-icon" src={angular} />
                <img className="skill-icon" src={socketio} />
                <img className="skill-icon" src={python} />
                <img className="skill-icon" src={scikit} />
            </div>
        </div>)
}

export default Skills;
