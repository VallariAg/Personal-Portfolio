import React from 'react';
import "./Main.css";
// components
import Header from "./components/Header";
import Blogs from "./components/Blogs";
// import Projects from "./components/Projects";
import Project from "./components/Project2";
import Contact from "./components/Contact";
// import Skills from "./components/Skills";
import Bio from "./components/Bio";
import Achivement from "./components/Achivement";
// material UI
import { Button } from '@material-ui/core';

function Main() {
    return (
        <div className="main-page">
            <Header />
            <Bio />
            <Blogs />
            {/* <Skills /> */}
            <Project />
            <Achivement />
            <div className="resume-section">

                <Button variant="outlined" target="_blank" href="https://drive.google.com/file/d/1DpkpTYweYeGzEzZrfvp4CuWaYA4W-y2N/view"> RESUME </Button>
            </div>
            <Contact />
        </div>
    )
}

export default Main;
