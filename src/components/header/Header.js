import React from "react";
import bars from './bars.svg';
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <div class="header">
            <Link to="/">
                Vallari Agrawal
                {/* <img src={bars} alt="menu" style={{ height: "4vh", marginLeft: 0, paddingLeft: 0 }} /> */}
            </Link>
            <nav className="nav">

                <Link to="/blog">
                    <button className="nav-button">blog</button>
                </Link>
                {/* <Link to="/projects">
                    <button className="nav-button"> projects </button>
                </Link> */}
                <Link to="/art">
                    <button className="nav-button"> art </button>
                </Link>
                <Link to="/timeline">
                    <button className="nav-button"> timeline </button>
                </Link>
                <Link to="/about">
                    <button className="nav-button"> about </button>
                </Link>
            </nav>
        </div>);
}


export default Header;
