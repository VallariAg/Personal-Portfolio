import React from "react";
import "./components.css";

function Bio() {
    return (
        <div className="bio-section">
            <div className="bio-txt">
                {/* <div style={{ fontSize: "300%" }}>Hi, I'm Vallari!</div> */}
                <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                    Hi, I'm Vallari. I'm a second year college student, studying Computer Science.
                    I love to learn new tech, write technical articles, and make illustrations.
                </p>
            </div>
        </div>)
}

export default Bio;
