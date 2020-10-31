import React from "react";
import "./components.css";
import myImage from "./../media/vallario.png";

function Header() {
    return (
        <div className="header-section">
            <div className="header-txt">
                <div style={{ fontSize: "300%" }}>Hi, I'm Vallari!</div>
                <p>A student</p>
            </div>
            <img className="header-img" src={myImage} />
        </div>)
}

export default Header;
