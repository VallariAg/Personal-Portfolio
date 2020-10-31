import React from 'react';
import "./Main.css";
// components
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
// material UI
import { Button } from '@material-ui/core';

function Main() {
    return (
        <div className="main-page">
            <Header />
            <Blogs />
            <Skills />
            <Projects />
            <div className="resume-section">

                <Button variant="outlined" target="_blank" href="https://drive.google.com/file/d/1CD3ZKeCaaRuCH0bWfoQbPIoVbnzZzT7x/view"> RESUME </Button>
            </div>
            <Contact />
        </div>
    )
}

export default Main;
