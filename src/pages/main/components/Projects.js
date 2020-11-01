import React from "react";
import "./components.css";
import useViewPort from "./../../../hooks/useViewport"
import Carousel from "./../../../components/carousel/Carousel"
import Paper from '@material-ui/core/Paper';

const projects = [
    <div className="project-item">
        <img className="project-imgs" src="https://raw.githubusercontent.com/VallariAg/Gallery-library/master/demo.png" />
        <div className="project-txt"><a href="https://github.com/VallariAg/Gallery-library" target="_blank">Gallery-App</a></div>
        <h4>A Progressive Web App to display your images in a gallery, made with Angular.</h4>
    </div>,
    <div className="project-item">
        <img className="project-imgs" src="https://i.imgur.com/TB0kgtq.png" />
        <div className="project-txt"><a href="https://github.com/VallariAg/Fake-News-Classifier-Extension" target="_blank">Fake News Classifier</a></div>
        <h4>My first Machine Learning project, a Fake News Identification model, and a chrome extension that uses the model to classify news articles online as fake or fact.</h4>
    </div>,
    <div className="project-item">
        <img className="project-imgs" src="https://i.imgur.com/OTgVE2i.png" />
        <div className="project-txt"><a href="https://github.com/VallariAg/Attendance-Tracker" target="_blank">Attendance Tracker</a></div>
        <h4>A website made to keep a record of classes attended every week and track attendance percentage % for each subject. Made with Vanilla JavaScript and Bootstrap.</h4>
    </div>
]
function displayProject(width) {
    if (width < 800) {
        return (<div className="project-section">
            <Carousel data={projects} />
        </div>)

    } else {
        return (<div className="project-section">
            {projects}
        </div>)
    }
}

function Projects() {
    const { width, height } = useViewPort();

    return (
        <div>
            <h2>Projects I've made</h2>
            {displayProject(width)}
            {/* <div className="project-section">
                <div className="project-item">
                    <img className="project-imgs" src="https://raw.githubusercontent.com/VallariAg/Gallery-library/master/demo.png" />
                    <a href="https://github.com/VallariAg/Gallery-library" target="_blank"><h3>Gallery-App</h3></a>
                    <h4>A Progressive Web App to display your images in a gallery, made with Angular.</h4>
                </div>
                <div className="project-item">
                    <img className="project-imgs" src="https://i.imgur.com/TB0kgtq.png" />
                    <a href="https://github.com/VallariAg/Fake-News-Classifier-Extension" target="_blank"><h3>Fake News Classifier</h3></a>
                    <h4>My first Machine Learning project, a Fake News Identification model, and a chrome extension that uses the model to classify news articles online as fake or fact.</h4>
                </div>
                <div className="project-item">
                    <img className="project-imgs" src="https://i.imgur.com/OTgVE2i.png" />
                    <a href="https://github.com/VallariAg/Attendance-Tracker" target="_blank"><h3>Attendance Tracker</h3></a>
                    <h4>A website made to keep a record of classes attended every week and track attendance percentage % for each subject. Made with Vanilla JavaScript and Bootstrap.</h4>
                </div>
            </div> */}
            <a href="https://github.com/VallariAg" target="_blank"><p style={{ textAlign: "right" }}> Checkout other projects on Github →</p></a>
        </div>)
}

export default Projects;
